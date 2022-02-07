<template>
  <div class="home">
    <Header></Header>
    <Info></Info>
  </div>
</template>

<script>
import Info from '../components/Info'
import Header from '../components/Header'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Info,
    Header,
  }
}
</script>
