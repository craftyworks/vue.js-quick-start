<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <child1></child1>
    <child2></child2>
  </div>
</template>

<script>
  import Child1 from "./components/Child1";
  import Child2 from "./components/Child2";

  export default {
    name: 'app',
    components: {Child2, Child1},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>
</style>
