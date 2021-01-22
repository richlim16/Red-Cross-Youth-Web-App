<template>
    <div class="login">
      <section id="hero" class="d-flex align-items-center">
          <div class="container" data-aos="zoom-out" data-aos-delay="100">
          <div class="row">
              <div class="col-md-8 col-sm-8 col-xs-12">
                  <h1>Welcome to <span>The Red Cross Youth Document Management System</span>
                  </h1>
                  <h2>Siamo Tutti Fratellil!</h2>
              </div>
              <div class="ml-auto col-md-4 col-sm-4 col-xs-12 text-white">
                  <div class="m-3 p-3 bg-danger rounded-lg">
                      <h2 class="text-center text-white">Log In</h2>
                      <form @submit="login">
                          <!-- <div class="form-group">
                          <label for="email">Email address</label>
                          <input type="email" class="form-control" id="email" required>
                          </div><br> -->
                          <div class="form-group">
                          <label for="username">Username</label>
                          <input type="text" class="form-control" v-model="username" id="username" name="username" required>
                          </div><br>
                          <div class="form-group">
                          <label for="pass">Password</label>
                          <input type="password" class="form-control" v-model="password" id="pass" name="pass" required>
                          </div><br>
                          <div class="form-group form-check">
                          <input type="checkbox" class="form-check-input" id="remember">
                          <label class="form-check-label" for="remember">Remember me </label>
                          </div><br>
                          <div class="row">
                              <div class="col-4">
                                  <button type="submit" class="btn btn-light">Log In</button>
                              </div>
                              <div class="col-8">
                                  <a href="/signup" class="text-white text-center"><u>No account? Click here</u></a>
                              </div>
                          </div>
                      </form>
                      
                  </div>
              </div>
          </div>
          </div><br>
      </section><!-- End Hero --> 
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
    /*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  height: 75vh;
  background: url("/images/background.jpg") top left;
  background-size: cover;
  position: relative;
}

#hero:before {
  content: "";
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#hero .container {
  position: relative;
  padding-top: 132px;
}

@media (max-width: 992px) {
  #hero .container {
    padding-top: 58px;
  }
}

#hero h1 {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #222222;
  font-family: "Poppins", sans-serif;
}

#hero h1 span {
  color: #ea1010;
}

#hero h2 {
  color: #555555;
  margin: 5px 0 30px 0;
  font-size: 24px;
  font-weight: 400;
}

#hero .btn-get-started {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 28px;
  border-radius: 4px;
  transition: 0.5s;
  color: #fff;
  background: #ea1010;
}

#hero .btn-get-started:hover {
  background: #e65b5b;
}

#hero .btn-watch-video {
  font-size: 16px;
  display: inline-block;
  padding: 10px 25px 8px 40px;
  transition: 0.5s;
  margin-left: 25px;
  color: #222222;
  position: relative;
  font-weight: 600;
}

#hero .btn-watch-video i {
  color: #ea1010;
  font-size: 32px;
  position: absolute;
  left: 0;
  top: 7px;
  transition: 0.3s;
}

#hero .btn-watch-video:hover {
  color: #ea1010;
}

#hero .btn-watch-video:hover i {
  color: #eb5f5f;
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 768px) {
  #hero {
    height: 100vh;
  }
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #hero h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
  #hero .btn-get-started, #hero .btn-watch-video {
    font-size: 13px;
  }
}

@media (max-height: 500px) {
  #hero {
    height: 120vh;
  }
}
</style>