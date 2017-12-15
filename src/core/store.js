import Vue from 'vue'
import Vuex from 'vuex'
import JwtToken from '../services/jwt-token'
import {Contact} from '../services/resources'
import localStorage from '../services/local-storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    auth: {
      check: JwtToken.token != null,
      user: localStorage.getObject('user')
    }
  },
  mutations: {
    setContacts (state, contacts) {
      state.contacts = contacts
    },
    authenticated (state) {
      state.auth.check = true
      state.auth.user = localStorage.getObject('user')
    },
    unauthenticated (state) {
      state.auth.check = false
      state.auth.user = null
      JwtToken.token = null
      localStorage.remove('user')
    }
  },
  actions: {
    login (context, {email, password}) {
      return JwtToken.accessToken(email, password).then(response => {
        context.commit('authenticated')
      })
    },
    loadContacts (context) {
      Contact.query().then(response => {
        context.commit('setContacts', response.data.contacts)
      })
    }
  }
})
