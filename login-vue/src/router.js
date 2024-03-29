import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        requiresAuth: true
      }
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/signup',
      name:'Signup',
      component:Signup
    }
  ]
})

router.beforeEach((to, from, next)=>{
  const currentUser = firebase.auth().currentUser
  const requiresAuth =  to.matched.some(record=>record.meta.requiresAuth)

  if(requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
});

export default router