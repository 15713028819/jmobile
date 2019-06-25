import Taro from '@tarojs/taro';
import { Types } from './types';

import $toastSuccess from '@/assets/toast/success.png';
import $toastWarn from '@/assets/toast/warn.png';
import $toastFail from '@/assets/toast/fail.png';

// - ----------------------------------------------------------------------------
// - 装饰器 函数
// - ----------------------------------------------------------------------------

export function join(...cls: any): Function {
    return function(target: Function) {
        for (let k in cls) {
            Object.assign(target.prototype, new cls[k]());
        }
    }
}

// - ----------------------------------------------------------------------------
// - 编译环境 函数
// - ----------------------------------------------------------------------------

/**
 * 是否为生产环境
 */
export const isProduction = ()=> {
    return process.env.NODE_ENV === 'production'
}

/**
 * 判断是否为开发环境
 */
export const isDevelopment = ()=> {
    return process.env.NODE_ENV === 'development';
}

/**
 * 判断是否为测试环境
 */
export const isTest = ()=> {
    return process.env.NODE_ENV === 'test';
}

// - ----------------------------------------------------------------------------
// - 端口环境 函数
// - ----------------------------------------------------------------------------

/**
 * 是否为H5端
 */
export const isH5 = ()=> {
    return process.env.TARO_ENV === 'h5';
}

/**
 * 是否为微信小程序端
 */
export const isWeapp = ()=> {
    return process.env.TARO_ENV === 'weapp';
}

/**
 * 是否为百度小程序端
 */
export const isSwan = ()=> {
    return process.env.TARO_ENV === 'swan';
}

/**
 * 是否为支付宝端
 */
export const isAlipay = ()=> {
    return process.env.TARO_ENV === 'alipay';
}

/**
 * 是否为TT端
 */
export const isTT = ()=> {
    return process.env.TARO_ENV === 'tt';
}

/**
 * 是否为RN端
 */
export const isRN = ()=> {
    return process.env.TARO_ENV === 'rn';
}

/**
 * 是否为生产环境
 */
export const notProduction = ()=> {
    return process.env.NODE_ENV !== 'production'
}

/**
 * 判断是否为开发环境
 */
export const notDevelopment = ()=> {
    return process.env.NODE_ENV !== 'development';
}

/**
 * 判断是否为测试环境
 */
export const notTest = ()=> {
    return process.env.NODE_ENV !== 'test';
}

/**
 * 是否为H5端
 */
export const notH5 = ()=> {
    return process.env.TARO_ENV !== 'h5';
}

/**
 * 是否为微信小程序端
 */
export const notWeapp = ()=> {
    return process.env.TARO_ENV !== 'weapp';
}

/**
 * 是否为百度小程序端
 */
export const notSwan = ()=> {
    return process.env.TARO_ENV !== 'swan';
}

/**
 * 是否为支付宝端
 */
export const notAlipay = ()=> {
    return process.env.TARO_ENV !== 'alipay';
}

/**
 * 是否为TT端
 */
export const notTT = ()=> {
    return process.env.TARO_ENV !== 'tt';
}

/**
 * 是否为RN端
 */
export const notRN = ()=> {
    return process.env.TARO_ENV !== 'rn';
}

// - ----------------------------------------------------------------------------
// - Type判定 函数
// - ----------------------------------------------------------------------------

/**
 * 判断变量是否为Boolean类型
 * 
 * @param {Any} value 需要判断的变量
 */
export const isBoolean = (value: any): boolean => {
    return typeof value === 'boolean';
}

/**
 * 判断变量是否为Number类型
 * 
 * @param {Any} value 需要判断的变量
 */
export const isNumber = (value: any): boolean => {
    return typeof value === 'number';
}

/**
 * 判断变量是否为String类型
 * 
 * @param {Any} value 需要判断的变量
 */
export const isString = (value: any): boolean => {
    return typeof value === 'string';
}

