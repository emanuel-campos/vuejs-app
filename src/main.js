import Vue from 'vue'
import App from './components/App.vue'
import router from './core/router';

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
