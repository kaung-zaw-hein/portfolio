<template>
  <div class="home">
    <Header></Header>
    <Service></Service>
    <Info></Info>
  </div>
</template>

<script>
import Service from '../components/Service'
import Info from '../components/Info'
import Header from '../components/Header'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Service,
    Info,
    Header,
  }
}
</script>
