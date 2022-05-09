<template>
  <div class="w-1/3 ml-auto">
    <div
      class="input-wrapper"
    >
      <input
        class="bg-white placeholder-gray text-darkgray rounded px-3.5 py-3 focus:outline-none border border-lightgray focus:border-blue w-full hover:border-darkgray transition-colors"
        v-model="query"
        placeholder="subject or reference"
      />
      <div
        class="icon"
      >
        <img src="../../../assets/search.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const query = ref('')
</script>

<style scoped lang="scss">
.input-wrapper {
  position: relative;
  .icon {
    top: 16px;
    right: 10px;
    @apply absolute bg-white text-black border-0;
    svg {
      width: 15px;
    }
  }
}

.form__input {
  padding: 15px 10px;
  &:focus {
    font-size: 14px;
    @apply text-black border-black outline-none;
    &::placeholder {
      @apply text-black;
    }
  }
}
</style>
