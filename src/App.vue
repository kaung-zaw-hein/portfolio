<template>
  <router-view/>
</template>
<script>
export default {
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
}
.dnone{
  display:none;
  opacity:0;
}
</style>
