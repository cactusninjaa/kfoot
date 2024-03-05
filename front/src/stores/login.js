import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ({
      users : [
      ]
    }),
  actions: {
    addUser(user){
      this.users.push(user)
    }
  }
})
