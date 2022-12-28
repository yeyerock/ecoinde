<template>
    <section id="bolsas">
        <v-container class="contenedor py-6">
            <v-row>
                <v-col>
                    <h1 class="titulo text-uppercase">Colectores de bolsas</h1>
                </v-col>
            </v-row>

            <v-row class="">
                <v-col class=" pa-4 align-items-center" 
                        cols="12"  
                        sm="7">
                    <p class="texto text-justify">
                        El colector de polvos tipo bolsas, es un equipo modular, el cual utiliza filtros tipo bolsas/mangas, los cuales son la media filtrante que permiten capturar las partículas y asegurar que estas no sean expulsadas al medio ambiente.
                    </p>
                    <p class="texto text-justify">
                        El colector de polvo tipo bolsas ofrece un funcionamiento confiable y 100% eficiente.
                    </p>
                </v-col>

                <v-col  cols="12"  sm="4"  class="mx-auto">
                    <v-img class="w-100 h-auto" src="../../assets/img/bolsas/colector_de_bolsas.png"></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <h3 class="subtitulo text-uppercase">Información</h3>
                </v-col>
                <v-col class="" 
                    cols="12"  
                    sm="12">
                    <p class="texto">
                        La entrada de aire sucio proveniente de la aplicación puede ser de dos tipos:
                    </p>

                    <h3 class="texto"><strong>Entrada en el cuerpo</strong></h3>
                    <p class="texto text-justify">
                        Para las aplicaciones con polvo liviano y fibroso, se tiene disponible la entrada de aire sucio por el cuerpo, que reduce la velocidad de entrada y de aire ascendente, lo que permite que el polvo colectado caiga correctamente dentro de la tolva después de que las bolsas lo han expulsado con el sistema de limpieza.
                    </p>

                    <h3 class="texto"><strong> Entrada por la tolva</strong></h3>
                    <p class="texto  text-justify">
                        El aire sucio entra sobre la parte inferior del colector, es decir por la tolva. El aire sucio impacta sobre el deflector en el extremo de la entrada, lo que hace que las partículas pesadas caigan directamente en la tolva. Esto reduce la cantidad de polvo que entra en contacto con las bolsas lo que brinda una vida útil más prolongada para la bolsa y menos caída de presión.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <h3 class="subtitulo text-uppercase">Galería</h3>
                </v-col>
                
                <v-col cols="12" md="6" class="mx-auto">
                    <v-carousel hide-delimiters>
                        <v-carousel-item
                            src="../../assets/img/bolsas/bolsas_02.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/bolsas/bolsas_03.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/bolsas/bolsas_04.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/bolsas/bolsas_05.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/bolsas/bolsas_06.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/bolsas/bolsas_07.jpg"
                        ></v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12">
                    <h3 class="subtitulo text-uppercase">Especificaciones</h3>
                </v-col>

                <v-col cols="12" md="6" class="mx-auto">
                    <v-img  src="../../assets/img/bolsas/bolsas_09.jpg" class="w-100">
                    </v-img>
                </v-col>

                <v-col cols="12" class="">
                    <v-simple-table
                    fixed-header
                    height="400px">
                    <thead>
                        <tr>
                            <th class="titulo_tabla text-center">Modelo</th>
                            <th class="titulo_tabla text-center">Filtros</th>
                            <th class="titulo_tabla text-center">Área Filtrante</th>
                            <th class="titulo_tabla text-center"># Valvulas</th>
                            <th class="titulo_tabla text-center">Medida Válvula</th>
                            <th class="titulo_tabla text-center">Medida A(in)</th>
                            <th class="titulo_tabla text-center">Medida B(in)</th>
                            <th class="titulo_tabla text-center">Medida C(in)</th>
                            <th class="titulo_tabla text-center">Peso(Aprox) LBS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="specsBolsa in specsBolsas" :key="specsBolsa.modelo">
                            <td class="dato_tabla text-center">{{specsBolsa.modelo}}</td>
                            <td class="dato_tabla text-center">{{specsBolsa.filtros}}</td>
                            <td class="dato_tabla text-center">{{specsBolsa.area}}</td>
                            <td class="dato_tabla text-center">{{specsBolsa.num_valvulas}}</td>
                            <td class="dato_tabla text-center">{{specsBolsa.medida_valvula}}</td>
                            <td class="dato_tabla text-center">{{specsBolsa.medida_a}}</td>
                            <td class="dato_tabla text-center">{{specsBolsa.medida_b}}</td>
                            <td class="dato_tabla text-center">{{specsBolsa.medida_c}}</td>
                            <td class="dato_tabla text-center">{{specsBolsa.peso_lb}}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
                </v-col>              
            </v-row>            
        </v-container>
    </section>
