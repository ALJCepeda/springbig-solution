import Vuex, { Store } from 'vuex'
import Country from '@/models/Country'
import { AppError, UserError } from '@/errors'

export interface AppState {
  errors: AppError[];
  countries: Country[];
  index: Map<string, Country>;
}

export function initializeStore(): Store<AppState> {
  return new Vuex.Store({
    state: {
      errors: [],
      countries: [],
      index: new Map() // Indexes by alpha code and name
    } as AppState,
    getters: {
      allCountries(state) {
        return state.countries
      },
      countryFromId(state) {
        return (id: string) => {
          return state.index.get(id)
        }
      },
      countriesFromAlphaCodes(state) {
        return (alphaCodes: string[]) => {
          return alphaCodes.map((alphaCode) => {
            return state.index.get(alphaCode)
          })
        }
      },
      names(state) {
        return (alphaCodes: string[]) => {
          return alphaCodes.map((alphaCode) => {
            const country = state.index.get(alphaCode)

            if (!country) {
              return null
            }

            return country.name
          })
        }
      },
      displayableErrors(state) {
        return state.errors.filter((error) => error instanceof UserError && !error.cleared)
      },
      availableRegions(state) {
        const regions = state.countries.reduce((regions, country) => regions.add(country.region), new Set())
          .values()
        return Array.from(regions)
      }
    },
    mutations: {
      encounteredErrors(state, errors: AppError[]) {
        state.errors = state.errors.concat(errors)
      },
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
