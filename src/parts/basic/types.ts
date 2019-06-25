export declare namespace Types {

    /**
     * 编程结构
     */
    namespace Struct {

        /**
         * http restful 返回结构
         */
        type RestfulResult = {
            code: number;               // 状态码
            msg: string;                // 消息
            data?: any;                 // 数据
        }

        /**
         * localstorage 存储结构
         */
        type LocalStorage = {
            timestamp: number;
            value: any;
        }
    }

    /**
     * 处理器
     */
    namespace Handler {
        namespace Http {
            type Loader = (that: object, res?: Struct.RestfulResult) => void; 
            type Parse  = (text: string) => Struct.RestfulResult; 
            type Pipe   = (that: object, res: Struct.RestfulResult)=> void;
        }
    }

    /**
     * 参数类型
     */
    namespace Param {

        // 反馈参数
        namespace Feedback {
            type Loading = {
                title: string;              // 文本默认内容
                mask: boolean;              // 是否显示遮罩
            }
            type Toast = {
                title: string;              // 文本默认内容
                image: string;              // 图片URL
                duration: number;           // 显示的时间
                mask: boolean;              // 是否显示遮罩
            }
            type Modal = {
                title: string;              // 默认标题
                content: string;            // 默认内容
                showCancel?: boolean;       // 是否显示取消按钮
                cancelText?: string;        // 取消按钮文本
                cancelColor?: string;       // 取消按钮颜色
                confirmText?: string;       // 确定按钮文本
                confirmColor?: string;      // 确认按钮颜色
            }
        }

        // http参数
        namespace Http {
            type PreUrl = {
                key: string;                            // 服务器端申请的key值
                dev: string;                            // 开发环境url
                test: string;                           // 测试环境url
                prod: string;                           // 生产环境url
            }
            type Loader = {
                start: Handler.Http.Loader;             // 请求开始时的回调函数
                end: Handler.Http.Loader;               // 请求结束时的回调函数
            }
            type Mock = {
                random: {
                    success: number;                    // 返回成功的概率
                    fail: {
                        power: number;                  // 返回无权限的概率
                        logic: number;                  // 返回逻辑错误的概率
                        error: number;                  // 返回系统错误的概率
                        offline: number;                // 返回未联网的概率
                    }
                },
                list: any[];
            }
            type Request = {
                url: string;                            // url
                preurl?: PreUrl;                        // 预置url
                method?: 'GET' | 'POST';                // 方法
                header?: object;                        // 请求头
                data?: object;                          // 参数
                mock?: Mock;                            // Mock数据
                loader: Loader;                         // 加载器
                parse: Handler.Http.Parse;              // 解析器
                success: Handler.Http.Pipe;             // 成功回调：对应code: 0
                fail: {
                    power: Handler.Http.Pipe,           // 没有权限：对应code: 1
                    logic: Handler.Http.Pipe,           // 逻辑错误：对应code: 2
                    error: Handler.Http.Pipe,           // 程序错误：对应code: 3
                    offline: Handler.Http.Pipe          // 没有联网：对应code: 4
                }
            }
        }
    }
}
