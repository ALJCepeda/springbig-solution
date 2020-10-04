import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { initializeStore } from '@/store'

Vue.use(Vuex)
const store = initializeStore()

library.add(faSearch)
Vue.component('fai', FontAwesomeIcon)

Vue.config.productionTip = false

Promise.all([
  store.dispatch('fetchCountries')
]).then(() => {
  new Vue({
    router,
    render: h => h(App),
    store
  }).$mount('#app')
})
