<template>
  <div class="container">
    <div class="main">
      <div class="welcome-message">
        <h1>Welcome to <span>The Red Cross Youth Document Management System</span>
        </h1>
        <h2>Siamo Tutti Fratellil!</h2>
      </div>
      <div class="form-area">
        <h2>Login</h2>
        <form @submit="login">
          <label for="username">Username</label>
          <input type="text" v-model="username" id="username" name="username" required>
          <label for="password">Password</label>
          <input type="password" v-model="password" id="pass" name="pass" required>
          <div class="checkbox">
            <input type="checkbox" id="remember">
            <label for="remember">Remember me</label>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
    <f/>
  </div>
</template>
<script>
import footer from '../components/footer.vue'

import axios from 'axios';
export default {
    name: 'login',
    components: {
      'f': footer
    },
    data() {
        return {
            username: null,
            password: null,
            session: null
        }
    },
    methods: {
      login: async function(event){
        event.preventDefault()
        await axios({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data: {username: this.username, pass: this.password}
        })
        .then(response => this.session = response.data)
console.log(this.session)
        if (this.session == "wrong"){
          this.$router.go(0)
        }
        else if (JSON.parse(JSON.stringify(this.session)).userType == "Chapter Admin") {
          this.$store.commit('setUserId', JSON.parse(JSON.stringify(this.session)).userId)
          this.$store.commit('setUserType', JSON.parse(JSON.stringify(this.session)).userType)
          this.$router.push({ path: `/adminHome` })
        }
        else if (JSON.parse(JSON.stringify(this.session)).userType == "Council") {
          this.$store.commit('setUserId', JSON.parse(JSON.stringify(this.session)).userId)
          this.$store.commit('setUserType', JSON.parse(JSON.stringify(this.session)).userType)
          this.$router.push({ path: `/home` })
        }
        else if (JSON.parse(JSON.stringify(this.session)).userType == "Council Advisor") {
          this.$store.commit('setUserId', JSON.parse(JSON.stringify(this.session)).userId)
          this.$store.commit('setUserType', JSON.parse(JSON.stringify(this.session)).userType)
          this.$router.push({ path: `/home` })
        }
      }
    }
}
</script>
<style scoped>
.container{
  display: grid;
  grid-template-rows: 500px 1fr;
  row-gap: 50px;
}
.main{
  display: grid;
  column-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 100px;
}
.welcome-message{
  grid-column: 1/4;
  color: #111;
}
.welcome-message h1{
  font-weight: 600;
}
.welcome-message span{
  color: red;
  font-weight: 700;
}
.form-area{
  grid-column: 4/5;
  background: #eee;
  border-radius: 3px;
  box-shadow: 0px 20px 15px -10px rgba(255, 50, 50, .8);
  padding: 20px;
}
.form-area h2{
  border-left: 5px solid red;
  padding-left: 10px;
  margin-bottom: 20px;
}
form{
  display: flex;
  flex-direction: column;
}
input{
  border: 0;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 15px;
  box-shadow: 0 3px 3px #aaa;
  transition: .4s;
}
input:focus{
  outline: none;
  box-shadow: 0 3px 3px -1px #f00;
}
.checkbox{
  margin: 10px 0 10px 0;
}
#remember{
  margin-right: 10px
}
form button{
  width: 100px;
  padding: 5px;
  border: 0;
  border-radius: 5px;
  background: #fff;
  transition: .4s;
  box-shadow: 0 3px 3px #aaa;

}
form button:hover{
  color: #fff;
  background: rgba(255, 0, 0, .8);
  box-shadow: none;
}
</style>
