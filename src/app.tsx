import Taro, { Component, Config } from '@tarojs/taro';
import { Provider } from '@tarojs/mobx';
import Index from '@/views/index'

import '@/app.scss'

import store from '@/parts/store'


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

// 非rn环境下，导入iconfont.css（不要使用JM2.Env.notRN()判断，不起作用）
// if (process.env.TARO_ENV !== 'rn') {
//     require('./assets/icon/other/iconfont.css')
// }


class App extends Component {

    config: Config = {
        pages: [
            'views/index',              // 首页
            'views/article',            // 文章
            'views/business',           // 出卖
            'views/market',             // 市场
            'views/sell',               // 出卖
            'views/vindicate',          // 表白
            'views/user/index',         // 用户首页
            'views/user/cash',          // 我的余额
            'views/user/friends',       // 我的朋友
            'views/user/message'        // 消息列表
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            list: [
                {
                    text: '首页',
                    iconPath: './assets/tabbar/home.png',
                    pagePath: 'views/index'
                },
                {
                    text: '表白',
                    iconPath: './assets/tabbar/vindicate.png',
                    pagePath: 'views/vindicate'
                },
                {
                    text: '市场',
                    iconPath: './assets/tabbar/market.png',
                    pagePath: 'views/market'
                },
                {
                    text: '我的',
                    iconPath: './assets/tabbar/my.png',
                    pagePath: 'views/user/index'
                }
            ]
        }
    }

    componentDidMount () {}

    componentDidShow () {}

    componentDidHide () {}

    componentDidCatchError () {}

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render () {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        )
    }
}

Taro.render(<App />, document.getElementById('app'))
