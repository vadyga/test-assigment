<template>
  <transition name="fade" mode="out-in">
    <slot v-bind="$attrs" />
  </transition>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
