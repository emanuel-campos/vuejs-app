import Vue from 'vue'
import VueResource from 'vue-resource'
import config from '../core/config'
import JwtToken from './jwt-token'
import localStorage from './local-storage'

Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  if (localStorage.getObject('user') && JwtToken.token) {
    request.headers.set('access-token', JwtToken.token)
    request.headers.set('uid', localStorage.getObject('user').email)
  }
  next()
})

export class Jwt {
  static accessToken (email, password) {
    return Vue.http.post(config.getApiUrl('/auth'), { email, password })
  }
}

const Contact = Vue.resource(config.getApiUrl('/contacts'))
const ContactSource = Vue.resource(config.getApiUrl('/contact_sources'))

export {Contact, ContactSource}
