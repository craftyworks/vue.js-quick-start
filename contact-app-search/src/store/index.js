import Vue from 'vue'
import Vuex from 'vuex'
import constant from '../constant'
import module from './module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keywordlist: []
  },
  mutations: {
    [constant.ADD_KEYWORD]: (store, payload) => {
      store.keywordlist.splice(0, 0, payload.name)
    }
  },
  actions: {
    [constant.ADD_KEYWORD](store, payload) {
      store.commit(constant.ADD_KEYWORD, payload)
    }
  },
  modules: { m1: module }
})
