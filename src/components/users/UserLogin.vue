<template>
	<section class="app login">
		<main class="app--main">
			<section class="users--login">
				<form class="users--form form---input--block widget">
					<div class="widget--title">
						App | Entrar
					</div>
					<div class="form--input">
						<label for="email" class="form--input--label">E-mail</label>
						<div class="form--input--wrapper">
							<input id="email" class="form--input--field" type="email" placeholder="exemplo@email.com">
						</div>
					</div>
					<div class="form--input">
						<label for="password" class="form--input--label">E-mail</label>
						<div class="form--input--wrapper">
							<input id="password" class="form--input--field" type="password" placeholder="Digite sua senha aqui...">
						</div>
					</div>
					<div class="form--buttons">
						<button class="form--button">Fazer Login</button>
						<a class="form--button right">Não é cadastrado?</a>
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
      
    }
  }
}
</script>

<style>

</style>
