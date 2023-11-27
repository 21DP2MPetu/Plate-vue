import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import YourJourneyView from '../views/YourJourneyView.vue'
import BreakFastView from '../views/BreakFastView.vue'
import DinnerView from '../views/DinnerView.vue'
import AfterView from '../views/AfterView.vue'
import SnackView from '../views/SnackView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/your_journey',
      name: 'your_journey',
      component: YourJourneyView 
    },
    {
      path: '/breakfast',
      name: 'breakfast',
      component: BreakFastView 
    },
    {
      path: '/dinner',
      name: 'dinner',
      component: DinnerView 
    },
    {
      path: '/after',
      name: 'after',
      component: AfterView 
    },
    {
      path: '/snack',
      name: 'snack',
      component: SnackView 
    },
  ]
})

export default router