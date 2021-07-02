import Vue from 'vue'
import App from './App.vue'
import router from './router'



/**
 * @author xuanzai
 * @description api模块初始化。在如下路径文件下引入模块即可。
 */
import '@/initial/modules'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
