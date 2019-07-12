import Taro from '@tarojs/taro';


/**
 * 返回系统信息
 * 
 * @see https://nervjs.github.io/taro/docs/apis/device/systeminfo/getSystemInfoSync.html
 */
export const systemInfo = (): object => {
    return Taro.getSystemInfoSync();
}

/**
 * 获取系统当前的网络类型（H5下兼容性较差，尽量不要使用）
 * 
 * @param {Function} callback 获取成功后的回调方法
 * 
 * @see https://nervjs.github.io/taro/docs/apis/device/netstat/getNetworkType.html
 */
export const networkType = (callback: Function): void => {
    Taro.getNetworkType()
    .then((res)=> {
        callback(res);
    })
    .catch((err)=> {
        callback(err);
    })
}
