<template>
  <div>
    <p class="addnew">
      <router-link class="btn btn-primary" :to="{name: 'addContact'}">추가하기</router-link>
    </p>
    <div id="example">
      <table id="list" class="table table-striped table-bordered table-hover">
        <thead>
        <tr>
          <th>이름</th>
          <th>전화번호</th>
          <th>주소</th>
          <th>사진</th>
          <th>편집/삭제</th>
        </tr>
        </thead>
        <tbody id="contacts">
        <tr v-for="contact in contactlist.contacts" :key="contact.no">
          <td>{{contact.name}}</td>
          <td>{{contact.tel}}</td>
          <td>{{contact.address}}</td>
          <td><img class="thumbnail" :src="contact.photo" @click="editPhoto(contact.no)"></td>
          <td>
            <button class="btn btn-primary" @click="editContact(contact.no)">편집</button>
            <button class="btn btn-primary" @click="deleteContact(contact.no)">삭제</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <paginate ref="pagebuttons"
              :page-count="totalpage"
              :page-range="7"
              :margin-pages="3"
              :click-handler="pageChanged"
              :prev-text="'이전'"
              :next-text="'다음'"
              :container-class="'pagination'"
              :page-class="'page-item'">
    </paginate>
    <router-view></router-view>
  </div>
</template>

<script>
import constant from '../constant'
import {mapState} from 'vuex'
import Paginate from 'vuejs-paginate'
import _ from 'lodash'

export default {
  components: {Paginate},
  computed: _.extend(
    {
      totalpage() {
        const totalcount = this.contactlist.totalcount
        const pagesize = this.contactlist.pagesize
        return Math.floor((totalcount - 1) / pagesize) + 1
      },
    },
    mapState(['contactlist']),
  ),
  mounted() {
    let page = this.$route.query.page | 1
    page *= 1
    this.$store.dispatch(constant.FETCH_CONTACTS, {pageno: page})
    this.$refs.pagebuttons.selected = page - 1
  },
  watch: {
    $route(to, from) {
      let page = to.query.page
      this.$store.dispatch(constant.FETCH_CONTACTS, {pageno: page})
      this.$refs.pagebuttons.selected = page - 1
    },
  },
  methods: {
    pageChanged(page) {
      this.$router.push({name: 'contacts', query: {page}})
    },
    editContact(no) {
      console.log('editContact', no)
      this.$router.push({name: 'updateContact', params: {no}})
    },
    deleteContact(no) {
      if (confirm('are you sure?') === true) {
        this.$store.dispatch(constant.DELETE_CONTACT, {no})
        this.$router.push({name: 'contacts'})
      }
    },
    editPhoto(no) {
      this.$router.push({name: 'updatePhoto', params: {no}})
    },
  },
}
</script>

<style scoped>
  img.thumbnail {
    width: 48px;
    height: 48px;
    margi-top: auto;
    margin-bottom: auto;
    display: block;
    cursor: pointer
  }
</style>
