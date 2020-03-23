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
    methods: _.extend({
        checked(done) {
          return {checked: done}
        }
      },
      mapMutations([
        Constant.DELETE_TODO,
        Constant.DONE_TOGGLE
      ])
    )
  }
</script>

<style scoped>

</style>
