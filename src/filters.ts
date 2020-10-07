import { VueConstructor } from 'vue'

export function initializeFilters(Vue: VueConstructor) {
  Vue.filter('prettify', (value: any) => {
    if (!isNaN(value)) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    if (typeof value === 'boolean') {
      return value ? 'true' : 'false'
    }

    if (!value) {
      return 'N/A'
    }

    return value
  })
}
