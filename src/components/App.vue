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
	  	<router-link class="form--button block" :to="{name: 'contact-new'}">
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

<style lang="scss">
	$defaultFont: 400 14px Open Sans, Helvetica Neue,Helvetica,Arial,sans-serif;

	*{
		box-sizing: border-box;
	}

	body{
		background: #ecf0f1;
		padding: 0;
		margin: 0;
	}

	/* secao geral para todas as paginas da aplicacao */
	.app {
		color: #000;
		font: $defaultFont;
		border-left: 240px solid #fff;

		.app--sidebar{
			position: absolute;
			top: 0;
			left: 0;
			width: 240px;
			padding: 20px;
			background-color: #fff;
			min-height: 100%;

			a{
				color: #000;
			}

			& + .app--main{
				padding: 20px; 
			}

			.app--sidebar--user--info{
				display: block;
				margin-bottom: 20px;
			}

			.form--button{
				color: #fff;
			    margin-bottom: 20px;
			}
		}

		.app--header{
			background-color: #fff;
    		color: #000;
    		margin: -20px -20px 20px;

			.app--header--title{
				font-size: 22.4px;
			    font-weight: 400;
			    display: inline-block;
			    line-height: 1;
			    padding: 20px;
			    margin: 0;
			}
		}

		.app--main{
			margin: 0 auto;
		    min-height: 100%;
		    position: relative;
		    vertical-align: top;
		}
	}
	/* caixas que separam o conteudo em secoes */
	.widget {
		background-color: #fff;
	    border-radius: 3px;
	    margin: 20px auto;
	    padding: 20px;

	    .widget--title {
		    border-bottom: 1px solid #ecf0f1;
		    border-radius: 0;
		    margin: -20px -20px 20px;
		    overflow: hidden;
		    padding: 10px 20px;

		    .icon {
		    	margin-right: 10px;
		    }
		}
	}

	/* estilo para os formularios */
	.form--input{
		margin-top: 20px;
	}

	.form--input--field{
		background-color: #ecf0f1;
	    border: 1px solid rgba(0,0,0,.05);
	    border-radius: 3px;
	    display: inline-block;
	    font: $defaultFont;
	    font-size: 14px;
	    padding: 10px;
	    transition: opacity .3s;
	    width: 100%;
	    box-sizing: border-box;

	    &.erros{
	    	background-color: #eadcda;
    		border-color: #e74c3c;
	    }
	}

	.form--button{
	    appearance: none;
	    background-color: #2b84d2;
	    border: 1px solid rgba(0,0,0,.05);
	    border-radius: 3px;
	    color: #fff;
	    cursor: pointer;
	    display: inline-block;
	    font: $defaultFont;
	    overflow: hidden;
	    padding: 10px 20px;
	    position: relative;
	    text-align: center;
	    transition: background-color .1s,opacity .1s;
	    vertical-align: middle;
	    text-decoration: none;

	    /* classes para alinhamento dos botoes */
	    &.right{
	    	float: right;
	    }

	    &.left{
	    	float: left;
	    }

	    /* classes para os tipos de botoes */
	    &.text{
    	    color: #563dd2;
		    background-color: transparent;
		    border-color: transparent;
	    }

	    &.block{
	    	display: block;
	    	width: 100%;
	    }

	    &.paddingless{
	    	padding-left: 0;
	    	padding-right: 0;
	    }

	    /* estilo para hover e active status */
	    &:hover,
	    &:active{
	    	background: #563dd2;
	    }
	}

	.form--buttons{
		margin: 40px 0 0;
		text-align: center;

		&.left{
			text-align: left;
		}
	}

	.form--button--loading{
		animation: icon-spin 2s infinite linear;
	}

	@keyframes icon-spin{
		from{
		    transform: rotate(0deg);
		}
		to{
		    transform: rotate(359deg)
		}
	}

	.form--input--warning{
	    color: #c33e30;
	    font-size: 14px;
    	margin: 5px 0;
    	text-transform: lowercase;
    	display: inline-block;
	}

	/* estilo especifico para o form do tipo 'block' */
	.form--input--block{
		.form--input--label{
			display: block;
		    margin: 5px 0;
		    text-align: left;
		}
	}

	/* estrutrura para mensagens de error */
	.form--errors{
		border-radius: 3px;
	    list-style: none;
	    overflow: hidden;
	    padding-left: 0;

		.form--errors--error{
			background-color: #e74c3c;
		    border: 1px solid rgba(0,0,0,.05);
		    padding: 10px;
		    color: #fff;
		}
	}
</style>
