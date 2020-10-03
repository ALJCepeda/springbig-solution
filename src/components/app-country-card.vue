<template>
  <main>
    <img :src="country.flagURL" :alt="country.name + ' Flag'" />

    <section>
      <div class="title">{{ country.name }}</div>
      <div class="info">
        <label>
          Population:
          <span class="detail">{{ country.population }}</span>
        </label>
        <label>
          Region:
          <span class="detail">{{ country.region }}</span>
        </label>
        <label>
          Capital:
          <span class="detail">{{ country.capital }}</span>
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
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)
    width: 265px
    padding-bottom: 10px

  img
    width: 100%
    height: 160px
    object-fit: cover

  section
    padding: 20px

  .title
    margin-bottom: 20px

  .info
    display: flex
    flex-direction: column
</style>
