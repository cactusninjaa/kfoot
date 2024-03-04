import express from 'express'
import { getQuestions, getQuestion } from '../controllers/QuestionController.js'

const router = express.Router()

router.get('/', getQuestions)
router.get('/:id', getQuestion)


export default router

