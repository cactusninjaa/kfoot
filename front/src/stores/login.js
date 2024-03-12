import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ({
      users : [
        {
          pseudo : "toto",
          avatar : "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
          response : [],
          score : 0
        }
      ]
    }),
  actions: {
    addUser(user){
      this.users.push(user)
    },
    addResponse(answer){
      this.users.response.push(answer)
    }
  }
})
