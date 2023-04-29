import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Index from '../views/Index.vue';
import Noshow from '../views/Noshow.vue';
import AboutView from '../views/AboutView.vue';
import TheWelcome from '../components/TheWelcome.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Inicio', component: Index },
    {
      path: '/about',
      name: 'about',
      component:AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    },
    { path: '/opcion3', name: 'opcion3', component: TheWelcome },
    { path: '/opcion4', name: 'norenderizar', component: Noshow }
  ]
})

export default router
