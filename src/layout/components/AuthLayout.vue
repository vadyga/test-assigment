<template>
  <div class="wrapper">
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>

export default {
  name: 'AuthLayout',
  components: {
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
