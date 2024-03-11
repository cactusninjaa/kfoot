import { defineStore } from 'pinia'

export const useListQuestionStore = defineStore('listQuestions', {
    state: () => ({
        listQuestions : [
            {
                question : "Quelle est la capitale de la France ?",
                answer : "Paris",
                link : "https://shots.codepen.io/username/pen/GEKZVB-800.jpg?version=1496388784"
            },
        ]
      }),
    actions: {
        addQuestion(question){
            this.questions.push(question)
        }
        }
})

