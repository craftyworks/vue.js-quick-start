<template>
  <div id="app">
    <div class="header">
      <h1 class="headerText">(주)두리안</h1>
      <nav>
        <ul>
          <li>
            <router-link :to="{name: 'home'}">Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'about'}">About</router-link>
          </li>
          <li>
            <router-link to="/contacts">Contacts</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import ContactByNo from './components/ContactByNo'
import VueRouter from 'vue-router'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'root', component: Home },
    { path: '/home', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
      children: [
        {
          path: ':no',
          name: 'contactByNo',
          component: ContactByNo,
          props: true,
          beforeEnter(to, from, next) {
            console.log('@@@@@', from.path, to.path)
            next()
          },
        },
      ],
    },
  ],
})
export default {
  name: 'app',
  router,
}
</script>

<style>
  @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css")
</style>
