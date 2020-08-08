import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

import LoginComponent from './pages/login/LoginComponent'
import HomeComponent from './pages/home/HomeComponent'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/',name: 'login', component: LoginComponent },
  { path: '/home',name: 'home', component: HomeComponent }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
