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
        $.log(this.scene);
        return (
            <View style={_('root')}>
                { this.scene === 'loading' &&  <SceneLoading text='Loading'></SceneLoading>}
                { this.scene === 'empty' &&  <SceneEmpty></SceneEmpty>}
                { this.scene === 'success' &&  
                    <View style={_('$mx-1')}>



                    </View>
                }
            </View>
        )
    }
}
