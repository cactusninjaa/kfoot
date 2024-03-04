
<script>
export default {
  data() {
    return {
      link: null,
      question: null,
      answer: null,
    };
  },
  mounted() {
    fetch('http://localhost:3000/question/1')
      .then((response) => response.json())
      .then((data) => {
        this.link = data.link;
        this.question = data.question;
        this.answer = data.answer;
      })
      .catch((error) => console.error('Erreur:', error));
  },

};
</script>

<template>
  <div>
    <p>{{ question }}</p>
    <img v-if="this.link" :src="this.link" alt="Image de la question" />
    <p>{{ answer }}</p>
  </div>
</template>
