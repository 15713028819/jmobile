import Taro from '@tarojs/taro';
import { MOCK } from '../../conf';
import { networkType } from './capture';
import ParentComponent from '../parent';

/**
 * 执行get请求
 * 
 * @param {ParentComponent} that 组件对象指针
 * @param {ParamRequest} req request参数对象
 */
export function httpGet(that: ParentComponent, req: ParamRequest) {
    if (process.env.NODE_ENV !== 'production' && MOCK && req.mock) {
        mock(that, req);
        return;
    }
    request(that, req, 'GET', true);
}

/**
 * 执行post请求
 * 
 * @param {ParentComponent} that 组件对象指针
 * @param {ParamRequest} req request参数对象
 */
export function httpPost(that: ParentComponent, req: ParamRequest) {
    if (process.env.NODE_ENV !== 'production' && MOCK && req.mock) {
        mock(that, req);
        return;
    }
    request(that, req, 'POST', true);
}

/**
 * 执行文件上传请求
 * 
 * @param {object} data 需要上传的数据
 */
export function httpUpload(data: object) {

}

/**
 * 执行数据上报请求
 * 
 * @param {object} data 需要上报的数据
 */
export function httpReport(data: object) {

}

/**
 * 执行获取jssdk请求
 */
export function httpJssdk() {

}

// ----------------------------------------------------------------------------
// 私有函数部分
// ----------------------------------------------------------------------------

/**
 * 返回mock数据
 * 
 * @param {ParentComponent} that 组件对象指针
 * @param {ParamRequest} req request参数对象
 */
function mock(that: ParentComponent, req: ParamRequest) {

    // typescript的类型辨识
    if (req.mock) {

        // 取random和list的别称
        const random = req.mock.random;
        const list = req.mock.list;

        // 计算全部概率，和各起始点和终结点
        const randSuccess = random.success;
        const randPower = randSuccess + random.failPower;
        const randLogic = randPower + random.failLogic;
        const randError = randLogic + random.failError;
        const randNetwork = randError + random.failNetwork;
        const randOffline = randNetwork + random.failOffline;

        // 取随机数
        const rand = Math.round(Math.random() * randOffline);

        // 判断返回success
        if (rand <= randSuccess) {

            // 声明初值
            let result = {
                code: 0,
                msg: '',
                data: {}
            };

            // 如果list的长度大于0，代表有返回的随机列表
            if (list.length > 0) {

                // 如果list的长度大于1，则需要进行随机摘取
                if (list.length > 1) {
                    const r = Math.floor(Math.random() * list.length);
                    const data = list[r];
                    if (data) {
                        result['data'] = data;
                    }
                } 
                
                // 否则，即；list长度等于1，则直接将result.data赋值为list[0]
                else {
                    result['data'] = list[0];
                }
            }
            req.success(result, that);
        }

        // 判断返回failPower
        else if (rand > randSuccess && rand <= randPower) {
            let result = {
                code: 1,
                msg: 'mock: 没有权限'
            }
            req.failPower(result, that);
        }

        // 判断返回failLogic
        else if (rand > randPower && rand <= randLogic) {
            let result = {
                code: 2,
                msg: 'mock: 逻辑错误'
            }
            req.failLogic(result, that);
        }

        // 判断返回failError
        else if (rand > randLogic && rand <= randError) {
            let result = {
                code: 3,
                msg: 'mock: 系统错误'
            }
            req.failError(result, that);
        }

        // 判断返回failNetwork
        else if (rand > randError && rand <= randNetwork) {
            let result = {
                code: 4,
                msg: 'mock: 网络错误'
            }
            req.failNetwork(result, that);
        }

        // 判断返回failOffline
        else {
            let result = {
                code: 5,
                msg: 'mock: 没有联网'
            }
            req.failOffline(result, that);
        }
    }
}

/**
 * 实际的请求执行函数
 * 
 * @param {ParentComponent} that 组件对象指针
 * @param {ParamRequest} req request参数对象
 */
