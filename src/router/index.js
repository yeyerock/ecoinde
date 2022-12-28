import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Nosotros from '../views/Nosotros.vue'
import Soluciones from '../views/Soluciones.vue'
import Polvos from '../views/Polvos.vue'

import Neblina from '../views/Neblinas/Neblina.vue'

import Refacciones from '../views/Refacciones/Refacciones.vue'

import Paileria from '../views/Paileria/Paileria.vue'

import Cartuchos from '../views/Polvos/Cartuchos.vue'
import Bolsas from '../views/Polvos/Bolsas.vue'
import Portatiles from '../views/Polvos/Portatiles.vue'
import Cabinas from '../views/Polvos/Cabinas.vue'
import Ciclones from '../views/Polvos/Ciclones.vue'
import MesaPulido from '../views/Polvos/MesaPulido.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/Nosotros',
    name: 'Nosotros',
    component: Nosotros
  },

  {
    path: '/Polvos',
    name: 'Polvos',
    component: Polvos
  },
  {
    path: '/cartuchos',
    name: 'Cartuchos',
    component: Cartuchos
  },
  {
    path: '/bolsas',
    name: 'Bolsas',
    component: Bolsas
  },
  {
    path: '/portatiles',
    name: 'Portatiles',
    component: Portatiles
  },
  {
    path: '/cabinas',
    name: 'Cabinas',
    component: Cabinas
  },
  {
    path: '/ciclones',
    name: 'Ciclones',
    component: Ciclones
  },
  {
    path: '/mesa_pulido',
    name: 'MesaPulido',
    component: MesaPulido
  },

  {
    path: '/Neblina',
    name: 'Neblina',
    component: Neblina
  },

  
  {
    path: '/Refacciones',
    name: 'Refacciones',
    component: Refacciones
  },

  {
    path: '/Paileria',
    name: 'Paileria',
    component: Paileria
  },


  {
    path: '/Soluciones',
    name: 'Soluciones',
    component: Soluciones
  },
  

  

  
]

const router = new VueRouter({
  routes,
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 };
  },
})

export default router
