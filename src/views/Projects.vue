<template>
  <main  :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }" class="project_container"> 
      <div :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }" class="button_container">
          <div class="active"></div>
          <button :class="{'lighttheme' : store.state.dark , 'darktheme' : !store.state.dark }"><span>All</span></button>
          <button :class="{'lighttheme' : store.state.dark , 'darktheme' : !store.state.dark }"><span>Vuejs</span></button>
          <button :class="{'lighttheme' : store.state.dark , 'darktheme' : !store.state.dark }"><span>Others</span></button>
      </div>
      <div class="projects-slide" v-if="vueslide">
            <Splide :options="{autoplay:true, rewind: true, type:loop ,pauseOnHover : true,resetProgress: true,padding: '20%' }">      
                <SplideSlide :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }">
                    <div class="splideproject">
                            <h1>Brnyr</h1>
                            <img src="../assets/images/Ikbal.png" alt="Sample 1">
                            <div class="link" >
                                    <a  href="" :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }"><i class="devicon-github-original"></i></a>
                                    <a href="" :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }" ><i class="devicon-chrome-plain"></i></a>
                                </div>
                    </div>
                </SplideSlide>
              
                
               
            </Splide>
      </div>
  </main>
</template>

<script>
import {ref} from 'vue';
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore();
        const vueslide = ref(false);
        return{store,vueslide};
    }
}
</script>

<style>
.project_container{
    height:90vh;
    align-items:center;
}
.project_container .button_container{
    margin-top:50px;
    width:500px;
    height:35px;
    border-radius: 10px;
    position:relative;
}
.project_container .button_container button{
    width:33.33%;
    height:100%;
    outline:none;
    border:none;
    cursor:pointer;
}
div.active{
    background:#176ab8;
    width:34%;
    height:3px;
    position:absolute;
    bottom:0;
    left:0;
    border-radius:10px;
}
.projects-slide{
    width:90%;
    opacity:0.5;
    height:500px;
    display:flex;
    align-items:center;
    margin:0 auto;
    overflow:hidden;
}
.splide{
    margin:0 auto;
    width:100%;
}
.splide__slide{
    width:800px!important;
    margin: 0 40px;
}
.splideproject{
    width:100%;
}
.splideproject h1{
    font-size:3em;
}
.splide__slide img{
    width:300px;
    height:300px;
}
.splideproject .link{
    width:75%;
    display:flex;
}
.splideproject .link a{
   display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
}
.splideproject .link a i{
    font-size:3em;
    transition:0.6s;
}
.splideproject .link a:hover i{
    color:#176ab8;
}
</style>