/**
 * 判断变量是否为Undefined类型
 * 
 * @param {Any} value 需要判断的变量
 */
export const isUndefined = (value: any): boolean => {
    return value === void 0;
}

/**
 * 判断变量是否为NaN
 * 
 * @param {Any} value 需要判断的变量
 */
export const isNaN = (value: any): boolean => {
    return value === NaN;
}

/**
 * 判断变量是否为NULL
 * 
 * @param {Any} value 需要判断的变量
 */
export const isNull = (value: any): boolean => {
    return Object.prototype.toString.call(value) == "[object Null]";
}

/**
 * 判断变量是否为Function类型
 * 
 * @param {Any} value 需要判断的变量
 */
export const isFunction = (value: any): boolean => {
    return Object.prototype.toString.call(value) == "[object Function]";
}

/**
 * 判断变量是否为Object类型
 * 
 * @param {Any} value 需要判断的变量
 */
export const isObject = (value: any): boolean => {
    return Object.prototype.toString.call(value) == "[object Object]";
}

/**
 * 判断变量是否为Array类型
 * 
 * @param {Any} value 需要判断的变量
 */
export const isArray = (value: any): boolean => {
    return Object.prototype.toString.call(value) == "[object Array]";
}

/**
 * 判断变量是否为Symbol类型
 * 
 * @param {Any} value 需要判断的变量
 */
export const isSymbol = (value: any): boolean => {
    return Object.prototype.toString.call(value) == "[object Symbol]";
}

/**
 * 判断变量是否为RegExp类型
 * 
 * @param {Any} value 需要判断的变量
 */
export const isRegExp = (value: any): boolean => {
    return Object.prototype.toString.call(value) == "[object RegExp]";
}

/**
 * 判断变量是否为空
 * 
 * @param {Any} value 需要判断的变量
 */
export const isEmpty = (value: any): boolean => {
    if(value === void(0) || value === null) return true
    else if(this.isObject(value)) return !Object.keys(value).length
    else if(this.isArray(value)) return !value.length
    else if(this.isString(value)) return !value
    else return value.toString().length == 0
}

// - ----------------------------------------------------------------------------
// - 测试输出 函数
// - ----------------------------------------------------------------------------

/**
 * 在控制台输出普通信息
 * 
 * @param {Any[]} params 需要输出的内容数组，任意类型
 * @return {Void}
 */
export const log = (...params: any[]): void => {
    if (notProduction()) {
        console.log(...params);
    }
}

/**
 * 在控制台输出警告信息
 * 
 * @param {Any[]} params 需要输出的内容数组，任意类型
 * @return {Void}
 */
export const warn = (...params: any[]): void => {
    if (notProduction()) {
        console.warn(...params);
    }
}

/**
 * 在控制台输出错误信息
 * 
 * @param {Any[]} params 需要输出的内容数组，任意类型
 * @return {Void}
 */
export const error = (...params: any[]): void => {
    if (notProduction()) {
        console.error(...params);
    }
}

/**
 * 弹出测试信息
 * 
 * @param {String} content 需要输出的内容，必须是字符串
 * @return {Void}
 */
export const alert = (title: string, content: string): void => {
    if (notProduction()) {
        Taro.showModal({
            title,
            content
        })
    }
}

// - ----------------------------------------------------------------------------
// - Router 函数
// - ----------------------------------------------------------------------------

/**
 * 页面Navigate跳转
 * 
 * @param {RouterStruct} object 跳转配置参数
 */
export const navigate = (url: string, params?: object): void => {
    Taro.navigateTo({
        url: querystring.join(url, params || {})
    });
}

/**
 * 页面Redirect跳转
 * 
 * @param {RouterStruct} object 跳转配置参数
 */
export const redirect = (url: string, params?: object): void => {
    Taro.redirectTo({
        url: querystring.join(url, params || {})
    });
}

/**
 * 页面Switch跳转
 * 
 * @param {RouterStruct} object 跳转配置参数
 */
