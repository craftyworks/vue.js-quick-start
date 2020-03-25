<template>
  <p>
    이름: <input type="text" v-model.trim="name" @keyup.enter="keyupEvent"/>
  </p>
</template>

<script>
import constant from '../constant'

export default {
  name: 'Search',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    keyupEvent(e) {
      const val = e.target.value
      this.$store.dispatch(constant.SEARCH_CONTACT, { name: val })
      this.name = ''
    }
  }
}
</script>

<style scoped>

</style>
