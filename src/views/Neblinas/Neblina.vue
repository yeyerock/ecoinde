<template>
    <section id="neblinas">
        <v-container class="contenedor py-6 mx-auto">
            <v-row>
                <v-col>
                    <h1 class="titulo text-uppercase">Colectores de neblinas</h1>
                </v-col>
            </v-row>

            <v-row class="">
                <v-col class=" pa-4 align-items-center" 
                        cols="12"  
                        sm="7">
                    <p class="texto text-justify">
                        El colector de neblinas es un distema diseñado para filtrar neblina, humo y polvos húmedos de diferentes aplicaciones. Su principio se basa en la filtración de tres etapas para una máxima eficiencia y una óptima vida útil del filtro.
                    </p>
                    <p class="texto text-justify">
                        Está diseñado verticalmente para mejorar el drenado del aceite y mantener el aire limpio en base a las regulaciones internacionales.
                    </p>
                </v-col>

                <v-col  cols="12"  sm="4"  class="mx-auto">
                    <v-img class="w-100 h-auto" src="../../assets/img/neblinas/colector_de_nieblas.png"></v-img>
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
                        Su operación consiste en la entrada del aire contaminado con neblina por la parte inferior/lateral del equipo, al entrar en la primer etapa de filtración son capturadas las gotas más grandes, polvo de metal, y cualquier partícula pesada.
                    </p>

                    <p class="texto text-justify">
                        Posteriormente en la segunda etapa de filtración, que consiste en una fibra envoltoria de poliéster de varias capas recoge las gotas de niebla más pequeñas fusionándolas entre sí, y convirtiéndolas en gotas de neblinas más grandes que drenan fura del colector de neblinas, ayudando al proceso de coalescencia.
                    </p>

                    <p class="texto  text-justify">
                        En aplicaciones más complicadas, la tercera etapa que consta del filtro cartucho ayuda a que las partículas más finas generadas en la operación, sean drenadas y descargadas a la parte inferior del colector de neblinas..
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
                            src="../../assets/img/neblinas/neblinas_02.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/neblinas/neblinas_03.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/neblinas/neblinas_04.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/neblinas/neblinas_05.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/neblinas/neblinas_06.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/neblinas/neblinas_07.jpg"
                        ></v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12">
                    <h3 class="subtitulo text-uppercase">Especificaciones</h3>
                </v-col>
                
                <v-col class="" 
                    cols="12" >
                    <p class="texto">
                        El equipo colector de neblinas es modular y puede ser encontrado en distintas configuraciones ya que a piso o montable directamente en la aplicación para asegurar su correcta operación y mantenimiento.
                    </p>
                </v-col>

                <v-col cols="12" md="8" class="mx-auto">
                    <v-img  src="../../assets/img/neblinas/neblinas_09.jpg" class="w-100">
                    </v-img>
                </v-col>

                <v-col cols="12" class="">
                    <v-simple-table
                    fixed-header
                    height="400px">
                    <thead>
                        <tr>
                            <th class="titulo_tabla text-center">Modelo</th>
                            <th class="titulo_tabla text-center"># de Filtros</th>
                            <th class="titulo_tabla text-center">Area filtrante</th>
                            <th class="titulo_tabla text-center">Volumen de aire (CFM)</th>
                            <th class="titulo_tabla text-center">Medida A (in)</th>
                            <th class="titulo_tabla text-center">Medida B (in)</th>
                            <th class="titulo_tabla text-center">Medida C (in)</th>
                            <th class="titulo_tabla text-center">Peso Aprox (lbs)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="specsNeblina in specsNeblinas" :key="specsNeblina.modelo">
                            <td class="dato_tabla text-center">{{specsNeblina.modelo}}</td>                            
                            <td class="dato_tabla text-center">{{specsNeblina.filtros}}</td>
                            <td class="dato_tabla text-center">{{specsNeblina.area}}</td>
                            <td class="dato_tabla text-center">{{specsNeblina.cfm}}</td>
                            <td class="dato_tabla text-center">{{specsNeblina.medida_a}}</td>
                            <td class="dato_tabla text-center">{{specsNeblina.medida_b}}</td>
                            <td class="dato_tabla text-center">{{specsNeblina.medida_c}}</td>
                            <td class="dato_tabla text-center">{{specsNeblina.peso_lb}}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
                </v-col>              
            </v-row>            
        </v-container>
    </section>
</template>

<style>
    #neblinas{
        margin-top: 3rem;
    }

    #neblinas .contenedor{
        width: 90%;
    }

    .{
        background: var(--azul);
        color: var(--blanco);
        height: auto;
    }
</style>

<script>
    export default{
        data(){
            return{
                specsNeblinas: [
                    {modelo:"MC-1", filtros:"1", area: "225", cfm: "800-1,800", medida_a:"111", medida_b:"35",  medida_c: "35", peso_lb:"450"},
                    {modelo:"MC-2", filtros:"2", area: "450", cfm: "1,800-3,800", medida_a:"111", medida_b:"35",  medida_c: "70", peso_lb:"870"},
                    {modelo:"MC-3", filtros:"3", area: "675", cfm: "3,800-5,600",  medida_a:"111", medida_b:"35", medida_c: "105", peso_lb:"1,500" },
                    {modelo:"MC2-4", filtros:"4", area: "225", cfm: "5,600-7,400", medida_a:"120", medida_b:"65",  medida_c: "70", peso_lb:"1,750"},
                    {modelo:"MC2-6", filtros:"6", area: "450", cfm: "7,400-11,000", medida_a:"120", medida_b:"65",  medida_c: "100", peso_lb:"2,600"},
                    {modelo:"MC2-8", filtros:"8", area: "675", cfm: "11,000-15,000",  medida_a:"120", medida_b:"65", medida_c: "135", peso_lb:"3,500" },
                    {modelo:"MC2-10", filtros:"10", area: "225", cfm: "15,000-18,600", medida_a:"120", medida_b:"65",  medida_c: "170", peso_lb:"4,450"},
                    {modelo:"MC2-12", filtros:"12", area: "450", cfm: "18,600-22,500", medida_a:"120", medida_b:"65",  medida_c: "200", peso_lb:"5,200"},

                ],
            }
        }
    }
</script>