import Vue from 'vue'
import VeeValidator from 'vee-validate'
import App from './App.vue'

Vue.use(VeeValidator)

new Vue({
  el: '#app',
  render: h => h(App)
})
