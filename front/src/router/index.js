import { createRouter, createWebHistory } from 'vue-router'
import QuestionView from '../views/QuestionView.vue'
import LoginView from '../views/LoginView.vue'
import RoomView from '../views/RoomView.vue'
import CorrectionView from '../views/CorrectionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/question',
      name: 'question',
      component: QuestionView
    },
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/room',
      name: 'room',
      component: RoomView
    },
    {
      path: '/correction',
      name: 'correction',
      component: CorrectionView
    }
  ]
})

export default router
