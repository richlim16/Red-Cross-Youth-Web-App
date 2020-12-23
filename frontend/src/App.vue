<template>
  <!-- <-This is the place where the Template is added -->
    <!-- <router-view/>  -->
    <temp/>
    
</template>


<script>
import axios from 'axios';
import temp from './views/adminHome.vue'
// import temp from './components/adminNavbar.vue'
// import temp from './components/adminSidebar.vue'

export default {
  name: 'App',
  components: {
    temp
  },
  mounted() {
    axios.get('http://localhost:3000')
    .then(response => console.log(response))
    .catch(error => console.log(error))
    // axios({
    //   method: 'POST',
    //   url: 'http://localhost:3000',
    //   data:{
    //     name: 'lalala',
    //     concilId: '12345'
    //   }
    // })
  },
  data() {
    return {
      homeData: null
    }
  }
}
</script>

<style>
</style>
