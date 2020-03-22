<template>
  <div>
    <input type="text" v-model.trim="todo" placeholder="입력" @keyup.enter="addTodo">
    <span class="addbutton" @click="addTodo">추가</span>
  </div>
</template>

<script>
  import eventBus from './EventBus'

  export default {
    name: "input-todo",
    data() {
      return {
        todo: ''
      }
    },
    methods: {
      addTodo(e) {
        eventBus.$emit('add-todo', this.todo)
        this.todo = ''
      }
    }
  }
</script>

<style scoped>

</style>
