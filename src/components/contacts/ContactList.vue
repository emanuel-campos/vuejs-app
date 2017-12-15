<template>
	<main class="app--main">
		<section class="contacts contacts--new">
			<header class="app--header">
				<h2 class="app--header--title">Lista de Contatos</h2>
			</header>
			<ul>
		  		<li v-for="contact in contacts">{{ contact.name }}</li>
		  	</ul>
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

<style>

</style>
