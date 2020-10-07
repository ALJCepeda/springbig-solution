<template>
  <main class="view">
    <section class="filters">
      <app-input class="name-filter shadow-sm" :value.sync="countryNameFilter">
        <template v-slot:leftIcon>
          <fai icon="search" />
        </template>
      </app-input>

      <app-dropdown class="region-filter shadow-sm" :items="availableRegions" :selected.sync="selectedRegion" :placeholder="'Filter by Region'"></app-dropdown>
    </section>

    <section class="content">
      <div v-for="country in filteredCountries" :key="country.name" class="country-card" @click="clickedCountry(country)">
        <app-country-card :country="country"></app-country-card>
      </div>

      <div v-if="filteredCountries.length === 0">
        No countries found :(
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppDropdown from '@/components/app-dropdown.vue'
import AppInput from '@/components/app-input.vue'
import AppCountryCard from '@/components/app-country-card.vue'
import Country from '@/models/Country'
import { mapGetters } from 'vuex'

@Component({
  components: { AppDropdown, AppInput, AppCountryCard },
  computed: {
    ...mapGetters([
      'allCountries',
      'availableRegions'
    ])
  }
})
export default class Home extends Vue {
  countryNameFilter = ''
  selectedRegion = ''

  get filteredCountries(): Country[] {
    return this.allCountries.filter((country: Country) => {
      if (!country.name.toLocaleLowerCase().includes(this.countryNameFilter.toLocaleLowerCase())) {
        return false
      }

      if (this.selectedRegion !== '' && country.region !== this.selectedRegion) {
        return false
      }

      return true
    })
  }

  clickedCountry(country: Country) {
    this.$router.push(`/${country.alphaCodes[0]}`)
  }
}
</script>

<style scoped lang="sass">
  .filters
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-items: center

  .name-filter
    width: 100%
    max-width: 400px

  .region-filter
    width: 100%
    max-width: 200px

  .country-card
    margin-right: 75px
    margin-bottom: 75px

  .content
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly
    width: 100%
    margin: auto
</style>
