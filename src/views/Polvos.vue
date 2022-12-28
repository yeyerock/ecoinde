<template>
    <section id="polvos">
        <v-container class="contenedor py-6">
            <v-row>
                <v-col>
                    <h1 class="titulo text-uppercase">Polvos y Humos</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col class=" pa-4 align-items-center" 
                        cols="12"  
                        sm="6"
                >
                    <p class="texto text-justify">Nuestros Colectores cuentan con la mejor tecnología.</p>
                        
                </v-col>
                <v-col cols="12"  sm="4"  class="mx-auto">
                    <v-img class="w-100 h-auto" src="../assets/img/polvos/polvos_01.png"></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <h3 class="titulo text-uppercase text-center">Nuestros Productos</h3>
                </v-col>
            </v-row>

            <v-row class="contenedor_polvos mx-auto">
                <v-col class="mx-auto" cols="12" sm="6" lg="4">
                    <v-card outlined class="pa-4 cont_card" height="100%">
                        <router-link to="/cartuchos">
                            <v-img class="img_card mx-auto"  src="../assets/img/polvos/polvos_01.png"></v-img>                       
                            <h3 class="mt-3 titulo_card text-center text-uppercase">Colectores de cartuchos</h3>       
                        </router-link>                    
                    </v-card>
                </v-col>

                <v-col class="mx-auto" cols="12" sm="6" lg="4">
                    <v-card outlined class="pa-4 cont_card" height="100%">
                        <router-link to="/bolsas">
                            <v-img class="img_card mx-auto"  src="../assets/img/bolsas/colector_de_bolsas.png"></v-img>                        
                            <h3 class="mt-3 titulo_card text-center text-uppercase">Colectores de bolsas</h3>     
                        </router-link>                                          
                    </v-card>
                </v-col>

                <v-col class="mx-auto" cols="12" sm="6" lg="4">
                    <v-card outlined class="pa-4 cont_card" height="100%">
                        <router-link to="/portatiles">
                            <v-img class="img_card mx-auto"  src="../assets/img/polvos/polvos_03.png"></v-img>
                            <h3 class="mt-3 titulo_card text-center text-uppercase">Colectores portátiles</h3>   
                        </router-link>                    
                    </v-card>
                </v-col>

                <v-col class="mx-auto" cols="12" sm="6" lg="4">
                    <v-card outlined class="pa-4 cont_card" height="100%">
                        <router-link to="/cabinas">
                            <v-img class="img_card mx-auto"  src="../assets/img/cabinas/cabinas_de_pulido.png"></v-img>                        
                            <h3 class="mt-3 titulo_card text-center text-uppercase">Cabinas de pulido</h3>    
                        </router-link>                     
                    </v-card>
                </v-col>

                <v-col class="mx-auto" cols="12" sm="6" lg="4">
                    <v-card outlined class="pa-4 cont_card" height="100%">
                        <router-link to="/ciclones">
                            <v-img class="img_card mx-auto"  src="../assets/img/ciclones/ciclones.png"></v-img>
                            <h3 class="mt-3 titulo_card text-center text-uppercase">Ciclones</h3>
                        </router-link>     
                    </v-card>
                </v-col>   
                
                <v-col class="mx-auto" cols="12" sm="6" lg="4">
                    <v-card outlined class="pa-4 cont_card" height="100%">
                        <router-link to="/mesa_pulido">
                            <v-img class="img_card mx-auto"  src="../assets/img/mesa_pulido/mesa_pulidora.png"></v-img>
                            <h3 class="mt-3 titulo_card text-center text-uppercase">Mesa de pulido</h3>
                        </router-link>     
                    </v-card>
                </v-col>  
            </v-row>
        </v-container>       
    </section>
</template>

<style>
    #polvos{
        margin-top:3rem;
    }

    #polvos .contenedor{
        width: 90%;
    }

    .contenedor_polvos{
        width: 80%;
    }

    .cont_card:hover{
        background: var(--azul);
        transition: 0.3s;
        opacity: 0.8;
    }



</style>