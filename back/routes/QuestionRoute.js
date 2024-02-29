import express from 'express'
import { getQuestions, getQuestion } from '../controllers/QuestionController.js'
import router from '../router.js'


router.get('/', getQuestions)


export default router