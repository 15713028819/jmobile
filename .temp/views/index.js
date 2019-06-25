import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import * as tslib_1 from "tslib";
import React from 'react';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import { observer } from "@tarojs/mobx-h5";
import { observable, computed, action } from 'mobx';
import $, { _, Conf, Ico, Scene, Data, Parent } from "../parts/index";
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
    // - Mock、Data、Compute
    // - ------------------------------------------------------------------------------------
    this.data = Data.index.data;
    // - ------------------------------------------------------------------------------------
    // - Action
    // - ------------------------------------------------------------------------------------
    this.action = {
      load: action(() => {
        $.http.get(this, { ...Conf.Request.data.load,
          url: 'test.php',
          mock: Data.index.mock.load,
          success: (that, res) => {
            console.log(1);
            this.goto('success');
          }
        });
        this.goto('success');
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
      show: () => {
        this.action.load();
      },
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
    this.scene = 'loading';
  }
  get computed_total() {
    return this.data.name + this.data.name;
  }
  render() {
    const SceneLoading = Scene.loading.normal;
    const SceneEmpty = Scene.loading.normal;
    return <View style={_('root')}>
                {this.scene === 'loading' && <SceneLoading text="Loading"></SceneLoading>}
                {this.scene === 'empty' && <SceneEmpty></SceneEmpty>}
                {this.scene === 'success' && <View style={_('$mx-1')}>

                        <Image src={Ico.market} style={_('@ico-1')}></Image>

                        
                        <View style={_('@home-swiper-container')}>
                            <Swiper indicatorColor="#999" indicatorActiveColor="#333" circular indicatorDots autoplay>
                                <SwiperItem style={_('@home-swiper-item bg-#eee')}>
                                    <View>1</View>
                                </SwiperItem>
                                <SwiperItem style={_('@home-swiper-item bg-#aaa')}>
                                    <View>2</View>
                                </SwiperItem>
                                <SwiperItem style={_('@home-swiper-item bg-#f60')}>
                                    <View>3</View>
                                </SwiperItem>
                            </Swiper>
                        </View>

                        
                        <View style={_('row around mt-15 h-120')}>
                            <View style={_('@home-menu @home-test-a-b')}></View>
                            <View style={_('@home-menu')}></View>
                            <View style={_('@home-menu')}></View>
                            <View style={_('@home-menu')}></View>
                        </View>

                        


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