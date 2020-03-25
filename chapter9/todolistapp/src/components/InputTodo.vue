<template>
  <div>
    <input type="text" v-model.trim="todo" placeholder="입력" @keyup.enter="addTodo">
    <span class="addbutton" @click="addTodo">추가</span>
  </div>
</template>

<script>
  import Constant from "./Constant";

  export default {
    name: "input-todo",
    data() {
      return {
        todo: ''
      }
    },
    methods: {
      addTodo() {
        this.$store.dispatch(Constant.ADD_TODO, {todo: this.todo})
        this.todo = ''
      }
    }
  }
</script>

<style scoped>

</style>
