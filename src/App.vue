<template>
  <v-app>
    <Menu/>

    <v-main>
      <router-view/>
      
    <Footer/>
    </v-main>
  </v-app>
</template>

<script>

import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default {

  name: 'App',

  components: {
    //  HelloWorld,
      Menu, Footer
    },
    methods: {
      inicio(){},
      
      },

  data: () => ({
    //
  }),
};
</script>


<style>

  :root{
    --negro: #050303;
    --azul:#496DDB;
    --rojo: #F06449;
    --gris: #9999A1;
    --blanco: #F4F4F6;
  }

  /* Fuente DIN */

  @font-face {
    font-family: "Din";
    src: local("Din"),
    url(./assets/fonts/Din-Font/DIN.ttf) format("truetype");
  }

  @font-face {
    font-family: "DinBlack";
    src: local("DinBlack"),
    url(./assets/fonts/Din-Font/DIN_Black.ttf) format("truetype");
  }

  @font-face {
    font-family: "DinBold";
    src: local("DinBold"),
    url(./assets/fonts/Din-Font/DIN_Bold.ttf) format("truetype");
  }

  @font-face {
    font-family: "DinMedium";
    src: local("DinMedium"),
    url(./assets/fonts/Din-Font/DIN_Medium.ttf) format("truetype");
  }

  .titulo{
    /* font-family: sui-generis, sans-serif;
    font-weight: 700;
    font-style: normal; */
    font-family: "DinBlack";
    font-size:2.5rem;
  }

  .subtitulo{
    /* font-family: sui-generis, sans-serif;
    font-weight: 500;
    font-style: normal; */
    font-family: "DinMedium";
    font-size: 1.5rem;
  }

  .texto{
    /* font-family: sui-generis, sans-serif;
    font-weight: 400;
    font-style: normal; */
    font-family: "Din";
    font-size:1rem !important ;
  }

  .titulo_card{
    font-family: "DinMedium";
    font-size: 1.7rem !important;
    color: var(--negro);
  }

  .titulo_tabla{
    font-family: "DinMedium";
    font-size: 1rem !important;
  }

  .texto_tabla{
    font-family: "Din" !important;
  }

  .cont_texto .texto{
    text-align: justify;
  }

  html{
    width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
  }

 *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.4s ease all;
  }

  a{
      text-decoration: none;
      
  } 

  a:hover{
      cursor: pointer;
  }

  ul {
    padding: 0 !important;
    margin: 0 !important;
  }

  section{
    width: 100vw;
  }

  .texto span,
  .titulo span,
   .subtitulo span{
    color: var(--rojo);
  }

  nav {
    padding: 30px;
  }

.reveal {
  position: relative;
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}
.active.fade-bottom {
  animation: fade-bottom 1s ease-in;
}
.active.fade-left {
  animation: fade-left 1s ease-in;
}
.active.fade-right {
  animation: fade-right 1s ease-in;
}
@keyframes fade-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>

