import Vue from 'vue';
import VueRouter from 'vue-router';
import UsersLoginComponent from '../components/users/UsersLogin.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: '/users/login',
			component: UsersLoginComponent
		}
	]
})

export default router;