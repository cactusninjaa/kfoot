import { defineStore } from 'pinia'

export const useListQuestionStore = defineStore('listQuestions', {
    state: () => ({
        listQuestions : [
            
        ]
      }),
    actions: {
        addQuestion(question){
            this.questions.push(question)
        }
        }
})

