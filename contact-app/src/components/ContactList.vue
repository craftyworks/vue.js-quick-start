<template>
  <div>
    <p class="addnew">
      <button class="btn btn-primary" @click="addContact">추가하기</button>
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
        <tr v-for="contact in contactList.contacts" :key="contact.no">
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
  </div>
</template>

<script>
import eventBus from '../EventBus'

export default {
  props: ['contactList'],
  methods: {
    addContact() {
      eventBus.$emit('addContactForm')
    },
    editContact(no) {
      eventBus.$emit('editContactForm', no)
    },
    deleteContact(no) {
      if (confirm('are you sure?') === true) {
        eventBus.$emit('deleteContact', no)
      }
    },
    editPhoto(no) {
      eventBus.$emit('editPhoto', no)
    }
  }
}
</script>

<style scoped>
  img.thumbnail { width: 48px; height: 48px; margi-top: auto; margin-bottom: auto; display: block; cursor: pointer}
</style>
