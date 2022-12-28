<template>
    <section id="cartuchos">
        <v-container class="contenedor py-6">
            <v-row>
                <v-col>
                    <h1 class="titulo text-uppercase">Colectores de Cartuchos</h1>
                </v-col>
            </v-row>

            <v-row class="">
                <v-col class=" pa-4 align-items-center" 
                        cols="12"  
                        sm="6">
                    <p class="texto text-justify">
                        Nuestros Colectores cuentan con la mejor tecnología.
                    </p>
                    <p class="texto text-justify">
                        En equipos con tecnologia de cartuchos tenemos aplicaciones con cargas de polvo menores a 5 gr/ft3 (11.44 g/m3)
                    </p>
                    <p class="texto text-justify">
                        Su eficiencia de filtración es sub-micrónica (99% en partículas superiores a 0,5 micrones)
                    </p>
                </v-col>

                <v-col cols="12" sm="4" class="mx-auto">
                    <v-img class="w-100 h-auto" src="../../assets/img/cartuchos/polvo_01.png"></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <h3 class="subtitulo text-uppercase">Información</h3>
                </v-col>
                <v-col class="" 
                    cols="12"  
                    sm="12"
                    md="12">
                    <p class="texto text-justify">
                        El acceso a los filtros es frontal desde la parte de afuera del colector a través de las puertas redondas frente al colector. No se requiere de herramienta para remover o instalar los filtros los cuales están horizontales.   
                    </p>
                    <p class="texto text-justify">
                        
                    </p>

                    <p class="texto text-justify">
                        La unidad cuenta con una entrada de aire sucio superior la cual crea un flujo de arriba hacia abajo en la sección de filtros que optimiza la operación de filtrado esta entrada frontal superior es estándar en cada módulo. 
                    </p>
                    
                    <p class="texto text-justify">
                        Los filtros se limpian automaticamente con pulsos de aire comprimido y su composición 80% celulosa, 20 % poliester.
                    </p>
                 
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <h3 class="subtitulo text-uppercase">Galería</h3>
                </v-col>
                
                <v-col cols="12" md="6" class="mx-auto">
                    <v-img class="w-100" src="../../assets/img/cartuchos/cartucho_01.png"></v-img>
                </v-col>
            </v-row>
            

            <v-row>
                <v-col cols="12">
                    <h3 class="subtitulo text-uppercase">Especificaciones</h3>
                </v-col>

                <v-col class="" 
                    cols="12"  
                    sm="12"
                    md="12">
                    <p class="texto">
                        El cuerpo del colector es de construcción de acero al carbón calibres 3/16 10 y 12 para soportar (+/-) 20" W.G.
                    </p>

                    <p class="texto">
                        Tolva de descarga de calibre 12, 60ø de inclinación, tipo piramidal. 
                    </p>

                    <p class="texto">
                        Los filtros (x) tipo cartucho contienen cada uno 254 ft2 de aire filtrante dando un total de x ft2. 
                    </p>
                </v-col>

                <v-col cols="12">
                    <v-simple-table
                    fixed-header
                    height="400px">
                    <thead>
                        <tr>
                            <th class="titulo_tabla text-center">Modelo</th>
                            <th class="titulo_tabla text-center">Filtros</th>
                            <th class="titulo_tabla text-center">Área Filtrante</th>
                            <th class="titulo_tabla text-center"># de Válvulas</th>
                            <th class="titulo_tabla text-center">Medida de Válvulas</th>
                            <th class="titulo_tabla text-center">Medida A (in)</th>
                            <th class="titulo_tabla text-center">Medida B (in)</th>
                            <th class="titulo_tabla text-center">Medida C (in)</th>
                            <th class="titulo_tabla text-center">Peso(Aprox) LBS</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="specsCartucho in specsCartuchos" :key="specsCartucho.modelo">
                            <td class="dato_tabla text-center">{{specsCartucho.modelo}}</td>
                            <td class="dato_tabla text-center">{{specsCartucho.num_filtros}}</td>
                            <td class="dato_tabla text-center">{{specsCartucho.area}}</td>
                            <td class="dato_tabla text-center">{{specsCartucho.num_valvulas}}</td>   
                            <td class="dato_tabla text-center">{{specsCartucho.medida_valvula}}</td>
                            <td class="dato_tabla text-center">{{specsCartucho.medida_a}}</td>
                            <td class="dato_tabla text-center">{{specsCartucho.medida_b}}</td>
                            <td class="dato_tabla text-center">{{specsCartucho.medida_c}}</td>   
                            <td class="dato_tabla text-center">{{specsCartucho.peso_lb}}</td>   
                        </tr>
                    </tbody>
                </v-simple-table>
                </v-col>              
            </v-row>          
        </v-container>
    </section>
</template>

<style>
    #cartuchos{
        margin-top: 3rem;
      
    }

</style>

