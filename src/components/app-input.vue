<template>
  <main>
    <div v-if="$slots.leftIcon" class="icon">
      <slot name="leftIcon"></slot>
    </div>

    <input placeholder="Search for a country..." :value="val" @input="onInputChange" ref="input" />
  </main>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue, Watch } from 'vue-property-decorator'

@Component
export default class AppInput extends Vue {
  name = 'app-input'
  @Prop() value: string

  val: string

  @Ref('input')
  element: HTMLInputElement

  created() {
    this.val = this.value
  }

  @Watch('value')
  onValueChange(newVal) {
    this.element.value = newVal
  }

  onInputChange(event) {
    const value = typeof event === 'string' ? event : event.target.value
    this.val = value
    this.$emit('input', value)
  }
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
