import { createRouter, createWebHistory } from 'vue-router'
import QuestionView from '../views/QuestionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'question',
      component: QuestionView
    },
  ]
})

export default router
