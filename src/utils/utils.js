/******************************************************************************************************
 *********************************************  全局方法  **********************************************
 *****************************************************************************************************/
/**
 * 日期格式化
 * @param fmt       "YYYY-mm-dd HH:MM"
 * @param date
 * @returns {*}
 */
function formatDate(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };

    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
}

/**
 * 数字格式化
 * @param value
 * @return {number|*}
 */
function formatData( value ) {
    if( value == '' ) return 0;

    if( !value ) return 0;

    value += '';
    if (!value.includes('.')) value += '.';
    return value.replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
        return $1 + ',';
    }).replace(/\.$/, '');
}

/**
 * 循环利用返回值请求本地图片
 */
function getAssetsImages( name ) {
    return new URL(`/src/assets/images/${name}`, import.meta.url).href; //本地文件路径
}

export default {
    formatDate,
    formatData,
    getAssetsImages,
}
