/**
 * $CLASS: 组样式
 */
export const $CLASS: object = {

    ico: {
        '1': 'w-50 h-50',
        '2': 'w-80 h-80'
    },

    /**
     * 首页
     */
    home: {
        swiper: {
            container: 'w-710 h-355 ra-10',
            item: 'bg-#ddd row center ra-10'
        },
        menu: 'w-100 h-100 ra-50 bg-#ddd'
    }


}

/**
 * $VAR: 变量样式
 */
export const $VAR: object = {

    // color
    'grey'      : [ '#fff', '#f2f2f2', '#e4e4e4', '#d6d6d6', '#c9c9c9', '#bcbcbc', '#aeaeae', '#a1a1a1', '#939393', '#868686', '#797979', '#6b6b6b', '#5e5e5e', '#515151', '#434343', '#363636', '#282828', '#1b1b1b', '#0d0d0d', '#000'],
    'red'       : [ '#fff1f0', '#ffccc7', '#ffa39e', '#ff7875', '#ff4d4f', '#f5222d', '#cf1322', '#a8071a', '#820014', '#5c0011'],
    'orange'    : [ '#fff7e6', '#ffe7ba', '#ffd591', '#ffc069', '#ffa940', '#fa8c16', '#d46b08', '#ad4e00', '#873800', '#612500'],
    'volcano'   : [ '#fff2e8', '#ffd8bf', '#ffbb96', '#ff9c6e', '#ff7a45', '#fa541c', '#d4380d', '#ad2102', '#871400', '#610b00'],
    'gold'      : [ '#fffbe6', '#fff1b8', '#ffe58f', '#ffd666', '#ffc53d', '#faad14', '#d48806', '#ad6800', '#874d00', '#613400'],
    'yellow'    : [ '#feffe6', '#ffffb8', '#fffb8f', '#fff566', '#ffec3d', '#fadb14', '#d4b106', '#ad8b00', '#876800', '#614700'],
    'lime'      : [ '#fcffe6', '#f4ffb8', '#eaff8f', '#d3f261', '#bae637', '#a0d911', '#7cb305', '#5b8c00', '#3f6600', '#254000'],
    'green'     : [ '#f6ffed', '#d9f7be', '#b7eb8f', '#95de64', '#73d13d', '#52c41a', '#389e0d', '#237804', '#135200', '#092b00'],
    'cyan'      : [ '#e6fffb', '#b5f5ec', '#87e8de', '#5cdbd3', '#36cfc9', '#13c2c2', '#08979c', '#006d75', '#00474f', '#002329'],
    'blue'      : [ '#e6f7ff', '#bae7ff', '#91d5ff', '#69c0ff', '#40a9ff', '#1890ff', '#096dd9', '#0050b3', '#003a8c', '#002766'],
    'purple'    : [ '#f9f0ff', '#efdbff', '#d3adf7', '#b37feb', '#9254de', '#722ed1', '#531dab', '#391085', '#22075e', '#120338'],
    'magenta'   : [ '#fff0f6', '#ffd6e7', '#ffadd2', '#ff85c0', '#f759ab', '#eb2f96', '#c41d7f', '#9e1068', '#780650', '#520339'],

    // 常用遍变量
    'size'      : [ 20, 24, 28, 30, 32, 36, 40, 48, 56, 64, 74, 96, 110],
    'lh'        : [ 28, 32, 44, 46, 48, 52, 56, 64, 72, 80],
    'brand'     : [ '#13c2c2', '#ffd591', '#d3f261', '#36cfc9', '#eb2f96'],
    'space'     : [ 4, 8, 12, 18, 26, 34, 44, 54, 66, 100],
    'ra'        : [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 750],

    'mx'        : [10, 20, 30, 40]
}

/**
 * $PRESET: 预设样式对象
 */
