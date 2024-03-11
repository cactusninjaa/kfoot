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
     nbQuestion : 0,
     correct : false,
     playerPoint : 0,
    };
  },
 mounted() {
  window.onload =this.startTimer(), this.getQuestion();
  },
  methods : {
    getRandomInt(max){
      return Math.floor(Math.random() * Math.floor(max));
    }, 
    startTimer(){
      setInterval(() => {
        if (this.time === 0) {
          this.sendPoint();
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
          this.nbQuestion++;
          this.correct = false;
        });
      if (this.nbQuestion === 20) {
        this.$router.push('/');
      }
    },
    buttonCorrection(){
      this.correct =! this.correct;
      console.log(this.correct);
      return this.correct;
    },
    sendPoint(){
      console.log("test")
      if(this.buttonCorrection() == false){
        this.playerPoint++;
      }
    }

  },
};
</script>

<template>
  <div>
   <p> Timer : {{ time }}</p>
   <p> {{ nbQuestion }}</p>
    <p>Points : {{ playerPoint }}</p>

    <div class="card">
      <div v-if="this.link" class="img">
        <img :src="this.link" alt="image">
      </div>
      <div v-else-if="this.type == 'song' " class="song">
        <audio controls>
          <source :src="this.link" type="audio/mpeg">
        </audio>
      </div>
      <div v-else-if="this.type == 'video' " class="video">
        <video>
          <source :src="this.link" type="video/mp4">
        </video>
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
      <div>
        <button @click="buttonCorrection">{{ correct }}</button>
      </div>
    </div>
    
  </div>
   
</template>
