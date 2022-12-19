<template>
  <main  :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }" class="project_container animate__animated animate__fadeIn "> 
      <div :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }" class="button_container">
          <div class="active"></div>
          <button :class="{'lighttheme' : store.state.dark , 'darktheme' : !store.state.dark }" @click.prevent="click_button('all') ">All</button>
          <button :class="{'lighttheme' : store.state.dark , 'darktheme' : !store.state.dark }" @click.prevent="click_button('reactjs')">Reactjs</button>
          <button :class="{'lighttheme' : store.state.dark , 'darktheme' : !store.state.dark }" @click.prevent="click_button('vue') ">Vuejs</button>
      </div>
      <h1 class="animate__animated animate__flash animate__infinite animate__delay-1s">Projects:{{number}}</h1>
      <div class="projects-slide animate__animated animate__fadeIn animate__faster" v-if="vueslide">
            <Splide :options="{autoplay:true, rewind: true, type:loop ,pauseOnHover : true,resetProgress: true,padding: '20%' }">      
                <SplideSlide 
                v-for="project in projectsfilter" :key="project.title">
                    <div class="splideproject">
                            <h1>{{project.title}}</h1>
                            <div class="link" >
                                    <a  :href="project.githuburl" :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }"><i class="devicon-github-original"></i></a>
                                    <a v-if="project.liveurl" :href="project.liveurl" :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }" ><i class="devicon-vuejs-plain"></i></a>
                            </div>
                            <img :src="project.imageurl" :alt="project.title ">
                            
                    </div>
                </SplideSlide>
            </Splide>
      </div>
      <div class="projects_container animate__animated animate__fadeIn animate__faster" :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }" v-if="!vueslide">
                    <div class="project"
                    v-for="project in projectsfilter" :key="project.title">
                            <img :src="project.imageurl" :alt="project.title">
                            <h1>{{project.title}}</h1>
                            <div class="link" >
                                    <a  :href="project.githuburl" :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }"><i class="devicon-github-original"></i></a>
                                    <a v-if="project.liveurl" :href="project.liveurl" :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }" >Live: Demo</a>
                            </div>
                    </div>
      </div>
  </main>
</template>

<script>
import {ref, computed } from 'vue';
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore();
        const vueslide = ref(false);
        const projects = ref(store.state.projects);
        const number = ref();
        const status = ref("all"); 
        const click_button = (val) => {
            status.value = val;
            const active = document.querySelector(".active");
            active.style.left = event.target.offsetLeft + "px";
        }
        const projectsfilter = computed(() =>{
        //     return projects.value.filter(project => {
        //        return project.tag === status.value;
        //    }) \
           if(status.value === "vue"){
                    vueslide.value = true;
                    return  projects.value.filter(project => {
                        return project.tag === status.value;
                }) 
           }
           else if(status.value === "reactjs"){
                    vueslide.value = false;
                    return projects.value.filter(project => {
                    return project.tag === status.value;
                }) 
           }
           else{
               vueslide.value = false;
               return projects.value;
            }
        })
        function animate(initVal, lastVal, duration) {

            let startTime = null;

                //get the current timestamp and assign it to the currentTime variable
                let currentTime = Date.now();

                //pass the current timestamp to the step function
                const step = (currentTime ) => {

                        //if the start time is null, assign the current time to startTime
                        if (!startTime) {
                            startTime = currentTime ;
                        }

                        //calculate the value to be used in calculating the number to be displayed
                        const progress = Math.min((currentTime  - startTime) / duration, 1);

                        //calculate what to be displayed using the value gotten above
                        number.value = Math.floor(progress * (lastVal - initVal) + initVal);

                        //checking to make sure the counter does not exceed the last value (lastVal)
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                        else{
                            window.cancelAnimationFrame(window.requestAnimationFrame(step));
                        }
                    };

                    //start animating
                    window.requestAnimationFrame(step);
         }
        setInterval(() => {
            animate(0, projectsfilter.value.length, 1000)
        }, 2000);
        return{store,vueslide,projects,number,status,projectsfilter,click_button };
    }
}
</script>

<style>
.project_container{
    min-height:90vh;
    align-items:center;
    overflow:hidden;
}
.project_container h1{
    width:80%;
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
    transition: 0.5s;
    border-radius:10px;
}
.projects_container{
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:1300px;
    padding:10px;
    margin-top:30px;
    flex-wrap: wrap;
}
.projects_container .project{
    width:400px;
    height:350px;
    margin:15px;
    margin-top:20px;
}
.projects_container .project img {
    width:100%;
    height:200px;
    object-fit: cover;
}
.projects_container .project h1{
    font-size:2em;
    width:100%;
    height:100px;
    text-align:center;
}
.projects_container .project .link{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.projects_container .project .link a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    font-size:2em;
    border-left:1px solid #3d3d3d;
    transition: 0.8s;
}
.projects_container .project .link a:hover{
    color:#17b87a;
}
.projects-slide{
    width:90%;
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
    width:500px;
    height:300px;
    align-items:center;
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
    color:#17b87a;
}

@media (max-width:600px){
    .projects_container .project1{
    min-width:400px;
}
.splide{
    margin:0 auto;
    width:90%;
}
.splide__slide{
    width:500px!important;
    margin: 0 40px;
}
.splide__slide img{
    width:300px;
    height:250px;
    align-items:center;
}
}
@media (max-width:450px){
    .splide__slide{
    width:300px!important;
    margin: 0 40px;
}
.splide__slide img{
    width:350px;
    height:200px;
    align-items:center;
}
.splideproject h1{
    font-size:1.5em;
}
.splideproject .link a i{
    font-size:2em;
    transition:0.6s;
}
}
</style>