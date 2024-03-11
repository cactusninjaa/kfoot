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
</template>