import api from '../api/contact-api'
import constant from '../constant'

export default {
  [constant.CHANGE_ISLOADING]: (store, payload) => {
    store.commit(constant.CHANGE_ISLOADING, payload)
  },
  [constant.FETCH_CONTACTS]:
    async(store, payload) => {
      let pageno = payload.pageno | 1
      let pagesize = store.state.contactlist.pagesize
      store.dispatch(constant.CHANGE_ISLOADING, {isLoading: true})
      const response = await api.fetchContacts(pageno, pagesize)
      store.commit(constant.FETCH_CONTACTS, {contactlist: response.data})
      store.dispatch(constant.CHANGE_ISLOADING, {isLoading: false})
    },
  [constant.FETCH_CONTACT_ONE]:
    async(store, payload) => {
      store.dispatch(constant.CHANGE_ISLOADING, {isLoading: true})
      const response = await api.fetchContactOne(payload.no)
      store.commit(constant.FETCH_CONTACT_ONE, {contact: response.data})
      store.dispatch(constant.CHANGE_ISLOADING, {isLoading: false})
    },
  [constant.INITIALIZE_CONTACT_ONE]:
    (store) => {
      store.commit(constant.INITIALIZE_CONTACT_ONE)
    },
  [constant.ADD_CONTACT]:
    async(store) => {
      store.dispatch(constant.CHANGE_ISLOADING, {isLoading: true})
      await api.addContact(store.state.contact)
      store.dispatch(constant.FETCH_CONTACTS, {pageno: 1})
      store.dispatch(constant.CHANGE_ISLOADING, {isLoading: false})
    },
  [constant.UPDATE_CONTACT]:
    (store) => {
      const currentPageNo = store.state.contactlist.pageno
      store.dispatch(constant.CHANGE_ISLOADING, {isLoading: true})
      api.updateContact(store.state.contact)
        .then(response => {
          store.dispatch(constant.FETCH_CONTACTS, {pageno: currentPageNo})
          store.dispatch(constant.CHANGE_ISLOADING, {isLoading: false})
        })
    },
  [constant.UPDATE_PHOTO]:
    (store, payload) => {
      const currentPageNo = store.state.contactlist.pageno
      api.updatePhoto(payload.no, payload.file)
        .then(response => {
          store.dispatch(constant.FETCH_CONTACTS, {pageno: currentPageNo})
        })
    },
  [constant.DELETE_CONTACT]:
    async(store, payload) => {
      const currentPageNo = store.state.contactlist.pageno
      await api.deleteContact(payload.no)
      store.dispatch(constant.FETCH_CONTACTS, {pageno: currentPageNo})
    },
}
