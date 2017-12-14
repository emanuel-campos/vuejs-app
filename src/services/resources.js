import Vue from 'vue'
import config from '../core/config'

export class Jwt {
  static accessToken (email, password) {
    return Vue.http.post(config.apiUrl + '/auth', { email, password })
  }
}
