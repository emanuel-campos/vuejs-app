export default {
  apiUrl: 'https://staging.api.meuprospere.com.br/v1',
  getApiUrl (endpoint = '') {
    return this.apiUrl + endpoint
  }
}
