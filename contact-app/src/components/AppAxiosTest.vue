<template>
  <div id="app">
    <div class="container">
      <div class="form-group">
        <button @click="fetchContacts(1)">1페이지 조회</button>
        <button @click="fetchContacts(2)">2페이지 조회</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="name" placeholder="이름 입력"/>
        <input type="text" v-model="tel" placeholder="phone 입력"/>
        <input type="text" v-model="address" placeholder="address 입력"/>
        <button @click="addContact">연락처 추가</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no"/>
        <button @click="fetchContactOne">1건 조회</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no"/>
        <input type="text" v-model="name" placeholder="이름 입력"/>
        <input type="text" v-model="tel" placeholder="phone 입력"/>
        <input type="text" v-model="address" placeholder="address 입력"/>
        <button @click="updateContact">연락처 수정</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no"/>
        <button @click="deleteContact">삭제</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no"/>
        <input type="text" ref="photofile" name="photo"/>
        <button @click="changePhoto">사진 수정</button>
      </div>
    </div>
    <span>JSON 출력</span>
    <div id="result" class="container">
      <xmp>{{result}}</xmp>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      no: 0, name: '', tel: '', address: '', result: null
    }
  },
  methods: {
    fetchContacts(pageno) {
      axios.get('/api/contacts', {
        params: {pageno, pagesize: 5}
      })
        .then((response) => {
          this.result = response.data
        })
        .catch((e) => {
          console.log('error', e)
        })
    },
    addContact() {
      axios.post('/api/contacts', {
        name: this.name, tel: this.tel, address: this.address
      })
        .then((response) => {
          this.result = response.data
          this.no = response.data.no
        })
    },
    fetchContactOne() {
      axios.get('/api/contacts/' + this.no)
        .then((response) => {
          this.result = response.data
          this.name = this.result.name
          this.tel = this.result.tel
          this.address = this.result.address
        })
    },
    updateContact() {
      axios.put('/api/contacts/' + this.no, {
        name: this.name, tel: this.tel, address: this.address
      })
        .then((response) => {
          this.result = response.data
          this.no = response.data.no
          this.fetchContactOne()
        })
    },
    deleteContact() {
      axios.delete('/api/contacts/' + this.no)
        .then((response) => {
          this.result = response.data
          this.no = 0
        })
    },
    changePhoto() {

    }
  }
}
</script>

<style scoped>
  @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");

  #app {
    color: #2c3e50;
    margin-top: 60px;
  }

  .container {
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 10px;
    text-align: left;
  }

  #result {
    text-align: left;
    padding: 20px;
    border: 1px solid black;
  }

  .form-group {
    border: gray dashed 1px;
    padding: 5px 5px 5px 20px
  }

</style>
