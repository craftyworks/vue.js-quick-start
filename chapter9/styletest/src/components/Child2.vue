<template>
  <div class="main">{{message}}</div>
</template>

<script>
  export default {
    name: 'child2',
    data() {
      return {
        message: 'Child 2'
      }
    }
  }
</script>

<style scoped>
.main{border:solid 1px black; background-color: aqua}
</style>
