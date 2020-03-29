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
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import constant from '../constant'
import {mapState} from 'vuex'
import Paginate from 'vuejs-paginate'
import _ from 'lodash'
import Velocity from 'velocity-animate'

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
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done) {
      Velocity(el, {opacity: 0, scale: 0.2}, {duration: 200})
      Velocity(el, {opacity: 0.7, scale: 1.2}, {duration: 200})
      Velocity(el, {opacity: 1, scale: 1}, {complete: done})
    },
    leave(el, done) {
      Velocity(el, {translateX: '0px', opacity: 1}, {duration: 100})
      Velocity(el, {translateX: '20px', opacity: 1}, {duration: 100, loop: 2})
      Velocity(el, {translateX: '0px', opacity: 1}, {duration: 200})
      Velocity(el, {translateX: '100px', opacity: 0}, {complete: done})
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
