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
export function sessionClear() {
    SESSION = {};
}

/**
 * 获取或设置一个local
 * 
 * @param {string} key 键名
 * @param {any} two 获取时，传入回调函数。设置时，传入设置的值
 * @param {any} three 获取时，此值无用。设置时，传入回调函数
 */
export function local(key: string, two: any, three: any) {

    // two为function，则是取回local的某个键值
    if (typeof two === 'function') {
        Taro.getStorage({ key: key })
        .then((res)=> {
            two(res);
        })
        .catch((err)=> {
            two(err);
        });
    }

    // two不是function（不是函数，则为值），则是设置某个local键的值
    else {
        Taro.setStorage({
            key,
            data: two
        })
        .then((res)=> {
            if (typeof three === 'function') {
                three(res);
            }
        })
        .catch((err)=> {
            if (typeof three === 'function') {
                three(err);
            }
        })
    }
}

/**
 * 清空全部Local
 */
export function localClear(): void {
    Taro.clearStorage();
}

// ----------------------------------------------------------------------------
// 私有部分
// ----------------------------------------------------------------------------

let SESSION = {};
