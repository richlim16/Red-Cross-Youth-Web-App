<template>
  <div id="app">
    <!-- <add/> -->
    <T/>
    <H/>
    <M/>
  </div>
</template>

<script>
// import addcouncil from './components/addCouncil.vue'
import header from './components/Header.vue'
import topbar from './components/Topbar.vue'
import membershipform from './components/membershipForm.vue'


export default {
  name: 'App',
  components: {
    // 'add': addcouncil,
    'H': header,
    'T': topbar,
    'M': membershipform
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