export const switchTab = (url: string): void => {
    Taro.switchTab({
        url: url
    });
}

/**
 * 页面重新加载
 * 
 * @param {RouterStruct} object 跳转配置参数
 */
export const relaunch = (url: string, params?: object): void => {
    Taro.reLaunch({
        url: querystring.join(url, params || {})
    });
}

/**
 * 页面返回
 * 
 * @param {Number} delta 返回的步数
 */
export const navigateBack = (delta: number): void => {
    Taro.navigateBack({
        delta
    });
}

// - ----------------------------------------------------------------------------
// - Capture 函数
// - ----------------------------------------------------------------------------

/**
 * 返回系统信息
 * 
 * @see https://nervjs.github.io/taro/docs/apis/device/systeminfo/getSystemInfoSync.html
 */
export const getSystemInfo = (): object => {
    return Taro.getSystemInfoSync();
}

/**
 * 获取系统当前的网络类型（H5下兼容性较差，尽量不要使用）
 * 
 * @param {Function} callback 获取成功后的回调方法
 * 
 * @see https://nervjs.github.io/taro/docs/apis/device/netstat/getNetworkType.html
 */
export const getNetworkType = (callback: Function): void => {
    Taro.getNetworkType()
    .then((res)=> {
        callback(res);
    })
    .catch((err)=> {
        error('Capture.getNetworkType(): ', err);
    })
}


/**
 * DateTime
 */
export class datetime {

    /**
     * 获取10位时间戳
     * 
     * @param {String} 需要转换的时间字符串，不传时使用当前时间
     */
    public static timestamp10(datetime?: string): number {
        let date: any = datetime ? new Date(datetime) : new Date();
        return Date.parse(date) / 1000;
    }

    /**
     * 获取13位时间戳
     * 
     * @param {String} 需要转换的时间字符串，不传时使用当前时间
     */
    public static timestamp13(datetime?: string): number {
        let date: any = datetime ? new Date(datetime) : new Date();
        return date.getTime();
    }

    /**
     * 取间隔的秒数（10位）
     * 
     * @param {Int} startTimestamp 开始时间戳
     * @param {Int} endTimestamp 结束时间戳
     */
    public static interval10(startTimestamp: number, endTimestamp: number) {
        return endTimestamp - startTimestamp;
    }

    /**
     * 取间隔的毫秒数（13位）
     * 
     * @param {Int} startTimestamp 开始时间戳
     * @param {Int} endTimestamp 结束时间戳
     */
    public static interval13(startTimestamp: number, endTimestamp: number): number {
        return endTimestamp - startTimestamp;
    }

    /**
     * 倒计时
     * 
     * @param {Int} timestamp 时间戳（必须是10位时间戳）
     */
    public static countdown(timestamp: number): object {

        // 取时间秒数差
        let interval = timestamp - this.timestamp10();

        // 计算时间差中的日时分秒（时分秒补0）
        let day: number = parseInt(Math.floor(interval / (60 * 60 * 24)).toString());
        let hour = this._zero(Math.floor(interval / (60 * 60)) - (day * 24)).toString();
        let minute = this._zero(Math.floor(interval / 60) - (day * 24 * 60) - (hour * 60)).toString();
        let second = this._zero(Math.floor(interval) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)).toString();

        // 返回一个对象
        return { day, hour, minute, second };
    }

    /**
     * 将当前时间或指定时间戳转换为指定时间格式的字符串
     * 
     * @param {String} format 需要转换为的时间格式，默认为：Y-m-d
     * @param {Int} timestamp 时间戳，默认为当前时间
     */
    public static format(format?: string, timestamp?: number): string {

        // 参数默认值 
        format = format || 'Y-m-d';
        let date: Date = timestamp ? new Date(timestamp) : new Date();

        // 取年月日 
        let year: number = date.getFullYear();
        let month: number = this._zero(date.getMonth() + 1);
        let day: number = this._zero(date.getDay());
        let hour: number = this._zero(date.getHours());
        let minute: number = this._zero(date.getMinutes());
        let second: number = this._zero(date.getSeconds());

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
     * 补时间位上的先导0
     * 
     * @param {Int} value 值
     */
    static _zero(value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    }
}

