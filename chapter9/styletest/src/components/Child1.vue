<template>
  <div class="main">{{message}}</div>
</template>

<script>
  export default {
    name: 'child1',
    data() {
      return {
        message: 'Child 1'
      }
    }
  }
</script>

<style scoped>
  .main {
    border: 1px solid black;
    background-color: yellow
  }
</style>
