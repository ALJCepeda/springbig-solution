import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from './views/Home.vue'
import GETCountry from '@/views/GETCountry.vue'
import { Store } from 'vuex'
import { AppState } from '@/store'
import Country from '@/models/Country'
import { UserError } from '@/errors'

Vue.use(VueRouter)

export function initializeRouter(store: Store<AppState>) {
  const routes: Array<RouteConfig> = [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/:id',
      name: 'Country',
      component: GETCountry,
      beforeEnter(to, from, next) {
        const country = store.getters.countryFromId(to.params.id) as Country

        if (!country) {
          store.commit('encounteredErrors', [
            new UserError(`Couldn't find country for id: ${to.params.id}`)
          ])

          next('/')
        }

        next()
      }
    }
  ]

  const router = new VueRouter({
    routes
  })

  router.beforeEach((to, from, next) => {
    store.dispatch('fetchCountries').then(
      () => next(),
      () => next('/')
    )
  })

  return router
}
