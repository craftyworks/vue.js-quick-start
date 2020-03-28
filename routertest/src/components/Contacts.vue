<template>
  <div>
    <h1>연락처</h1>
    <div class="wrapper">
      <div class="box" v-for="c in contacts" :key="c.no">
        <span @click="navigate(c.no)" style="cursor:pointer">[ {{c.name}} ]</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import contactList from '../contact-list'

export default {
  name: 'contacts',
  data() {
    return {
      contacts: contactList.contacts,
    }
  },
  methods: {
    navigate(no) {
      this.$router.push(
        {
          name: 'contactByNo',
          params: { no },
        }, function() {
          console.log('move to /contacts/' + no)
        },
      )
    },
  },
}
</script>

<style scoped>

</style>
