<template>
    <div class="navbar">
	
		<div class="logo mx-2">
			<router-link to="/">
				<img class="logo_menu align-self-center"  src="../assets/img/logo.svg" >
			 </router-link> 
		</div>		
		
		<ul class="links">
			<li v-on:click="cerrar()" class=" mx-3"><router-link class="enlace " to="/Nosotros">Nosotros</router-link> </li>
            <li v-on:click="cerrar()" class=" mx-3"><router-link class="enlace " to="/Polvos">Polvos y Humos</router-link> </li>
            <li v-on:click="cerrar()" class=" mx-3"><router-link class="enlace " to="/Neblina">Neblinas</router-link> </li>
            <li v-on:click="cerrar()" class=" mx-3"><router-link class="enlace " to="/Refacciones">Refacciones</router-link> </li>
            <li v-on:click="cerrar()" class=" mx-3"><router-link class="enlace " to="/Paileria">Pailería</router-link> </li>
		
			<div class="cont_redes d-flex justify-content-center mx-auto">
				<div class=" mx-2 "><a class="enlace"  href="tel:+524424945752" ><v-icon class="icono">mdi-phone</v-icon></a></div>
				<div class=" mx-2 "><a class="enlace"   href="https://api.whatsapp.com/send?phone=5214424945752&text=Hola%20necesito%20información%20sobre%20un%20problema%20de%20filtración!" target="_blank"><v-icon class="icono">mdi-whatsapp</v-icon></a></div>
    			<div class=" mx-2 "><a class="enlace"   href="mailto:contacto@ecoinde.com"><v-icon class="icono">mdi-email</v-icon></a></div>
			
            </div>
		</ul>
		
	
		
		<div class="toggle mx-2" v-on:click="abrir()">
			<div class="line1"></div>
			<div class="line2"></div>
			<div class="line3"></div>
		</div>
		
		
	</div>
</template>

<script>
export default {
   name: ' Menu',
   methods: {
      abrir () {
        const navbar = document.querySelector('.navbar')
          navbar.querySelector('.toggle').addEventListener('click',()=>{          
          navbar.classList.toggle('collapsed')          
        })

        window.addEventListener('scroll',(e)=>{
          let windowY = window.pageYOffset
          let navbarHeight = document.querySelector('.navbar').offsetHeight
          if(windowY>navbarHeight) navbar.classList.add('sticky')
          else navbar.classList.remove('sticky')
        })
      },
      cerrar () {
        const navbar = document.querySelector('.navbar')
        navbar.classList.remove('collapsed')   
       
      }
    }
}
</script>

<style>

    .navbar {
        background: var(--negro);
        color: var(--blanco);
        padding: 15px;
        width: 100vw;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
        overflow: hidden;
    }
  
    .navbar .logo .logo_menu{
         width: 6rem;
    }

    .cont_redes .icono{
        color: var(--blanco);
        font-size: 1.4rem;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    .navbar ul.links {
        margin-right: 0;
        list-style: none;
        display: flex;
        transition: 0.4s ease all, 0s ease background;
    }

    .toggle{
        display: none;
    }

    .enlace {
        text-decoration: none;
        color: var(--blanco) !important;
        text-transform: uppercase;
        padding: 0 15px;
        display: flex;
        align-items: center;
        transition: 0.4s ease all, 0s ease margin;
    }

    .enlace:hover,
    .icono:hover {
        color: var(--azul) !important;
        cursor: pointer;
    }

    .navbar.sticky {
        position: fixed;
        z-index: 40;
    }
    .navbar.sticky ~ main {
        position: relative;
        z-index: 20;
        top: 65px;
    }

    @media screen and (max-width: 1024px) {
        .navbar .right {
            height: 0;
            overflow: hidden;
        }
        .toggle {
            position: absolute;
            top: 32.5px;
            right: 20px;
            z-index: 99;
            transform: translateY(-50%);
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }
        .toggle > * {
            width: 80%;
            height: 2px;
            background: var(--blanco);
            margin: 3px 0;
        }
        .navbar.collapsed .toggle .line1 {
            transform: rotate(-45deg) translate(-4px, 5px);
        }
        .navbar.collapsed .toggle .line2 {
            opacity: 0;
        }
        .navbar.collapsed .toggle .line3 {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        .navbar.collapsed .logo {
            position: absolute;
            z-index: 44;
        }
        .navbar .links {
            position: fixed;
            background: var(--negro);
            z-index: 40;
            top: 0;
            left: -100%;
            flex-direction: column;
            width: 100vw;
            height: 100vh;
        }
        .navbar .links li:first-child {
            margin-top: 6rem;
        }
        .navbar.collapsed .links {
            left: 0;
        }
        .enlace {
            text-align: left;
            height: 65px;
        }

        .cont_redes{
            margin-top: 1rem;
        }

        .cont_redes .enlace .icono{
            font-size: 1.5rem;
        }

        .navbar.collapsed .links li {
            width: 100%;
        }
        .enlace:hover {
            color: var(--amarillo);
        }
        .navbar.collapsed .right {
            position: fixed;
            width: 45vw;
            text-align: center;
            height: auto;
            bottom: 40px;
            left: 22.5vw;
            transform: translateX(-50%);
            z-index: 45;
        }
        .navbar.collapsed ~ main {
            filter: blur(1px);
            opacity: 0.8;
        }
        .navbar.sticky {
            position: fixed;
            z-index: 40;
        }
    }
</style>