export const $PRESET: object = {

    // - ----------------------------
    // - root、block，专用于修补兼容性
    // - ----------------------------

    'root' : { display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' },
    'block': ()=> {
        if (process.env.TARO_ENV !== 'rn') {
            return { display: 'block' };
        }
        return {};
    },

    // - ----------------------------
    // - 定位方式，仅支持absolute, relative
    // - ----------------------------

    'res'       : { position: 'absolute' },
    'abs'       : { position: 'relative' },

    // - ----------------------------
    // - 文字样式
    // - ----------------------------

    'bold'      : { fontWeight: 'bold' },
    'underline' : { textDecorationLine: 'underline' },
    'through'   : { textDecorationLine: 'line-through' },
    'italic'    : { fontStyle: 'italic'},
    'text-over' : { overflow: 'hidden'},

    // - ----------------------------
    // - 基本布局方式
    // - ----------------------------

    'row'       : { display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
    'between'   : { display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    'around'    : { display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
    'center'    : { display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    'column'    : { display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' },
    'gx'        : { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
    'gy'        : { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' },
    
    // - ----------------------------
    // - 绝对定位布局方式
    // - ----------------------------

    'header'    : { display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: 0, left: 0, zIndex: 100 },
    'footer'    : { display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', bottom: 0, left: 0, zIndex: 100 },
    'float'     : { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', zIndex: 100 },

    // - ----------------------------
    // - 容器横纵方向对齐方式
    // - ----------------------------

    'jc-start'  : { justifyContent: 'flex-start' },
    'jc-center' : { justifyContent: 'center' },
    'jc-end'    : { justifyContent: 'flex-end' },
    'ai-start'  : { alignItems: 'flex-start' },
    'ai-center' : { alignItems: 'center' },
    'ai-end'    : { alignItems: 'flex-end' },

    // - ----------------------------
    // - 换行
    // - ----------------------------

    'wrap'      : { flexWrap: 'wrap' },
}

/**
 * $MAP: 属性存储对象
 */
export const $MAP: object = {

    // - ----------------------------
    // - 宽、高
    // - ----------------------------

    'flex'  : { type: 'num',    keys: ['flex'] },
    'w'     : { type: 'trans',  keys: ['width'] },
    'h'     : { type: 'trans',  keys: ['height'] },
    'minw'  : { type: 'trans',  keys: ['minWidth'] },
    'minh'  : { type: 'trans',  keys: ['minWidth'] },
    'maxw'  : { type: 'trans',  keys: ['maxWidth'] },
    'maxh'  : { type: 'trans',  keys: ['maxWidth'] },
    'wp'    : { type: 'str',    keys: ['width'] },
    'hp'    : { type: 'str',    keys: ['height'] },
    'minwp' : { type: 'str',    keys: ['minWidth'] },
    'minhp' : { type: 'str',    keys: ['minWidth'] },
    'maxwp' : { type: 'str',    keys: ['maxWidth'] },
    'maxhp' : { type: 'str',    keys: ['maxWidth'] },

    // - ----------------------------
    // - 绝对定位
    // - ----------------------------

    'z'     : { type: 'num',    keys: ['zIndex'] },
    'top'   : { type: 'trans',  keys: ['top'] },
    'right' : { type: 'trans',  keys: ['right'] },
    'bottom': { type: 'trans',  keys: ['bottom'] },
    'left'  : { type: 'trans',  keys: ['left'] },

    // - ----------------------------
    // - 外边距
    // - ----------------------------

    'ma'    : { type: 'trans',  keys: ['margin'] },
    'mx'    : { type: 'trans',  keys: ['marginLeft', 'marginRight'] },
    'my'    : { type: 'trans',  keys: ['marginTop', 'marginBottom'] },
    'mt'    : { type: 'trans',  keys: ['marginTop'] },
    'mr'    : { type: 'trans',  keys: ['marginRight'] },
    'mb'    : { type: 'trans',  keys: ['marginBottom'] },
    'ml'    : { type: 'trans',  keys: ['marginLeft'] },

    // - ----------------------------
    // - 内边距
    // - ----------------------------

    'pa'    : { type: 'trans',  keys: ['padding'] },
    'px'    : { type: 'trans',  keys: ['paddingLeft', 'paddingRight'] },
    'py'    : { type: 'trans',  keys: ['paddingTop', 'paddingBottom'] },
    'pt'    : { type: 'trans',  keys: ['paddingTop'] },
    'pr'    : { type: 'trans',  keys: ['paddingRight'] },
    'pb'    : { type: 'trans',  keys: ['paddingBottom'] },
    'pl'    : { type: 'trans',  keys: ['paddingLeft'] },

    // - ----------------------------
    // - 边框
    // - ----------------------------

    'bs'    : { type: 'str',    keys: ['borderStyle'] },
    'bc'    : { type: 'str',    keys: ['borderColor'] },
    'bw'    : { type: 'trans',  keys: ['borderWidth'] },
    'btc'   : { type: 'str',    keys: ['borderTopColor'] },
    'brc'   : { type: 'str',    keys: ['borderRightColor'] },
    'bbc'   : { type: 'str',    keys: ['borderBottomColor'] },
    'blc'   : { type: 'str',    keys: ['borderLeftColor'] },
    'btw'   : { type: 'trans',  keys: ['borderTopWidth'] },
    'brw'   : { type: 'trans',  keys: ['borderRightWidth'] },
    'bbw'   : { type: 'trans',  keys: ['borderBottomWidth'] },
    'blw'   : { type: 'trans',  keys: ['borderLeftWidth'] },

    // - ----------------------------
    // - 圆角
    // - ----------------------------

    'ra'    : { type: 'trans',  keys: ['borderRadius'] },
    'rt'    : { type: 'trans',  keys: ['borderTopLeftRadius', 'borderTopRightRadius'] },
    'rr'    : { type: 'trans',  keys: ['borderTopRightRadius', 'borderBottomRightRadius'] },
    'rb'    : { type: 'trans',  keys: ['borderBottomLeftRadius', 'borderBottomRightRadius'] },
    'rl'    : { type: 'trans',  keys: ['borderTopLeftRadius', 'borderBottomLeftRadius'] },
 
    // - ----------------------------
    // - 文字类型
    // - ----------------------------

    'c'     : { type: 'str',    keys: ['color'] },
    'size'  : { type: 'trans',  keys: ['fontSize'] },
    'align' : { type: 'str',    keys: ['textAlign'] },
    'lh'    : { type: 'trans',  keys: ['lineHeight'] },

    // - ----------------------------
    // - 背景、透明、溢出
    // - ----------------------------

    'bg'    : { type: 'str',    keys: ['backgroundColor'] },
    'op'    : { type: 'num',    keys: ['opacity'] },
    'of'    : { type: 'str',    keys: ['overflow'] }
}