<script>
    export default{
        data(){
            return{
                specsCartuchos: [
                    {modelo:"2-4", num_filtros: "4", area: "1,016", num_valvulas:"4", medida_valvula:"3/4´´", medida_a:"40", medida_b: "53", medida_c:"146", peso_lb:"1,127"},
                    {modelo:"2-8", num_filtros: "8", area: "2,032", num_valvulas:"4", medida_valvula:"1´´", medida_a:"40", medida_b: "79", medida_c:"146", peso_lb:"1,936"},
                    {modelo:"2-12", num_filtros: "12", area: "3,048", num_valvulas:"6", medida_valvula:"1´´", medida_a:"57", medida_b: "79", medida_c:"146", peso_lb:"2,307"},
                    {modelo:"2-16", num_filtros: "16", area: "4,096", num_valvulas:"8", medida_valvula:"1´´", medida_a:"80", medida_b: "79", medida_c:"146", peso_lb:"3,388"},
                    {modelo:"2-24", num_filtros: "24", area: "6,096", num_valvulas:"12", medida_valvula:"1´´", medida_a:"120", medida_b: "79", medida_c:"146", peso_lb:"4,318"},
                    {modelo:"2-36", num_filtros: "36", area: "9,144", num_valvulas:"18", medida_valvula:"1´´", medida_a:"171", medida_b: "79", medida_c:"146", peso_lb:"5,698"},
                    {modelo:"3-6", num_filtros: "6", area: "1,524", num_valvulas:"6", medida_valvula:"3/4´´", medida_a:"40", medida_b: "53", medida_c:"168", peso_lb:"1,350"},
                    {modelo:"3-12", num_filtros: "12", area: "3,048", num_valvulas:"6", medida_valvula:"1´´", medida_a:"40", medida_b: "79", medida_c:"168", peso_lb:"2,301"},
                    {modelo:"3-18", num_filtros: "18", area: "4,572", num_valvulas:"9", medida_valvula:"1´´", medida_a:"57", medida_b: "79", medida_c:"168", peso_lb:"2,737"},
                    {modelo:"3-24", num_filtros: "24", area: "6,096", num_valvulas:"12", medida_valvula:"1´´", medida_a:"80", medida_b: "79", medida_c:"168", peso_lb:"3,597"},
                    {modelo:"3-36", num_filtros: "36", area: "9,144", num_valvulas:"18", medida_valvula:"1´´", medida_a:"120", medida_b: "79", medida_c:"168", peso_lb:"5,326"},
                    {modelo:"3-48", num_filtros: "48", area: "12,192", num_valvulas:"24", medida_valvula:"1´´", medida_a:"161", medida_b: "79", medida_c:"168", peso_lb:"6,837"},
                    {modelo:"3-54", num_filtros: "54", area: "13,716", num_valvulas:"27", medida_valvula:"1´´", medida_a:"171", medida_b: "79", medida_c:"168", peso_lb:"7,090"},
                    {modelo:"3-60", num_filtros: "60", area: "15,240", num_valvulas:"30", medida_valvula:"1´´", medida_a:"201", medida_b: "79", medida_c:"168", peso_lb:"6,223"},
                    {modelo:"3-72", num_filtros: "72", area: "18,288", num_valvulas:"36", medida_valvula:"1´´", medida_a:"241", medida_b: "79", medida_c:"168", peso_lb:"9,904"},
                    {modelo:"4-16", num_filtros: "16", area: "4,064", num_valvulas:"8", medida_valvula:"1´´", medida_a:"40", medida_b: "79", medida_c:"189", peso_lb:"2,787"},
                    {modelo:"4-24", num_filtros: "24", area: "6,096", num_valvulas:"12", medida_valvula:"1´´", medida_a:"57", medida_b: "79", medida_c:"189", peso_lb:"4,380"},
                    {modelo:"4-32", num_filtros: "32", area: "8,128", num_valvulas:"16", medida_valvula:"1´´", medida_a:"80", medida_b: "79", medida_c:"189", peso_lb:"4,793"},
                    {modelo:"4-48", num_filtros: "48", area: "12,192", num_valvulas:"24", medida_valvula:"1´´", medida_a:"120", medida_b: "79", medida_c:"189", peso_lb:"6,707"},
                    {modelo:"4-64", num_filtros: "64", area: "16,256", num_valvulas:"32", medida_valvula:"1´´", medida_a:"162", medida_b: "79", medida_c:"189", peso_lb:"8,773"},
                    {modelo:"4-80", num_filtros: "80", area: "20,320", num_valvulas:"40", medida_valvula:"1´´", medida_a:"201", medida_b: "79", medida_c:"189", peso_lb:"10,634"},
                    {modelo:"4-96", num_filtros: "96", area: "24,384", num_valvulas:"48", medida_valvula:"1´´", medida_a:"241", medida_b: "79", medida_c:"189", peso_lb:"12,713"},
                    {modelo:"4-112", num_filtros: "112", area: "28,448", num_valvulas:"56", medida_valvula:"1´´", medida_a:"281", medida_b: "79", medida_c:"189", peso_lb:"14,698"},
                    {modelo:"4-128", num_filtros: "128", area: "32,512", num_valvulas:"64", medida_valvula:"1´´", medida_a:"322", medida_b: "79", medida_c:"189", peso_lb:"16,517"},
                ],
            }
        }
    }
</script>