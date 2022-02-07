<template>
    <div class="navbar"
    :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }">
           <img :src="logoimg" alt="">
           <div class="icon-bar">
               <i class="fas animate__animated animate__flash animate__slow animate__infinite animate__delay-1s"
               :class="{'fa-volume-mute' : !store.state.mute , 'fa-volume-up' : store.state.mute }" @click.prevent="switchmode"></i>
               <i class="far animate__animated animate__fadeIn"
                :class="{'fa-sun' : !store.state.dark , 'fa-moon' : store.state.dark, }" @click.prevent="switchmode"></i>
               <!-- <i class="fas fa-moon animate__animated animate__fadeIn"></i> -->
               <select name="" id="" class="lang"
               :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }">
                   <option value="eng">English</option>
                    <option value="mm">Burmese</option>
               </select>
           </div>
        </div>
</template>

<script>
import { useStore } from 'vuex'
import {ref} from 'vue'
export default {
 setup(){
     const store = useStore();
     console.log(store.state.dark)
     const logoimg = ref();
     let getImgUrl = (pic) => {
         var images = require.context('../assets/images/', false, /\.png$/)
        return images('./' + pic + ".png")
    }
    logoimg.value = getImgUrl('Brnyr-logos_transparent');
     const switchmode = () => {
         store.state.dark = !store.state.dark;
         console.log(localStorage.getItem("theme"))
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
        console.log(logoimg.value)
     }
    
     return{ store, switchmode,logoimg};
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