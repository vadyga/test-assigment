<template>
  <component :is="currentLayoutComponent">
    <template
      v-for="slotName in Object.keys($slots)" :key="slotName" v-slot:[slotName]="slotProps"
    >
      <slot :name="slotName" v-bind="slotProps"/>
    </template>
  </component>
</template>

<script>
import AuthLayout from './components/AuthLayout.vue'
import UserLayout from './components/UserLayout.vue'

const layoutComponents = {
  auth: AuthLayout,
  standard: UserLayout
}

export default {
  name: 'Layout',
  computed: {
    currentLayoutComponent () {
      const layout = this.$router.currentRoute.value?.meta?.layout || 'standard'
      return layoutComponents[layout]
    }
  }
}
</script>

<style scoped></style>
