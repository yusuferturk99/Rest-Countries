import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import store from './store.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

axios.defaults.baseURL = 'https://vue-update.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import { BNavbar } from 'bootstrap-vue'
Vue.component('b-navbar', BNavbar)

import { NavbarPlugin } from 'bootstrap-vue'
Vue.use(NavbarPlugin)

import { BCard } from 'bootstrap-vue'
Vue.component('b-card', BCard)

import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
}); 

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')