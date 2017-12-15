<template>
  <div>
  	Lista de Contatos
  	<ul>
  		<li v-for="contact in contacts">{{ contact.name }}</li>
  	</ul>
  </div>
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
