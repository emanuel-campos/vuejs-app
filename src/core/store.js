import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import config from './config'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  state: {},
  actions: {
    login (context, {email, password}) {
      Vue.http.post(config.baseUrl + '/auth', { email, password })
        .then((response) => {
          console.log(response.data.token)
        })
    }
  }
})
