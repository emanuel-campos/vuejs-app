import Vue from 'vue';
import VueRouter from 'vue-router';
import UserLoginComponent from '../components/users/UserLogin.vue';
import ContactListComponent from '../components/contacts/ContactList.vue';
import ContactNewComponent from '../components/contacts/ContactNew.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: '/users/login',
			component: UserLoginComponent
		},
		{
			path: '/contacts',
			component: ContactListComponent
		},
		{
			path: '/contacts/new',
			component: ContactNewComponent
		}
	]
})

export default router;