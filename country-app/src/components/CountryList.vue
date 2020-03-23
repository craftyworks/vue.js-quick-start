<template>
  <div id="example">
    <table id="list">
      <thead>
      <tr>
        <th>번호</th>
        <th>국가명</th>
        <th>지역</th>
      </tr>
      </thead>
      <tbody id="contacts">
      <tr v-for="c in countries" :key="c.no">
        <td>{{c.no}}</td>
        <td>{{c.name}}</td>
        <td>{{c.region}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CountryList.vue',
  computed: mapGetters({
    countries: 'countriesByRegion',
  }),
}
</script>

<style scoped>

</style>
