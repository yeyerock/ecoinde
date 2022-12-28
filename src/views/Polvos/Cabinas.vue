<template>
    <section id="cabinas">
        <v-container class="contenedor py-6 mx-auto">
            <v-row>
                <v-col>
                    <h1 class="titulo text-uppercase">Cabinas de Pulido</h1>
                </v-col>
            </v-row>

            <v-row class="">
                <v-col class=" pa-4 align-items-center" 
                        cols="12"  
                        sm="7">
                    <p class="texto text-justify">
                        Las estaciones de trabajo o cabinas de pulido son una perfecta alternativa para las operaciones dentro de una planta que son muy polvosas, sucias, ruidosas, etc. Pero sobre todo en aplicaciones que no puedes capturar el polvo o humo localizadamente.
                    </p>
                    <p class="texto text-justify">
                        La versatilidad con la que pueden ser utilizadas estas cabinas hace de su portabilidad su primer y gran ventaja ya que se adaptan a cualquier zona de trabajo y no restringe/obstaculiza movimientos dentro de la operación diaria.
                    </p>
                </v-col>

                <v-col   cols="12"  sm="4"  class="mx-auto">
                    <v-img class="w-100 h-auto" src="../../assets/img/cabinas/cabinas_de_pulido.png"></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" >
                    <h3 class="subtitulo text-uppercase">Galería</h3>
                </v-col>
                
                <v-col cols="12" md="6" class="mx-auto">
                    <v-carousel hide-delimiters>
                        <v-carousel-item
                            src="../../assets/img/cabinas/cabinas_02.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/cabinas/cabinas_03.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/cabinas/cabinas_04.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/cabinas/cabinas_05.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/cabinas/cabinas_06.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/cabinas/cabinas_07.jpg"
                        ></v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12">
                    <h3 class="subtitulo text-uppercase">Especificaciones</h3>
                </v-col>

                <v-col cols="12" md="6" class="mx-auto">
                    <v-img  src="../../assets/img/cabinas/cabinas_09.jpg" class="w-100">
                    </v-img>
                </v-col>

                <v-col cols="12" class="">
                    <v-simple-table
                    fixed-header
                    height="400px">
                    <thead>
                        <tr>
                            <th class="titulo_tabla text-center">Modelo</th>
                            <th class="titulo_tabla text-center">HP</th>
                            <th class="titulo_tabla text-center"># Filtros</th>
                            <th class="titulo_tabla text-center">Área Filtrante</th>                            
                            <th class="titulo_tabla text-center">CFM</th>
                            <th class="titulo_tabla text-center">Medida A(in)</th>
                            <th class="titulo_tabla text-center">Medida B(in)</th>
                            <th class="titulo_tabla text-center">Medida C(in)</th>
                            <th class="titulo_tabla text-center">Peso(Kg)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="specsCabina in specsCabinas" :key="specsCabina.modelo">
                            <td class="dato_tabla text-center">{{specsCabina.modelo}}</td>
                            <td class="dato_tabla text-center">{{specsCabina.hp}}</td>
                            <td class="dato_tabla text-center">{{specsCabina.num_filtros}}</td>
                            <td class="dato_tabla text-center">{{specsCabina.area}}</td>                            
                            <td class="dato_tabla text-center">{{specsCabina.cfm}}</td>
                            <td class="dato_tabla text-center">{{specsCabina.medida_a}}</td>
                            <td class="dato_tabla text-center">{{specsCabina.medida_b}}</td>
                            <td class="dato_tabla text-center">{{specsCabina.medida_c}}</td>
                            <td class="dato_tabla text-center">{{specsCabina.peso_kg}}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
                </v-col>              
            </v-row>            
        </v-container>
    </section>
</template>

<style>
    #cabinas{
        margin-top: 3rem;
     
    }

    #cabinas .contenedor{
        width: 90%;
    }
</style>

<script>
    export default{
        data(){
            return{
                specsCabinas: [
                    {modelo:"CE1-6",hp:"(1) 7.5", num_filtros: "6", area: "1,524", cfm:"4,500 ", medida_a:"48", medida_b: "42", medida_c:"90", peso_kg:"650"},
                    {modelo:"CE2-12",hp:"(2) 7.5", num_filtros: "12", area: "3,048", cfm:"9,000 ", medida_a:"96", medida_b: "42", medida_c:"90", peso_kg:"1,300"},
                    {modelo:"CE3-18",hp:"(3) 7.5", num_filtros: "18", area: "4,572", cfm:"13,500 ", medida_a:"144", medida_b: "42", medida_c:"90", peso_kg:"1,950"},
                    {modelo:"CE4-24",hp:"(4) 7.5", num_filtros: "24", area: "6,096", cfm:"18,000", medida_a:"192", medida_b: "42", medida_c:"90", peso_kg:"2,600"},
                    {modelo:"CE5-30",hp:"(5) 7.5", num_filtros: "30", area: "7,620", cfm:"22,500", medida_a:"240", medida_b: "42", medida_c:"90", peso_kg:"3,250"},
                ],
            }
        }
    }
</script>