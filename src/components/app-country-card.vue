<template>
  <main class="shadow-sm">
    <img :src="country.flagURL" :alt="country.name + ' Flag'" />

    <section>
      <div class="title bold-text">{{ country.name }}</div>
      <div class="info">
        <label class="detail">
          Population:
          <span>{{ country.population | prettify }}</span>
        </label>
        <label class="detail">
          Region:
          <span>{{ country.region }}</span>
        </label>
        <label class="detail">
          Capital:
          <span>{{ country.capital }}</span>
        </label>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Country from '@/models/Country'

@Component
export default class AppCountryCard extends Vue {
  name = 'app-country-card';
  @Prop() country!: Country;
}
</script>

<style lang="sass" scoped>
  main
    background-color: var(--element-bg-color)
    width: 265px
    padding-bottom: 10px
    border-radius: var(--border-radius)

  *
    cursor: pointer

  img
    width: 100%
    height: 160px
    object-fit: cover
    border-top-left-radius: var(--border-radius)
    border-top-right-radius: var(--border-radius)

  section
    padding: 20px

  .title
    margin-bottom: 20px

  .info
    display: flex
    flex-direction: column

  .detail
    margin-bottom: 8px
</style>
