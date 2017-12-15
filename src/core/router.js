import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLoginComponent from '../components/users/UserLogin.vue'
import ContactListComponent from '../components/contacts/ContactList.vue'
import ContactNewComponent from '../components/contacts/ContactNew.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'user-login',
      path: '/users/login',
      component: UserLoginComponent
    },
    {
      name: 'contact-list',
      path: '/contacts',
      component: ContactListComponent
    },
    {
      name: 'contact-new',
      path: '/contacts/new',
      component: ContactNewComponent
    }
  ]
})

export default router
