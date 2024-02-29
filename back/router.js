import express from 'express'
import question from './routes/QuestionRoute.js'

const router = express.Router()

router.use('/question', question)

export default router