/**
 * Gen
 */
export class gen {

    /**
     * 生成纯字符随机字符串
     * 
     * @param {Number} length 生成的字符串长度
     */
    public static char(length = 4): string {
        return this._random('char', length);
    }

    /**
     * 生成纯数字随机字符串
     * 
     * @param {Number} length 生成的字符串长度
     */
    public static number(length = 4): string {
        return this._random('number', length);
    }

    /**
     * 生成混合字符串
     * 
     * @param {Number} length 生成的字符串长度
     */
    public static mixed(length = 8): string {
        return this._random('mixed', length);
    }

    /**
     * 私有：真实获取随机字符串方法
     * 
     * @param {String} type 类型，可选：char, number, mixed
     * @param {Number} length  生成的字符串长度
     */
    private static _random(type: string, length: number): string {
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
}

/**
 * Base64
 */
export class base64 {

    /**
     * 使用pako压缩字符串
     * 
     * @param {String} str 需要压缩的源字符串
     */
    // public static enzip (str: string): string {
    //     let bin = pako.gzip(str, {to: 'string'});
    //     return this.enb64(bin);
    // }

    /**
     * 使用Base64方法加密一个字符串
     * 
     * @param {String} str 需要加密的源字符串
     * @return {String}
     */
    public static encode (str: string): string { // 编码，配合encodeURIComponent使用
        let c1, c2, c3;
        let base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let i = 0, len = str.length, strin = '';
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                strin += base64EncodeChars.charAt(c1 >> 2);
                strin += base64EncodeChars.charAt((c1 & 0x3) << 4);
                strin += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                strin += base64EncodeChars.charAt(c1 >> 2);
                strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                strin += base64EncodeChars.charAt((c2 & 0xF) << 2);
                strin += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            strin += base64EncodeChars.charAt(c1 >> 2);
            strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            strin += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            strin += base64EncodeChars.charAt(c3 & 0x3F)
        }
        return strin
    }
    
    /**
     * 使用Base64方法解密一个源字符串
     * 
     * @param {String} str 需要解密的源字符串
     * @return {String}
     */
    public static decode (str: string): string { // 解码，配合decodeURIComponent使用
        var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        str = str.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < str.length) {
            enc1 = base64EncodeChars.indexOf(str.charAt(i++));
            enc2 = base64EncodeChars.indexOf(str.charAt(i++));
            enc3 = base64EncodeChars.indexOf(str.charAt(i++));
            enc4 = base64EncodeChars.indexOf(str.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        return this._base64_utf8_decode(output);
    }

    /**
     * 私有：utf8解码，用于Base64.decode返回时使用
     * 
     * @param {String} utftext 
     * @return {String}
     */
    private static _base64_utf8_decode (utftext) { // utf-8解码
        var string = '';
        let i = 0;
        let c = 0;
        let c1 = 0;
        let c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c1 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
                i += 2;
            } else {
                c1 = utftext.charCodeAt(i + 1);
                c2 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
                i += 3;
            }
        }
        return string;
    }
}

/**
 * Url
 */
export class url {

    /**
     * 使用encodeURIComponent方法编码字符串
     * 
     * @param {String} str 需要编码的源字符串
     */
    public static encode (str: string): string {
        return encodeURIComponent(str);
    }

    /**
     * 使用decodeURIComponent方法解码字符串
     * 
     * @param {String} str 需要解码的源字符串
     */
    public static decode (str: string): string {
        return decodeURIComponent(str);
    }
}

/**
 * QueryString
 */
export class querystring {

