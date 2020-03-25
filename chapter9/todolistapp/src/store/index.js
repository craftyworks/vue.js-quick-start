import Vue from 'vue'
import Vuex from 'vuex'
import Constant from "../components/Constant";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todolist: [
      {todo: 'Music', done: false},
      {todo: 'Walk', done: false},
      {todo: 'Study', done: false}
    ]
  },
  mutations: {
    [Constant.ADD_TODO]: (state, payload) => {
      if(payload.todo !== '') {
        state.todolist.push({todo: payload.todo, done:false})
      }
    },
    [Constant.DONE_TOGGLE]: (state, payload) => {
      state.todolist[payload.index].done = !state.todolist[payload.index].done
    },
    [Constant.DELETE_TODO]: (state, payload) => {
      state.todolist.splice(payload.index, 1)
    }
  },
  actions: {
    [Constant.ADD_TODO]: (store, payload) => {
      store.commit(Constant.ADD_TODO, payload)
    },
    [Constant.DELETE_TODO]: (store, payload) => {
      store.commit(Constant.DELETE_TODO, payload)
    },
    [Constant.DONE_TOGGLE]: (store, payload) => {
      store.commit(Constant.DONE_TOGGLE, payload)
    },
  }
})

export default store
