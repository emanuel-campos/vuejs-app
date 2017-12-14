import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import JwtToken from '../services/jwt-token'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  state: {},
  actions: {
    login (context, {email, password}) {
      JwtToken.accessToken(email, password)
    }
  }
})
