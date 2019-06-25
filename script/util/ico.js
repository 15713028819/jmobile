const fs = require('fs');
const path = require('path');
const colors = require( "colors");

// 查找本体目录
const root = path.join(__dirname, 'ico');

// 用于记录base64数据的数组：data
const data = [];

// 设置是否存在png文件、所有文件变量遍历目录
let count = 0;
let pa = fs.readdirSync(root);
pa.forEach(function(el, index) {

    // 取文件名、文件信息和扩展名。如果文件为目录或者扩展名不为.png，则返回
    const filepath = root + '/' + el;
    const info = fs.statSync(filepath);
    const ext = path.extname(el);
    if (info.isDirectory() || ext !== '.png') {
        return;
    }

    // 取当前文件的二进制信息
    const bitmap = fs.readFileSync(filepath);

    // 制作结果
    const result = {
        name: path.basename(el, '.png'),
        code: Buffer.from(bitmap, 'binary').toString('base64')
    };

    // 将数据添加到数组
    data.push(result);

    // 报告生成成功
    console.log(`生成'${result.name}': 成功`.green);

    // 确认确实存在png文件
    count ++;
});

// 如果没有png文件，则报错退出
if (count === 0) {
    console.log('错误："/script/util/ico/"目录中没有任何png文件！'.red);
}

// 否则，执行生成，并输出成功
else {

    // 组织文件内容
    let str = 'export default {\r\n';
    for (let item of data) {
        str += `    '${item.name}': 'data:image/png;base64,${item.code}',\r\n`
    }
    str += '}\r\n';

    // 生成json文件
    fs.writeFileSync('./src/parts/ico.ts', str);

    // 输出成功信息
    console.log('生成"/src/parts/ico.ts"文件成功'.green);
    console.log(`共${count}个图标`.green);
}
