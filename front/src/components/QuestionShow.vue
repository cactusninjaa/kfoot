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


<div v-if="questions.link" class="img">
        <img :src="questions.link" alt="image">
      </div>
      <div v-else-if="questions.type == 'song' " class="song">
        <audio controls>
          <source :src="questions.link" type="audio/mpeg">
        </audio>
      </div>
      <div v-else-if="questions.type == 'video' " class="video">
        <video>
          <source :src="questions.link" type="video/mp4">
        </video>
      </div>

      <div class="card-header">
        <h2>{{ questions.question }}</h2>
      </div>
      <div class="card-body">
        <p>{{ questions.answer }}</p>
      </div>
</template>