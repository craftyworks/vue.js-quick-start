import api from '../api/contact-api'
import constant from '../constant'

export default {
  [constant.ADD_CONTACT_FORM]: (store) => {
    store.commit(constant.ADD_CONTACT_FORM)
  },
  [constant.ADD_CONTACT]: (store) => {
    api.addContact(store.state.contact)
      .then(response => {
        store.dispatch(constant.CANCEL_FORM)
        store.dispatch(constant.FETCH_CONTACTS, {pageno: 1})
      })
  },
  [constant.EDIT_CONTACT_FORM]: (store, payload) => {
    api.fetchContactOne(payload.no)
      .then(response => {
        store.commit(constant.EDIT_CONTACT_FORM, {contact: response.data})
      })
  },
  [constant.UPDATE_CONTACT]: (store) => {
    const currentPageNo = store.state.contactlist.pageno
    api.updateContact(store.state.contact)
      .then(response => {
        store.dispatch(constant.CANCEL_FORM)
        store.dispatch(constant.FETCH_CONTACTS, {pageno: currentPageNo})
      })
  },
  [constant.EDIT_PHOTO_FORM]: (store, payload) => {
    api.fetchContactOne(payload.no)
      .then(response => {
        store.commit(constant.EDIT_PHOTO_FORM, {contact: response.data})
      })
  },
  [constant.UPDATE_PHOTO]: (store, payload) => {
    const currentPageNo = store.state.contactlist.pageno
    api.updatePhoto(payload.no, payload.file)
      .then(response => {
        store.dispatch(constant.CANCEL_FORM)
        store.dispatch(constant.FETCH_CONTACTS, {pageno: currentPageNo})
      })
  },
  [constant.FETCH_CONTACTS]: async(store, payload) => {
    console.log(constant.FETCH_CONTACTS, payload)
    let pageno = payload.pageno | 1
    let pagesize = store.state.contactlist.pagesize
    const response = await api.fetchContacts(pageno, pagesize)
    console.log(constant.FETCH_CONTACTS, response.data)
    store.commit(constant.FETCH_CONTACTS, {contactlist: response.data})
  },
  [constant.CANCEL_FORM]: (store, payload) => {
    store.commit(constant.CANCEL_FORM)
  },
  [constant.DELETE_CONTACT]: async(store, payload) => {
    const currentPageNo = store.state.contactlist.pageno
    await api.deleteContact(payload.no)
    store.dispatch(constant.FETCH_CONTACTS, {pageno: currentPageNo})
  },
  [constant.CHANGE_MODE]: (store, payload) => {
    store.commit(constant.CHANGE_MODE, {mode: payload.mode})
  }
}
