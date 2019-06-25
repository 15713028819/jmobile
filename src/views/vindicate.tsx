import React from 'react';
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { observable, computed, action } from 'mobx';
import $, { _, Helper, Scene, Parent, Data, Ico } from '@/parts';

@observer
export default class Index extends Parent.Page {

    // - ------------------------------------------------------------------------------------
    // - 配置
    // - ------------------------------------------------------------------------------------
    config: Config = {
        navigationBarTitleText: '首页'
    }

    // - ------------------------------------------------------------------------------------
    // - Mock、Data、Computed
    // - ------------------------------------------------------------------------------------
    mock = Data.index.mock;
    @observable data = Data.index.data;
    @computed get computed_total() {
        return this.data.name + this.data.name;
    }

    // - ------------------------------------------------------------------------------------
    // - Action
    // - ------------------------------------------------------------------------------------
    action = {
        load: action(()=> {
            setTimeout(()=> {
                this.data.name ='completed';
                this.goto('success');
            }, 2000);
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
    @observable scene = 'success';
    render () {
        const SceneLoading = Scene.loading.normal;
        const SceneEmpty = Scene.loading.normal;
        return (
            <View>
                { this.scene === 'loading' &&  <SceneLoading text='Loading'></SceneLoading>}
                { this.scene === 'empty' &&  <SceneEmpty></SceneEmpty>}
                { this.scene === 'success' &&  
                    <View>
                        <Image src={Ico.home} style={_('@ico-1')}></Image>
                    </View>
                }
            </View>
        )
    }
}
