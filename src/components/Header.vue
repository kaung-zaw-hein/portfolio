<template>
   <main :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }">
    
    <div class="header"
    :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }">
        <img  class=" animate__animated animate__fadeInUp"  src="../assets/images/Ikbal.png" alt="">
        <p :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }" class="animate__animated animate__flash ">
            Welcome from "BRNYR"<br>
            I'm  {{typeValue}}
            <span class="line animate__animated animate__flash animate__infinite "> &nbsp;</span>
           
        </p>
    </div>
   </main>
</template>

<script>
import { useStore } from 'vuex'
import {ref} from 'vue'
export default {
   setup(){
    const store = useStore(); 
     return{store};
   },
   data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['Kaung Zaw Hein', 'Web Devloper', 'creater of BRNYR', 'freelance Devloper'],
        typingSpeed: 150,
        erasingSpeed: 100,
        newTextDelay: 700,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  
}
</script>

<style>
main{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.header {
    width:85%;
    margin:20px auto;
    padding:20px;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
}
.header img{
    width:600px;
    height:600px;
}
.header p {
    font-size:2em;
}
.line{
    background:rgb(119, 74, 74);
    font-size:0.8em;
}
@media (max-width:600px){
  .header {
    width:85%;
    margin:20px auto;
    padding:20px;
}
  .header img{
    max-width:400px;
    height:400px;
}
}
</style>