<template>
  <transition-group name="list" tag="ul">
    <li v-for="(item, index) in todolist" :key="index" :class="checked(item.done)" @click="doneToggle({index})">
      <span>{{item.todo}}</span>
      <span v-if="item.done">(완료)</span>
      <span class="close" @click.stop="deleteTodo({index})">&#x00D7;</span>
    </li>
  </transition-group>
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
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(50px);
  }
</style>
