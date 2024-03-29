/**
 * 生成临时随机字符串
 * 
 * @param {String} type 类型，可选：char, number, mixed
 * @param {Number} length  生成的字符串长度
 */
export function nonce(type: 'char' | 'number' | 'mixed', length = 4): string {
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = '0123456789';
    let mixed = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let source = char;
    if (type == 'number') source = number;
    if (type == 'mixed') source = mixed;
    let maxPos = source.length;
    let result = '';
    for (let i=0; i<length; i++) {
        result += source.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
}

/**
 * 获取0-N的随机数
 * 
 * @param {number} max 随机数最大值
 */
export function random(max: number) {
    return Math.round(Math.random() * parseInt(max.toString()));
}
