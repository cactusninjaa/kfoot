<script>
export default {
  name: 'QuestionView',
  components: {
  },
  data() {
    return {
     question : null,
     answer : null,
     link : null,
     time : 10,
    };
  },
 mounted() {
  window.onload = this.getQuestion(); this.startTimer();
  },
  methods : {
    getRandomInt(max){
      return Math.floor(Math.random() * Math.floor(max));
    }, 
    startTimer(){
      setInterval(() => {
        if (this.time === 0) {
          this.time = 10;
          this.getQuestion();
        } else {
          this.time--;
        }
      }, 1000);
    },
    getQuestion(){
      fetch('http://localhost:3000/question')
        .then(response => response.json())
        .then(data => {
          const random = this.getRandomInt(data.length);
          this.question = data[random].question;
          this.answer = data[random].answer;
          this.link = data[random].link;
          this.type = data[random].type;
        });
    }
  },
};
</script>

<template>
  <div>
   <p> Timer : {{ time }}</p>
    <div class="card">
      <div v-if="this.link" class="img">
        <img :src="this.link" alt="image">
      </div>
      <div v-else-if="this.type == 'song' " class="song">
        <audio controls>
          <source :src="this.link" type="audio/mpeg">
        </audio>
      </div>

      <div class="card-header">
        <h2>{{ this.question }}</h2>
      </div>
      <div class="card-body">
        <p>{{ this.answer }}</p>
      </div>
      <div class="input">
        <input type="text">
      </div>
    </div>
    
  </div>
   
</template>
