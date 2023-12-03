<!--Fichier d'entrée du site qui est lu par le navigateur-->
<!--Ici qu'il faut placer tout les composants-->

<script setup>
import ReTest from './components/ReTest.vue'
import page2 from './components/page2.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <!--Partie HTML: Description des elements du site-->
  <nav-bar class="navbar"/>

  <div class="pour-les-jolies-couleurs">
    <ReTest/>
    <page2/>
    
    
  </div>
  
  
</template>

<style scoped>
/*Partie CSS -Scoped : seulement sur ce fichier */
.pour-les-jolies-couleurs {
  color: white;
  flex-grow: 10;
  align-items: center;
  text-align: center;
 }
.navbar{
  /* position: fixed; */
  /* left: 0%; */
  /* top: 0%; */
  /* flex-grow: 2; */
}
</style>

<style>
/* Partie CSS non-scoped - sur toute l'application */

/* Parent de tout le monde */
#app {
  /* max-width: 1280px; */
  /* margin: 0 auto; */
  /* padding: 2rem; */
  text-align: center;
  min-width: 100%;
  max-width: 100%;
  display: flex;
  align-items: stretch;
}

/* Background */
body{
  background-color: black;
  background-size: cover;
  min-height: cover;
  min-width: cover;
  max-width: cover;
}
</style>
