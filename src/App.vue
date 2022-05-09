<template>
  <Layout>
    <router-view v-slot="{ Component }">
      <FadeTransition>
        <component :is="Component" />
      </FadeTransition>
    </router-view>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layout/Layout.vue'
import FadeTransition from '@/components/transitions/FadeTransition.vue'
</script>

<style lang="scss">
</style>
