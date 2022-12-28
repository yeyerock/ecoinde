<template>
    <section id="ciclones">
        <v-container class="contenedor py-6">
            <v-row>
                <v-col>
                    <h1 class="titulo text-uppercase">Ciclones</h1>
                </v-col>
            </v-row>

            <v-row class="">
                <v-col class=" pa-4 align-items-center" 
                    cols="12" sm="7">
                    <p class="texto text-justify">
                        Los colectores de polvo tipo ciclones son separadores mecánicos que utilizan el principio de la fuerza centrífuga para remover partículas sólidas de una corriente de aire.
                    </p>
                    <p class="texto text-justify">
                        Los ciclones operan con altas eficiencias de separación como resultado de las altas velocidades de entrada tales como de 3,500 - 7,000 ft/min.
                    </p>

                    <p class="texto text-justify">
                        Para incrementar la eficiencia se puede suministrar en forma opcional un post filtro de bolsas en la descarga del ventilador. Se ofrecen opciones de base, incluyendo gabinetes con cajones, tolvas, y arreglos para tambores de 200 litros.
                    </p>
                </v-col>

                <v-col  cols="12" sm="4" class="mx-auto">
                    <v-img class="w-100 h-auto" src="../../assets/img/ciclones/ciclones.png"></v-img>
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
                        Los ciclones se pueden utilizar en varias aplicaiones muy típicas cuando hay partículas gruseas producidas en aplicaciones con altas cargas de polvo como en las de madera y maquinado, pulido,etc, pero también se usan para recuperación de producto de polvos finos como es el aso de la pintura en polvo.
                    </p>
                    <p class="texto text-justify">
                        Como colector primario los ciclones pueden ser utilizados solos o con post-filtros, dependiendo a donde será depositado el aire ya filtrado. Puede ser utilizado como un pre-limpiador para reducir la carga de polvo a la entrada de un colector de cartuchos o de bolsas. Las opciones de fabricación que se tienen con los ciclones hacen de stos los equipos de colección de polvo más fácilmente adaptados que estén disponibles.
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
                            src="../../assets/img/ciclones/ciclones_02.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/ciclones/ciclones_03.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/ciclones/ciclones_04.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/ciclones/ciclones_05.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/ciclones/ciclones_06.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/ciclones/ciclones_07.jpg"
                        ></v-carousel-item>
                    </v-carousel>
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
                       Los ciclones son dimensionados en base a la velocidad de entrada y se pueden seleccionar con los paquetes de ventilador/motor de las tablas donde se indican los volúmenes a manejar.
                    </p>

                    <p class="texto">
                       Si por otro lado se tiene la aplicación con un ventilador remoto se puede seleccionar en base a la presión estática externa calculada y según la pérdida del equipo mostrada en las tabas y catálogos de estos ciclones.
                    </p>

                    <p class="texto">
                      Para cuando el ciclón se ponga como pre-limpiador en un sistema con ventilador remoto la tabla anexa define el ciclón basado en el volumen de aire y con la presión diferencial a través de la unidad. 
                    </p>
                </v-col>

                <v-col cols="12" md="8" class="mx-auto">
                    <v-img  src="../../assets/img/ciclones/ciclones_09.jpg" class="w-100">
                    </v-img>
                </v-col>

                <v-col cols="12">
                    <v-simple-table
                    fixed-header
                    height="400px">
                    <thead>
                        <tr>
                            <th class="titulo_tabla text-center">Modelo</th>
                            <th class="titulo_tabla text-center">CFM</th>
                            <th class="titulo_tabla text-center">WG</th>
                            <th class="titulo_tabla text-center">Velocidad de Entrada(Ft/min)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="specsCiclon in specsCiclones" :key="specsCiclon.modelo">
                            <td class="dato_tabla text-center">{{specsCiclon.modelo}}</td>
                            <td class="dato_tabla text-center">{{specsCiclon.cfm}}</td>
                            <td class="dato_tabla text-center">{{specsCiclon.wg}}</td>
                            <td class="dato_tabla text-center">{{specsCiclon.velocidad_entrada}}</td>   
                        </tr>
                    </tbody>
                </v-simple-table>
                </v-col>              
            </v-row>            
        </v-container>
    </section>
</template>

<style>
    #ciclones{
        margin-top: 3rem;
 
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
                specsCiclones: [
                    {modelo:"12",cfm:"300-540", wg: "4-6", velocidad_entrada: "3,500-6,200", },
                    {modelo:"16",cfm:"860-1,200", wg: "4-8", velocidad_entrada: "4,300-6,200",},
                    {modelo:"20",cfm:"1,250-2,500", wg: "4-8", velocidad_entrada: "3,500-5,700", },
                    {modelo:"24",cfm:"1,950-3,500", wg: "4-8", velocidad_entrada: "3,500-6,500", },
                    {modelo:"30",cfm:"3,000-5,600", wg: "5-8", velocidad_entrada: "3,800-5,700",},
                    {modelo:"36",cfm:"4,300-7,500", wg: "5-12", velocidad_entrada: "4,000-6,500",},
                    {modelo:"44",cfm:"8,000-13,000", wg: "5-12", velocidad_entrada: "4,000-6,500",},
                    {modelo:"60",cfm:"12,000-15,000", wg: "5-10", velocidad_entrada: "4,000-6,500",},
                    {modelo:"72",cfm:"15,000-20,000", wg: "5-12", velocidad_entrada: "4,000-6,500",},
                ],
            }
        }
    }
</script>