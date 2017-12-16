import Vue from 'vue'
import Vuex from 'vuex'
import JwtToken from '../services/jwt-token'
import {Contact, ContactSource} from '../services/resources'
import localStorage from '../services/local-storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    contactSources: [],
    contact: {},
    auth: {
      check: JwtToken.token != null,
      user: localStorage.getObject('user')
    }
  },
  mutations: {
    setContacts (state, contacts) {
      state.contacts = contacts
    },
    setContactSources (state, contactSources) {
      state.contactSources = contactSources
    },
    setContact (state, contact) {
      state.contact = contact
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
    },
    loadContactSources (context) {
      ContactSource.query().then(response => {
        context.commit('setContactSources', response.data)
      })
    },
    newContact (context, contact) {
      return Contact.save(contact)
    },
    loadContact (context, contactId) {
      return Contact.get({id: contactId}).then(response => {
        context.commit('setContact', response.data)
      })
    }
  }
})
