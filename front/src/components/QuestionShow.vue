<script>

export default {
    name: 'QuestionShow',
    props: [       
        'questions',
    ],
    methods : {
       
    }
}

</script>

<template>

<div class="illustration" v-if="questions.type != ''">
  <div v-if="questions.type ==='song || spelling'">
    <audio controls>
      <source :src="questions.link" type="audio/mpeg">
    </audio>
  </div>
  
  <div v-else-if="questions.type == 'minutes' " class="video">
    <video controls>
      <source :src="questions.link" type="video/mp4">
    </video>
  </div>

  <div v-else class="img">
    <img :src="questions.link" alt="">
  </div>
</div>


  <div class="card-header">
    <h2>{{ questions.question }}</h2>
  </div>
  <div class="card-difficulty">
    <div v-if="questions.difficulty === 'easy'" class="difficulty-easy"></div>
    <div v-if="questions.difficulty === 'medium'" class="difficulty-medium"></div>
    <div v-if="questions.difficulty === 'hard'" class="difficulty-hard"></div>

  </div>

      <!-- <div class="card-body">
        <p>{{ questions.answer }}</p>
      </div> -->

</template>


<style>

.card-difficulty {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.card-difficulty div {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
}

.difficulty-easy {
  background-color: green;
}

.difficulty-medium {
  background-color: orange;
}

.difficulty-hard {
  background-color: red;
}


</style>