    /**
     * 获取页面的QueryString字符串，如果不存在QueryString则返回空字符串
     * 
     * @return {String}
     */
    public static get(key?: string): any {

        // 获取querystring的object形式
        const object: object = this.getObject();

        // 返回
        if (key === undefined) return '';
        if (object.hasOwnProperty(key)) return object[key];        
    }

    /**
     * 获取页面的QueryString转换的对象，如果不存在QueryString则返回空对象
     */
    public static getObject(): object {

        // 首先获取QueryString，如果为空字符串，则返回空对象
        let url = window.location.href;
        let arr: string[] = url.split('?');
        if (arr.length < 2) {
            return {};
        }

        // 否则，使用this.toObj将querystring转换为对象，并返回
        return this.toObj(arr[1]);
    }

    /**
     * 追加参数，到指定的对象或QueryString中，并返回追加之后的结果（传入什么类型，返回什么类型）。
     * 如果追加的键名与原有键名重名，则原有键值被覆盖
     * 
     * @param {String | Object} params 被操作的QueryString或对象
     * @param {Object} appends 需要追加的对象（键值对）
     * @return {String}
     */
    public static append(params: string | object, appends: object): string | object {

        // 如果params是字符串，则首先将其转换为对象，并记录params类型
        let type = 'object';
        if (typeof params === 'string') {
            type = 'string';
            params = this.toObj(params);
        }

        // 将appends追加到对象上
        for (let k in appends) {
            params[k] = appends[k];
        }

        // 根据不同类型，返回不同类型的值
        if (type === 'object') {
            return params;
        }
        return this.toStr(params);
    }

    /**
     * 从指定的对象或QueryString中，删除一个或多个键，并返回删除之后的结果（传入什么类型，返回什么类型）
     * 
     * @param {String | Object} params 被操作的QueryString或对象
     * @param {String[]} keys 需要删除的键名数组（多参形式）
     * @return {String}
     */
    public static remove(params: string | object, ...keys: string[]): string | object {

        // 如果params是字符串，则首先将其转换为对象，并记录params类型
        let type = 'object';
        if (typeof params === 'string') {
            type = 'string';
            params = this.toObj(params);
        }

        // 删除params中需要被删除的属性
        for (let k in keys) {
            delete params[k];
        }

        // 根据不同类型，返回不同类型的值
        if (type === 'object') {
            return params;
        }
        return this.toStr(params);
    }

    /**
     * 连接路径与参数（必须是querystring）
     * 
     * @param {String} url 路径字符串
     * @param {String | Object} params 需要连接到url的参数，可以是字符串，也可以是对象
     */
    public static join(url: string, params: string | object): string {

        // 如果params是对象类型，则首先转换为string类型
        if (typeof params === 'object') {
            params = this.toStr(params);
        }

        // 如果params是空字符串，则直接返回url
        if (params == '') return url;

        // 初始化符号为？，如果已存在?，则转换为&
        let symbo = '?';
        if (url.indexOf('?') >= 0) {
            symbo = '&';
        }
        return url + symbo + params;
    }

    /**
     * 将QueryString字符串转换为Object形式的对象
     * 
     * @param {String} params 源字符串
     * @return {Object}
     */
    public static toObj(params: string): object {

        // 分解为数组，如果数组长度等于0，则直接返回空对象
        const arr: string[] = params.split('&');
        if (arr.length == 0) return {};

        // 声明需要返回的对象
        let result = {};

        // 遍历转换为对象
        for (let item of arr) {
            
            // 将item分解为左右2边的数组，如果数组长度小于2，则continue
            const tmp = item.split('=');
            if (tmp.length < 2) continue;

            // 将数组内容添加到对象
            result[tmp[0]] = tmp[1];
        }

        // 返回
        return result;
    }

    /**
     * 将对象转换为QueryString字符串
     * 
     * @param {Object} params 需要转换为字符串的对象
     * @return {String}
     */
    public static toStr(params: object): string {

        // 分解对象到数组中
        let array: string[] = [];
        for (let key in params) {
            array.push(key + '=' + params[key]);
        }

        // 如果数组长度小于1，则返回空字符串
        if (array.length < 1) {
            return '';
        }

        // 否则将数组用&连接，并返回
        return array.join('&');
    }
}


