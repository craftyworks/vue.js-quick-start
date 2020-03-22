<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <aside id="sidebar">
      <slot name="sidebar"></slot>
    </aside>
    <section id="content">
      <slot name="content"></slot>
    </section>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
