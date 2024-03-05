
<script>
export default {
  name: 'QuestionView',
  data() {
    return {
      link: null,
      question: null,
      answer: null,
      pseudo: localStorage.getItem('pseudo')
    };
  },
  mounted() {
    fetch(`http://localhost:3000/question/${this.randomNumber()}`)
      .then((response) => response.json())
      .then((data) => {
        this.link = data.link;
        this.question = data.question;
        this.answer = data.answer;
      })
      .catch((error) => console.error('Erreur:', error));
  },
  methods:{
    randomNumber(){
      return Math.floor(Math.random() * 300) + 1;
    }
  }

};
</script>

<template>
  <div>
    <p>{{ question }}</p>
    <img v-if="this.link" :src="this.link" alt="Image de la question" />
    <p>{{ answer }}</p>
  </div>
</template>
