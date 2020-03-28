<template>
  <div id="app">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 어플리케이션</h1>
      <p>(Dynamic Component + Vuex + Axios)</p>
    </div>
    <component :is="currentView"></component>
    <contact-list></contact-list>

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

import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'
import UpdatePhoto from './components/UpdatePhoto'

import constant from './constant'
import Paginate from 'vuejs-paginate'
import _ from 'lodash'
import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {ContactList, ContactForm, UpdatePhoto, Paginate},
  computed: _.extend(
    {
      totalpage() {
        return Math.floor((this.contactlist.totalcount - 1) / this.contactlist.pagesize) + 1
      }
    }, mapState([
      'contactlist', 'currentView'
    ])
  ),
  watch: {
    'contactlist.pageno': function(pageno) {
      this.$ref.pagebuttons.selected = pageno - 1
    }
  },
  mounted() {
    this.$store.dispatch(constant.FETCH_CONTACTS, {pageno: 1})
  },
  methods: {
    pageChanged(page) {
      this.$store.dispatch(constant.FETCH_CONTACTS, {pageno: page})
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
