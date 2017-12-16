import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import UserLoginComponent from '../components/users/UserLogin.vue'
import UserLogoutComponent from '../components/users/UserLogout.vue'
import HomeComponent from '../components/Home.vue'
import ContactListComponent from '../components/contacts/ContactList.vue'
import ContactNewComponent from '../components/contacts/ContactNew.vue'
import ContactViewComponent from '../components/contacts/ContactView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeComponent,
      meta: {
        class: 'login',
        auth: true
      }
    },
    {
      name: 'user-login',
      path: '/users/login',
      component: UserLoginComponent,
      meta: {
        class: 'login',
        auth: false
      }
    },
    {
      name: 'user-logout',
      path: '/users/logout',
      component: UserLogoutComponent,
      meta: {
        class: 'logout',
        auth: true
      }
    },
    {
      name: 'contact-list',
      path: '/contacts',
      component: ContactListComponent,
      meta: {
        class: 'contacts',
        auth: true
      }
    },
    {
      name: 'contact-new',
      path: '/contacts/new',
      component: ContactNewComponent,
      meta: {
        class: 'contacts',
        auth: true
      }
    },
    {
      name: 'contact-view',
      path: '/contacts/:id',
      component: ContactViewComponent,
      meta: {
        class: 'contacts',
        auth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!store.state.auth.check && to.meta.auth) {
    return router.push({name: 'user-login'})
  }
  next()
})

export default router
