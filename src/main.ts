import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltLeft, faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { initializeStore } from '@/store'
import { initializeFilters } from '@/filters'

Vue.use(Vuex)
const store = initializeStore()

library.add(faSearch, faLongArrowAltLeft, faMoon, faSun)
Vue.component('fai', FontAwesomeIcon)

Vue.config.productionTip = false

initializeFilters(Vue)

Promise.all([
  store.dispatch('fetchCountries')
]).then(() => {
  new Vue({
    router,
    render: h => h(App),
    store
  }).$mount('#app')
})
