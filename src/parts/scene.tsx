import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

export default {

    loading: {
        normal: function(props) {
            return (
                <View>
                    <Text>{props.text}</Text>
                </View>
            );
        },
    },
    
    empty: {
        normal: function(props) {
            return (
                <View>
                     <Text>没有内容</Text>
                </View>
            );
        }
        
    }
}

// export namespace Scene {

//     function Loading(props) {
//         return (
//             <View>
//                 <Text>加载中</Text>
//             </View>
//         );
//     }
    
//     function Empty(props) {
//         return (
//             <View>
//                 <Text>没有内容</Text>
//             </View>
//         );
//     }

//     function NoPower(props) {
//         return (
//             <View>
//                 <Text>没有权限</Text>
//             </View>
//         );
//     }

//     function NoAllow(props) {
//         return (
//             <View>
//                 <Text>不允许访问</Text>
//             </View>
//         );
//     }

//     function FailLogic(props) {
//         return (
//             <View>
//                 <Text>逻辑错误</Text>
//             </View>
//         );
//     }

//     function FailError(props) {
//         return (
//             <View>
//                 <Text>访问失败</Text>
//             </View>
//         );
//     }

//     function FailNetWork(props) {
//         return (
//             <View>
//                 <Text>网络错误</Text>
//             </View>
//         );
//     } 
// }
