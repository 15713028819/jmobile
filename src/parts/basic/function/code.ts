
/**
 * 使用Base64方法加密一个字符串
 * 
 * @param {String} str 需要加密的源字符串
 * @return {String}
 */
export function base64Encode(str: string): string {
    let c1, c2, c3;
    let base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let i = 0, len = str.length, strin = '';
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            strin += base64EncodeChars.charAt(c1 >> 2);
            strin += base64EncodeChars.charAt((c1 & 0x3) << 4);
            strin += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            strin += base64EncodeChars.charAt(c1 >> 2);
            strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            strin += base64EncodeChars.charAt((c2 & 0xF) << 2);
            strin += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        strin += base64EncodeChars.charAt(c1 >> 2);
        strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        strin += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        strin += base64EncodeChars.charAt(c3 & 0x3F)
    }
    return strin;
}

/**
 * 使用Base64方法解密一个源字符串
 * 
 * @param {String} str 需要解密的源字符串
 * @return {String}
 */
export function base64Decode (str: string): string { // 解码，配合decodeURIComponent使用
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    str = str.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < str.length) {
        enc1 = base64EncodeChars.indexOf(str.charAt(i++));
        enc2 = base64EncodeChars.indexOf(str.charAt(i++));
        enc3 = base64EncodeChars.indexOf(str.charAt(i++));
        enc4 = base64EncodeChars.indexOf(str.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }
    }
    return _base64_utf8_decode(output);
}

/**
 * 使用encodeURIComponent方法编码字符串
 * 
 * @param {String} str 需要编码的源字符串
 */
export function urlEncode (str: string): string {
    return encodeURIComponent(str);
}

/**
 * 使用decodeURIComponent方法解码字符串
 * 
 * @param {String} str 需要解码的源字符串
 */
export function urlDecode (str: string): string {
    return decodeURIComponent(str);
}

// ----------------------------------------------------------------------------
// 私有部分
// ----------------------------------------------------------------------------

/**
 * 私有：utf8解码，用于Base64.decode返回时使用
 * 
 * @param {String} utftext 
 * @return {String}
 */
function _base64_utf8_decode (utftext) { // utf-8解码
    var string = '';
    let i = 0;
    let c = 0;
    let c1 = 0;
    let c2 = 0;
    while (i < utftext.length) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        } else if ((c > 191) && (c < 224)) {
            c1 = utftext.charCodeAt(i + 1);
            string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
            i += 2;
        } else {
            c1 = utftext.charCodeAt(i + 1);
            c2 = utftext.charCodeAt(i + 2);
            string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
            i += 3;
        }
    }
    return string;
}
