import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Accueil'
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
    meta: {
      title: "S'inscrire"
    }
  },{
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Se connecter'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to) =>{
  document.title = to.meta.title
})

export default router
