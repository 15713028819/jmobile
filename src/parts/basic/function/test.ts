import Taro from '@tarojs/taro';
import { notProd } from './assertionEnv';

/**
 * 在控制台输出普通信息
 * 
 * @param {Any[]} params 需要输出的内容数组，任意类型
 * @return {Void}
 */
export function log(...params: any[]): void {
    if (notProd()) {
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
    if (notProd()) {
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
    if (notProd()) {
        console.error(...params);
    }
}

/**
 * 弹出测试信息
 * 
 * @param {String} content 需要输出的内容，必须是字符串
 * @return {Void}
 */
export function alert(title: string, content: string): void {
    if (notProd()) {
        Taro.showModal({
            title,
            content
        })
    }
}

