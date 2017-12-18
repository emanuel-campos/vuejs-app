// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'users login empty - e2e tests': function (browser) {
    const devServer = browser.globals.devServerURL

    /**
     * o teste a seguir verifica se as mensagens
     * de campos vazios estão sendo devidamente
     * exibidas ao usuário no momento de login
     *
     * 1 - Acessa o formulario de login
     * 2 - Clica no botão de login
     * 3 - Espera uma mensagem de erro para email vazio
     * 4 - Digital um email
     * 5 - Clica no botão de login
     * 6 - Espera uma mensagem de erro para senha vazia
     * 7 - Digital uma senha com 6 caracteres
     * 8 - Clica no botão de login
     * 9 - Espera uma mensagem de erro para senha com menos de 8 caracteres 
     */
    browser
      .url(devServer)
      .waitForElementVisible('.app', 5000)
      .click('#fazer-login')
      .assert.containsText('.app', 'o campo email é obrigatório.')
      .setValue('#email', 'emanuelcampos.contato@gmail.com')
      .click('#fazer-login')
      .assert.containsText('.app', 'o campo senha é obrigatório.')
      .setValue('#password', '123456')
      .click('#fazer-login')
      .assert.containsText('.app', 'o campo senha deve conter pelo menos 8 caracteres.')
      .end()
  },
  'users login incorrect - e2e tests': function (browser) {
    const devServer = browser.globals.devServerURL

    /**
     * Este teste verifica se uma mensagem é
     * exibida para o usuário caso digite uma
     * senha incorreta no momento do login
     *
     * 1 - Acessa o formulario de login 
     * 2 - Digita um e-mail válido para login 
     * 3 - Digita uma senha inválida para login 
     * 4 - Clica no botão de login
     * 5 - Espera uma mensagem de erro para senha incorreta 
     */
    browser
      .url(devServer)
      .waitForElementVisible('.app', 5000)
      .setValue('#email', 'emanuelcampos.contato@gmail.com')
      .setValue('#password', '123456789')
      .click('#fazer-login')
      .pause(1000)
      .assert.containsText('.app', 'Login ou senha inválidos')
      .end()
  },
  'users login successfully - e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    /**
     * o teste abaixo certifica-se se o login normal 
     * do usuário está correto e funcionando
     *
     * 1 - Acessa o formulario de login
     * 2 - Digita um e-mail válido
     * 3 - Digita uma senha válida
     * 4 - Clica no botão de login
     * 5 - Verifica se foi direcionado para a página principal
     */
    browser
      .url(devServer)
      .waitForElementVisible('.app', 5000)
      .setValue('#email', 'emanuelcampos.contato@gmail.com')
      .setValue('#password', '12345678')
      .click('#fazer-login')
      .pause(5000)
      .assert.containsText('.app--header .app--header--title', 'Página Principal')
      .end()
  }
}
