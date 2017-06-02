/**
 * 数据请求文件
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
export default {
  // 比如
  setCamaryKey(options) {
    return Vue.http.post(url+'getBatchKey', options);
  },
}