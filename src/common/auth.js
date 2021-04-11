import VueJwtDecode from 'vue-jwt-decode'

export default {
  getToken () {
    return localStorage.getItem('token')
  },
  setToken (token) {
    localStorage.setItem('token', token)
  },
  getTokenKey (key) {
    var token = this.getToken()

    if (token === null || token === undefined) {
      return null
    }

    return VueJwtDecode.decode(token)[key]
  },
  getEmail () {
    return this.getTokenKey('http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name')
  },
  isValid () {
    var expire = this.getTokenKey('exp')

    if (expire === null) {
      return false
    }

    return !((Date.now() >= expire * 1000))
  },
  removeToken () {
    localStorage.removeItem('token')
  }
}
