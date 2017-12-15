import Vue from 'vue'
import Vuex from 'vuex'
import JwtToken from '../services/jwt-token'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions: {
    login (context, {email, password}) {
      return JwtToken.accessToken(email, password)
    }
  }
})
