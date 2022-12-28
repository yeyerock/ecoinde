<template>
    <v-footer
        padless
        id="footer"
      class="font-weight-medium"
    >
        <v-container class="py-5">
            <v-row class="d-flex align-center">
                <v-col
                    cols="12"
                    sm="5"
                    class="mx-auto d-flex flex-wrap justify-center mb-5 mb-md-0  "
                >
                    <v-btn class="mx-3" fab href="tel:+524424945752">
                        <v-icon class="">mdi-phone</v-icon>
                    </v-btn>

                    <v-btn class="mx-3" fab href="https://api.whatsapp.com/send?phone=5214424945752&text=Hola%20necesito%20información%20sobre%20un%20problema%20de%20filtración!" target="_blank">
                        <v-icon class="">mdi-whatsapp</v-icon>
                    </v-btn>

                    <v-btn class="mx-3" fab href="mailto:contacto@ecoinde.com">
                        <v-icon class="">mdi-email</v-icon>
                    </v-btn>
                </v-col>

                <v-col
                    cols="6"
                    sm="3"
                    class="mx-auto mb-5 mb-md-0"
                >   <v-img class="mx-auto img_footer" src="../assets/img/logo.svg">

                    </v-img>
                </v-col>

                <!-- <v-col
                    cols="12"
                    sm="4"
                    class="mx-auto"
                >
                    <div class="cont_leyenda text-center ">
                        <span class="texto">Crafted by: <a href="https://b312studio.com" >B312 Studio</a></span>
                    </div>
                </v-col> -->

                
            </v-row>
        </v-container>       
    </v-footer>
</template>

<style>
    #footer{
        background: var(--negro);
    }

    #footer .texto{
        color: var(--blanco);
    }   
 
    #footer .cont_leyenda span a{
        color: var(--azul);
    }

    #footer .icono:hover,
    #footer .cont_leyenda .texto a:hover{
        color: var(--azul) !important;
        transition: 0.3s;
    }
</style>