<template>
  <main class="view">
    <section class="filters">
      <label>
        <app-input style="width:400px" v-model="countryNameFilter">
          <template v-slot:leftIcon>
            <fai icon="search" />
          </template>
        </app-input>
      </label>
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
import AppInput from '@/components/app-input.vue'
import AppCountryCard from '@/components/app-country-card.vue'
import Country from '@/models/Country'
import { mapGetters } from 'vuex'

@Component({
  components: { AppInput, AppCountryCard },
  computed: {
    ...mapGetters([
      'countries'
    ])
  }
})
export default class Home extends Vue {
  countryNameFilter = ''

  get filteredCountries(): Country[] {
    return this.countries.filter((country) => country.name.toLocaleLowerCase().includes(this.countryNameFilter.toLocaleLowerCase()))
  }

  clickedCountry(country: Country) {
    this.$router.push(`/${country.alphaCodes[0]}`)
  }
}
</script>

<style scoped lang="sass">
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
