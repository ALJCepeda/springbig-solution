<template>
  <div id="app" class="dark">
    <router-view/>
  </div>
</template>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: var(--text-color)
  background-color: var(--bg-color)
  display: flex
  justify-content: center
  min-height: 100vh
</style>
