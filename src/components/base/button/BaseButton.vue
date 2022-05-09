<template>
  <button
    class="btn focus:outline-none transition-all"
    :class="['btn-' + size, { 'btn-outline': outline }]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 's'
    },
    outline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.btn {
  color: white;
  border-radius: 6px;
  @apply bg-blue font-bold py-3 transition-colors;
  &:hover {
    background-color: #00afea;
    @apply bg-darkblue;
  }

  &:active {
    @apply bg-darkblue;
  }
}

.btn-outline {
  background-color: #E9EEF5;
  @apply text-blue;
  &:hover {
    background-color: #e0f5fc;
  }

  &:active {
    background-color: #e0f5fc;
  }
}
</style>
