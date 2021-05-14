<template>
  <img :src="gemUrl" :alt="gem.item.name" :title="gem.item.name" />
</template>

<script>
export default {
  name: "GemSlotItem",
  props: {
    gem: {
      required: true,
      type: Object,
    },
  },

  computed: {
    gemUrl() {
      const host = `http://media.blizzard.com/d3/icons/items/small/`;
      return `${host}${this.gem.item.icon}.png`;
    },
  },
};
</script>

<style lang="stylus">
.d3-icon-item
  min-height 100px
  // El borde de la caja va determinar la rareza del objeto, segun el color que tenga
  border-top-style solid
  border-top-width 4px

  &.item-none
    border-color transparent

  &.item-green
    border-color #8bc34a

  &.item-orange
    border-color #ff9800

  &.item-yellow
    border-color #ffeb3b

  &.item-blue
    border-color #03a9f4

  &.item-white
    border-color #a0aab5
</style>
