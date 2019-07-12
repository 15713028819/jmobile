import { StructRestfulResult, HandlerLoader, HandlerParse, HandlerPipe, ParamRequest } from './basic/function/http';
import { toast, alert, loading, loadingHide } from './basic/function/feedback';
import { navigate } from './basic/function/navigate';
import ParentComponent from './basic/parent';

/**
 * 是否启用mock数据
 */
export const MOCK = false;

/**
 * 分享默认设置
 */
export const SHARE = {
    title: '',
    desc: '',
    link: '',
    imgUrl: ''
}

/**
 * 图片或其它资源的cdn地址（如果有多个，可以设置为对象）
 */
export const CDN = '';

/**
 * URL设置，请注意，分清“具体地址”与“前缀地址”
 */
export const URL = {

    // 上传地址：具体地址
    upload: {
        key: '',
        dev: 'http://smsnotify.sgboke.com/',
        test: '',
        prod: ''
    },

    // 数据上报地址：具体地址
    report: {
        key: '',
        dev: 'http://smsnotify.sgboke.com/',
        test: '',
        prod: ''
    },

    // JSSDK获取地址：具体地址
    jssdk: {
        key: '',
        dev: 'http://smsnotify.sgboke.com/',
        test: '',
        prod: ''
    },

    /**
     * 数据后端访问地址：前缀地址
     */
    data: {
        key: '',
        dev: 'http://smsnotify.sgboke.com/',
        test: '',
        prod: ''
    },

    /**
     * 中央服务器访问地址：前缀地址
     */
    centrum: {
        key: '',
        dev: 'http://smsnotify.sgboke.com/',
        test: '',
        prod: ''
    }
}

/**
 * http加载器
 */
export const LOADER = {

    // 静默加载器
    slient: {
        start: function(): void {

        },
        end: function(): void {

        }
    },

    // Loading加载器
    loading: {
        start: function(): void { 
            loading();
        },
        end: function(): void { 
            loadingHide();
        }
    },

    // 场景加载器（仅处理loading与success场景，其它场景请使用回调处理）
    scene: {
        start: function(res: StructRestfulResult, that: ParentComponent): void { 
            that.loading();
        },
        end: function(res: StructRestfulResult, that: ParentComponent): void {
            const arr = ['success', 'failPower', 'failLogic', 'failError', 'failNetwork', 'failOffline'];
            that[arr[res.code]]();
        }
    }
}

/**
 * http返回数据解析器
 */
export const PARSE = {

    // 原始解析器
    origin: function(text: string): StructRestfulResult {
        return {
            code: 0,
            msg: '',
            data: text
        }
    },

    // restful解析器
    restful: function(text: string): StructRestfulResult {
        try {
            const json = JSON.parse(text);
            if (!json.hasOwnProperty('code') || !json.hasOwnProperty('msg')) {
                return {
                    code: 5,
                    msg: '从服务器返回的JSON数据格式不正确（没有包含code和msg字段）！'
                }
            }
            return json;
        } 
        catch(e) {         
            return {
                code: 3,
                msg: e.message
            }
        }
    },

    /**
     * wechat解析器
     */
    wechat: function(text: string): StructRestfulResult {
        return {
            code: 0,
            msg: '',
            data: text
        }
    }
}

/**
 * http管道处理器
 */
export const PIPE = {

    /**
     * 静默管道
     */
    slient: function(): HandlerPipe { 
        return function(res: StructRestfulResult, that: ParentComponent): void { 

        } 
    },

    /**
     * 吐司管道
     * 
     * @param {string} title 文字，当传递''时，使用返回的文字
     * @param {string} image 图片地址
     * @param {boolean} mask 是否显示遮罩，默认false
     * @param {number} duration 显示时长，默认1500
     */
    toast: function(title = '', image = '', mask = false, duration = 1500): HandlerPipe {
        return function(res: StructRestfulResult, that: ParentComponent): void { 
            toast(title !== '' ? title : res.msg, image, mask, duration); 
        }
    },

    /**
     * 弹窗管道
     * 
     * @param {string} title 标题，默认“提示”
     * @param {string} content 文字，默认"res.msg"
     */
    alert: function(title?: string, content?: string): HandlerPipe {
        return function(res: StructRestfulResult, that: ParentComponent): void {  
            alert(title ? title : '提示', content ? content : res.msg); 
        }
    },

    /**
     * 场景管道
     * 
     * @param {string} scene 转到的场景名称
     */
    scene: function(scene: string): HandlerPipe {
        return function(res: StructRestfulResult, that: ParentComponent): void { 
            that[scene]();
        }
    },

    /**
     * 路由管道
     * 
     * @param {string} url 页面地址
     * @param {object} params 参数
     */
    router: function(url: string, params: object): HandlerPipe {
        return function(res: StructRestfulResult, that: ParentComponent): void { 
            navigate(url, params); 
        }
    }
}

/**
 * http快速应用参数
 */
export const REQUEST = {
    load: {},
    preload: {}
}

/**
 * 日期format
 */
export const DATE = {
    dash: 'Y-m-d',
    slash: 'Y/m/d',
    chinese: 'Y年m月d日',
}

/**
 * 时间format
 */
export const TIME = {
    standard: 'H:i:s',
    chinese: 'H时i分s秒'
}

/**
 * 日期时间format
 */
export const DATETIME = {
    dash: 'Y-m-d H:i:s',
    slash: 'Y/m/d H:i:s',
    chinese: 'Y年m月d日 H时i分s秒',
}

/**
 * 正则表达式列表
 */
export const REGEXP = {

}
