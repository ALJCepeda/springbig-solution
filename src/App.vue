<template>
  <div id="app" :class="{ dark: isDark }">
    <header class="shadow-sm">
      <h3>
        Where in the world?
      </h3>

      <span class="theme-btn" @click="isDark = !isDark">
        <fai icon="moon" />
        Dark Mode
      </span>
    </header>

    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  name='App'
  isDark = true
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
    padding-left: var(--left-gutter-size)
    padding-right: var(--right-gutter-size)

  .theme-btn
    cursor: pointer
    margin-left: auto
</style>