function request(that: ParentComponent, req: ParamRequest, method: 'GET' | 'POST', computeURL: boolean = false) {

    // ------------------------------------------------------ 设置部分

    // 启动加载器
    req.loader.start(undefined, that);

    // 设置method
    req['method'] = method;

    // 设置header
    req['header'] = req.header ? req.header : {
        'content-type': 'application/x-www-form-urlencoded'
    };

    // 计算url
    if (computeURL && req.preurl) {
        switch (process.env.NODE_ENV) {
            case 'production':
                req.url = req.preurl.prod + req.url;
                break;
            case 'development':
                req.url = req.preurl.dev + req.url;
                break;
            case 'test':
                req.url = req.preurl.test + req.url; 
                break;
            default:
                break;
        }
    }

    // 非H5下，查看是否联网
    if (process.env.TARO_ENV === 'h5') {
        networkType((res)=> {

            // 非H5端，无网络，直接进入无网络管道，并在执行完管道函数后，直接返回（不进行网络请求）
            if (res.networkType === 'none') {

                // 声明返回对象
                const result: StructRestfulResult = {
                    code: 5, 
                    msg: '没有联网'
                };

                // 调用offline管道函数
                req.failOffline(result, that);

                // 结束加载器
                req.loader.end(result, that);

                // 返回
                return;
            }

            // 非H5端，有网络，执行访问请求
            action(that, req);
        });
    }

    // H5端下，无法准确判断是否有网，所以直接进行请求
    else {
        action(that, req);
    }
}

/**
 * 实际的请求执行函数
 * 
 * @param {ParentComponent} that 组件对象指针
 * @param {ParamRequest} req request参数对象
 */
function action(that: ParentComponent, req: ParamRequest) {

    // 请求网络
    Taro.request({
        method: req.method,
        header: req.header,
        url: req.url,
        data: req.data,
        dataType: 'text',
        responseType: 'text',
        // mode: 'no-cors',
        // credentials: 'include',
    })

    // 返回处理
    .then((res)=> {

        // 取回状态码和数据
        let {statusCode, data} = res;

        // 判断状态码是否出错，如果出错，则进入出错管道（注意，404在这里是抓不到的）
        if (statusCode !== 200) {
            req.failError({code: 3, msg: '状态码出错'}, that);
            return;
        }

        // 使用解析器，将数据解析成StructRestfulResult
        const result: StructRestfulResult = req.parse(data);

        // 根据result.code，确定需要调用哪个管道函数的名称
        const arr = ['success', 'failPower', 'failLogic', 'failError', 'failNetwork', 'failOffline'];
        req[arr[result.code]]();

        // 结束loader
        req.loader.end(result, that);
    })

    // 错误处理
    .catch((err)=> {

        // 声明错误对象
        const result = {
            code: 3,
            msg: '访问出错'
        };

        // 调用错误管道函数
        req.failError(result, that);

        // 结束loader
        req.loader.end(result, that);
    });
}


// ----------------------------------------------------------------------------
// 私有类型定义部分
// ----------------------------------------------------------------------------

/**
 * http restful 返回结构
 */
export type StructRestfulResult = {
    code: number;               // 状态码
    msg: string;                // 消息
    data?: any;                 // 数据
}

/**
 * 加载处理器
 */
export type HandlerLoader = (res?: StructRestfulResult, that?: ParentComponent) => void; 

/**
 * http数据解析处理器
 */
export type HandlerParse = (text: string) => StructRestfulResult; 

/**
 * http管道处理器
 */
export type HandlerPipe = (res: StructRestfulResult, that: ParentComponent)=> void;

/**
 * http请求参数对象
 */
export type ParamRequest = {
    preurl?: {                                  // 预置url
        key: string,                            // 服务器端申请的key值
        dev: string,                            // 开发环境url
        test: string,                           // 测试环境url
        prod: string,                           // 生产环境url
    },
    mock?: {                                    // Mock数据
        random: {
            success: number,                    // 返回成功的概率
            failPower: number,                  // 返回无权限的概率
            failLogic: number,                  // 返回逻辑错误的概率
            failError: number,                  // 返回系统错误的概率
            failNetwork: number,                // 返回网络错误的概率
            failOffline: number,                // 返回未联网的概率
        },
        list: any[]                             // mock数据列表
    },    
    method?: 'GET' | 'POST',                    // 请求方法                        
    header?: object,                            // 请求头
    data?: object,                              // 参数
    loader: {                                   // 加载器
        start: HandlerLoader,                   // 请求开始时的回调函数
        end: HandlerLoader,                     // 请求结束时的回调函数
    },                         
    url: string,                                // url    
    parse: HandlerParse,                        // 解析器
    success: HandlerPipe,                       // 成功回调：对应code: 0
    failPower: HandlerPipe,                     // 没有权限：对应code: 1
    failLogic: HandlerPipe,                     // 逻辑错误：对应code: 2
    failError: HandlerPipe,                     // 程序错误：对应code: 3
    failNetwork: HandlerPipe,                   // 网络错误：对应code: 4
    failOffline: HandlerPipe                    // 没有联网：对应code: 5
}
