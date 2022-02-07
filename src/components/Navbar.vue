<template>
    <div class="navbar"
    :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }">
           <img :src="logoimg" alt="">
           <div class="icon-bar">
               <i class="fas animate__animated animate__flash animate__slow animate__infinite animate__delay-1s"
               :class="{'fa-volume-mute' : !store.state.mute , 'fa-volume-up' : store.state.mute }" @click.prevent="soundplay"></i>
               <i class="far animate__animated animate__fadeIn"
                :class="{'fa-sun' : !store.state.dark , 'fa-moon' : store.state.dark, }" @click.prevent="switchmode"></i>
               <!-- <i class="fas fa-moon animate__animated animate__fadeIn"></i> -->
               <select name="" id="" class="lang"
               :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }">
                   <option value="eng">English</option>
                    <option value="mm">Burmese</option>
               </select>
           </div>
                <audio loop>
                    <source src="../assets/barradeen-bedtime-after-a-coffee.mp3">
                        Your browser does not support the
                        <code>audio</code> element.>
                </audio>
        </div>
</template>

<script>
import { useStore } from 'vuex'
import {ref, onBeforeMount } from 'vue'
export default {
 setup(){
     const store = useStore();
     const logoimg = ref();
     let getImgUrl = (pic) => {
         var images = require.context('../assets/images/', false, /\.png$/)
        return images('./' + pic + ".png")
    }
    const conditions = () =>{
        if(!store.state.dark){
            // document.querySelector('#app').style.color = "#1a1a1a";
            localStorage.setItem('theme', false);
            document.querySelector('#app').style.backgroundColor =  "#ffff";
            logoimg.value = getImgUrl('Brnyr-logos_transparent');
          }else{
            // localStorage.setItem("theme", 'dark');
            // // htmlElement.setAttribute('theme', 'dark');
            // document.querySelector('#app').style.color = "#ffff";
            localStorage.setItem('theme', true);
            document.querySelector('#app').style.backgroundColor =  "#1e1e1e";
            logoimg.value = getImgUrl('Brnyr-logos_white')
        }
    }
    logoimg.value = getImgUrl('Brnyr-logos_transparent');
     const switchmode = () => {
         store.state.dark = !store.state.dark;
         conditions(); 
     }

     const soundplay = () => {
         store.state.mute = !store.state.mute;
         if(store.state.mute){
             document.querySelector('audio').play();
             document.querySelector('audio').muted = false;
         }else{
             document.querySelector('audio').pause();
             document.querySelector('audio').muted = true;
         }
     }
     onBeforeMount(() => {
         if(localStorage.getItem('theme') === 'true'){
             store.state.dark = true;
         }else{
             store.state.dark = false;
         }
         conditions();
       })
     
     return{ store, switchmode,logoimg,soundplay};
     }
}
</script>

<style>
.navbar{
    display: flex;
    flex-direction: row;
    padding: 0 30px;
    justify-content: space-between;
    align-items: center;
}
.navbar img{
    width:220px;
    height:75px;
}
.navbar .icon-bar{
    display: inline-block;
}
.navbar .icon-bar i{
    font-size:2em;
    margin: 0 10px;
}
.navbar .icon-bar:hover i{
    opacity:1;
    animation-play-state: paused;
}
.navbar .icon-bar select{
    width:150px;
    border:none;
    outline:none;
    background:transparent;
    font-size:1.5em;
    border-bottom:2px solid ;
}
.navbar .icon-bar select option{
    background:transparent;
    box-shadow:0;
}
@media (max-width:600px){
    .navbar{
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;
}
    .navbar img{
    width:150px;
    height:55px;
}
    .navbar .icon-bar i{
        font-size:1.5em;
        margin: 0 5px;
    }
}
@media (max-width:450px){
    .navbar{
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;
}
    .navbar img{
    width:130px;
    height:55px;
}
    .navbar .icon-bar i{
        font-size:1.2em;
        margin: 0 5px;
    }
    .navbar .icon-bar select{
        width: 100px;
        font-size:1.2em;
    }
    .navbar .icon-bar select option{
        width: 100px;
        font-size:1.2em;
    }
}
</style>