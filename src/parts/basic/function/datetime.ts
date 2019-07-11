/**
 * 获取10位时间戳
 * 
 * @param {String} 需要转换的时间字符串，不传时使用当前时间
 */
export function time10(datetime?: string): number {
    let date: any = datetime ? new Date(datetime) : new Date();
    return Date.parse(date) / 1000;
}

/**
 * 获取13位时间戳
 * 
 * @param {String} 需要转换的时间字符串，不传时使用当前时间
 */
export function time13(datetime?: string): number {
    let date: any = datetime ? new Date(datetime) : new Date();
    return date.getTime();
}

/**
 * 将当前时间或指定时间戳转换为指定时间格式的字符串
 * 
 * @param {String} format 需要转换为的时间格式，默认为：Y-m-d
 * @param {Int} timestamp 时间戳，默认为当前时间
 */
export function date(format?: string, timestamp?: number): string {

    // 参数默认值 
    format = format || 'Y-m-d';
    let date: Date = timestamp ? new Date(timestamp) : new Date();

    // 取年月日 
    let year: number = date.getFullYear();
    let month: number = _zero(date.getMonth() + 1);
    let day: number = _zero(date.getDay());
    let hour: number = _zero(date.getHours());
    let minute: number = _zero(date.getMinutes());
    let second: number = _zero(date.getSeconds());

    // 替换返回
    return format.replace(/Y|m|d|H|i|s/ig, function (matches) {
        return ({
            Y: year,
            m: month,
            d: day,
            H: hour,
            i: minute,
            s: second
        })[matches];
    });
}

/**
 * 取间隔的秒数（10或13位）
 * 
 * @param {Int} start 开始时间戳
 * @param {Int} end 结束时间戳，默认为0，即当前时间戳
 */
export function diff(start: number, end = 0) {
    if (end === 0) {
        if (start > 9999999999) end = time13();
        else end = time10();
    }
    return end - start;
}

/**
 * 倒计时
 * 
 * @param {Int} timestamp 时间戳（必须是10位时间戳）
 * @param {Function} callback 回调方法，参数为：res: {day, hour, minute, second}
 */
export function countdown(timestamp: number, callback: Function) {

    // 定义时间戳差值变量
    let diff;

    // 定义时间间隔执行句柄timer, 每秒钟执行一次
    let timer = setInterval(()=> {

        // 取时间秒数差
        diff = timestamp - this.timestamp10();

        // 计算时间差中的日时分秒（时分秒补0）
        let day: number = parseInt(Math.floor(diff / (60 * 60 * 24)).toString());
        let hour = _zero(Math.floor(diff / (60 * 60)) - (day * 24)).toString();
        let minute = _zero(Math.floor(diff / 60) - (day * 24 * 60) - (hour * 60)).toString();
        let second = _zero(Math.floor(diff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)).toString();

        // 调用回调
        callback({day, hour, minute, second});

    }, 1000);
}

// ----------------------------------------------------------------------------
// 私有部分
// ----------------------------------------------------------------------------

/**
 * 补时间位上的先导0
 * 
 * @param {Int} value 值
 */
function _zero(value) {
    if (value < 10) {
        return '0' + value;
    }
    return value;
}