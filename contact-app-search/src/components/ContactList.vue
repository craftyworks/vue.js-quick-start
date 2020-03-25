<template>
  <div>
    <table id="ist">
      <thead>
      <tr>
        <th>번호</th>
        <th>이름</th>
        <th>전화번호</th>
        <th>주소</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="c in contacts" :key="c.no">
        <td>{{c.no}}</td>
        <td>{{c.name}}</td>
        <td>{{c.tel}}</td>
        <td>{{c.address}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ContactList',
  computed: mapState(['contacts'])
}
</script>

<style scoped>

</style>
