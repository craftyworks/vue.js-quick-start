<template>
  <div>
    <button :class="$style.head">CSS 모듈</button>
  </div>
</template>

<script>
  export default {
    name: "Module1",
    created() {
      console.log(this.$style)
    }
  }
</script>

<style module>
  .head {cursor: pointer; background-color: yellow; color:purple}
</style>
