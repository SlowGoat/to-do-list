import Vue from 'vue'

// 引入存储模块
import Memory from '@/api/storage'

/**
 * @author xuanzai
 * @description 设置存储值
 * @param {String} key 存储键
 * @param {Any} value 存储值
 */
Vue.prototype.$setMemorySes = Memory.setMemorySes
Vue.prototype.$setMemoryPmt = Memory.setMemoryPmt
/**
 * @author xuanzai
 * @description 获取存储值
 * @param {String} key 存储值
 * @return {Any} 返回值
 */
Vue.prototype.$getMemorySes = Memory.getMemorySes
Vue.prototype.$getMemoryPmt = Memory.getMemoryPmt
/**
 * @author xuanzai
 * @description 清空浏览器存储的数据
 */
Vue.prototype.$clearMemorySes = Memory.clearMemorySes
Vue.prototype.$clearMemoryPmt = Memory.clearMemoryPmt