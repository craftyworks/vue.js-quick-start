<template>
  <ul>
    <li v-for="(item, index) in todolist" :class="checked(item.done)" @click="doneToggle(index)">
      <span>{{item.todo}}</span>
      <span v-if="item.done">(완료)</span>
      <span class="close" @click.stop="deleteTodo(index)">&#x00D7;</span>
    </li>
  </ul>
</template>

<script>
  import eventBus from "./EventBus";

  export default {
    name: "todo-list",
    data() {
      return {
        todolist: []
      }
    },
    created() {
      eventBus.$on('add-todo', this.addTodo)
    },
    methods: {
      addTodo(todo) {
        this.todolist.push({todo, done: false})
      },
      deleteTodo(index) {
        this.todolist.splice(index, 1)
      },
      doneToggle(index) {
        this.todolist[index].done = !this.todolist[index].done
      },
      checked(done) {
        return {checked: done}
      }
    }
  }
</script>

<style scoped>

</style>
