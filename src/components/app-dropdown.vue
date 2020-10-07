<template>
  <main @focus="focused = true" @focusout="focused = false" tabindex="-1" class="light-text">
    <div class="selected shadow-sm" @click="focused = true">
      {{ selected || placeholder }}

      <span v-if="!selected">
        <fai icon="angle-down" />
      </span>

      <span v-if="selected" @click.stop="clickedClear()">
        <fai icon="times" />
      </span>
    </div>

    <div class="items shadow" v-if="focused">
      <div class="item" v-for="(item, index) in items" :key="index" :class="{ hidden: selected === item }" @click="clickedItem(item)">
        {{ item }}
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class AppDropdown extends Vue {
  name = 'app-dropdown'
  @Prop() items!: string[]
  @Prop() selected!: string
  @Prop() placeholder!: string

  focused = false

  clickedItem(item: string | null): void {
    this.$emit('update:selected', item)
    this.focused = false
  }

  clickedClear(): void {
    this.clickedItem(null)
  }
}
</script>

<style lang="sass" scoped>
  main
    position: relative
    background-color: transparent
    outline: 0

  .selected
    display: inline-flex
    justify-content: space-between
    align-items: center
    width: 100%
    padding: 10px 15px
    background-color: var(--element-bg-color)
    border-radius: var(--border-radius)
    box-sizing: border-box
    cursor: pointer

    .fa-angle-down
      float: right

  .items
    position: absolute
    width: 100%
    margin-top: 5px
    background-color: var(--element-bg-color)
    cursor: pointer
    border-radius: var(--border-radius)

  .item
    padding: 5px 20px
    border-radius: var(--border-radius)

    &:hover
      background-color: var(--element-highlight-color)
</style>
