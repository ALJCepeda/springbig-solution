import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { initializeRouter } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDown,
  faLongArrowAltLeft,
  faMoon,
  faSearch,
  faSun,
  faTimesCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { initializeStore } from '@/store'
import { initializeFilters } from '@/filters'

Vue.use(Vuex)
const store = initializeStore()

library.add(faSearch, faLongArrowAltLeft, faMoon, faSun, faTimesCircle, faAngleDown, faTimes)
Vue.component('fai', FontAwesomeIcon)

Vue.config.productionTip = false

initializeFilters(Vue)
const router = initializeRouter(store)

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