/**
 * Session
 */
export class session {

    /**
     * Session需要使用的数据
     */
    static DATA: object = {};

    /**
     * 获取某个键的值
     * 
     * @param {String} key 需要获取的键名，不传则为全部数据
     */
    public static get(key?: string): any {
        if (typeof key === 'string' && key !== '') {
            return this.DATA[key];
        }
        return '';
    }

    /**
     * 设置某个键的值（如果不存在则添加）
     * 
     * @param {String} key 需要存储数据的键名
     * @param {Any} value 需要设置的值
     */
    public static set(key: string, value: any): void {
        this.DATA[key] = value;
    }

    /**
     * 删除一个键
     * 
     * @param {String} key 需要删除的键名
     */
    public static remove(key: string): void {
        delete this.DATA[key];
    }

    /**
     * 清空所有数据
     */
    public static clear(): void {
        this.DATA = {};
    }
}

/**
 * Local
 */
export class local {

    /**
     * 获取某个键的值，如果过期，将被初始化
     * 
     * @param {String} key 键名
     * @param {Function} callback 回调方法
     */
    public static get(key: string, callback: Function): void {
        Taro.getStorage({ key: key })
        .then((res)=> {
            let data: string = res.data;
            let stroage: Types.Struct.LocalStorage = JSON.parse(data);
            if (stroage.timestamp < datetime.timestamp10()) {
                callback(null);
            }
            else {
                callback(stroage.value);
            }
        })
        .catch((err)=> {
            callback(null);
            error(`Local.get`, err);
        });
    }

    /**
     * 设置某个键的值（如果不存在则添加）
     * 
     * @param {String} key 键名
     * @param {Any} value 需要设置的值
     * @param {Number} seconds 保存的秒数，0为永久
     */
    public static set(key: string, value: any, seconds = 0): void {

        // 组织数据
        const data: Types.Struct.LocalStorage = {
            timestamp: seconds !== 0 ? datetime.timestamp10() + seconds : 0,
            value
        };

        // 存入数据
        Taro.setStorage({
            key,
            data
        })
        .then((res)=> {
                
        })
        .catch((err)=> {
            error(`Local.set`, err);
        })
    }

    /**
     * 删除一个键（将其变为初始值）
     * 
     * @param {String} key Local.object配置元素
     */
    public static remove(key: string): void {
        Taro.removeStorage({
            key
        })
        .then((res)=> {

        })
        .catch((err)=> {
            error(`Local.remove`, err);
        })
    }

    /**
     * 清空全部Local
     */
    public static clear(): void {
        Taro.clearStorage();
    }
}

/**
 * Toast
 */
export class toast {

    /**
     * 弹出info吐司
     * 
     * @param {string} title 文字
     * @param {boolean} mask 是否显示遮罩，默认false
     * @param {number} duration 显示时长，默认1500
     */
    public static info(title: string, mask = false, duration = 1500) {
        Taro.showToast({
            title,
            mask,
            duration,
        });
    }

    /**
     * 弹出success吐司
     * 
     * @param {string} title 文字
     * @param {boolean} mask 是否显示遮罩，默认false
     * @param {number} duration 显示时长，默认1500
     */
    public static success(title: string, mask = false, duration = 1500) {
        Taro.showToast({
            title,
            mask,
            duration,
            image: $toastSuccess
        });
    }

    /**
     * 弹出warn吐司
     * 
     * @param {string} title 文字
     * @param {boolean} mask 是否显示遮罩，默认false
     * @param {number} duration 显示时长，默认1500
     */
    public static warn(title: string, mask = false, duration = 1500) {
        Taro.showToast({
            title,
            mask,
            duration,
            image: $toastWarn
        });
    }

