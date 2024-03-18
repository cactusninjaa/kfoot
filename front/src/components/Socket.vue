<script>
import io from 'socket.io-client';

export default {
  name: 'Socket',
  data() {
    return {
      socket: null,
    };
  },
  created() {
    this.socket = io('http://localhost:3000'); // Remplacez par l'URL de votre serveur

    this.socket.on('connect', () => {
      console.log('Connecté au serveur');
    });

    this.socket.on('disconnect', () => {
      console.log('Déconnecté du serveur');
    });

    // Écoutez les événements spécifiques à votre jeu ici, par exemple :
    // this.socket.on('gameStateUpdate', this.handleGameStateUpdate);
    this.socket.on('consoleLog', this.consoleLog());
  },
  methods: {
    // Définissez les méthodes pour gérer les événements de socket ici, par exemple :
    // handleGameStateUpdate(newState) {
    //   // Mettez à jour l'état du jeu ici
    // },

    consoleLog(){
      console.log('test');
    }
  },
  beforeDestroy() {
    if (this.socket) {
      this.socket.disconnect();
    }
  },
};
</script>


<template>
  <div>
    <!-- Votre code HTML ici -->
  </div>
</template>

<style scoped>
/* Votre CSS ici */
</style>