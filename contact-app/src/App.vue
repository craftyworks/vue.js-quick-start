<template>
  <div id="app">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 어플리케이션</h1>
      <p>(Vue-router + Vuex + Axios)</p>
      <div class="btn-group">
        <router-link to="/home" class="btn btn-info menu">Home</router-link>
        <router-link to="/about" class="btn btn-info menu">About</router-link>
        <router-link to="/contacts" class="btn btn-info menu">Contacts</router-link>
      </div>
    </div>
    <transition name="flip" mode="out-in">
      <router-view></router-view>
    </transition>
    <loading v-show="isLoading"></loading>
  </div>
</template>

<script>
import Loading from './components/Loading'
import {mapState} from 'vuex'
/* eslint no-template-curly-in-string: 0 */
export default {
  name: 'App',
  components: {Loading},
  computed: mapState(['isLoading']),
}
</script>/

<style scoped>
  @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .menu {
    width: 100px;
  }
  .flip-enter-active {
    transition: all .4s ease-in-out;
  }
  .flip-leave-active {
    transition: all .4s ease-in-out;
  }
  .flip-enter, .flip-leave-to {
    transform: scaleY(0) translateZ(0);
    opacity: 0;
  }
</style>
