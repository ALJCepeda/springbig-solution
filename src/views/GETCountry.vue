<template>
  <main class="view">
    <div>
      <img :src="country.flagURL" :alt="country.name + ' Flag'" />
    </div>

    <div class="info-container">
      <h1>{{ country.name }}</h1>

      <div class="info">
        <div class="aside">
          <label class="detail">
            Native Name:
            <span>{{ country.nativeName }}</span>
          </label>
          <label class="detail">
            Population:
            <span>{{ country.population }}</span>
          </label>
          <label class="detail">
            Region:
            <span>{{ country.region }}</span>
          </label>
          <label class="detail">
            Sub Region:
            <span>{{ country.subRegion }}</span>
          </label>
          <label class="detail">
            Capital:
            <span>{{ country.capital }}</span>
          </label>
        </div>

        <div class="aside">
          <label class="detail">
            Top Level Domain:
            <span>{{ country.topLevelDomain.join(', ') }}</span>
          </label>

          <label class="detail">
            Currencies:
            <span>{{ country.currencies.join(', ') }}</span>
          </label>

          <label class="detail">
            Languages:
            <span>{{ country.languages.join(', ')}}</span>
          </label>
        </div>
      </div>

      <div class="borders">
        <label>Border Countries:</label>

        <div class="badge-container">
          <span
            v-for="borderCountry in borderCountries"
            :key="borderCountry.name"
            :country="borderCountry"
            @click="clickedBadge(borderCountry)"
            class="badge"
          >
            {{ borderCountry.name }}
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Country from '@/models/Country'
import AppCountryBadge from '@/components/app-country-badge.vue'

@Component({
  components: { AppCountryBadge }
})
export default class GETCountry extends Vue {
  get country(): Country {
    return this.$store.getters.countryFromId(this.$route.params.id)
  }

  get borderCountries(): Country[] {
    const country = this.$store.getters.countryFromId(this.$route.params.id) as Country
    return this.$store.getters.countriesFromAlphaCodes(country.borders)
  }

  clickedBadge(country: Country): void {
    this.$router.push(`/${country.alphaCodes[0]}`)
  }
}
</script>

<style scoped lang="sass">
  .view
    display: flex
    flex-wrap: wrap
    padding: 250px var(--left-gutter-size) 340px var(--left-gutter-size)

  img
    display: block
    margin-right: 115px
    width: 100%
    max-width: 560px

  .info
    display: flex
    flex-wrap: wrap

    .row
      max-width: 295px

  h1
    margin-top: 40px
    margin-bottom: 45px

  .aside
    display: flex
    flex-direction: column
    box-sizing: border-box
    flex-grow: 2

    &:first-child
      margin-right: 25px

  .info-container
    flex-grow: 1
    flex-basis: 0

  .detail
    white-space: nowrap
    margin-bottom: 15px

    span
      @extend .light-text
      margin-left: 5px

  .borders
    display: flex
    margin-top: 70px

    label
      white-space: nowrap
      margin-right: 10px
      padding-top: 7px

    .badge-container
      display: flex
      flex-wrap: wrap

      > *
        margin-right: 10px
        margin-bottom: 15px

  .badge
    @extend .light-text
    cursor: pointer
    padding: 8px 20px
    background-color: var(--element-bg-color)
    white-space: nowrap
</style>
