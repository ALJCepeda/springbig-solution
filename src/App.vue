<template>
  <div id="app" :class="{ dark: isDark, light: !isDark }">
    <header class="shadow-sm gutters">
      <h3>
        Where in the world?
      </h3>

      <span class="theme-btn" v-if="!isDark" @click="isDark = true">
        <fai icon="moon" />
        Dark Mode
      </span>

      <span class="theme-btn" v-if="isDark" @click="isDark = false">
        <fai icon="sun" />
        Light Mode
      </span>
    </header>

    <div class="errors gutters" v-if="displayableErrors.length > 0">
      <div class="error" v-for="error in displayableErrors" :key="error.message">
        <span>{{ error.message }}</span>
        <span @click="error.cleared = true">
          <fai icon="times-circle" />
        </span>
      </div>
    </div>

    <div v-show="!fetching">
      <router-view />
    </div>

    <div v-if="fetching">
      <h3>Pretend there some fancy loading screen here with a bunch of shiny trinkets moving around to keep you distracted while I fetch data</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapGetters([
      'displayableErrors'
    ])
  }
})
export default class App extends Vue {
  name='App'
  isDark = true
  fetching = true

  created() {
    this.$store.dispatch('fetchCountries').finally(() => this.fetching = false)
  }
}
</script>

<style lang="sass">
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: var(--text-color)
  background-color: var(--bg-color)
  min-height: 100vh

  > header
    background-color: var(--element-bg-color)
    min-height: 83px
    display: flex
    align-items: center

  .errors
    background-color: var(--bg-color)
    color: red
    padding-top: 20px
    padding-bottom: 20px

  .error
    display: flex
    align-items: center
    max-width: 500px

    .fa-times-circle
      cursor: pointer
      margin-left: 40px

  .theme-btn
    cursor: pointer
    margin-left: auto

  .fa-moon, .fa-sun
    margin-right: 5px
</style>