    /**
     * 弹出fail吐司
     * 
     * @param {string} title 文字
     * @param {boolean} mask 是否显示遮罩，默认false
     * @param {number} duration 显示时长，默认1500
     */
    public static fail(title: string, mask = false, duration = 1500) {
        Taro.showToast({
            title,
            mask,
            duration,
            image: $toastFail
        });
    }
}

/**
 * Loading
 */
export class loading {

    /**
     * 显示加载框
     * 
     * @param {string} title 文字，默认：加载中
     * @param {boolean} mask 是否显示遮罩层，默认：false
     */
    public static show(title = '加载中', mask = false): void {
        Taro.showLoading({
            title,
            mask
        });
    }

    /**
     * 隐藏加载框
     */
    public static hide(): void {
        Taro.hideLoading();
    }
}

/**
 * Modal
 */
export class modal {

    /**
     * 弹出alert框
     * 
     * @param {string} title 标题
     * @param {string} content 内容
     */
    public static alert(title: string, content: string): void {
        Taro.showModal({
            title,
            content,
            showCancel: false
        });
    }

    /**
     * 弹出confirm框
     * 
     * @param {string} title 标题
     * @param {string} content 内容
     * @param {Function} confirm 确认回调
     */
    public static confirm(title: string, content: string, confirm: Function): void {
        Taro.showModal({
            title,
            content,
            showCancel: true,
            success: (res)=> {
                if (res.confirm) {
                    confirm();
                }
            }
        });
    }
}

/**
 * Http
 */
export class http {

    /**
     * GET请求
     * 
     * @param {object} that 页面或组件的this指针
     * @param {Types.Param.Http.Request} req 网络请求对象 
     */
    public static get(that: object, req: Types.Param.Http.Request): void {
        if (notProduction() && req.mock) {
            this._mock(that, req);
            return;
        }
        this._preset(that, req, 'GET');
    }

    /**
     * POST请求
     * 
     * @param {object} that 页面或组件的this指针
     * @param {Types.Param.Http.Request} req 网络请求对象 
     */
    public static post(that: object, req: Types.Param.Http.Request): void {
        if (notProduction() && req.mock) {
            this._mock(that, req);
            return;
        }
        this._preset(that, req, 'POST');
    }

    /**
     * 制作mock数据
     * 
     * @param {object} that 页面或组件的this指针
     * @param {Types.Param.Http.Request} req 网络请求对象 
     */
    private static _mock(that: object, req: Types.Param.Http.Request): void {

        // typescript的类型辨识
        if (req.mock) {

            // 取random和list的别称
            const random = req.mock.random;
            const list = req.mock.list;

            // 计算全部概率，和各起始点和终结点
            const randSuccess = random.success;
            const randPower = randSuccess + random.fail.power;
            const randLogic = randPower + random.fail.logic;
            const randError = randLogic + random.fail.error;
            const randOffline = randError + random.fail.offline;

            // 取随机数
            const rand = Math.round(Math.random() * randOffline);

            // 判断返回success
            if (rand <= randSuccess) {

                // 声明初值
                let result = {
                    code: 0,
                    msg: '',
                    data: {}
                };

                // 如果list的长度大于0，代表有返回的随机列表
                if (list.length > 0) {

                    // 如果list的长度大于1，则需要进行随机摘取
                    if (list.length > 1) {
                        const r = Math.floor(Math.random() * list.length);
                        const data = list[r];
                        if (data) {
                            result['data'] = data;
                        }
                    } 
                    
                    // 否则，即；list长度等于1，则直接将result.data赋值为list[0]
                    else {
                        result['data'] = list[0];
                    }
                }
                req.success(that, result);
            }

            // 判断返回fail.power
            else if (rand > randSuccess && rand <= randPower) {
                let result = {
                    code: 1,
                    msg: 'mock: 没有权限'
                }
                req.fail.power(that, result);
            }

            // 判断返回fail.logic
            else if (rand > randPower && rand <= randLogic) {
                let result = {
                    code: 2,
                    msg: 'mock: 逻辑错误'
                }
                req.fail.logic(that, result);
            }

            // 判断返回fail.error
            else if (rand > randLogic && rand <= randError) {
                let result = {
                    code: 3,
                    msg: 'mock: 系统错误'
                }
                req.fail.error(that, result);
            }

            // 判断返回fail.offline
            else {
                let result = {
                    code: 1,
                    msg: 'mock: 没有联网'
                }
                req.fail.offline(that, result);
            }
        }
    }

