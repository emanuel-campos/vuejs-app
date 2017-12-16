/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import router from './core/router'
import store from './core/store'
import localePTBR from 'vee-validate/dist/locale/pt_BR'
import VeeValidate, { Validator } from 'vee-validate'
import VueTheMask from 'vue-the-mask'

//define a traducao para o plugin de validacao do formulario
Validator.localize('pt_BR', localePTBR)
Vue.use(VeeValidate, {locale: 'pt_BR'})

//ativa o plugin de mascara para campos de formulario
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
