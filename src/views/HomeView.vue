<template>
  <div class="home">
    <Banner/>
    <Soluciones/>    
    <Proceso/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/Banner.vue'
import Proceso from '@/components/Proceso.vue'
import Soluciones from './Soluciones.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Banner,
    Proceso,
    Soluciones,
}
}
</script>

<style>
  .home{
    /* margin-top:10%; */
  }
</style>
