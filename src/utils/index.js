/**
 * @file 工具函数
 */


 /**
  * 
  * @param {*} data 当前数据是否是对象
  */
export function isObject(data) {
    return typeof data === 'object' && data !== null;
};