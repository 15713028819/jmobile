import React from 'react';
import Taro, { Component, Config, chooseInvoiceTitle } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { observable, computed, action } from 'mobx';
import $, { _, Conf, Ico, Scene, Data, Parent, Types } from '@/parts';

@observer
export default class Index extends Parent.Page {

    // - ------------------------------------------------------------------------------------
    // - 配置
    // - ------------------------------------------------------------------------------------
    config: Config = {
        navigationBarTitleText: '首页'
    }

    // - ------------------------------------------------------------------------------------
    // - Mock、Data、Compute
    // - ------------------------------------------------------------------------------------
    @observable data = Data.index.data;
    @computed get computed_total() {
        return this.data.name + this.data.name;
    }

    // - ------------------------------------------------------------------------------------
    // - Action
    // - ------------------------------------------------------------------------------------
    action = {
        load: action(()=> {
            $.http.get(this, { ...Conf.Request.data.load,
                url: 'test.php',
                mock: Data.index.mock.load,
                success: (that, res)=> {
                    console.log(1)
                    this.goto('success');
                }
            })
            this.goto('success');
        }),
        add: action(()=> {
            setTimeout(()=> {
                this.data.name ='添加完成';
            }, 1000)
        })
    }

    // - ------------------------------------------------------------------------------------
    // - 生命周期
    // - ------------------------------------------------------------------------------------
    life = {
        mount: ()=> {
            
        },
        show: ()=> {
            this.action.load();
        },
        hide: ()=> {

        },
        unmount: ()=> {

        }
    }

    // - ------------------------------------------------------------------------------------
    // - 事件处理
    // - ------------------------------------------------------------------------------------
    event = {
        
    }

    // - ------------------------------------------------------------------------------------
    // - 场景与渲染
    // - ------------------------------------------------------------------------------------
    @observable scene = 'loading';
    render () {
        const SceneLoading = Scene.loading.normal;
        const SceneEmpty = Scene.loading.normal;
        return (
            <View style={_('root')}>
                { this.scene === 'loading' &&  <SceneLoading text='Loading'></SceneLoading>}
                { this.scene === 'empty' &&  <SceneEmpty></SceneEmpty>}
                { this.scene === 'success' &&  
                    <View style={_('$mx-1')}>

                        <Image src={Ico.market} style={_('@ico-1')}></Image>

                        {/* Swiper */}
                        <View style={_('@home-swiper-container')}>
                            <Swiper indicatorColor='#999' indicatorActiveColor='#333' circular indicatorDots autoplay>
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

                        {/* Menu */}
                        <View style={_('row around mt-15 h-120')}>
                            <View style={_('@home-menu @home-test-a-b')}></View>
                            <View style={_('@home-menu')}></View>
                            <View style={_('@home-menu')}></View>
                            <View style={_('@home-menu')}></View>
                        </View>

                        {/* 明星 */}


                    </View>
                }
            </View>
        )
    }
}
