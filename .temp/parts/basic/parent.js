import { Component } from "@tarojs/taro-h5";
class JM2Page extends Component {
  /**
   * 初始化
   */
  constructor() {
    super(...arguments);
  }
  /**
   * 生命周期：初始化
   */
  componentDidMount() {
    if (this.life.mount && typeof this.life.mount === 'function') {
      this.life.mount();
    }
    // if (JM2.Env.isH5) {
    // }
  }
  /**
   * 生命周期：卸载
   */
  componentWillUnmount() {
    if (this.life.unmount && typeof this.life.unmount === 'function') {
      this.life.unmount();
    }
  }
  /**
   * 生命周期：显示
   */
  componentDidShow() {
    if (this.life.show && typeof this.life.show === 'function') {
      this.life.show();
    }
  }
  /**
   * 生命周期：隐藏
   */
  componentDidHide() {
    if (this.life.hide && typeof this.life.hide === 'function') {
      this.life.hide();
    }
  }
  /**
   * 转换到加载场景
   */
  gotoLoading() {
    this.scene = 'loading';
  }
  /**
   * 转换到成功场景
   */
  gotoSuccess() {
    this.scene = 'success';
  }
  /**
   * 转换到空数据场景
   */
  gotoEmpty() {
    this.scene = 'empty';
  }
  /**
   * 转换到没有权限场景
   */
  gotoFailPower() {
    this.scene = 'failpower';
  }
  /**
   * 转换到逻辑出错场景
   */
  gotoFailLogic() {
    this.scene = 'faillogic';
  }
  /**
   * 转换到系统错误场景
   */
  gotoFailError() {
    this.scene = 'failerror';
  }
  /**
   * 转换到未联网场景
   */
  gotoFailOffline() {
    this.scene = 'failoffline';
  }
}
class JM2Component {}
export default {
  Page: JM2Page,
  Component: JM2Component
};