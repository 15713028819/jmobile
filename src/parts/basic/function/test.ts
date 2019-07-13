import Taro from '@tarojs/taro';

/**
 * 在控制台输出普通信息
 * 
 * @param {Any[]} params 需要输出的内容数组，任意类型
 * @return {Void}
 */
export function log(...params: any[]): void {
    if (process.env.NODE_ENV !== 'production') {
        console.log(...params);
    }
}

/**
 * 在控制台输出警告信息
 * 
 * @param {Any[]} params 需要输出的内容数组，任意类型
 * @return {Void}
 */
export function warn(...params: any[]): void {
    if (process.env.NODE_ENV !== 'production') {
        console.warn(...params);
    }
}

/**
 * 在控制台输出错误信息
 * 
 * @param {Any[]} params 需要输出的内容数组，任意类型
 * @return {Void}
 */
export function error(...params: any[]): void {
    if (process.env.NODE_ENV !== 'production') {
        console.error(...params);
    }
}

/**
 * 弹出测试信息
 * 
 * @param {String} content 需要输出的内容，必须是字符串
 * @return {Void}
 */
export function poplog(title: string, content: string): void {
    if (process.env.NODE_ENV !== 'production') {
        Taro.showModal({
            title,
            content
        })
    }
}

/**
 * 启动计时器
 * 
 * @param {string} name 计时的名称
 */
export function time(name?: string) {
    if (process.env.NODE_ENV !== 'production') {
        console.time(name);
    }
}

/**
 * 结束计时器，并打印计时结果
 * 
 * @param {string} name 计时的名称
 */
export function timeEnd(name?: string) {
    if (process.env.NODE_ENV !== 'production') {
        console.timeEnd(name);
    }
}
