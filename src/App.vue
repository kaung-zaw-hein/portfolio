<template>
  <Navbar></Navbar>
  <router-view/>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  components: { Navbar },
 setup(){

     }
}
</script>

<style>
body{
  width:100%;
}
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
.lighttheme {
  background: #ffffff;
  color: #222;
  border:#1a1a1a;
  transition:0.5s;
}

/* Define styles for the root window with dark - mode preference */
.darktheme {
    background: #1e1e1e;
    color: rgb(212, 212, 212);
    border:white;
    transition:0.5s;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Hind Siliguri', sans-serif;
  background:#ffff;
  transition:all 0.4s;
  width:100%;
  height:auto;
  overflow-y:hidden;
}
.dnone{
  display:none;
  opacity:0;
}

::-webkit-scrollbar {
  width: 2px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #7a7a7a; 
  border-radius: 10px;
  transition:all 0.5s;
}
::-webkit-scrollbar-thumb {
  background: #00eeff; 
  border-radius: 10px;
  transition: 0.5s;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #22c55e; 
  width: 10px;
}
</style>
