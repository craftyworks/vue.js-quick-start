<template>
  <div class="modal">
    <div class="form" @keyup.esc="cancelEvent">
      <h3 class="heading">:: {{headingText}}</h3>
      <div v-if="mode=='update'" class="form-group">
        <label>일련번호</label>
        <input type="text" name="no" class="long" disabled v-model="contact.no"/>
      </div>
      <div class="form-group">
        <label>이름</label>
        <input type="text" name="name" class="long" v-model="contact.name" ref="name"/>
      </div>
      <div class="form-group">
        <label>전화번호</label>
        <input type="text" name="tel" class="long" v-model="contact.tel"/>
      </div>
      <div class="form-group">
        <label>주소</label>
        <input type="text" name="address" class="long" v-model="contact.address"/>
      </div>
      <div class="form-group">
        <div>&nbsp;</div>
        <button class="btn btn-primary" @click="submitEvent" :value="btnText">{{btnText}}</button>
        <button class="btn btn-primary" @click="cancelEvent" value="취소">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
import constant from '../constant'
import {mapState} from 'vuex'
import _ from 'lodash'

export default {
  props: ['no'],
  data() {
    return {
      mode: 'add',
    }
  },
  computed: _.extend(
    {
      btnText() {
        return this.mode === 'update' ? '수정' : '추가'
      },
      headingText() {
        return this.mode === 'update' ? '연락처 변경' : '새로운 연락처 추가'
      },
    }, mapState(['contact', 'contactlist']),
  ),
  mounted() {
    console.log('contactForm', 'mounted')

    let cr = this.$router.currentRoute
    if (cr.fullPath.indexOf('/add') > -1) {
      this.mode = 'add'
      this.$store.dispatch(constant.INITIALIZE_CONTACT_ONE)
    } else if (cr.fullPath.indexOf('/update') > -1) {
      this.mode = 'update'
      console.log('update', this.no)
      this.$store.dispatch(constant.FETCH_CONTACT_ONE, {no: this.no})
    }
  },
  methods: {
    submitEvent() {
      if (this.mode === 'update') {
        this.$store.dispatch(constant.UPDATE_CONTACT)
        this.$router.push({name: 'contacts', query: {page: this.contactlist.pageno}})
      } else {
        this.$store.dispatch(constant.ADD_CONTACT)
        this.$router.push({name: 'contacts', query: {page: 1}})
      }
    },
    cancelEvent() {
      this.$router.push({name: 'contacts', query: {page: this.contactlist.pageno}})
    },
  },
}
</script>

<style scoped>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .form {
    background-color: white;
    margin: 100px auto;
    max-width: 400px;
    min-width: 200px;
    padding: 10px 10px 10px 10px;
  }

  .form .button {
    background: #2b798d;
    padding: 8px 15px 8px 15px;
    border: none;
    color: #fff
  }
</style>
