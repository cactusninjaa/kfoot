<script>

import { useListQuestionStore } from '../stores/listQuestion.js';
import QuestionShow from '../components/QuestionShow.vue';

export default {
  name: 'QuestionView',
  components: {
    QuestionShow,
  },
  data() {
    return {
      questions : {
        question : null,
        answer : null,
        link : null,
        type : null,
      },
      i : 0,
      time : 10,
     nbQuestion : 0,
    };
  },
  setup() {
    const listQuestionStore = useListQuestionStore();
    return {
      listQuestionStore,
    };
  },
  computed: {
    listQuestions(){
      return this.listQuestionStore.listQuestions;
    },
  },
 mounted() {
  window.onload =this.startTimer(), this.getQuestion(), this.listQuestions == [];
  },
  methods : {
    getRandomInt(max){
      return Math.floor(Math.random() * Math.floor(max));
    }, 
    startTimer(){
      this.timerId = setInterval(() => {
        if (this.time === 0) {
          this.time = 10;
          this.getQuestion();
        } else {
          this.time--;
        }
      }, 1000);  
    },
    addQuestion(){
      this.i++;
      console.log(this.i)
      console.log(this.questions)
      this.listQuestions.push(this.questions);  
      console.log(this.listQuestions)
    },
    getQuestion(){
      if (this.nbQuestion === 3){
         clearInterval(this.timerId);
         this.$router.push('/correction');
         return;
        }

      fetch('http://localhost:3000/question')
        .then(response => response.json())
        .then(data => {
          const random = this.getRandomInt(data.length);
          this.questions = {
            question : data[random].question,
            answer : data[random].answer,
            link : data[random].link,
            type : data[random].type,

          }
          this.nbQuestion++;
          let input = document.querySelector('input');
          input.value = '';
          this.addQuestion();
        });
    }
  },
};
</script>

<template>
  <div>
   <p> Timer : {{ this.time }}</p>
   <p> Question {{ this.nbQuestion }}</p>

    <div class="card">

      <QuestionShow :questions="this.questions"></QuestionShow>
      
      <div class="input">
        <input type="text">
      </div>
    </div>
  </div>
   
</template>
