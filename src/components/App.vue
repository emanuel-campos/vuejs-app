<template>
  <div>
  	<router-link :to="{name: 'contact-list'}">Lista de Contatos</router-link>
  	<router-link :to="{name: 'contact-new'}">Adicionar Contato</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
	$defaultFont: 400 14px Open Sans, Helvetica Neue,Helvetica,Arial,sans-serif;

	body{
		background: #ecf0f1;
		padding: 0;
		margin: 0;
	}

	/* secao geral para todas as paginas da aplicacao */
	.app{
		color: #000;
		font: $defaultFont;
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

		    .icon{
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

	    &.paddingless{
	    	padding-left: 0;
	    	padding-right: 0;
	    }
	}

	.form--buttons{
		margin: 40px 0 0;
		text-align: center;

		&.left{
			text-align: left;
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
