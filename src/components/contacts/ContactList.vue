<template>
	<main class="app--main">
		<section class="contacts contacts--list">
			<header class="app--header">
				<h2 class="app--header--title">Lista de Contatos</h2>
			</header>
			<div class="widget">
				<div class="widget--title">
					<i class="icon fa fa-th-list"></i>
					Contatos
				</div>
				<div>
					<div class="contact" v-for="contact in contacts">
						<div class="contact--header">
							<router-link :to="{name: 'contact-view', params: {id: contact.id}}">
								<span class="contact--title">{{ contact.name }}</span>
					  		</router-link>
						</div>
						<div class="contact--info"></div>
						<ul class="contact--list" v-if="contact.phones.length">
							<li v-for="phone in contact.phones">
							({{ phone.code }}) {{ phone.number }}
							</li>
						</ul>
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
    contacts () {
      return this.$store.state.contacts
    }
  },
  mounted () {
    this.$store.dispatch('loadContacts')
  }
}
</script>

<style lang="scss">
	
</style>
