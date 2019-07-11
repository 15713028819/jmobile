import Taro from '@tarojs/taro';

/**
 * 弹出info吐司
 * 
 * @param {string} title 文字
 * @param {string} image 图片地址
 * @param {boolean} mask 是否显示遮罩，默认false
 * @param {number} duration 显示时长，默认1500
 */
export function toast(title: string, image = '', mask = false, duration = 1500) {
    if (image == '') {
        Taro.showToast({
            title,
            mask,
            duration,
        });
    } else {
        Taro.showToast({
            title,
            mask,
            duration,
            image
        });
    }
}

/**
 * 显示加载框
 * 
 * @param {string} title 文字，默认：加载中
 * @param {boolean} mask 是否显示遮罩层，默认：false
 */
export function loading(title = '加载中', mask = false): void {
    Taro.showLoading({
        title,
        mask
    });
}

/**
 * 隐藏加载框
 */
export function loaddingHide(): void {
    Taro.hideLoading();
}

/**
 * 弹出alert框
 * 
 * @param {string} title 标题
 * @param {string} content 内容
 */
export function modal(title: string, content: string): void {
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
export function confirm(title: string, content: string, confirm: Function): void {
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
