/**
 * Created by liweiliang 406320591@QQ.com on 2019/5/14 0014 15:06.
 */
import Vue from "vue"
import fly from "./config"
/**
 * 处理POST请求
 * @param url
 * @param params
 */
export function fetch(url, params) {
  if (!params) {
    params = {};
  }
  return new Promise((resolve, reject) => {
    fly.post(url, params).then(respones => {
      resolve(respones);
    }, err => {
      reject(err);
    }).catch(error => {
      reject(error);
    })
  })
}
/**
 * 处理GET请求
 * @param url
 * @param params
 */
export function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    fly.get(url, { params: params }).then(response => {
      resolve(response);
    }, err => {
      reject(err);
    }).catch(error => {
      reject(error);
    })
  })
}
Vue.prototype.$http = fly;

export default {
  /**
   * 请求测试demo
   * @param  {[type]} id [description]
   * @return {[type]}    [description]
   */
  getDemo:params => fetch('/api/PAGE_500008',params),
}
