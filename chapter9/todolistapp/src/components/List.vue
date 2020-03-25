<template>
  <ul>
    <li v-for="(item, index) in todolist" :class="checked(item.done)" @click="doneToggle({index})">
      <span>{{item.todo}}</span>
      <span v-if="item.done">(완료)</span>
      <span class="close" @click.stop="deleteTodo({index})">&#x00D7;</span>
    </li>
  </ul>
</template>

<script>
  import Constant from "./Constant"
  import {mapState, mapMutations} from 'vuex'
  import _ from 'lodash'

  export default {
    name: "todo-list",
    computed: mapState(['todolist']),
    methods: {
      checked(done) {
        return {checked: done}
      },
      deleteTodo(payload) {
        this.$store.dispatch(Constant.DELETE_TODO, payload)
      },
      doneToggle(payload) {
        this.$store.dispatch(Constant.DONE_TOGGLE, payload)
      }
    },
  }
</script>

<style scoped>

</style>
