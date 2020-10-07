<template>
  <main>
    <div v-if="$slots.leftIcon" class="icon">
      <slot name="leftIcon"></slot>
    </div>

    <input placeholder="Search for a country..." :value="value" @input="$emit('update:value', $event.target.value)" type="text" />

    <div v-if="$slots.rightIcon" class="icon">
      <slot name="rightIcon"></slot>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class AppInput extends Vue {
  name = 'app-input'
  @Prop() value!: string
}
</script>

<style lang="sass" scoped>
  main
    display: inline-flex
    align-items: center
    border-radius: var(--border-radius)

  main, input
    color: var(--text-input)
    background-color: var(--element-bg-color)

  input
    width: 100%
    border: 0

  .icon
    padding: 10px 25px
</style>
