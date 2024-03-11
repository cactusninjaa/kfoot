<script>

import { useListQuestionStore } from '../stores/listQuestion.js';
import CorrectionQuestion from '../components/CorrectionQuestion.vue';

export default {
    name: 'CorrectionView',
    components: {
        CorrectionQuestion,
    },
    data() {
        return {
            questions : {
                question : null,
                answer : null,
                link : null,
                type : null,
            },
            correct : false,
            playerPoint : 0,
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
    methods : {
        buttonCorrection(){
            this.correct =! this.correct;
            return this.correct;
        },
        sendPoint(){
            if(this.buttonCorrection() == false){
                this.playerPoint++;
            }
        },
        nextQuestion(){
            this.nbQuestion++;
            this.sendPoint();
            this.correct = false;
            console.log(this.nbQuestion);
        }

    }
}

</script>


<template>

<h1>Correction</h1>
<h2>{{  playerPoint }}</h2>
<h3> {{ nbQuestion }}</h3>

<div v-if="this.nbQuestion < this.listQuestions.length"> 
    <CorrectionQuestion :questions="this.listQuestions[this.nbQuestion]"></CorrectionQuestion>   

    <div class="buttons">
        <button @click="buttonCorrection()">{{ correct }}</button>
        <button class="Next" @click="nextQuestion()">Suivant</button>
    </div>
</div>
<div v-else>
    <h1>Terminé</h1>
</div>

</template>