import constant from '../constant'
import searchApi from '../api/search-api'

export default {
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
      if (response.data.length > 0) {
        store.dispatch(constant.ADD_KEYWORD, payload)
      }
    }
  },
  modules: {}
}
