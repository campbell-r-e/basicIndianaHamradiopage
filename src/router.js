import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './components/pages/Home.vue'
import AboutView from './components/pages/About.vue'
import whatishamradio from './components/pages/whatishamradio.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/whatishamradio', name: 'whatishamradio', component:whatishamradio},
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory('/'), 
  routes,
})

export default router

