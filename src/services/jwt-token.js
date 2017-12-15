import {Jwt} from './resources'
import localStorage from './local-storage'

export default {
  get token () {
    return localStorage.get('token')
  },
  set token (value) {
    return value ? localStorage.set('token', value) : localStorage.remove('token')
  },
  accessToken (email, password) {
    return Jwt.accessToken(email, password)
    .then((response) => {
      this.token = response.data.token
      localStorage.setObject('user', response.data)
    })
  }
}
