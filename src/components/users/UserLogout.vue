<template>
	<main class="app--main">
		<section class="users users--logout">
			Desconectando...
		</section>
	</main>
</template>

<script>
export default {
  mounted () {
    this.logout()
    this.$router.push({name: 'user-login'})
  },
  methods: {
    logout () {
      this.$store.commit('unauthenticated')
    }
  }
}
</script>

<style lang="scss">
	.app.logout{
		border-left: none;
		text-align: center;
	}
</style>
