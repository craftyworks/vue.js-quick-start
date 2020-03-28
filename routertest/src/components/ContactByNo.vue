<template>
  <div>
    <hr class="divider">
    <div>
      <table class="detail table table-bordered">
        <tbody>
        <tr class="active">
          <td>일련번호</td>
          <td>{{contact.no}}</td>
        </tr>
        <tr class="active">
          <td>name</td>
          <td>{{contact.name}}</td>
        </tr>
        <tr class="active">
          <td>phone</td>
          <td>{{contact.tel}}</td>
        </tr>
        <tr class="active">
          <td>address</td>
          <td>{{contact.address}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import contactList from '../contact-list'

export default {
  name: 'contactByNo.vue',
  props: ['no'],
  data() {
    return {
      contacts: contactList.contacts,
    }
  },
  created() {
  },
  computed: {
    contact() {
      const arr = this.contacts.filter((item, index) => {
        return item.no === this.no
      })
      if (arr.length === 1) {
        return arr[0]
      } else {
        return {}
      }
    },
  },
}
</script>

<style scoped>

</style>
