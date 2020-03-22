<template>
  <div id="todolist">
    <div id="header" class="header">
      <h2>Todo List</h2>
      <input-todo></input-todo>
    </div>
    <list></list>
  </div>
</template>

<script>
  import InputTodo from "./InputTodo"
  import List from "./List"

  export default {
    name: "todo-list",
    components: {InputTodo, List}
  }
</script>

<style scoped>

</style>
