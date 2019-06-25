import * as $ from "./basic/jm2";
/**
 * 分享默认设置
 */
export const SHARE = {
  title: '',
  desc: '',
  link: '',
  imgUrl: ''
};
/**
 * 预置URL前缀
 */
export const Http = {
  /**
   * 预置url
   */
  preurl: {
    /**
     * data, restful类型
     */
    data: {
      key: '',
      dev: 'http://smsnotify.sgboke.com/',
      test: '',
      prod: ''
    },
    /**
     * log, restful类型
     */
    log: {
      key: '',
      dev: '',
      test: '',
      prod: ''
    },
    /**
     * upload, restful类型
     */
    upload: {
      key: '',
      dev: 'https://centrum.mscript.cn/face/',
      test: '',
      prod: ''
    },
    /**
     * jssdk, restful类型
     */
    jssdk: {
      key: '',
      dev: 'https://centrum.mscript.cn/face/',
      test: '',
      prod: ''
    }
  },
  /**
   * http加载器
   */
  loader: {
    /**
     * 静默加载器
     */
    slient: {
      start: function (that) {},
      end: function (that, res) {}
    },
    /**
     * Loading加载器
     */
    loading: {
      start: function (that) {
        $.loading.show();
      },
      end: function (that, res) {
        $.loading.hide();
      }
    },
    /**
     * 场景加载器（仅处理loading与success场景，其它场景请使用回调处理）
     */
    scene: {
      start: function (that) {
        that.gotoLoading();
      },
      end: function (that, res) {
        if (res.code === 0) {
          that.gotoSuccess();
        }
      }
    }
  },
  /**
   * http解析器
   */
  parse: {
    /**
     * 原始解析器
     */
    origin: function (text) {
      return {
        code: 0,
        msg: '',
        data: text
      };
    },
    /**
     * restful解析器
     */
    restful: function (text) {
      try {
        const json = JSON.parse(text);
        if (!json.hasOwnProperty('code') || !json.hasOwnProperty('msg')) {
          return {
            code: 5,
            msg: '从服务器返回的JSON数据格式不正确（没有包含code和msg字段）！'
          };
        }
        return json;
      } catch (e) {
        return {
          code: 5,
          msg: e.message
        };
      }
    },
    /**
     * wechat解析器
     */
    wechat: function (text) {
      return {
        code: 0,
        msg: '',
        data: text
      };
    }
  },
  /**
   * http管道
   */
  pipe: {
    /**
     * 静默管道
     */
    slient: function () {
      return function (that) {};
    },
    /**
     * 吐司管道
     *
     * @param {string} type 吐司类型
     * @param {string} title 文字
     */
    toast: function (type, title) {
      return function (that, res) {
        $.toast[type](title ? title : res.msg);
      };
    },
    /**
     * 弹窗管道
     *
     * @param {string} title 标题，默认“提示”
     * @param {string} content 文字，默认"res.msg"
     */
    alert: function (title, content) {
      return function (that, res) {
        $.modal.alert(title ? title : '提示', content ? content : res.msg);
      };
    },
    /**
     * 场景管道
     *
     * @param {string} scene 转到的场景名称
     */
    scene: function (scene) {
      return function (that, res) {
        that.goto(scene);
      };
    },
    /**
     * 路由管道
     *
     * @param {string} url 页面地址
     * @param {object} params 参数
     */
    router: function (url, params) {
      return function (that, res) {
        $.navigate(url, params);
      };
    }
  }
};
export const Request = {
  data: {
    load: {
      preurl: Http.preurl.data,
      parse: Http.parse.restful,
      loader: Http.loader.scene,
      fail: {
        power: Http.pipe.toast('info', '没有权限'),
        logic: Http.pipe.toast('info'),
        error: Http.pipe.alert('抱歉', '系统出错！'),
        offline: Http.pipe.alert('提示', '您没有联网！')
      }
    },
    preload: {
      parse: Http.parse.restful,
      loader: Http.loader.loading,
      fail: {
        power: Http.pipe.toast('info', '没有权限'),
        logic: Http.pipe.toast('info'),
        error: Http.pipe.alert('抱歉', '系统出错！'),
        offline: Http.pipe.alert('提示', '您没有联网！')
      }
    }
  }
};
/**
 * 日期时间配置
 */
export const DateTime = {
  /**
   * 格式化
   */
  format: {
    /**
     * 日期类型
     */
    date: {
      dash: 'Y-m-d',
      slash: 'Y/m/d',
      chinese: 'Y年m月d日'
    },
    /**
     * 时间类型
     */
    time: {
      standard: 'H:i:s',
      chinese: 'H时i分s秒'
    },
    /**
     * 日期时间类型
     */
    datetime: {
      dash: 'Y-m-d H:i:s',
      slash: 'Y/m/d H:i:s',
      chinese: 'Y年m月d日 H时i分s秒'
    }
  },
  /**
   * 时间差
   */
  diff: {}
};
/**
 * 正则表达式
 */
export const RegExp = {};