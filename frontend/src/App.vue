<template>
  <div id="app">
    <T/>
    <H/>
  </div>
</template>

<script>

import header from './components/Header.vue'
import topbar from './components/Topbar.vue'

export default {
  name: 'App',
  components: {
    'H': header,
    'T': topbar
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
