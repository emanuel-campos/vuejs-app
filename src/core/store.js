import Vue from 'vue'
import Vuex from 'vuex'
import JwtToken from '../services/jwt-token'
import {Contact} from '../services/resources'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: []
  },
  mutations: {
    setContacts (state, contacts) {
      state.contacts = contacts
    }
  },
  actions: {
    login (context, {email, password}) {
      return JwtToken.accessToken(email, password)
    },
    loadContacts (context) {
      Contact.query().then(response => {
        context.commit('setContacts', response.data.contacts)
      })
    }
  }
})
