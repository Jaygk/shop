/*
* 入口js
*/
import Vue from 'vue'

import router from './router/index.js'

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
