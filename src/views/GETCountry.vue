<template>
  <main class="view">
    <img :src="country.flagURL" :alt="country.name + ' Flag'" />

    <div class="info-container">
      <header>{{ country.name }}</header>

      <div class="info">
        <div class="aside">
          <div class="detail">Native Name: <span>{{ country.nativeName }}</span></div>
          <div class="detail">Population: <span>{{ country.population }}</span></div>
          <div class="detail">Region: <span>{{ country.region }}</span></div>
          <div class="detail">Sub Region: <span>{{ country.subRegion }}</span></div>
          <div class="detail">Capital: <span>{{ country.capital }}</span></div>
        </div>

        <div class="aside">
          <div class="detail">Top Level Domain: <span>{{ country.topLevelDomain.join(', ') }}</span></div>
          <div class="detail">Currencies: <span>{{ country.currencies.join(', ') }}</span></div>
          <div class="detail">Languages: <span>{{ country.languages.join(', ')}}</span></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Country from '@/models/Country'

@Component({

})
export default class GETCountry extends Vue {
  get country(): Country {
    return this.$store.getters.country(this.$route.params.id)
  }
}
</script>

<style scoped lang="sass">
  .view
    display: flex
    flex-wrap: wrap
    padding: 200px var(--left-gutter-size) 340px var(--left-gutter-size)

  img
    object-fit: cover
    margin-right: 115px
    width: 100%
    flex: 1

  .info
    display: flex
    flex-wrap: wrap

    .row
      max-width: 295px

  header
    margin-top: 45px
    margin-bottom: 30px

  .aside
    display: flex
    flex-direction: column
    box-sizing: border-box
    flex-grow: 2

    &:first-child
      margin-right: 25px
      flex-grow: 1

  .info-container
    flex-grow: 1
    flex-shrink: 1
    flex-basis: 10px

  .detail
    white-space: nowrap
</style>
