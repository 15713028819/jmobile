import Taro from '@tarojs/taro';

/**
 * 获取或设置一个session
 * 
 * @param {string} key 键名
 * @param {any} value 值，如果不传则为获取
 */
export function session(key = '', value?: any) {

    // 如果存在value值，则一定是存储
    if (value) {
        if (key !== '') {
            SESSION[key] = value;
        }
    }

    // 否则，是取回
    else {
        if (key === '') {
            return SESSION;
        } else {
            return SESSION[key];
        }
    }
}

/**
 * 清空全部session
 */
export function clearSession() {
    SESSION = {};
}

export function local(key = '', value = null) {

    // 如果存在value值，则一定是存储
    if (value) {

    }

    // 否则，是取回

}

// ----------------------------------------------------------------------------
// 私有部分
// ----------------------------------------------------------------------------

let SESSION = {};

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
