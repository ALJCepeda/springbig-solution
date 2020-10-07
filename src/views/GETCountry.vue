<template>
  <main class="view" v-if="country">
    <header>
      <button class="back-btn shadow-sm" @click="clickedBack()">
        <fai icon="long-arrow-alt-left" />
        Back
      </button>
    </header>

    <section class="content">
      <div>
        <img :src="country.flagURL" :alt="country.name + ' Flag'" />
      </div>

      <div class="info">
        <h1>{{ country.name }}</h1>

        <div class="description">
          <div class="aside">
            <label class="detail">
              Native Name:
              <span>{{ country.nativeName }}</span>
            </label>
            <label class="detail">
              Population:
              <span>{{ country.population | prettify }}</span>
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
              <span>{{ country.languages.join(', ') }}</span>
            </label>
          </div>
        </div>

        <div class="badge-container" v-if="borderCountries.length !== 0">
          <label>Border Countries:</label>

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
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Country from '@/models/Country'

@Component
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

  clickedBack(): void {
    this.$router.push('/')
  }

  created(): void {
    document.title = 'Details'
  }
}
</script>

<style scoped lang="sass">
  header
    margin-top: 50px
    margin-bottom: 20px
    padding: 0 var(--left-gutter-size)

  .content
    display: flex
    flex-wrap: wrap
    padding: 0 var(--left-gutter-size)

  img
    display: block
    margin-right: 115px
    width: 100%
    max-width: 560px

  .description
    display: flex
    flex-wrap: wrap

    .row
      max-width: 295px

  h1
    margin-bottom: 45px

  .aside
    display: flex
    flex-direction: column
    box-sizing: border-box
    flex-grow: 2
    margin-bottom: 50px

    &:first-child
      margin-right: 25px
      margin-bottom: 50px

  .info
    margin-top: 30px
    flex-grow: 1
    flex-basis: 0

  .badge-container
    display: flex
    flex-wrap: wrap

    label
      white-space: nowrap
      margin-right: 10px
      padding-top: 7px
      margin-bottom: 20px

    > *
      margin-right: 10px
      margin-bottom: 10px
</style>
