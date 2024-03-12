<script>
import { useLoginStore } from '../stores/login.js';
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
                link : '',
                type : null,
                difficulty : null,
            },
            correct : false,
            nbQuestion : 0,
            currentPlayer : 0,
        };
    },
    setup() {
       const loginStore = useLoginStore();
       const listQuestionStore = useListQuestionStore();
       return {
           listQuestionStore,
           loginStore,
       };
    },
    computed: {
        listQuestions(){
            return this.listQuestionStore.listQuestions;
        },
        login(){
            return this.loginStore.users;
        }
    },
    methods : {
        buttonCorrection(){
            this.correct =! this.correct;
            return this.correct;
        },
        sendPoint(){
            if(this.buttonCorrection() == false){
                this.login[this.currentPlayer].score += 1;
            }
        },
        nextQuestion(){
            this.nbQuestion++;
            this.sendPoint();
            this.correct = false;
            this.currentPlayer = 0;
        },
        nextPlayer(){
            this.currentPlayer++;
        }

    }
}

</script>


<template>

<h1>Correction</h1>
<h2>Score : {{  this.login[this.currentPlayer].score }}</h2>
<h3> Question : {{ nbQuestion + 1 }}</h3>
<h4> Pseudo : {{  this.login[this.currentPlayer].pseudo }}</h4>

<div v-if="this.nbQuestion < this.listQuestions.length"> 
    <CorrectionQuestion :questions="this.listQuestions[this.nbQuestion]"></CorrectionQuestion>   
    <div class="answerPlayer">
        <h4>
            Réponse : {{ this.login[this.currentPlayer].response[this.nbQuestion] }}
        </h4>
    </div>

    <div class="buttons">
        <button @click="buttonCorrection()">{{ correct }}</button>
        <div class="buttonNext">
            <button class="Next" @click="nextQuestion()" v-if="this.currentPlayer === this.login.length - 1">Suivant</button>
            <button v-else class="Next" @click="nextPlayer()">Suivant</button>
         </div>
    </div>
</div>

<div v-else>
    <h1>Terminé</h1>
</div>

</template>