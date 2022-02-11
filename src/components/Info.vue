<template>
  <div class="about_container"
  :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }">
      <img src="../assets/images/Other.png" alt=""
      data-aos="fade-down">
      <div class="about_content">
        <h1 class="animate__fadeIn animate__animated" data-aos="fade-right">
          Hello! My name is <span>
           Kaung<br/>
          Zaw<br/>
          Hein
        </span>
        </h1>
        <div class="detail" data-aos="zoom-in">
          <p>A fronend devloper based out of Myanmar<a href="https://github.com/Kv0nzee?tab=repositories"><i class="devicon-github-original"></i></a></p>
          <p data-aos="fade-up">I got into the field of Web Development when I was in university.
            I realized that I am passionate to writing computer code.
            I create custom websites to help business do better online.
            I'm excited to take the leap and continue to hone my skills with the right company<br>
            Contact Me:kaungzawhein1963@gmail.com
          </p>
          <div class="aboutSkills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          </div>
          <br>
          <a data-aos="fade-up" href="https://drive.google.com/file/d/1bLcwJrFjuQ0BLxOh6faBqWNu9qimzC28/view?usp=sharing">Download CV</a>
          <a data-aos="fade-up" href = "mailto:kaungzawhein1963@gmail.com?subject = Feedback&body = Message">
              Contact Me
              </a>
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
  justify-content: space-around;
  flex-wrap: nowrap;
}
.about_container img{
  width: 50%; 
}
.about_container .about_content{
  width: 45%; 
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
 h1 > span {
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
  margin:0 5px;
}
.aboutSkills img{
  width:50px;
  height:50px 
}
@media (max-width:1000px){
    .about_container .about_content h1{
    height: 1em;
    line-height: 1em;
    position: relative;
    overflow: hidden;
    font-size: 2em;
    width: 10.5em;
  }
  .detail p:nth-child(1){
  text-align: left;
  font-size: 1em;
}
 p:nth-child(2){
  margin-top:10px;
  text-align: left;
  font-size: 0.9em;
}
  @keyframes slide {
  0% {
    top: 0;
  }
  25% {
    top: -1em;
  }
  50% {
    top: -2em;
  }
  75% {
    top: -1em;
  }
  100%{
    top: 0;
  }
}
}
@media (max-width:620px){
  .about_container img{
  width: 40%; 
}
.about_container .about_content{
  width: 55%; 
  align-items: right;
}
  .about_container .about_content h1{
    font-size: 1.5em;
  }
  .detail p:nth-child(1){
  text-align: left;
  font-size: 0.8em;
}
 p:nth-child(2){
  margin-top:10px;
  text-align: left;
  font-size: 0.7em;
}
  @keyframes slide {
  0% {
    top: 0;
  }
  25% {
    top: -1em;
  }
  50% {
    top: -2em;
  }
  75% {
    top: -1em;
  }
  100%{
    top: 0;
  }
}
}
@media(max-width:450px){
  .about_container img{
   display: none;
  }
  .about_container .about_content{
    width:85%;
  }
  .about_container .about_content h1{
    font-size: 1.5em;
  }
  .detail p:nth-child(1){
    font-size:1em;
  }
  .detail p:nth-child(2){
    font-size:1em;
  }
  .aboutSkills img{
  width:30px;
  height:30px;
  display:inline-block;
  
}
}

</style>