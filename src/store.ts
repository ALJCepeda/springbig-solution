import Vuex, { Store } from 'vuex'
import Country from '@/models/Country'

interface AppState {
  countries: Country[];
  index: Map<string, Country>;
}

export function initializeStore(): Store<AppState> {
  return new Vuex.Store({
    state: {
      countries: [],
      index: new Map()
    } as AppState,
    getters: {
      countries(state) {
        return state.countries
      },
      country(state) {
        return (id: string) => {
          return state.index.get(id)
        }
      },
      names(state) {
        return (alphaCodes: string[]) => {
          return alphaCodes.map((alphaCode) => {
            const country = state.index.get(alphaCode)

            if (!country) {
              throw new Error(`Unable to find country for alphacode: ${alphaCode}`)
            }

            return country.name
          })
        }
      }
    },
    mutations: {
      setCountries(state, countries: Country[]) {
        state.countries = countries
        state.index = countries.reduce((res, country) => {
          country.alphaCodes.forEach((alphaCode) => res.set(alphaCode, country))
          res.set(country.name, country)
          return res
        }, new Map())
      }
    },
    actions: {
      fetchCountries({ commit }) {
        return fetch('https://restcountries.eu/rest/v2/all')
          .then(resp => resp.json())
          .then(result => result.map((rawCountry: never) => Country.fromAPI(rawCountry)))
          .then(countries => {
            commit('setCountries', countries)
            return countries
          })
      }
    }
  })
}