</template>

<style>
    #bolsas{
        margin-top: 3rem;
       
    }

    #bolsas .contenedor{
        width: 90%;
    }

    .fondo_negro{
        background: var(--negro);
        color: var(--blanco);
        height: auto;
    }
</style>

<script>
    export default{
        data(){
            return{
                specsBolsas: [
                    {modelo:"FB-170-9-6-12-AS",filtros:"9", area: "170", num_valvulas: "3", medida_valvula:"1´´ ", medida_a:"273 1/2", medida_b: "68 7/8", medida_c:"47 5/16", peso_lb:"2,867"},
                    {modelo:"FB-302-16-6-12-AS",filtros:"16", area: "302", num_valvulas: "4", medida_valvula:"1´´ ", medida_a:"279 1/4", medida_b: "77 3/8", medida_c:"55 3/4", peso_lb:"3,297"},
                    {modelo:"FB-472-25-6-12-AS",filtros:"25", area: "472", num_valvulas: "5", medida_valvula:"1´´", medida_a:"280", medida_b: "89 3/8", medida_c:"64 5/16", peso_lb:"3,820" },
                    {modelo:"FB-679-36-6-12-AS",filtros:"36", area: "679", num_valvulas: "6", medida_valvula:"1 1/2´´ ", medida_a:"317", medida_b: "99 1/2", medida_c:"72 13/16", peso_lb:"4,484" },
                    {modelo:"FB-924-49-6-12-AS",filtros:"49", area: "924", num_valvulas: "7", medida_valvula:"1 1/2´´ ", medida_a:"327 7/8", medida_b: "103 7/8", medida_c:"81 5/16", peso_lb:"5,501" },                    
                    {modelo:"FB-1207-64-6-12-AS",filtros:"64", area: "1,207", num_valvulas: "8", medida_valvula:"1 1/2´´ ", medida_a:"351 1/2", medida_b: "110 1/2", medida_c:"78 1/2", peso_lb:"6,120" },
                    {modelo:"FB-1527-81-6-12-AS",filtros:"81", area: "1,527", num_valvulas: "9", medida_valvula:"1 1/2´´ ", medida_a:"333 1/2", medida_b: "123 5/8", medida_c:"98 1/4", peso_lb:"7,256" },
                    {modelo:"FB-1697-90-6-12-AS",filtros:"90", area: "1,697", num_valvulas: "9", medida_valvula:"1 1/2´´ ", medida_a:"353", medida_b: "128", medida_c:"98 1/4", peso_lb:"7,378" },
                    {modelo:"FB-1885-100-6-12-AS",filtros:"100", area: "1,885", num_valvulas: "10", medida_valvula:"1 1/2´´ ", medida_a:"360 1/2", medida_b: "134 5/8", medida_c:"106 3/4", peso_lb:"7,765" },
                    {modelo:"FB-2262-120-6-12-AS",filtros:"120", area: "2,262", num_valvulas: "12", medida_valvula:"1 1/2´´ ", medida_a:"373 7/8", medida_b: "157 3/4", medida_c:"106 3/4", peso_lb:"8,941" },

                    {modelo:"FB-2639-140-6-12-AS",filtros:"140", area: "2,639", num_valvulas: "14", medida_valvula:"1 1/2´´ ", medida_a:"387", medida_b: "174 3/4", medida_c:"106 3/4 ", peso_lb:"9,870" },

                    {modelo:"FB-3016-160-6-12-AS",filtros:"160", area: "3,016", num_valvulas: "16", medida_valvula:"1 1/2´´ ", medida_a:"359 1/2", medida_b: "186 1/8", medida_c:"106 3/4", peso_lb:"10,799" },
                    {modelo:"FB-3393-180-6-12-AS",filtros:"180", area: "3,393", num_valvulas: "18", medida_valvula:"1 1/2´´ ", medida_a:"361 1/4", medida_b: "208 3/4", medida_c:"106 3/4", peso_lb:"11,252" },
                    {modelo:"FB-3770-200-6-12-AS",filtros:"200", area: "3,770", num_valvulas: "20", medida_valvula:"1 1/2´´ ", medida_a:"367 7/8", medida_b: "229 3/4", medida_c:"106 3/4", peso_lb:"12,514" },
                    {modelo:"FB-4147-220-6-12-AS",filtros:"220", area: "4,147", num_valvulas: "22", medida_valvula:"1 1/2´´ ", medida_a:"362 1/2", medida_b: "243 1/2", medida_c:"106 3/4", peso_lb:"13,330" },
                    {modelo:"FB-4524-240-6-12-AS",filtros:"240", area: "4,524", num_valvulas: "24", medida_valvula:"1 1/2´´ ", medida_a:"365 7/8", medida_b: "270", medida_c:"106 3/4", peso_lb:"14,274" },
                    {modelo:"FB-4901-260-6-12-AS",filtros:"260", area: "4,901", num_valvulas: "26", medida_valvula:"1 1/2´´ ", medida_a:"374", medida_b: "275 7/8", medida_c:"106 3/4", peso_lb:"15,098" },
                    {modelo:"FB-5278-280-6-12-AS",filtros:"280", area: "5,278", num_valvulas: "28", medida_valvula:"1 1/2´´ ", medida_a:"381 1/2", medida_b: "293 1/8", medida_c:"106 3/4", peso_lb:"16,145" },
                    {modelo:"FB-5655-300-6-12-AS",filtros:"300", area: "5,655", num_valvulas: "30", medida_valvula:"1 1/2´´ ", medida_a:"360 1/2", medida_b: "310", medida_c:"106 3/4", peso_lb:"17,377" },
                    {modelo:"FB-6032-320-6-12-AS",filtros:"320", area: "6,032", num_valvulas: "32", medida_valvula:"1 1/2´´ ", medida_a:"360 1/2", medida_b: "327 3/8", medida_c:"106 3/4", peso_lb:"17,931" },
                    {modelo:"FB-6409-340-6-12-AS",filtros:"340", area: "6,409", num_valvulas: "34", medida_valvula:"1 1/2´´ ", medida_a:"361 1/2", medida_b: "344", medida_c:"106 3/4", peso_lb:"18,721" },
                    {modelo:"FB-6786-360-6-12-AS",filtros:"360", area: "6,786", num_valvulas: "36", medida_valvula:"1 1/2´´ ", medida_a:"360 1/2", medida_b: "366 1/2", medida_c:"106 3/4", peso_lb:"19,834" },
                    {modelo:"FB-7163-380-6-12-AS",filtros:"380", area: "7,163", num_valvulas: "38", medida_valvula:"1 1/2´´ ", medida_a:"371 1/2", medida_b: "378", medida_c:"106 3/4", peso_lb:"20,494" },
                    {modelo:"FB-7540-400-6-12-AS",filtros:"400", area: "7,540", num_valvulas: "40", medida_valvula:"1 1/2´´ ", medida_a:"365", medida_b: "362", medida_c:"106 3/4", peso_lb:"21,642" },
                    {modelo:"FB-7917-420-6-12-AS",filtros:"420", area: "7,917", num_valvulas: "42", medida_valvula:"1 1/2´´ ", medida_a:"370", medida_b: "373 3/8", medida_c:"106 3/4", peso_lb:"22,485" },
                    {modelo:"FB-8294-440-6-12-AS",filtros:"440", area: "8,294", num_valvulas: "44", medida_valvula:"1 1/2´´ ", medida_a:"366 7/8", medida_b: "433 3/4", medida_c:"106 3/4", peso_lb:"23,708" },
                    {modelo:"FB-8671-460-6-12-AS",filtros:"460", area: "8,671", num_valvulas: "46", medida_valvula:"1 1/2´´ ", medida_a:"354 3/8", medida_b: "457 1/4", medida_c:"106 3/4", peso_lb:"24,366" },
                    {modelo:"FB-9048-480-6-12-AS",filtros:"480", area: "9,048", num_valvulas: "48", medida_valvula:"1 1/2´´ ", medida_a:"369", medida_b: "473 7/8", medida_c:"106 3/4", peso_lb:"25,569" },
                    {modelo:"FB-9425-500-6-12-AS",filtros:"500", area: "9,425", num_valvulas: "50", medida_valvula:"1 1/2´´ ", medida_a:"354 7/8", medida_b: "497", medida_c:"106 3/4", peso_lb:"26,871" },
                ],
            }
        }
    }
</script>