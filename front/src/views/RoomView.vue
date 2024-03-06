<script>
    import { useLoginStore } from '@/stores/login';
    export default {
        name: 'RoomView',
        // data() {
        //     return {
        //         users: ,
        //         // avatar: `/src/src/image/avatar/avatar${localStorage.getItem('avatarIndex')}.jpg`,
        //     };
        // },
        setup() {
            const loginStore = useLoginStore();
            return {
                loginStore
            }
        }
    }
</script>

<template>
    <div v-for="user in loginStore.users">
        <p>{{ user.pseudo }}</p>
        <img :src=user.avatar alt="">
    </div>
    <button>Partager le lien</button>
    <button @click="this.$router.push('/question')">Lancer la partie</button>
</template>


<style scoped> 
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }


</style>