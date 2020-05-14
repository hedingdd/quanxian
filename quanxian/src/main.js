import Vue from 'vue'
import md5 from "js-md5";
import App from './App.vue'
import router from './router'
import store from './store'
import { get, post } from "./api/demo";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.prototype.get = get;
Vue.prototype.post = post;
Vue.prototype.$md5 = md5;
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
