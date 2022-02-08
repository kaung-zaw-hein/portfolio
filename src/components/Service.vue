<template>
  <main  :class="{'lighttheme' : !store.state.dark , 'darktheme' : store.state.dark }">
      <h1 data-aos="fade-down">What can i do for you?</h1>
      <div class="service_container">
          <div class="service" data-aos="fade-up">
              <div class="block_container" data-aos="fade-right">
                  <div class="block"
                  :class="{'lighttheme' : store.state.dark , 'darktheme' : !store.state.dark }"></div>
              </div>
              <div class="service_detail"  data-aos="fade-right">
                  <h1>Responsive website: <span>
           Phone<br/>
          Tablet<br/>
          Laptop
        </span></h1>
                  <p>I can build responsive websites.Responsive Web Design always plays an important role</p>
              </div>
          </div>
          <div class="service" data-aos="fade-up">
              <div class="service_detail"  data-aos="fade-right">
                  <h1>Javascript Framework Vue </h1>
                  <p>Yes i can build web app with js framework Vue.</p>
              </div>
              <div class="block_container" data-aos="fade-down">
                  <div class="coding"  >
                      <div class="coding_head">
                           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9999 6.675L13.1999 6.075C12.9999 5.975 12.8999 5.775 12.9999 5.675L13.8999 3.975C14.4999 2.775 13.1999 1.475 11.9999 2.075L10.2999 2.975C10.1999 3.075 9.9999 2.975 9.8999 2.775L9.2999 0.975C8.8999 -0.325 7.0999 -0.325 6.6999 0.975L6.0999 2.775C5.9999 2.975 5.7999 3.075 5.6999 2.975L3.9999 2.075C2.7999 1.475 1.4999 2.775 2.0999 3.975L2.9999 5.675C3.0999 5.775 2.9999 5.975 2.7999 6.075L0.999902 6.675C-0.300098 7.075 -0.300098 8.975 0.999902 9.375L2.7999 9.975C2.9999 9.975 3.0999 10.175 2.9999 10.275L2.0999 11.975C1.4999 13.175 2.7999 14.475 3.9999 13.875L5.6999 12.975C5.8999 12.875 6.0999 12.975 6.0999 13.175L6.6999 14.975C7.0999 16.275 8.9999 16.275 9.3999 14.975L9.9999 13.175C10.0999 12.975 10.2999 12.875 10.3999 12.975L12.0999 13.875C13.2999 14.475 14.5999 13.175 13.9999 11.975L12.9999 10.275C12.8999 10.075 12.9999 9.875 13.1999 9.875L14.9999 9.275C16.2999 8.875 16.2999 7.075 14.9999 6.675ZM7.9999 10.375C6.6999 10.375 5.5999 9.275 5.5999 7.975C5.5999 6.675 6.6999 5.575 7.9999 5.575C9.2999 5.575 10.3999 6.675 10.3999 7.975C10.3999 9.275 9.2999 10.375 7.9999 10.375Z" fill="#4C4F5A"/></svg>
                           <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z" fill="#4C4F5A"/></svg>
                            <h1>Vue</h1>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                              <div class="code-content">
                                <code>
                                <span class="c-y">import</span><span class="c-b">{createdApp}</span> <span class="c-y">from</span> <span class="c-g">'vue'</span> ; <br>
                                 <span class="c-y">import</span> <span class="c-b">App</span> <span class="c-y"> from </span><span class="c-g">'./App.vue'</span><br/><br/>
                                <span class="c-y">createApp(<span class="c-b">App</span>)</span>.<span class="c-y">mount</span> <span class="c-b">(</span><span class="c-o">"#app"</span>)
                                </code>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="service" data-aos="fade-up">
              <div class="block_container">
                  <div class="pwa">
                      <h1>P</h1>
                      <h1>W</h1>
                      <h1>A</h1>
                  </div>
              </div>
              <div class="service_detail"  data-aos="fade-right">
                  <h1>Progressive Web App <span>
           P<br/>
          W<br/>
          A
        </span></h1>
                  <p>What it is? It is  web app that use service workers, manifests, and other web-platform features in combination with progressive enhancement to give users an experience on par with native apps.
                      btw this website is pwa too...
                  </p>
              </div>
          </div>
    </div>
        <router-link :to="{name: 'Projects'}"  data-aos="fade-up" class="explore animate__fadeIn animate__animated"
        :class="{'lighttheme' : store.state.dark , 'darktheme' : !store.state.dark }"
        >Lets explore my projects.</router-link>
  </main>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore();
        return {store}
    }
}
</script>

<style scoped>
main{
    align-items:center;
}
.service_container{
    max-width:1100px;
    height:900px;
    padding: 10px 0 ;
    display: flex;
    flex-direction:column;
    align-items:center;
}
.service_container .service{
    height:33%;
    width:90%;
    padding:10px;
    display: flex;
    flex-wrap:nowrap;
}
.service_container .service .block_container{
    width:45%;
}
.service_container .service .block_container .block{
    width:130px;
    height:240px;
    animation: responsive 5s infinite;
    border-radius:5px;
    margin:0 auto;
}
@keyframes responsive {
    0% {
    width:130px;
  }
  25% {
    width:240px;
    height:150px;
  }
  50% {
    width:300px;
    height:200px;
  }
  75% {
    width:240px;
    height:150px;
  }
  100%{
    width:130px;
    height:240px;
  }
}
.service_detail{
    width:55%;
    display: flex;
    flex-direction:column;
}
.service_detail h1{
  height: 1em;
  line-height: 1.2em;
  position: relative;
  overflow-y: hidden;
  font-size: 3em;
  width: 12em;
}
.coding{
    background:#686868;
     width:300px;
    height:200px;
    margin:0 auto;
    padding: 10px;
}
.coding svg:nth-child(1){
    float: left;
}
.coding svg:nth-child(2){
    float: right;
}
.coding h1{
    float:left;
    font-size:1em;
    margin-top:-5px;
    margin-left:10px;
}
.coding img{
    width:1.5em;
    margin-top:-5px;
}
.c-o { color: #DE7300 }
.c-y { color: #E1CA72 }
.c-g { color: #74B087 }
.c-b { color: #7A99AD }
.pwa{
    text-align: center;
}
.explore{
    font-size:2.5em;
    width:100%;
    text-align: center;
}
@media (max-width:1000px){
    .service_container{
        padding:0;
    }
    .service_detail h1{
        font-size:1.5em;
    }
    .explore{
        font-size:2em;
    }
}
@media (max-width:600px){
    .service_container{
        height:1000px;
    }
    .service{
        flex-direction: column;
    }
    .service_container .service .block_container{
        height:500px;
    }
    .explore{
        font-size:1.5em;
    }
}

</style>