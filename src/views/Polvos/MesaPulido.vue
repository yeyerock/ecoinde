<template>
    <section id="mesa_pulido">
        <v-container class="contenedor py-6">
            <v-row>
                <v-col>
                    <h1 class="titulo text-uppercase">Mesa de pulido</h1>
                </v-col>
            </v-row>

            <v-row class="">
                <v-col class=" pa-4 align-items-center" 
                        cols="12"  
                        sm="6">
                    <p class="texto text-justify">
                        Las mesas de pulido funcionan principalmente en procesos que requieren trabajos a detalle, como el pulido y acabado permitiendo colectar el polvo que se genera durante el proceso.
                    </p>
                    <p class="texto text-justify">
                        Este tipo de sistemas, cuenta con un flujo de aire descendente, el cual es distribuido uniformemente, para así poder capturar las partículas del material que se genera durante los trabajos.
                    </p>
                </v-col>

                <v-col  cols="12"  sm="4"  class="mx-auto">
                    <v-img class="w-100 h-auto" src="../../assets/img/mesa_pulido/mesa_pulidora.png"></v-img>
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
                        Cuenta con un diseño modular con diferente altura, opciones de bajo perfil.
                    </p>
                    <p class="texto text-justify">
                        Tiene un patrón de corriente de aire hacia abajo.
                    </p>
                    <p class="texto text-justify">
                        Filtro de cartucho múltiple para opciones de finos, fibrosos, no fibrosos, aglomerados y aplicaciones de alta temperatura.
                    </p>
                    <p class="texto text-justify">
                        Cada módulo tiene su propio acumulador de aire con solenoides y diafragmas.
                    </p>

                    <h3 class="texto"><strong>Ventajas</strong></h3>
                    <p class="texto text-justify">
                        • Permite flexibilidad en el diseño de sistemas.
                    </p>
                    <p class="texto text-justify">
                        • Facilidad de realizarle servicio a los filtros desde fuera del colector.
                    </p>
                    <p class="texto text-justify">
                        • Fácil de instalar.
                    </p>
                    <p class="texto text-justify">
                        •  Componentes estándares.
                    </p>

                    <h3 class="texto"><strong>Beneficios</strong></h3>
                    <p class="texto  text-justify">
                        • Adaptable a las limitaciones de espacio.
                    </p>
                    <p class="texto  text-justify">
                        • Bajas caídas de presión de operación a un flujo de aire por filtro.
                    </p>
                    <p class="texto  text-justify">
                        • Mayores flujos de aire por filtro para una caída de presión dada.
                    </p>
                    <p class="texto  text-justify">
                        • Vida de filtro más larga.
                    </p>
                    <p class="texto  text-justify">
                        • Fácil de dar servicio.
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
                            src="../../assets/img/mesa_pulido/mesa_pulido_02.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/mesa_pulido/mesa_pulido_03.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/mesa_pulido/mesa_pulido_04.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/mesa_pulido/mesa_pulido_05.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/mesa_pulido/mesa_pulido_06.jpg"
                        ></v-carousel-item>
                        <v-carousel-item
                            src="../../assets/img/mesa_pulido/mesa_pulido_07.jpg"
                        ></v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12">
                    <h3 class="subtitulo text-uppercase">Especificaciones</h3>
                </v-col>

                <v-col cols="12" md="6" class="mx-auto">
                    <v-img  src="../../assets/img/mesa_pulido/mesa_pulido_09.jpg" class="w-100">
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
                        <tr v-for="specsMesa in specsMesas" :key="specsMesa.modelo">
                            <td class="dato_tabla text-center">{{specsMesa.modelo}}</td>
                            <td class="dato_tabla text-center">{{specsMesa.filtros}}</td>
                            <td class="dato_tabla text-center">{{specsMesa.area}}</td>
                            <td class="dato_tabla text-center">{{specsMesa.num_valvulas}}</td>
                            <td class="dato_tabla text-center">{{specsMesa.medida_valvula}}</td>
                            <td class="dato_tabla text-center">{{specsMesa.medida_a}}</td>
                            <td class="dato_tabla text-center">{{specsMesa.medida_b}}</td>
                            <td class="dato_tabla text-center">{{specsMesa.medida_c}}</td>
                            <td class="dato_tabla text-center">{{specsMesa.peso_lb}}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
                </v-col>              
            </v-row>            
        </v-container>
    </section>
</template>

<style>
    #mesa_pulido{
        margin-top: 3rem;
     
    }

    #mesa_pulido .contenedor{
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
                specsMesas: [
                    {modelo:"DDT-2",filtros:"2", area: "508", num_valvulas: "2", medida_valvula:"3/4´´ ", medida_a:"40", medida_b: "82", medida_c:"58", peso_lb:"1,405"},
                    {modelo:"DDT-4",filtros:"4", area: "1,016", num_valvulas: "2", medida_valvula:"1´´ ", medida_a:"40", medida_b: "82", medida_c:"84", peso_lb:"1,800"},
                ],
            }
        }
    }
</script>