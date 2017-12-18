<template>
	<main class="app--main">
		<section class="users users--login">
			<ul v-show="error.status" class="form--errors">
				<li class="form--errors--error">{{ error.message }}</li>
			</ul>
			<!-- BEGIN formulario de login -->
			<form class="users--form form--input--block widget" @submit.prevent="login()">
				<div class="widget--title">
					<i class="icon fa fa-unlock-alt"></i> App | Entrar
				</div>
				<!-- BEGIN campo de email -->
				<div class="form--input">
					<label for="email" class="form--input--label">E-mail</label>
					<div class="form--input--wrapper">
						<input id="email" type="email" name="email" placeholder="exemplo@email.com" v-model="user.email" 
						v-validate="'required|email'" 
						:class="{'form--input--field': true, 'erros': errors.has('email')}">
						<span v-show="errors.has('email')" class="form--input--warning"><i class="fa fa-warning"></i> {{ errors.first('email') }}</span>
					</div>
				</div>
				<!-- END campo de email -->

				<!-- BEGIN campo de senha -->
				<div class="form--input">
					<label for="password" class="form--input--label">Senha</label>
					<div class="form--input--wrapper">
						<input id="password" type="password" name="senha" placeholder="Digite sua senha aqui..." 
						v-model="user.password" 
						v-validate="'required|min:8'" 
						:class="{'form--input--field': true, 'erros': errors.has('senha')}">
						<span v-show="errors.has('senha')" class="form--input--warning"><i class="fa fa-warning"></i> {{ errors.first('senha') }}</span>
					</div>
				</div>
				<!-- END campo de senha -->

				<div class="form--buttons left">
					<button id="fazer-login" class="form--button">
						<i v-show="lazyLoading" class="fa fa-spinner form--button--loading"></i> 
						Fazer Login
					</button>
					<a class="form--button right text paddingless">Não é cadastrado?</a>
				</div>
			</form>
			<!-- END formulario de login -->
		</section>
	</main>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      error: {
        status: false,
        message: ''
      },
      lazyLoading: false
    }
  },
  methods: {
    login () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // define como 'true' para exibir "itens de carregamento"
          this.lazyLoading = true

          /**
           * dispara a action login da store
           * essa action retorna uma promessa
           */
          this.$store.dispatch('login', this.user)
            .then((response) => {
              /**
               * caso o usuario seja autenticado então
               * ele deve ser redirecionado para a Página Inicial
               */
              this.$router.push({name: 'home'})
            })
            .catch((responseError) => {
              /**
               * Caso a promessa falhe, uma mensagem de 
               * erro é definida para ser exibida ao usuario
               */
              this.lazyLoading = false
              this.error.status = true
              this.error.message = 'Login ou senha inválidos'
            })
        }
      })
    }
  }
}
</script>

<style lang="scss">
	.app.login{
		border-left: none;
	}

	.users--login {
	    margin: 10px auto;
	    max-width: 360px;

	    .widget {
		    border-radius: 3px;
		    margin: 10px;
		}

		.form--errors{
			margin: 10px;
		}
	}
</style>