    /**
     * Http请求预处理（启动加载器、设置req对象，检查是否联网等操作）
     * 
     * @param {object} that 页面或组件的this指针
     * @param {Types.Param.Http.Request} req 网络请求对象 
     * @param {string} method 请求的方法名，仅为：'GET' | 'POST'
     */
    private static _preset(that: object, req: Types.Param.Http.Request, method: 'GET' | 'POST'): void {

        // 启动加载器
        req.loader.start(that);
        
        // 计算url
        if (req.preurl) {
            if (isProduction()) req.url = req.preurl.prod + req.url;
            if (isDevelopment()) req.url = req.preurl.dev + req.url;
            if (isTest()) req.url = req.preurl.test + req.url; 
        }

        // 设置method
        req['method'] = method;

        // 设置header
        req['header'] = req.header ? req.header : {
            'content-type': 'application/x-www-form-urlencoded'
        };

        // 非H5下，查看是否联网
        if (notH5()) {
            getNetworkType((res)=> {

                // 非H5端，无网络，直接进入无网络管道，并在执行完管道函数后，直接返回（不进行网络请求）
                if (res.networkType === 'none') {

                    // 声明返回对象
                    const result: Types.Struct.RestfulResult = {
                        code: 6, 
                        msg: '没有联网'
                    };

                    // 调用offline管道函数
                    req.fail.offline(that, result);

                    // 结束加载器
                    req.loader.end(that, result);

                    // 返回
                    return;
                }

                // 非H5端，有网络，执行访问请求
                this._request(that, req);
            });
        }

        // H5端下，无法准确判断是否有网，所以直接进行请求
        else {
            this._request(that, req);
        }
    }

    /**
     * 实际访问方法
     * 
     * @param {object} that 页面或组件的this指针
     * @param {Types.Param.Http.Request} req 网络请求对象 
     */
    private static _request(that: object, req: Types.Param.Http.Request): void {

        // 请求网络
        Taro.request({
            method: req.method,
            header: req.header,
            url: req.url,
            data: req.data,
            dataType: 'text',
            responseType: 'text',
            // mode: 'no-cors',
            // credentials: 'include',
        })

        // 返回处理
        .then((res)=> {

            // 取回状态码和数据
            let {statusCode, data} = res;

            // 判断状态码是否出错，如果出错，则进入出错管道（注意，404在这里是抓不到的）
            if (statusCode !== 200) {
                req.fail.error(that, {code: 3, msg: '状态码出错'});
                error('Http._request(): ', ...arguments, '状态码出错：' + statusCode);
                return;
            }

            // 使用解析器，将数据解析成Types.Struct.RestfulResult
            const result: Types.Struct.RestfulResult = req.parse(data);

            // 根据result.code，确定需要调用哪个管道函数的名称
            switch (result.code) {
                case 0:
                    req.success(that, result);
                    break;
                case 1:
                    req.fail.power(that, result);
                    break;
                case 2:
                    req.fail.logic(that, result);
                    break;
                case 3:
                    req.fail.error(that, result);
                default: 
                    break;
            }

            // 结束loader
            req.loader.end(that, result);
        })

        // 错误处理
        .catch((err)=> {

            // 声明错误对象
            const result = {
                code: 3,
                msg: '访问出错'
            };

            // 调用错误管道函数
            req.fail.error(that, result);

            // 结束loader
            req.loader.end(that, result);

            // 报错
            error('Http._request(): ', ...arguments, err);
        });
    }
}
