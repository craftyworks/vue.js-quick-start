<template>
  <div id="app">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 어플리케이션</h1>
      <p>(Dynamic Component + EventBus + Axios)</p>
    </div>
    <component :is="currentView" :contact="contact"></component>
    <contact-list :contactList="contactList"></contact-list>
    <paginate ref="pagebuttons"
              :page-count="totalpage"
              :page-range="7"
              :margin-pages="3"
              :click-handler="pageChanged"
              :prev-text="'이전'"
              :next-text="'다움'"
              :container-class="'pagination'"
              :page-class="'page-item'">
    </paginate>
  </div>
</template>

<script>
/* eslint no-template-curly-in-string: 0 */

// import Vue from 'vue'
import ContactList from './components/ContactList'
import AddContact from './components/AddContact'
import UpdateContact from './components/UpdateContact'
import UpdatePhoto from './components/UpdatePhoto'

import CONF from './Config'
import eventBus from './EventBus'
import Paginate from 'vuejs-paginate'

export default {
  name: 'App',
  components: {ContactList, AddContact, UpdatePhoto, UpdateContact, Paginate},
  data() {
    return {
      currentView: null,
      contact: {no: 0, name: '', tel: '', address: '', photo: ''},
      contactList: {
        pageno: 1, pagesize: CONF.PAGESIZE, totalcount: 0, contacts: []
      }
    }
  },
  computed: {
    totalpage() {
      return Math.floor((this.contactList.totalcount - 1) / this.contactList.pagesize) + 1
    }
  },
  watch: {
    /*
    ['contactlist.pageno'] : function() {
      this.$ref.pagebuttons.selected = this.contactlist.pageno - 1
    }
    */
  },
  mounted() {
    this.fetchContacts()
    eventBus.$on('cancel', () => {
      this.currentView = null
    })
    eventBus.$on('addSubmit', (contact) => {
      this.currentView = null
      this.addContact(contact)
    })
    eventBus.$on('updateSubmit', (contact) => {
      this.currentView = null
      this.updateContact(contact)
    })
    eventBus.$on('addContactForm', () => {
      this.currentView = 'addContact'
    })
    eventBus.$on('editContactForm', (no) => {
      this.fetchContactOne(no)
      this.currentView = 'updateContact'
    })
    eventBus.$on('deleteContact', (no) => {
      this.deleteContact(no)
    })
    eventBus.$on('editPhoto', (no) => {
      this.fetchContactOne(no)
      this.currentView = 'updatePhoto'
    })
    eventBus.$on('updatePhoto', (no, file) => {
      this.updatePhoto(no, file)
      this.currentView = null
    })
  },
  methods: {
    pageChanged(page) {
      this.contactList.pageno = page
      this.fetchContacts()
    },
    fetchContacts() {
      this.$axios.get(CONF.FETCH, {
        params: {
          pageno: this.contactList.pageno,
          pagesize: this.contactList.pagesize}
      })
        .then((response) => {
          this.contactList = response.data
        })
    },
    addContact(contact) {
      this.$axios.post(CONF.ADD, contact)
        .then((response) => {
          this.contactList.pageno = 1
          this.fetchContacts()
        })
    },
    fetchContactOne(no) {
      this.$axios.get(CONF.FETCH_ONE.replace('${no}', no))
        .then((response) => {
          this.contact = response.data
        })
    },
    updateContact(contact) {
      this.$axios.put(CONF.UPDATE.replace('${no}', contact.no), contact)
        .then((response) => {
          this.fetchContacts()
        })
    },
    deleteContact(no) {
      console.log('delete', no, CONF.DELETE.replace('${no}', no))

      this.$axios.delete(CONF.DELETE.replace('${no}', no))
        .then((response) => {
          this.fetchContacts()
        })
    },
    updatePhoto(no, file) {
      let data = new FormData()
      data.append('photo', file)
      this.$axios.delete(CONF.UPDATE_PHOTO.replace('${no}', no), data)
        .then((response) => {
          this.fetchContacts()
        })
    }
  }
}
</script>/

<style scoped>
  @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
