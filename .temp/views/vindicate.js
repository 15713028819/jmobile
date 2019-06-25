import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import * as tslib_1 from "tslib";
import React from 'react';
import { View, Image } from '@tarojs/components';
import { observer } from "@tarojs/mobx-h5";
import { observable, computed, action } from 'mobx';
import { _, Scene, Parent, Data, Ico } from "../parts/index";
let Index = class Index extends Parent.Page {
  constructor() {
    super(...arguments);
    // - ------------------------------------------------------------------------------------
    // - 配置
    // - ------------------------------------------------------------------------------------
    this.config = {
      navigationBarTitleText: '首页'
    };
    // - ------------------------------------------------------------------------------------
    // - Mock、Data、Computed
    // - ------------------------------------------------------------------------------------
    this.mock = Data.index.mock;
    this.data = Data.index.data;
    // - ------------------------------------------------------------------------------------
    // - Action
    // - ------------------------------------------------------------------------------------
    this.action = {
      load: action(() => {
        setTimeout(() => {
          this.data.name = 'completed';
          this.goto('success');
        }, 2000);
      }),
      add: action(() => {
        setTimeout(() => {
          this.data.name = '添加完成';
        }, 1000);
      })
    };
    // - ------------------------------------------------------------------------------------
    // - 生命周期
    // - ------------------------------------------------------------------------------------
    this.life = {
      mount: () => {},
      show: () => {},
      hide: () => {},
      unmount: () => {}
    };
    // - ------------------------------------------------------------------------------------
    // - 事件处理
    // - ------------------------------------------------------------------------------------
    this.event = {};
    // - ------------------------------------------------------------------------------------
    // - 场景与渲染
    // - ------------------------------------------------------------------------------------
    this.scene = 'success';
  }
  get computed_total() {
    return this.data.name + this.data.name;
  }
  render() {
    const SceneLoading = Scene.loading.normal;
    const SceneEmpty = Scene.loading.normal;
    return <View>
                {this.scene === 'loading' && <SceneLoading text="Loading"></SceneLoading>}
                {this.scene === 'empty' && <SceneEmpty></SceneEmpty>}
                {this.scene === 'success' && <View>
                        <Image src={Ico.home} style={_('@ico-1')}></Image>
                    </View>}
            </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

};
tslib_1.__decorate([observable], Index.prototype, "data", undefined);
tslib_1.__decorate([computed], Index.prototype, "computed_total", null);
tslib_1.__decorate([observable], Index.prototype, "scene", undefined);
Index = tslib_1.__decorate([observer], Index);
export default Index;