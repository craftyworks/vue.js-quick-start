import Vue from 'vue'
import Vuex from 'vuex'
import constant from '../constant'
import searchApi from '../api/search-api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: []
  },
  mutations: {
    [constant.SEARCH_CONTACT]: (store, payload) => {
      store.contacts = payload.contacts
    }
  },
  actions: {
    async [constant.SEARCH_CONTACT](store, payload) {
      const response = await searchApi.searchContext(payload.name)
      store.commit(constant.SEARCH_CONTACT, { contacts: response.data })
    }
  },
  modules: {}
})
