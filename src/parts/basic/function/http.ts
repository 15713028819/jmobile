import Taro from '@tarojs/taro';
import * as Types from '../types';

export function get() {

}

export function post() {

}

export function upload() {

}

export function report() {

}

export function jssdk() {

}

/**
 * Http
 */
export class http {

    /**
     * GET请求
     * 
     * @param {object} that 页面或组件的this指针
     * @param {Types.Param.Http.Request} req 网络请求对象 
     */
    public static get(that: object, req: Types.Param.Http.Request): void {
        if (notProduction() && req.mock) {
            this._mock(that, req);
            return;
        }
        this._preset(that, req, 'GET');
    }

    /**
     * POST请求
     * 
     * @param {object} that 页面或组件的this指针
     * @param {Types.Param.Http.Request} req 网络请求对象 
     */
    public static post(that: object, req: Types.Param.Http.Request): void {
        if (notProduction() && req.mock) {
            this._mock(that, req);
            return;
        }
        this._preset(that, req, 'POST');
    }

    /**
     * 制作mock数据
     * 
     * @param {object} that 页面或组件的this指针
     * @param {Types.Param.Http.Request} req 网络请求对象 
     */
    private static _mock(that: object, req: Types.Param.Http.Request): void {

        // typescript的类型辨识
        if (req.mock) {

            // 取random和list的别称
            const random = req.mock.random;
            const list = req.mock.list;

            // 计算全部概率，和各起始点和终结点
            const randSuccess = random.success;
            const randPower = randSuccess + random.fail.power;
            const randLogic = randPower + random.fail.logic;
            const randError = randLogic + random.fail.error;
            const randOffline = randError + random.fail.offline;

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
                req.success(that, result);
            }

            // 判断返回fail.power
            else if (rand > randSuccess && rand <= randPower) {
                let result = {
                    code: 1,
                    msg: 'mock: 没有权限'
                }
                req.fail.power(that, result);
            }

            // 判断返回fail.logic
            else if (rand > randPower && rand <= randLogic) {
                let result = {
                    code: 2,
                    msg: 'mock: 逻辑错误'
                }
                req.fail.logic(that, result);
            }

            // 判断返回fail.error
            else if (rand > randLogic && rand <= randError) {
                let result = {
                    code: 3,
                    msg: 'mock: 系统错误'
                }
                req.fail.error(that, result);
            }

            // 判断返回fail.offline
            else {
                let result = {
                    code: 1,
                    msg: 'mock: 没有联网'
                }
                req.fail.offline(that, result);
            }
        }
    }

    /**
     * Http请求预处理（启动加载器、设置req对象，检查是否联网等操作）
     * 
     * @param {object} that 页面或组件的this指针
     * @param {Types.Param.Http.Request} req 网络请求对象 
     * @param {string} method 请求的方法名，仅为：'GET' | 'POST'
     */
    private static _preset(that: object, req: Types.Param.Http.Request, method: 'GET' | 'POST'): void {

        // 启动加载器
        req.loader.start(that);
        
        // 计算url
        if (req.preurl) {
            if (isProduction()) req.url = req.preurl.prod + req.url;
            if (isDevelopment()) req.url = req.preurl.dev + req.url;
            if (isTest()) req.url = req.preurl.test + req.url; 
        }

        // 设置method
        req['method'] = method;

        // 设置header
        req['header'] = req.header ? req.header : {
            'content-type': 'application/x-www-form-urlencoded'
        };

        // 非H5下，查看是否联网
        if (notH5()) {
            getNetworkType((res)=> {

                // 非H5端，无网络，直接进入无网络管道，并在执行完管道函数后，直接返回（不进行网络请求）
                if (res.networkType === 'none') {

                    // 声明返回对象
                    const result: Types.Struct.RestfulResult = {
                        code: 6, 
                        msg: '没有联网'
                    };

                    // 调用offline管道函数
                    req.fail.offline(that, result);

                    // 结束加载器
                    req.loader.end(that, result);

                    // 返回
                    return;
                }

                // 非H5端，有网络，执行访问请求
                this._request(that, req);
            });
        }

        // H5端下，无法准确判断是否有网，所以直接进行请求
        else {
            this._request(that, req);
        }
    }

    /**
     * 实际访问方法
     * 
     * @param {object} that 页面或组件的this指针
     * @param {Types.Param.Http.Request} req 网络请求对象 
     */
    private static _request(that: object, req: Types.Param.Http.Request): void {

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
                req.fail.error(that, {code: 3, msg: '状态码出错'});
                error('Http._request(): ', ...arguments, '状态码出错：' + statusCode);
                return;
            }

            // 使用解析器，将数据解析成Types.Struct.RestfulResult
            const result: Types.Struct.RestfulResult = req.parse(data);

            // 根据result.code，确定需要调用哪个管道函数的名称
            switch (result.code) {
                case 0:
                    req.success(that, result);
                    break;
                case 1:
                    req.fail.power(that, result);
                    break;
                case 2:
                    req.fail.logic(that, result);
                    break;
                case 3:
                    req.fail.error(that, result);
                default: 
                    break;
            }

            // 结束loader
            req.loader.end(that, result);
        })

        // 错误处理
        .catch((err)=> {

            // 声明错误对象
            const result = {
                code: 3,
                msg: '访问出错'
            };

            // 调用错误管道函数
            req.fail.error(that, result);

            // 结束loader
            req.loader.end(that, result);

            // 报错
            error('Http._request(): ', ...arguments, err);
        });
    }
}
