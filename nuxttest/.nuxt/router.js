import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _10bc5c32 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3f139484 = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _4fad9d5c = () => interopDefault(import('../pages/contacts/_no/index.vue' /* webpackChunkName: "pages/contacts/_no/index" */))
const _307436f7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _10bc5c32,
    name: "about"
  }, {
    path: "/contacts",
    component: _3f139484,
    name: "contacts",
    children: [{
      path: ":no",
      component: _4fad9d5c,
      name: "contacts-no"
    }]
  }, {
    path: "/",
    component: _307436f7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
