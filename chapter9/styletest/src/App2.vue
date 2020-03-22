<template>
  <div>
    <h2>msg</h2>
    <module1></module1>
  </div>
</template>

<script>
  import Module1 from "./components/Module1";

  export default {
    name: "App2.vue",
    components: {Module1},
    data() {
      return {
        msg: 'Hello'
      }
    }
  }
</script>

<style scoped>
  .main {border: 1px solid black; background-color: yellow}
  .test {padding: 10px; text-decoration: underline; border: solid 1px black;}
</style>
