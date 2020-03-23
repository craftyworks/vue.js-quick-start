<template>
  <div id="app">
    <region-button></region-button>
    <country-list></country-list>
  </div>
</template>

<script>
import CountryList from './components/CountryList'
import RegionButton from './components/RegionButton'

export default {
  name: 'App',
  components: {
    RegionButton, CountryList,
  },
}
</script>

<style>
</style>
