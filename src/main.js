import Vue from 'vue'
import App from './App.vue'
import router from './Router/index'
import store from '@/Store'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import './init'



new Vue({
  store,
  router,
  render : h => h(App),
 
}).$mount('#app')
