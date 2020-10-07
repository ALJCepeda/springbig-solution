<template>
  <main class="shadow">
    <img :src="country.flagURL" :alt="country.name + ' Flag'" />

    <section>
      <div class="title">{{ country.name }}</div>
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

  section
    padding: 20px

  .title
    @extend .bold-text
    margin-bottom: 20px

  .info
    display: flex
    flex-direction: column

  .detail
    margin-bottom: 8px
</style>
