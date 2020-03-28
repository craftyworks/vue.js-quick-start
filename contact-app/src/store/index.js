import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import ES6Promise from 'es6-promise'

ES6Promise.polyfill()

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions
})
