import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import("@/views/Home.vue") },
    { path: '/About', component: () => import("@/views/About.vue") }
  ]
export default new VueRouter({
  // base: process.env.BASE_URL,

  baseRouter: '/sub_vue',
  routes,
})