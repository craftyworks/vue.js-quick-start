<template>
  <div class="container">
    <div class="header">{{headerText}}</div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">{{footerText}}</div>
  </div>
</template>

<script>
  export default {
    props: ['headerText', 'footerText']
  }
</script>

<style scoped>

</style>
