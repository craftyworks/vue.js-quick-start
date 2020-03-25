<template>
  <div id="app">
    <search placeholder='두 글자 이상 입력하세요.'></search>
    <contact-list></contact-list>
  </div>
</template>

<script>
import ContactList from './components/ContactList'
import Search from './components/Search'

export default {
  name: 'App',
  components: { ContactList, Search }
}
</script>

<style>
</style>
