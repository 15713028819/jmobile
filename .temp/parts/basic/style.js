import Taro from "@tarojs/taro-h5";
import { isFunction } from "./jm2";
import { $CLASS, $VAR, $PRESET, $MAP } from "../style";
/**
 * 设置变量样式
 *
 * @param {string} item 样式字符串
 * @param {object} styles 源styles对象
 */
const setVar = function (item, styles) {
  // 清除标识符$，转换为数组，并检查是否长度为2或长度为3。失败则return
  item = item.substr(1, item.length - 1);
  const arr = item.split('-');
  if (arr.length !== 2 && arr.length !== 3) {
    return;
  }
  // 取出map, variable, index 3个变量
  let map;
  let variable;
  let index;
  if (arr.length === 2) {
    map = arr[0];
    variable = arr[0];
    index = arr[1];
  } else {
    map = arr[0];
    variable = arr[1];
    index = arr[2];
  }
  // 严格检查各属性是否全部存在
  if (!$MAP[map] || !$VAR[variable] || !$VAR[variable][index]) {
    return;
  }
  // 取其值，如果需要转换，则将其使用Taro.pxTransfrom转换
  let value = $VAR[variable][index];
  if ($MAP[map]['type'] && $MAP[map]['type'] === 'trans') {
    value = Taro.pxTransform(parseInt(value.toString()));
  }
  // 遍历MAP的keys, 为styles赋值
  for (let i in $MAP[map]['keys']) {
    styles[$MAP[map]['keys'][i]] = value;
  }
};
/**
 * 设置预设样式
 *
 * @param {string} item 样式字符串
 * @param {object} styles 源styles对象
 */
const setPreset = function (item, styles) {
  // 取回预设对象, 预设可能是函数或数组、对象。如果是函数，则需要将其执行运算，并重新将preset设置为运算结果
  let preset = $PRESET[item];
  if (isFunction(preset)) {
    preset = preset();
  }
  // 遍历preset
  for (let key in preset) {
    // 取其值
    let value = preset[key];
    // 如果不是映射属性，则直接为styles赋值，并continue
    if (!$MAP[key]) {
      styles[key] = value;
      continue;
    }
    // 查看value是否需要变换
    if ($MAP[key]['type'] && $MAP[key]['type'] === 'trans') {
      value = Taro.pxTransform(parseInt(value.toString()));
    }
    // 遍历MAP的keys为styles赋值
    for (let i in $MAP[key]['keys']) {
      styles[$MAP[key]['keys'][i]] = value;
    }
  }
};
/**
 * 设置直接样式
 *
 * @param {string} item 样式字符串
 * @param {object} styles 源styles对象
 */
const setDirect = function (item, styles) {
  // 拆分样式 item 为 arr 变量，判断样式 arr 长度等于1，则直接返回（没有实际值）
  const arr = item.split('-');
  if (arr.length === 1) {
    return;
  }
  // 如果满足，则对其进行结构赋值：arr：[0]：属性，从$MAPS中取，[1]：需要计算的属性值
  // 如果$MAP中不存在map键，则退出
  const map = arr[0];
  if (!$MAP[map]) {
    return;
  }
  // 计算value值，由于可能存在多个中划线：“-”，所以，值可能是后部各数组元素的join('-')
  arr.shift();
  let value = arr.join('-');
  // 取value值，如果该map中存在type的定义，且类型不是'str'，则说明是num或trans。将value进行parseFloat操作
  // 如果类型是trans，则将value进行pxTransform操作
  if ($MAP[map]['type'] && $MAP[map]['type'] !== 'str') {
    value = parseFloat(value);
    if (value === NaN) {
      return;
    }
    if ($MAP[map]['type'] === 'trans') {
      value = Taro.pxTransform(value);
    }
  }
  // 为styles赋值
  for (let i in $MAP[map]['keys']) {
    styles[$MAP[map]['keys'][i]] = value;
  }
};
/**
 * 设置组样式
 *
 * @param {string} item 样式字符串
 * @param {object} styles 源styles对象
 */
const setClass = function (item, styles) {
  // 去除item第一个字符@，item分解为数组
  item = item.substr(1, item.length - 1);
  const arr = item.split('-');
  // 取出params（无限层级），并将其分解为items
  let params = $CLASS[arr[0]];
  if (!params) {
    return;
  }
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      if (!params[arr[i]]) {
        return;
      }
      params = params[arr[i]];
    }
  }
  const items = params.split(' ');
  // 遍历 
  for (let key in items) {
    // 如果等于''，则说明是多余空格，continue。否则：设变量item等于items[key]
    if (items[key] === '') continue;
    let item = items[key];
    // 设置变量类型样式
    if (item[0] === '$') {
      setVar(item, styles);
      continue;
    }
    // 设置预设类型样式
    if ($PRESET[item]) {
      setPreset(item, styles);
      continue;
    }
    // 设置直接类型样式
    setDirect(item, styles);
  }
};
/**
 * Style
 *
 * 对style进行计算，并返回style样式
 * @param {String} params 需要计算的style对象，各样式之间使用','分隔，分为三类：
 * 1. @符为前缀，预设样式形式，直接到$PRESETS的预设样式中取值
 * 2. $符为前缀，样式的属性与值拼凑形式，即$MAPS中的属性 对应 variable中的变量值
 * 3. 没有前缀，计算属性值形式，即w-150,w为$MAPS中的属性，150则经过计算后赋值给属性，而string直接复制给属性
 * @param {Object} extra 不需要计算的style对象
 * @return {Object}  整合params和extra对象，返回style对象
 */
export function _(params, extra) {
  // 声明返回的结果对象，分解params为数组，进入遍历 
  const styles = {};
  const items = params.split(' ');
  for (let key in items) {
    // 如果等于''，则说明是多余空格，continue。否则：设变量item等于items[key]
    if (items[key] === '') continue;
    let item = items[key];
    // 组样式
    if (item[0] === '@') {
      setClass(item, styles);
      continue;
    }
    // 设置变量类型样式
    if (item[0] === '$') {
      setVar(item, styles);
      continue;
    }
    // 设置预设类型样式
    if ($PRESET[item]) {
      setPreset(item, styles);
      continue;
    }
    // 设置直接类型样式
    setDirect(item, styles);
  }
  // 返回styles（注意：如果存在扩展属性，则要合并到styles中去）
  return extra ? Object.assign(styles, extra) : styles;
}