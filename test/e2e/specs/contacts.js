// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

var faker = require('faker/locale/pt_BR')

module.exports = {
  'contacts new - e2e tests': function (browser) {
    const devServer = browser.globals.devServerURL

    /**
     * o teste abaixo verifica se o usuario consegue
     * cadastrar um novo contato
     *
     * PRIMEIRA ETAPA DO TESTE - LOGIN DO USUARIO
     * 1 - Acessa o formulario de login
     * 2 - Digita um email valido
     * 3 - Digita uma senha valida
     * 4 - Clica no botao de login
     *
     * SEGUNDA ETAPA DO TESTE - CADASTRAR NOVO CONTATO
     * 1 - Clica no botao para novo contato
     * 2 - Preenche o campo com o "Nome"
     * 3 - Define a "Origem" do contato
     * 4 - Preenche o campo "Sobre o cliente"
     * 5 - Preenche o campo "Sobre o cliente"
     * 6 - Preenche o campo "Telefone"
     * 7 - Clica no botao "Adicionar um telefone"
     * 8 - Preenche o novo campo "Telefone"
     * 9 - Preenche o campo "E-mail"
     * 10 - Clica no botao "Adicionar um e-mail"
     * 11 - Preenche o novo campo "E-mail"
     */

    const contactFirstName  = faker.name.firstName(),
          contactLastName   = faker.name.lastName(),
          contactName       = contactFirstName + " " + contactLastName,
          contactSource     = faker.random.number({min:1, max:8}),
          contactBackground = faker.lorem.paragraph(),
          contactEmails     = [
            faker.internet.email(contactFirstName.toLowerCase(),contactLastName.toLowerCase()),
            faker.internet.email(contactLastName.toLowerCase(),contactFirstName.toLowerCase())
          ],
          contactPhones     = [
            faker.random.number({min:9999999999, max:99999999999}),
            faker.random.number({min:9999999999, max:99999999999})
          ]

    browser
      .url(devServer)
      .waitForElementVisible('.app', 5000)
      .setValue('#email', 'emanuelcampos.contato@gmail.com')
      .setValue('#password', '12345678')
      .click('#fazer-login')
      .pause(2000)
      .click('#adicionar-contato')
      .pause(2000)
      .setValue('#name', contactName)
      .click('#origem option[value="' + contactSource + '"]')
      .setValue('#sobre_cliente', contactBackground)
      .setValue('#phone-list .form--input:last-child .form--input--field', contactPhones[0])
      .click('#adicionar-telefone')
      .setValue('#phone-list .form--input:last-child .form--input--field', contactPhones[1])
      .setValue('#email-list .form--input:last-child .form--input--field', contactEmails[0])
      .click('#adicionar-email')
      .setValue('#email-list .form--input:last-child .form--input--field', contactEmails[1])
      .click('#salvar-contato')
      .pause(10000)
      .end()
  }
}
