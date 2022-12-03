import { VueElement } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import depasse from '../views/routers.vue'
import pasLimite from '../views/routers.vue'
import encoreTemps from '../views/routers.vue'
import dansTemps from '../views/routers.vue'
import horsTemps from '../views/routers.vue'
import validate from '../views/routers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/depasse',
      name: 'depasse',
      component: depasse
    },
    {
      path: '/pasLimite',
      name: 'pasLimite',
      component: pasLimite
    },
    {
      path: '/encoreTemps',
      name: 'encoreTemps',
      component: encoreTemps
    },
    {
      path: '/dansTemps',
      name: 'dansTemps',
      component: dansTemps
    },
    {
      path: '/horsTemps',
      name: 'horsTemps',
      component: horsTemps
    },
    {
      path: '/validate',
      name: 'validate',
      component: validate
    },
/*  {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    } */
  ]
})

export default router
