<template>
    <section id="soluciones" >
       <v-container class="contenedor">
          <v-row >
            <v-col
              cols="12">
              <h1 class="titulo text-uppercase text-left">Cómo podemos ayudarte</h1>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              class="mx-auto"
              cols="12">
              <p class="texto text-justify">Nos especializamos en diseñar y actualizar sistemas de colección de polvos para resolver los problemas de contaminación en el aire que surgen de algunos de los procesos típicos de la industria.</p>
            </v-col>
          </v-row>

          <v-row>
              <v-col
              class="mx-auto"  
              cols="12"
              sm="6"  
              md="4">
                <v-card 
                  class="mx-5 card reveal fade-left"
                  outlined
                  height="100%"
                  >
                  <v-img
                   class="img_card mx-auto"
                    src="../assets/img/polvos/polvos_01.jpg"
                  ></v-img>
                  <v-card-title
                   class="subtitulo">
                    Polvos y Humos
                  </v-card-title>
                  <v-card-actions>
                    <v-btn
                      text
                      to="/Polvos"
                      class="solucion textos">
                      Ver más
                    </v-btn>
                  </v-card-actions>                    
                </v-card>
              </v-col>
                
              <v-col
              class="mx-auto"  
              cols="12"
              sm="6"  
              md="4">
                <v-card 
                  class="mx-5 card reveal fade-left"
                  outlined
                  height="100%"
                >
                  <v-img
                   class="img_card mx-auto"
                    src="../assets/img/neblinas/colector_de_nieblas.png"
                  ></v-img>
                  <v-card-title
                   class="subtitulo">
                   Neblinas
                  </v-card-title>
                  <v-card-actions>
                    <v-btn
                      text
                      to="/Neblina"
                      class="solucion textos">
                      Ver más
                    </v-btn>
                  </v-card-actions>                    
                </v-card>
              </v-col>

              <v-col
              class="mx-auto"  
              cols="12"
              sm="6"  
              md="4">
                <v-card 
                  class="mx-5 card reveal fade-left"
                  outlined
                  height="100%"
                  >
                  <v-img
                   class="img_card mx-auto"
                    src="../assets/img/refacciones/canastilla.png"
                  ></v-img>
                  <v-card-title
                   class="subtitulo">
                   Refacciones
                  </v-card-title>
                  <v-card-actions>
                    <v-btn
                      text
                      to="/Refacciones"
                      class="solucion textos">
                      Ver más
                    </v-btn>
                  </v-card-actions>                    
                </v-card> 
              </v-col>      
          </v-row>
       </v-container>         
    </section>    
</template>

<style>
    #soluciones{
      margin-bottom: 4rem;
    }

    #soluciones .contenedor{
      width: 90%;
    }

    .img_prueba{
      width: 100%;
      height: auto;
    }

    /* #soluciones .cont_solucion{
        background: var(--negro);
        width: 100%;
        height: 6rem;
    }

    #soluciones .cont_solucion .subtitulo{
        color: var(--blanco);
        text-align: center;
        display: block;
    }  

     #soluciones .cont_solucion:hover{
         background: var(--rojo);
         cursor: pointer;
     } */

     
/* #soluciones .contenedor_card {
  max-width: 100%;
  margin: 40px 0;
}

#soluciones .contenedor_card .card {
  position: relative;
  min-width: 100%;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 30px;
  transition: 0.5s;
}

#soluciones .contenedor_card .card:nth-child(1) .box .content a {
  background: var(--azul);
}

#soluciones .contenedor_card .card:nth-child(2) .box .content a {
  background: var(--rojo);
}

#soluciones .contenedor_card .card:nth-child(3) .box .content a {
  background: #23c186;
}

#soluciones .contenedor_card .card:nth-child(4) .box .content a {
  background: #e91e63;
}

#soluciones .contenedor_card .card .box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #2a2b2f;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
}

#soluciones .contenedor_card .card .box:hover {
  transform: translateY(-50px);
}

#soluciones .contenedor_card .card .box:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
}

#soluciones .contenedor_card .card .box .content {
  padding: 20px;
  text-align: center;
}

#soluciones .contenedor_card .card .box .content h3 {
  font-size: 1.8rem;
  color: var(--blanco);
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
}



#soluciones .contenedor_card .card .box .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: var(--negro);
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
#soluciones .contenedor_card .card .box .content a:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  background: var(--blanco);
  color: #000;
} */

</style>