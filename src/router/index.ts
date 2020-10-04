import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import GETCountry from '@/views/GETCountry.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/:id',
    name: 'Country',
    component: GETCountry
  }
]

const router = new VueRouter({
  routes
})

export default router
