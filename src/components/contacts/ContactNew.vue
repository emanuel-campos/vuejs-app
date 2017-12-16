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
					</div>
					<!-- END widget dados do contato -->

					<!-- BEGIN widget telefones -->
					<div class="widget">
						<div class="widget--title">
							<i class="icon fa fa-phone"></i>
							Telefones
						</div>
						<div class="form--input" v-for="(phone, index) in contact.phones">
							<div class="grid-row">
								<div class="col col-2">
									<label for="telefone" class="form--input--label">Telefone</label>
								</div>
								<div class="col col-10">
									<div class="form--input--wrapper">
										<input class="form--input--field" id="telefone" placeholder="(00) 00000-0000" name="phone[]" v-model="contact.phones[index]">
									</div>
								</div>
							</div>
						</div>
						<div class="form--input">
							<div class="grid-row">
								<div class="col col-2"></div>
								<div class="col col-10">
									<div class="form--input--wrapper">
										<a class="form--button text paddingless" @click="addPhone()">+ Adicionar um telefone</a>
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
						<div class="form--input">
							<div class="grid-row">
								<div class="col col-2"></div>
								<div class="col col-10">
									<div class="form--input--wrapper">
										<a class="form--button text paddingless" @click="addEmail()">+ Adicionar um e-mail</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- END widget emails -->

					<div class="form--buttons">
						<button type="submit" class="form--button">
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
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.lazyLoading = true
        }
      })
    }
  },
  computed: {
    contactSources () {
      return this.$store.state.contactSources
    }
  },
  mounted () {
    this.$store.dispatch('loadContactSources')
  }
}
</script>

<style>

</style>
