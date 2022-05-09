<template>
  <div class="h-full">
    <div class="m-auto">
      <img class="m-auto" src="../../assets/logo.png" alt="">
      <h2 class="text-center mb-10 font-bold text-3xl text-black">
        Sign in to Task Manager
      </h2>
    </div>
    <div class="form">
      <LoginForm/>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from './components/LoginForm.vue'
</script>

<style scoped>
.form{
  max-width: 420px;
  @apply m-auto;
}
</style>
