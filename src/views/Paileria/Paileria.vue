<template>
    <section id="paileria">
        <v-container class="contenedor py-6 mx-auto">
            <v-row>
                <v-col>
                    <h1 class="titulo text-uppercase">Pailería</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <video class="video_hor_paileria" src="../../assets/videos/paileria_full.mp4" controls disablepictureinpicture  controlslist="nodownload nofullscreen noplaybackrate"></video>
                </v-col>              
            </v-row>

            <v-row class="">
                <v-col class=" pa-4 align-items-center" 
                        cols="12"  >
                        <p class="texto text-justify">
                        En <strong>Ecoinde</strong> contamos con un taller especializado en pailería con personal experimentado encargado de trazar, armar, soldar y dar acabado a piezas requeridas para sistemas de captura, transporte y filtración de contaminantes..
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <h3 class="subtitulo text-uppercase">Fabricamos</h3>
                </v-col>
                <v-col class="" 
                    cols="12"  
                    sm="12">
                    
                    <p class="texto text-justify">
                        Fabricamos:
                    </p>
                    <p class="texto text-justify">
                        • Ducteria en lámina y placa de diversos calibres:  Lámina Negra, Galvanizada e Inoxidable
                    </p>
                    <p class="texto text-justify">
                        • Bridas en placa de acero
                    </p>
                    <p class="texto text-justify">
                        • Ciclones y Equipos de separación mecánica de contaminantes
                    </p>
                    <p class="texto text-justify">
                        • Campanas de extracción
                    </p>
                    <p class="texto text-justify">
                        • Estructuras Metálicas
                    </p>                    
                </v-col>
            </v-row>     

            <v-row>
                <v-col cols="12">
                    <h3 class="subtitulo text-uppercase">Galería</h3>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-img class="w-100" src="../../assets/img/nosotros/equipo_01.jpg"></v-img>
                </v-col>
                 
                <v-col cols="12" sm="6" md="4">
                    <v-img class="w-100" src="../../assets/img/nosotros/equipo_02.jpg"></v-img>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-img class="w-100" src="../../assets/img/nosotros/equipo_06.jpg"></v-img>
                </v-col> 
                 
                <v-col cols="12" sm="6" md="4">
                    <v-img class="w-100" src="../../assets/img/nosotros/equipo_03.jpg"></v-img>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-img class="w-100" src="../../assets/img/nosotros/equipo_04.jpg"></v-img>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-img class="w-100" src="../../assets/img/nosotros/equipo_09.jpg"></v-img>
                </v-col> 
                <!-- <v-col cols="12" sm="6" md="4">
                    <v-img class="w-100" src="../../assets/img/nosotros/equipo_05.jpg"></v-img>
                </v-col> -->
                    
                <v-col cols="12" sm="6" md="4">
                    <v-img class="w-100" src="../../assets/img/nosotros/equipo_08.jpg"></v-img>
                </v-col>      
                <v-col cols="12" sm="6" md="4">
                    <v-img class="w-100" src="../../assets/img/nosotros/equipo_10.jpg"></v-img>
                </v-col>   
                <v-col cols="12" sm="6" md="4">
                    <v-img class="w-100" src="../../assets/img/nosotros/equipo_11.jpg"></v-img>
                </v-col>   
                       
               
            </v-row>
        </v-container>
        
       
    </section>
</template>

<style>
    #paileria{
        margin-top: 3rem;
        margin-bottom: 0;
    }

    .video_hor_paileria{
        width: 100%;
    }

</style>

<script>
export default {
     
}
</script>