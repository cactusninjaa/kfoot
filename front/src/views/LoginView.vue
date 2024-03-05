<script>
    import  Input  from "@/components/Input.vue";
    import Slider from "@/components/Slider.vue";
    import { useLoginStore } from '@/stores/login';

    export default {
        name: 'LoginView',
        data() {
            return {
                formUser: {
                    pseudo: '',
                    avatar: 'src/src/image/avatar/avatar0.jpg'
                }
            };
        },
        setup() {
            const loginStore = useLoginStore();
            return {
                loginStore
            }
        },
        components: {
            Input,
            Slider
        },
        methods: {
            updateAvatar(avatarSrc) {
                this.formUser.avatar = avatarSrc;
            },
            addUser(){
                this.loginStore.addUser(this.formUser);
                this.formUser = {
                    pseudo: '',
                    avatar: 'src/src/image/avatar/avatar0.jpg'
                }
                this.$router.push('/room');
            }
        }
    }
</script>

<template>
    <div>
        <p>logo</p>
        <Slider @update="updateAvatar"/>
        <form @submit.prevent="addUser()">
            <input type="text" v-model="formUser.pseudo"/>
            <button type="submit">Créer une room</button>
        </form>
    </div>
</template>

<style scoped>
</style>