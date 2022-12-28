<template>
    <section id="proceso"  >
        <v-container class="">
            <v-row class="cont_titulo">
                <v-col>
                    <h1 class="titulo text-justify">Conoce nuestro proceso</h1>
                </v-col>                
            </v-row>
        </v-container>  

            <div class="subsection_one d-flex flex-column justify-center align-items-center ">
                <v-container class="contenedor ">
                    <v-row class="">
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                            class="mx-auto"
                        >
                            <div class="cont_lottie">
                                <lottie-player class="lottie w-100  mx-auto" src="https://assets9.lottiefiles.com/packages/lf20_rvvxfhc3.json" background="none"  speed="1"  loop autoplay></lottie-player> 
                            </div>
                        </v-col>     
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                            class="d-flex flex-column justify-center align-items-center">
                                <h2 class="text-uppercase subtitulo">Levantamiento</h2>
                                <p class="texto reveal text-justify fade-right">Nuestro equipo te visita para realizar un levantamiento e identificar el problema raíz que se está presentando.</p>
                           
                        </v-col>           
                    </v-row>
                </v-container>               
            </div>

            <div class="subsection_two d-flex flex-column justify-center align-items-center ">
                <v-container class="contenedor">
                    <v-row class="flex-sm-row-reverse">
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                            class="mx-auto"
                        >
                        <div class="cont_lottie">
                            <lottie-player class="lottie w-100  mx-auto" src="https://assets3.lottiefiles.com/packages/lf20_f4txtuex.json" background="none"  speed="1"  loop autoplay></lottie-player> 
                        </div> 
                        </v-col>     
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                            class="d-flex flex-column justify-center align-items-center">
                                <h2 class="text-uppercase subtitulo">Ingeniería</h2>
                                <p class="texto reveal text-justify fade-right">Llevamos a cabo la ingeniería del sistema de ductería, tomando en cuenta las normas de seguridad para que el proyecto que sea eficiente y confiable.</p>
                           
                        </v-col>           
                    </v-row>
                </v-container>
            </div>

            <div class="subsection_three d-flex flex-column justify-center align-items-center ">
                <v-container class="contenedor">
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                            class="mx-auto"
                        >
                        <div class="cont_lottie">
                            <lottie-player class="lottie w-100  mx-auto" src="https://assets8.lottiefiles.com/packages/lf20_ddypxvrv.json" background="none"  speed="1"  loop autoplay></lottie-player> 
                        </div>
                        </v-col>     
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                            class="d-flex flex-column justify-center align-items-center">
                           
                                <h2 class="text-uppercase subtitulo">Planeación</h2>
                                <p class="texto reveal text-justify fade-right">Se coordina la planeación con el cliente para definir objetivos y tiempos de entrega.</p>
                           
                        </v-col>           
                    </v-row>
                </v-container>
            </div>

            <div class="subsection_four d-flex flex-column justify-center align-items-center ">
                <v-container class="contenedor">
                    <v-row class="flex-sm-row-reverse">
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                            class="mx-auto"
                        >
                        <div class="cont_lottie">
                            <lottie-player class="lottie w-100  mx-auto" src="https://assets7.lottiefiles.com/packages/lf20_xhr1qexf.json" background="none"  speed="1"  loop autoplay></lottie-player> 
                        </div>
                        </v-col>     
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                            class="d-flex flex-column justify-center align-items-center">
                                <h2 class="text-uppercase subtitulo">Implementación</h2>
                                <p class="texto reveal text-justify fade-right">Se realiza la implementación del proyecto, de acuerdo a la planeación siguiendo las normas y estándares de calidad y seguridad.</p>
                          
                        </v-col>           
                    </v-row>
                </v-container>
            </div>

            <div class="subsection_five d-flex flex-column justify-center align-items-center">
                <v-container class="contenedor">
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                            class="mx-auto"
                        >
                        <div class="cont_lottie">
                            <lottie-player class="lottie w-100  mx-auto" src="https://assets4.lottiefiles.com/packages/lf20_pvxrmko2.json" background="none"  speed="1"  loop autoplay></lottie-player> 
                        </div>
                        </v-col>     
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                            class="d-flex flex-column justify-center align-items-center">
                                <h2 class="text-uppercase subtitulo">Entrega</h2>
                                <p class="texto reveal text-justify fade-right">Una vez finalizado el proyecto, se valida con el cliente y su estatus cambia a completado.</p>
                          
                        </v-col>           
                    </v-row>
                </v-container>
            </div>
        
    </section>
</template>

<script>
export default {
    
}
</script>

<style>
    #proceso .subsection_one,
    #proceso .subsection_two,
    #proceso .subsection_three,
    #proceso .subsection_four,
    #proceso .subsection_five{
    }

    #proceso .contenedor{
       width: 90%;
    }

    .cont_lottie{
        width: 100%;
    }

    

  
</style>