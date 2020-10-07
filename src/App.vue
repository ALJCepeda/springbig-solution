<template>
  <div id="app" class="dark">
    <header>
      Where in the world?
    </header>

    <router-view />
  </div>
</template>

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
</style>
