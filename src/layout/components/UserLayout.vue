<template>
  <div class="wrapper">
    <header>
      <Header/>
    </header>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'UserLayout',
  components: {
    Header
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;

  main {
    flex: 1 0 auto;
  }

  footer {
    flex-shrink: 0;
  }
}
</style>
