import Taro from '@tarojs/taro';
import { queryJoin } from './queryString';

/**
 * 页面Navigate跳转
 * 
 * @param {RouterStruct} object 跳转配置参数
 */
export const navigate = (url: string, params?: object): void => {
    Taro.navigateTo({
        url: queryJoin(url, params || {})
    });
}

/**
 * 页面Redirect跳转
 * 
 * @param {RouterStruct} object 跳转配置参数
 */
export const redirect = (url: string, params?: object): void => {
    Taro.redirectTo({
        url: queryJoin(url, params || {})
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
        url: queryJoin(url, params || {})
    });
}

/**
 * 页面返回
 * 
 * @param {Number} delta 返回的步数
 */
export const goback = (delta: number): void => {
    Taro.navigateBack({
        delta
    });
}
