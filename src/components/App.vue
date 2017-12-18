<template>
  <section :class="['app', appRouteClass]">
  	<nav class="app--sidebar" v-if="isAuth">
  		<span class="app--sidebar--user--info">
	  		{{ authUser.name }} 
	  		<router-link :to="{name: 'user-logout'}">
	  			<i class="fa fa-sign-out"></i> Sair
  			</router-link>
  		</span>
	  	<router-link class="form--button block" :to="{name: 'contact-list'}">
	  		<i class="fa fa-list"></i>
	  		Lista de Contatos
  		</router-link>
	  	<router-link id="adicionar-contato" class="form--button block" :to="{name: 'contact-new'}">
	  		<i class="fa fa-plus"></i>
	  		Adicionar Contato
  		</router-link>
  	</nav>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'app',
  computed: {
    isAuth () {
      return this.$store.state.auth.check
    },
    authUser () {
      return this.$store.state.auth.user
    },
    appRouteClass () {
      return this.$route.meta.class
    }
  }
}
</script>

<style lang="scss" src="../assets/sass/styles.scss"></style>
