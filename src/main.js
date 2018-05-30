import Vue from 'vue'
import MyPlugin from './MyPlugin'
import App from './App.vue'

Vue.use(MyPlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
