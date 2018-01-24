import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'

//引入‘饿了吗’组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//使用‘饿了吗’组件
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
