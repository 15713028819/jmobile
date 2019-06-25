import Taro, { Component } from "@tarojs/taro-h5";
import { Provider } from "@tarojs/mobx-h5";
import Index from "./views/index";
import "./app.scss";
import store from "./parts/store";
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
// 非rn环境下，导入iconfont.css（不要使用JM2.Env.notRN()判断，不起作用）
// if (process.env.TARO_ENV !== 'rn') {
//     require('./assets/icon/other/iconfont.css')
// }
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import Nerv from "nervjs";
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/views/index"
});

mountApis(_taroHistory);
class App extends Component {
  state = {
    __tabs: {
      list: [{
        text: '首页',
        iconPath: require("././assets/tabbar/home.png"),
        pagePath: "/views/index"
      }, {
        text: '表白',
        iconPath: require("././assets/tabbar/vindicate.png"),
        pagePath: "/views/vindicate"
      }, {
        text: '市场',
        iconPath: require("././assets/tabbar/market.png"),
        pagePath: "/views/market"
      }, {
        text: '我的',
        iconPath: require("././assets/tabbar/my.png"),
        pagePath: "/views/user/index"
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  constructor() {
    super(...arguments);
    Taro._$app = this;
  }
  componentDidMount() {
    this.componentDidShow();
  }
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
                  
                  <TabbarContainer>

                    <TabbarPanel>
                      
              <Router history={_taroHistory} routes={[{
            path: '/views/index',
            componentLoader: () => import( /* webpackChunkName: "views_index" */'./views/index'),
            isIndex: true
          }, {
            path: '/views/article',
            componentLoader: () => import( /* webpackChunkName: "views_article" */'./views/article'),
            isIndex: false
          }, {
            path: '/views/business',
            componentLoader: () => import( /* webpackChunkName: "views_business" */'./views/business'),
            isIndex: false
          }, {
            path: '/views/market',
            componentLoader: () => import( /* webpackChunkName: "views_market" */'./views/market'),
            isIndex: false
          }, {
            path: '/views/sell',
            componentLoader: () => import( /* webpackChunkName: "views_sell" */'./views/sell'),
            isIndex: false
          }, {
            path: '/views/vindicate',
            componentLoader: () => import( /* webpackChunkName: "views_vindicate" */'./views/vindicate'),
            isIndex: false
          }, {
            path: '/views/user/index',
            componentLoader: () => import( /* webpackChunkName: "views_user_index" */'./views/user/index'),
            isIndex: false
          }, {
            path: '/views/user/cash',
            componentLoader: () => import( /* webpackChunkName: "views_user_cash" */'./views/user/cash'),
            isIndex: false
          }, {
            path: '/views/user/friends',
            componentLoader: () => import( /* webpackChunkName: "views_user_friends" */'./views/user/friends'),
            isIndex: false
          }, {
            path: '/views/user/message',
            componentLoader: () => import( /* webpackChunkName: "views_user_message" */'./views/user/message'),
            isIndex: false
          }]} customRoutes={{}} />
              
                    </TabbarPanel>

                    <Tabbar conf={this.state.__tabs} homePage="views/index" router={Taro} />

                  </TabbarContainer>
                </Provider>;
  }
  config = {
    pages: ["/views/index", "/views/article", "/views/business", "/views/market", "/views/sell", "/views/vindicate", "/views/user/index", "/views/user/cash", "/views/user/friends", "/views/user/message" // 消息列表
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: { list: [{ text: '首页', iconPath: require("././assets/tabbar/home.png"), pagePath: "/views/index" }, { text: '表白', iconPath: require("././assets/tabbar/vindicate.png"), pagePath: "/views/vindicate" }, { text: '市场', iconPath: require("././assets/tabbar/market.png"), pagePath: "/views/market" }, { text: '我的', iconPath: require("././assets/tabbar/my.png"), pagePath: "/views/user/index" }], mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  componentWillUnmount() {
    this.componentDidHide();
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}
Nerv.render(<App />, document.getElementById('app'));