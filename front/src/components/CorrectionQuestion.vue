<script>

export default {
    name: 'CorrectionQuestion',
    props: [       
        'questions',
    ],
    methods : {
       
    }
}
</script>


<template>
        <img :src="questions.link">
        <h1>{{ questions.question }}</h1>
        <h2>{{ questions.answer }}</h2>

        <div class="card-difficulty">
            <div v-if="questions.difficulty === 'easy'" class="difficulty-easy"></div>
            <div v-if="questions.difficulty === 'medium'" class="difficulty-medium"></div>
            <div v-if="questions.difficulty === 'hard'" class="difficulty-hard"></div>
      </div>

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