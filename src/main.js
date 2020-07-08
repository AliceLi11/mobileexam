import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import './config/rem'
import store from "./store"
import "./style/common.less"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
