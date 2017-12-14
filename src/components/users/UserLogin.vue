<template>
	<section class="app login">
		<main class="app--main">
			<section class="users--login">
				<form class="users--form form--input--block widget" @submit.prevent="login()">
					<div class="widget--title">
						<i class="icon fa fa-unlock-alt"></i> App | Entrar
					</div>
					<div class="form--input">
						<label for="email" class="form--input--label">E-mail</label>
						<div class="form--input--wrapper">
							<input id="email" class="form--input--field" type="email" placeholder="exemplo@email.com" v-model="user.email">
						</div>
					</div>
					<div class="form--input">
						<label for="password" class="form--input--label">Senha</label>
						<div class="form--input--wrapper">
							<input id="password" class="form--input--field" type="password" placeholder="Digite sua senha aqui..." v-model="user.password">
						</div>
					</div>
					<div class="form--buttons left">
						<button class="form--button">Fazer Login</button>
						<a class="form--button right text paddingless">Não é cadastrado?</a>
					</div>
				</form>
			</section>
		</main>
	</section>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.user)
    }
  }
}
</script>

<style lang="scss">
	.users--login {
	    margin: 10px auto;
	    max-width: 360px;

	    .widget {
		    border-radius: 3px;
		    margin: 10px
		}
	}
</style>
