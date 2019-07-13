import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

const JRow = (p)=> <View></View>;
const JAround = (p)=> <View></View>;
const JBetween = (p)=> <View></View>;
const JCenter = (p)=> <View></View>;
const JColumn = (p)=> <View></View>;
const JFloat = (p)=> <View></View>;
const JX = (p)=> <View></View>;
const JY = (p)=> <View></View>;

export default class Index extends Component {
    render () {
        return (
            <View>

                {/* 
                ---------------------------------------------------------------------------------------
                 行： 输出flex布局的行，铺满行空间，且横向左对齐、纵向居中对齐
                ---------------------------------------------------------------------------------------
                 @param {string} x 横向对齐方法，可选：left, center, right, around, between。默认：“left”
                 @param {string} y 纵向对齐方法，可选：top, center, bottom。默认：“center”
                 @param {boolean} wrap 是否换行。默认“false”
                 @return <View></View>
                ---------------------------------------------------------------------------------------
                */}
                <JRow
                    x='left'
                    y='center'
                    wrap={false}
                ></JRow>

                {/* 
                ---------------------------------------------------------------------------------------
                 均分： 输出flex布局的行，铺满行空间，且横向Around对齐、纵向居中对齐
                ---------------------------------------------------------------------------------------
                 @param {string} x 横向对齐方法，可选：left, center, right, around, between。默认：“around”
                 @param {string} y 纵向对齐方法，可选：top, center, bottom。默认：“center”
                 @param {boolean} wrap 是否换行。默认“false”
                 @return <View></View>
                ---------------------------------------------------------------------------------------
                */}
                <JAround
                    x='around'
                    y='center'
                    wrap={false}
                ></JAround>

                {/* 
                ---------------------------------------------------------------------------------------
                 填充： 输出flex布局的行，铺满行空间，且横向Between对齐、纵向居中对齐
                ---------------------------------------------------------------------------------------
                 @param {string} x 横向对齐方法，可选：left, center, right, around, between。默认：“between”
                 @param {string} y 纵向对齐方法，可选：top, center, bottom。默认：“center”
                 @param {boolean} wrap 是否换行。默认“false”
                 @return <View></View>
                ---------------------------------------------------------------------------------------
                */}
                <JBetween
                    x='between'
                    y='center'
                    wrap={false}
                ></JBetween>

                {/* 
                ---------------------------------------------------------------------------------------
                 行： 输出flex布局的行，铺满行空间，且横向居中对齐、纵向居中对齐
                ---------------------------------------------------------------------------------------
                 @param {string} x 横向对齐方法，可选：left, center, right, around, between。默认：“center”
                 @param {string} y 纵向对齐方法，可选：top, center, bottom。默认：“center”
                 @param {boolean} wrap 是否换行。默认“false”
                 @return <View></View>
                ---------------------------------------------------------------------------------------
                */}
                <JCenter
                    x='center'
                    y='center'
                    wrap={false}
                ></JCenter>

                {/* 
                ---------------------------------------------------------------------------------------
                 列： 输出flex布局的列，铺满列空间，且横向左对齐、纵向顶对齐
                ---------------------------------------------------------------------------------------
                 @param {string} x 横向对齐方法，可选：left, center, right, around, between。默认：“left”
                 @param {string} y 纵向对齐方法，可选：top, center, bottom。默认：“top”
                 @param {boolean} wrap 是否换行。默认“false”
                 @return <View></View>
                ---------------------------------------------------------------------------------------
                */}
                <JColumn
                    x='left'
                    y='center'
                    wrap={false}
                ></JColumn>

                {/* 
                ---------------------------------------------------------------------------------------
                 浮动： 输出flex布局的行，铺满列空间，且横向左对齐、纵向居中对齐
                ---------------------------------------------------------------------------------------
                 @param {string} x 横向对齐方法，可选：left, center, right, around, between。默认：“left”
                 @param {string} y 纵向对齐方法，可选：top, center, bottom。默认：“center”
                 @param {number} zIndex 纵向层级数值。默认“100”
                 @param {number} top 距顶部距离。默认“0”
                 @param {number} right 距右侧距离。默认“0”
                 @param {number} bottom 距底部距离。默认“0”
                 @param {number} left 距左侧距离。默认“0”
                 @param {boolean} isDrawable 是否可拖拽。默认“false”
                 @param {boolean} isMagnet 是否有自动吸边效果（仅可拖拽时可用）。默认“false”
                 @return <View></View>
                ---------------------------------------------------------------------------------------
                */}
                <JFloat
                    x='left'
                    y='center'
                    zIndex={100}
                    top={0}
                    right={0}
                    bottom={0}
                    left={0}
                    isDrawable={false}
                    isMagnet={false}
                ></JFloat>

                {/* 
                ---------------------------------------------------------------------------------------
                 横排元素组： 输出flex布局的列，自动大小（非铺满），且横向左对齐、纵向居中对齐
                ---------------------------------------------------------------------------------------
                 @param {string} x 横向对齐方法，可选：left, center, right, around, between。默认：“left”
                 @param {string} y 纵向对齐方法，可选：top, center, bottom。默认：“center”
                 @param {string | JSX} left 左侧文字或JSX。无默认（不传时不输出）
                 @param {string | JSX} center 中间文字或JSX。无默认（不传时不输出）
                 @param {string | JSX} right 右侧文字或JSX。无默认（不传时不输出）
                 @return <View></View>
                ---------------------------------------------------------------------------------------
                */}
                <JX
                    x='left'
                    y='center'
                    left=''
                    center=''
                    right=''
                ></JX>

                {/* 
                ---------------------------------------------------------------------------------------
                 纵排元素组： 输出flex布局的列，自动大小（非铺满），且横向居中对齐、纵向顶对齐
                ---------------------------------------------------------------------------------------
                 @param {string} x 横向对齐方法，可选：left, center, right, around, between。默认：“center”
                 @param {string} y 纵向对齐方法，可选：top, center, bottom。默认：“top”
                 @param {string | JSX} top 左侧文字或JSX。无默认（不传时不输出）
                 @param {string | JSX} center 中间文字或JSX。无默认（不传时不输出）
                 @param {string | JSX} bottom 右侧文字或JSX。无默认（不传时不输出）
                 @return <View></View>
                ---------------------------------------------------------------------------------------
                */}
                <JY
                    x='left'
                    y='center'
                    top=''
                    center=''
                    bottom=''
                ></JY>

            </View>
        );
    }
}
