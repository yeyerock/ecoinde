<template>
    <section id="banner" class="cont_banner py-3">
        <video class="video_horizontal" src="../assets/videos/banner.mp4"  muted playsinline autoplay loop></video>
       <video class="video_vertical" src="../assets/videos/hero_movil_full.mp4"  muted playsinline autoplay loop></video>
    </section>
</template>


<script>
export default {
    setup() {
        
    },
}
</script>

<style>
   #banner{
        margin-top: 3rem;
        width: 100vw;
        height: auto;
        position: relative;
        overflow: hidden;
    }

    #banner video{
        -o-object-fit: cover;
       object-fit: cover;
        width: 100vw;
        height: 100%;   
    }

    #banner .video_horizontal{
        display: none;
    }
    

  
</style>