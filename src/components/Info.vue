<template>
  <div class="about_container"
  :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }">
      <img src="../assets/images/Other.png" alt=""
      data-aos="fade-down">
      <div class="about_content">
        <h1 class="animate__fadeIn animate__animated" data-aos="fade-left">
          Hello! My name is <span>
           Kaung<br/>
          Zaw<br/>
          Hein
        </span>
        </h1>
        <div class="detail" data-aos="zoom-in">
          <p>A fronend devloper based out of Myanmar(Burma)</p>
          <p data-aos="fade-up">I got into the field of Web Development when I was in university.
            I realized thtat I am passionate to wirting computer code.
            I create custom websites to help business do better online.
            I'm excited to take the leap and continue to hone my skills with the right company
          </p><br>
          <a data-aos="fade-up" href="https://drive.google.com/file/d/1ErVf_7_7rRzx4UF5YiARco_-kfVDz8OL/view?usp=sharing">Download CV</a>
        </div>
      </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import {ref} from 'vue'
export default {
  setup(){
    const store = useStore();
    const msg = ref('brnyr')

    return{ store, msg}
  }
}
</script>

<style>
.about_container{
  width:80%;
  padding: 25px;
  display: flex;
  justify-content: space-between;
}
.about_container img{
  width: 600px;
  height: 600px;
}
.about_container .about_content{
  padding: 25px;
  display:flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
}
.about_container .about_content h1{
  height: 1em;
  line-height: 1.2em;
  position: relative;
  overflow: hidden;
  font-size: 3em;
  width: 10.5em;
}
.about_container .about_content h1 > span {
  position: absolute;
  right: 0;
  top: 0;
  animation: slide 5s infinite;
  font-weight: bold;
  
}
@keyframes slide {
  0% {
    top: 0;
  }
  25% {
    top: -1.2em;
  }
  50% {
    top: -2.4em;
  }
  75% {
    top: -1.2em;
  }
  100%{
    top: 0;
  }
}
.detail p:nth-child(1){
  text-align: center;
  font-size: 1.3em;
}
 p:nth-child(2){
  margin-top:10px;
  text-align: left;
  font-size: 1.1em;
}
.detail a{
  background:#585858;
  padding:5px 10px;
  color:rgb(255, 255, 255);
  border-radius:10px;
}
</style>