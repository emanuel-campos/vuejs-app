<template>
	<main class="app--main">
		<section class="contacts contacts--list">
			<header class="app--header">
				<h2 class="app--header--title">Visualizar Contato</h2>
			</header>
			<div class="widget">
				<div class="widget--title">
					<i class="icon fa fa-user"></i>
					{{ contact.name }}
				</div>
				<div>
					<div class="contact">
						<p v-if="contact.background">{{ contact.background }}</p>
						<div class="widget--separator" v-if="contact.background && contact.contact_source"></div>
						
						<span v-if="contact.contact_source" class="contact--list--header">Origem</span>
						<p v-if="contact.contact_source">{{ contact.contact_source.name }}</p>
					</div>
				</div>
			</div>
			<div class="widget">
				<div class="widget--title">
					<i class="icon fa fa-phone"></i>
					Informações para Contato
				</div>
				<div>
					<div class="contact">
						<span class="contact--list--header" v-if="contact.phones.length">Telefones</span>
						<ul class="contact--list" v-if="contact.phones.length">
							<li v-for="phone in contact.phones">
							({{ phone.code }}) {{ phone.number }}
							</li>
						</ul>

						<span class="contact--list--header" v-if="contact.emails.length">E-mails</span>
						<ul class="contact--list" v-if="contact.emails.length">
							<li v-for="email in contact.emails">
							{{ email.address }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {
  computed: {
    contact () {
      return this.$store.state.contact
    }
  },
  mounted () {
    this.$store.dispatch('loadContact', this.$route.params.id)
  }
}
</script>

<style lang="scss"></style>
