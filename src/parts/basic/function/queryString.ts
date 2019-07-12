/**
 * 获取页面的QueryString字符串，如果不存在QueryString则返回空字符串
 * 
 * @return {String}
 */
export function queryString(key?: string): any {

    // 取queryString
    let query = '';
    let url = window.location.href;
    let arr: string[] = url.split('?');
    if (arr.length < 2) query = '';
    else query = arr[1];
    
    // 如果没有传递key，则直接返回全部queryString字符串
    if (!key) {
        return query;
    }

    // 如果传递了key，但query本身为'', 则返回''
    if (query == '') {
        return '';
    }
    
    // 将query转换为object，如果object中并没有key键，返回''
    let obj = queryToObject(query);
    if (!obj[key]) {
        return '';
    }

    // 返回key的值
    return obj[key];  
}

/**
 * 获取页面的QueryString转换的对象，如果不存在QueryString则返回空对象
 */
export function queryObject(): object {

    // 首先获取QueryString，如果为空字符串，则返回空对象
    let url = window.location.href;
    let arr: string[] = url.split('?');
    if (arr.length < 2) {
        return {};
    }

    // 否则，使用queryToObject将querystring转换为对象，并返回
    return queryToObject(arr[1]);
}

/**
 * 追加参数，到指定的对象或QueryString中，并返回追加之后的结果（传入什么类型，返回什么类型）。
 * 如果追加的键名与原有键名重名，则原有键值被覆盖
 * 
 * @param {String | Object} params 被操作的QueryString或对象
 * @param {Object} appends 需要追加的对象（键值对）
 * @return {String}
 */
export function queryAppend(params: string | object, appends: object): string | object {

    // 如果params是字符串，则首先将其转换为对象，并记录params类型
    let type = 'object';
    if (typeof params === 'string') {
        type = 'string';
        params = queryToObject(params);
    }

    // 将appends追加到对象上
    for (let k in appends) {
        params[k] = appends[k];
    }

    // 根据不同类型，返回不同类型的值
    if (type === 'object') {
        return params;
    }
    return queryToString(params);
}

/**
 * 从指定的对象或QueryString中，删除一个或多个键，并返回删除之后的结果（传入什么类型，返回什么类型）
 * 
 * @param {String | Object} params 被操作的QueryString或对象
 * @param {String[]} keys 需要删除的键名数组（多参形式）
 * @return {String}
 */
export function queryRemove(params: string | object, ...keys: string[]): string | object {

    // 如果params是字符串，则首先将其转换为对象，并记录params类型
    let type = 'object';
    if (typeof params === 'string') {
        type = 'string';
        params = queryToObject(params);
    }

    // 删除params中需要被删除的属性
    for (let k in keys) {
        delete params[k];
    }

    // 根据不同类型，返回不同类型的值
    if (type === 'object') {
        return params;
    }
    return queryToString(params);
}

/**
 * 连接路径与参数（必须是querystring）
 * 
 * @param {String} url 路径字符串
 * @param {String | Object} params 需要连接到url的参数，可以是字符串，也可以是对象
 */
export function queryJoin(url: string, params: string | object): string {

    // 如果params是对象类型，则首先转换为string类型
    if (typeof params === 'object') {
        params = queryToString(params);
    }

    // 如果params是空字符串，则直接返回url
    if (params == '') return url;

    // 初始化符号为？，如果已存在?，则转换为&
    let symbo = '?';
    if (url.indexOf('?') >= 0) {
        symbo = '&';
    }
    return url + symbo + params;
}

/**
 * 将QueryString字符串转换为Object形式的对象
 * 
 * @param {String} params 源字符串
 * @return {Object}
 */
export function queryToObject(params: string): object {

    // 分解为数组，如果数组长度等于0，则直接返回空对象
    const arr: string[] = params.split('&');
    if (arr.length == 0) return {};

    // 声明需要返回的对象
    let result = {};

    // 遍历转换为对象
    for (let item of arr) {
        
        // 将item分解为左右2边的数组，如果数组长度小于2，则continue
        const tmp = item.split('=');
        if (tmp.length < 2) continue;

        // 将数组内容添加到对象
        result[tmp[0]] = tmp[1];
    }

    // 返回
    return result;
}

/**
 * 将对象转换为QueryString字符串
 * 
 * @param {Object} params 需要转换为字符串的对象
 * @return {String}
 */
export function queryToString(params: object): string {

    // 分解对象到数组中
    let array: string[] = [];
    for (let key in params) {
        array.push(key + '=' + params[key]);
    }

    // 如果数组长度小于1，则返回空字符串
    if (array.length < 1) {
        return '';
    }

    // 否则将数组用&连接，并返回
    return array.join('&');
}
