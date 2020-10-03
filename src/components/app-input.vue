<template>
  <main>
    <div v-if="$slots.leftIcon" class="icon">
      <slot name="leftIcon"></slot>
    </div>

    <input placeholder="Search for a country..." />
  </main>
</template>

<script>
export default {
  name: 'app-input'
}
</script>

<style lang="sass" scoped>
  main
    display: inline-flex
    align-items: center

  main, input
    color: var(--text-input)
    background-color: var(--element-bg-color)

  input
    width: 100%
    border: 0

  .icon
    padding: 10px 25px
</style>
