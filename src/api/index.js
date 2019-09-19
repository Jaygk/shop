/*
* 包含n个接口请求函数的模块
* 函数的返回值: promise 对象
* */
import ajax from './ajax'

// 1.根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)