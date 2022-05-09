<template>
  <button
    class="btn focus:outline-none bg-blue font-bold py-3 transition-all"
    :class="{'btn-outline': outline }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
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
  @apply bg-blue font-bold py-3;
  &:hover {
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
