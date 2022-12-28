<template>
    <section id="portatiles">
        <v-container class="contenedor py-6">
            <v-row>
                <v-col>
                    <h1 class="titulo text-uppercase">Colectores portátiles</h1>
                </v-col>
            </v-row>

            <v-row class="">
                <v-col class=" pa-4 align-items-center" 
                        cols="12"  
                        sm="7">
                    <p class="texto text-justify">
                        El colector de polvos tipo portatiles, es un equipo modular, el cual utiliza filtros tipo portatiles/mangas, los cuales son la media filtrante que permiten capturar las partículas y asegurar que estas no sean expulsadas al medio ambiente.
                    </p>
                    <p class="texto text-justify">
                        El colector de polvo tipo portatiles ofrece un funcionamiento confiable y 100% eficiente.
                    </p>
                </v-col>

                <v-col  cols="12"  sm="4"  class="mx-auto">
                    <v-img class="w-100 h-auto" src="../../assets/img/polvos/polvos_03.jpg"></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <h3 class="subtitulo text-uppercase">Información</h3>
                </v-col>
                <v-col class="" 
                    cols="12"  
                    sm="12">
                    <p class="texto text-justify">
                        La entrada de aire sucio proveniente de la aplicación puede ser de dos tipos:
                    </p>

                    <h3 class="texto"><strong>Entrada en el cuerpo</strong></h3>
                    <p class="texto text-justify">
                        Para las aplicaciones con polvo liviano y fibroso, se tiene disponible la entrada de aire sucio por el cuerpo, que reduce la velocidad de entrada y de aire ascendente, lo que permite que el polvo colectado caiga correctamente dentro de la tolva después de que las portatiles lo han expulsado con el sistema de limpieza.
                    </p>

                    <h3 class="texto"><strong> Entrada por la tolva</strong></h3>
                    <p class="texto  text-justify">
                        El aire sucio entra sobre la parte inferior del colector, es decir por la tolva. El aire sucio impacta sobre el deflector en el extremo de la entrada, lo que hace que las partículas pesadas caigan directamente en la tolva. Esto reduce la cantidad de polvo que entra en contacto con las portatiles lo que brinda una vida útil más prolongada para la Portatil y menos caída de presión.
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
                            src="../../assets/img/portatiles/portatiles_02.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/portatiles/portatiles_03.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/portatiles/portatiles_04.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/portatiles/portatiles_05.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/portatiles/portatiles_06.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/portatiles/portatiles_07.jpg"
                        ></v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12">
                    <h3 class="subtitulo text-uppercase">Especificaciones</h3>
                </v-col>

                <v-col cols="12" class="">
                    <v-simple-table
                    fixed-header
                    height="400px">
                    <thead>
                        <tr>
                            <th class="titulo_tabla text-center">Modelo</th>
                            <th class="titulo_tabla text-center">Área Filtrante</th>
                            <th class="titulo_tabla text-center"># de Filtros</th>
                            <th class="titulo_tabla text-center">Válvula de diafragma</th>
                            <th class="titulo_tabla text-center">Brazo Flexible</th>
                            <th class="titulo_tabla text-center">Diámetro</th>
                            <th class="titulo_tabla text-center">Alto</th>
                            <th class="titulo_tabla text-center">Ancho</th>
                            <th class="titulo_tabla text-center">Fondo</th>
                            <th class="titulo_tabla text-center">HP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="specsPortatil in specsPortatils" :key="specsPortatil.modelo">
                            <td class="dato_tabla text-center">{{specsPortatil.modelo}}</td>
                            <td class="dato_tabla text-center">{{specsPortatil.area}}</td>
                            <td class="dato_tabla text-center">{{specsPortatil.filtros}}</td>
                            <td class="dato_tabla text-center">{{specsPortatil.num_valvulas}}</td>
                            <td class="dato_tabla text-center">{{specsPortatil.valvula_diafragma}}</td>
                            <td class="dato_tabla text-center">{{specsPortatil.brazo_flexible}}</td>
                            <td class="dato_tabla text-center">{{specsPortatil.alto}}</td>
                            <td class="dato_tabla text-center">{{specsPortatil.ancho}}</td>
                            <td class="dato_tabla text-center">{{specsPortatil.fondo}}</td>
                            <td class="dato_tabla text-center">{{specsPortatil.hp}}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
                </v-col>              
            </v-row>            
        </v-container>
    </section>
</template>

<style>
    #portatiles{
        margin-top: 3rem;

    }

    #portatiles .contenedor{
        width: 90%;
    }

    .fondo_azul{
        background: var(--azul);
        color: var(--blanco);
        height: auto;
    }
</style>

<script>
    export default{
        data(){
            return{
                specsPortatils: [
                    {modelo:"FHW-1",area: "254", filtros:"1",  num_valvulas: "3", valvula_diafragma:"1 3/4", brazo_flexible:"1", diametro:"6´´", alto: "32", ancho:"20", fondo:"48", hp:"2"},
                    {modelo:"FHW2-3",area: "508", filtros:"2",  num_valvulas: "4", valvula_diafragma:"2 3/4", brazo_flexible:"2", diametro:"6´´", alto: "32", ancho:"40", fondo:"56", hp:"3"},
                    {modelo:"FHW2-5",area: "508", filtros:"2",  num_valvulas: "5",  valvula_diafragma:"2 3/4", brazo_flexible:"2", diametro:"8´´", alto: "32", ancho:"40", fondo:"58", hp:"5" },

                ],
            }
        }
    }
</script>