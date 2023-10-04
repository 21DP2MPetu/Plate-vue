import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SettingsView from '../views/SettingsView.vue'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import GameView from '../views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '',
      name: 'home',
      component: HomeView 
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: SignInView 
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: SignUpView 
    },
    {
      path: '/game',
      name: 'game',
      component: GameView 
    }
  ]
})

export default router