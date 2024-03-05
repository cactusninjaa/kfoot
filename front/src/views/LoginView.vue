<script>
    import  Input  from "@/components/Input.vue";
    import Slider from "@/components/Slider.vue";
    export default {
        name: 'LoginView',
        data() {
            return {
                formPseudo: {
                    pseudo: ''
                }
            };
        },
        components: {
            Input,
            Slider
        },
        methods: {
            setPseudo(){
                localStorage.setItem('pseudo', this.formPseudo.pseudo); 
                this.$router.push('/');
            }
        }
    }
</script>

<template>
    <div>
        <p>logo</p>
        <Slider class="slider"/>
        <form @submit.prevent="setPseudo()">
            <input type="text" v-model="formPseudo.pseudo"/>
            <button type="submit">Créer une room</button>
        </form>
    </div>
</template>

<style scoped>
</style>