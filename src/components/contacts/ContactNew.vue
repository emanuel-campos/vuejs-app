<template>
	<main class="app--main">
		<section class="contacts contacts--new">
			<header class="app--header">
				<h2 class="app--header--title">Adicionar Contato</h2>
			</header>
			<section class="contacts">
				<form class="contact-form" @submit.prevent="saveContact()">
					<!-- BEGIN widget dados do contato -->
					<div class="widget">
						<div class="widget--title">
							<i class="icon fa fa-user"></i>
							Dados do contato
						</div>

						<!-- BEGIN campo de nome -->
						<div class="form--input">
							<div class="grid-row">
								<div class="col col-2">
									<label for="name" class="form--input--label">Nome</label>
								</div>
								<div class="col col-10">
									<div class="form--input--wrapper">
										<input id="name" placeholder="Nome do contato" name="nome" 
										v-model="contact.name"
										v-validate="'required'" 
										:class="{'form--input--field': true, 'erros': errors.has('nome')}">
										<span v-show="errors.has('nome')" class="form--input--warning"><i class="fa fa-warning"></i> {{ errors.first('nome') }}</span>
									</div>
								</div>
							</div>
						</div>
						<!-- END campo de nome -->

						<!-- BEGIN campo de origem -->
						<div class="form--input">
							<div class="grid-row">
								<div class="col col-2">
									<label for="origem" class="form--input--label">Origem</label>
								</div>
								<div class="col col-10">
									<div class="form--input--wrapper">
										<select id="origem" class="form--input--field" name="origem" v-model="contact.contact_source_id" >
											<option disabled value="">Origem do contato</option>
											<option v-for="contactSource in contactSources" :value="contactSource.id">{{ contactSource.name }}</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<!-- END campo de origem -->

						<!-- BEGIN campo sobre o cliente -->
						<div class="form--input">
							<div class="grid-row">
								<div class="col col-2">
									<label for="sobre_cliente" class="form--input--label">Sobre o cliente</label>
								</div>
								<div class="col col-10">
									<div class="form--input--wrapper">
										<textarea id="sobre_cliente" class="form--input--field" placeholder="Conte um pouco sobre como você o conheceu" name="sobre_cliente" v-model="contact.background"></textarea>
									</div>
								</div>
							</div>
						</div>
						<!-- END campo sobre o cliente -->
					</div>
					<!-- END widget dados do contato -->

					<!-- BEGIN widget telefones -->
					<div class="widget">
						<div class="widget--title">
							<i class="icon fa fa-phone"></i>
							Telefones
						</div>

						<!-- BEGIN lista de telefones -->
						<div id="phone-list" class="form--input--list">
							<div class="form--input" v-for="(phone, index) in contact.phones">
								<div class="grid-row">
									<div class="col col-2">
										<label for="telefone" class="form--input--label">Telefone</label>
									</div>
									<div class="col col-10">
										<div class="form--input--wrapper">
											<the-mask id="telefone" placeholder="(00) 00000-0000" name="telefone" 
											v-model="contact.phones[index]"
											v-validate="'required'" 
											:mask="['(##) ####-####', '(##) #####-####']"
											:class="{'form--input--field': true, 'erros': errors.has('telefone')}"></the-mask>
											<span v-show="errors.has('telefone')" class="form--input--warning"><i class="fa fa-warning"></i> {{ errors.first('telefone') }}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- END lista de telefones -->

						<div class="form--input">
							<div class="grid-row">
								<div class="col col-2"></div>
								<div class="col col-10">
									<div class="form--input--wrapper">
										<a id="adicionar-telefone" class="form--button text paddingless" @click="addPhone()">+ Adicionar um telefone</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- END widget telefones -->

					<!-- BEGIN widget emails -->
					<div class="widget">
						<div class="widget--title">
							<i class="icon fa fa-envelope"></i>
							E-mails
						</div>

						<!-- BEGIN lista de emails -->
						<div id="email-list" class="form--input--list">
							<div class="form--input" v-for="(email, index) in contact.emails">
								<div class="grid-row">
									<div class="col col-2">
										<label for="telefone" class="form--input--label">E-mail</label>
									</div>
									<div class="col col-10">
										<div class="form--input--wrapper">
											<input class="form--input--field" id="telefone" placeholder="exemplo@email.com" name="emails[]" v-model="contact.emails[index]">
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- END lista de emails -->

						<div class="form--input">
							<div class="grid-row">
								<div class="col col-2"></div>
								<div class="col col-10">
									<div class="form--input--wrapper">
										<a id="adicionar-email" class="form--button text paddingless" @click="addEmail()">+ Adicionar um e-mail</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- END widget emails -->

					<div class="form--buttons">
						<button type="submit" id="salvar-contato" class="form--button">
							<i v-show="lazyLoading" class="fa fa-spinner form--button--loading"></i>
							Salvar Contato
						</button>
						<router-link class="form--button white" :to="{name: 'contact-list'}">Cancelar</router-link>
					</div>
				</form>
			</section>
		</section>
	</main>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      contact: {
        name: '',
        background: '',
        contact_source_id: '',
        phones: [''],
        emails: ['']
      },
      lazyLoading: false
    }
  },
  methods: {
    addPhone () {
      this.contact.phones.push('')
    },
    addEmail () {
      this.contact.emails.push('')
    },
    saveContact () {
      // o formulario deve passar pela validação para continuar
      this.$validator.validateAll().then((result) => {
        if (result) {
          // define como 'true' para exibir "itens de carregamento" 
          this.lazyLoading = true

          /** 
           * prepara os numeros de telefone no formato correto para a API
           * Exemplo: 
           * [
           *  {
	       *    code: 84,
	       *    number: 999281870
           *  }
           * ]
           */
          this.contact.phones = this.contact.phones.map(function (number) {
            return {
              code: number.substring(0, 2),
              number: number.slice(2)
            }
          })

          /** 
           * prepara os emails no formato correto para a API
           * Exemplo: 
           * [
           *  {
	       *    address: exemplo@site.com
           *  }
           * ]
           */
          this.contact.emails = this.contact.emails.map(function (email) {
            return {
              address: email
            }
          })

          /** 
           * dispara uma action do store que deve enviar os dados para a API
           * essa action deve retornar uma promessa, podendo ser usada para validações
           */
          this.$store.dispatch('newContact', this.contact)
            .then((response) => {
              /** 
               * caso o contato tenha sido enviado com sucesso e salvo
               * redireciona o usuario para a lista de contatos
               */
              this.$router.push({name: 'contact-list'})
            })
            .catch((responseError) => {
              /**
               * se ocorrer algum erro na requisição a promessa dispara o catch
               * assim uma mensagem de erro aparece avisando o usuario
               */
              this.lazyLoading = false
              this.error.status = true
              this.error.message = 'Erro ao cadastrar, atualize a página e tente novamente'
            })
        }
      })
    }
  },
  computed: {
    contactSources () {
      /**
       * acessa o state na store e retorna a lista contactSources
       * carregada com a action loadContactSources
       */
      return this.$store.state.contactSources
    }
  },
  mounted () {
  	/**
  	 * dispara a action loadContactSources para
  	 * carregar a lista contactSources no state do store
  	 */
    this.$store.dispatch('loadContactSources')
  }
}
</script>

<style lang="scss">
	
</style>
