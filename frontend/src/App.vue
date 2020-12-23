<template>
  <div id="app">
    <div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
    <div class="container d-flex">
        <div class="contact-info mr-auto">
        <i class="icofont-envelope"></i> <a href="mailto:contact@example.com">ceburcy@gmail.com</a>
        <i class="icofont-phone"></i> +1 5589 55488 55
        </div>
        <div class="social-links">
        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
        <a href="https://www.facebook.com/ceburcy" class="facebook"><i class="icofont-facebook"></i></a>
        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>      
        </div>
    </div>
    </div>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">

            <a href="/" class="logo mr-auto"><img src="..\..\public\images\1.png" alt="logo"> councilName councilType</a>
            <nav class="nav-menu d-none d-lg-block">
                <ul>
                
                    <li><a href="/"><router-link to="/">Home</router-link></a></li> <!--class="active"-->
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#team">Team</a></li>
                    <li><a href="/#contact">Contact</a></li>
                     <li class="drop-down"><a href="#">Document</a>
                      <ul>
                        <li><a href="/docs"><router-link :to="{name: 'docs'}">Forms</router-link></a></li>
                        <li><a href="/officerActivity"><router-link :to="{name: 'masterlist'}">View Forms</router-link></a></li>
                      </ul>
                    </li>
                    <li class="drop-down"><a href="#">Profile</a>
                    <ul>
                        <li><a href="/login"><router-link :to="{name: 'login'}">Login</router-link></a></li>                     
                        <li><a href="/signup">Log Out</a></li>
                    </ul>
                    </li>
                </ul>
            </nav><!-- .nav-menu -->
        </div>
    </header><!-- End Header -->


    <router-view/> <!-- <-This is the place where the Template is added -->
    
    

    <!-- ======= Footer ======= -->
    <footer id="footer">
        <div class="footer-top">
        <div class="container">
            <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
                <h3>Red Cross Chapter Youth<span>.</span></h3>
                <p>
                Cebu <br>
                Cebu City, CEBU 6000<br>
                Philippines <br><br>
                <strong>Phone:</strong> +63 5589 55488 55<br>
                <strong>Email:</strong> ceburcy@gmail.com<br> <!--let's consider making a db that can contain data of chapters so they can update their contact info easily-->
                </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="#">insert services RCY provides</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">insert services RCY provides</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">insert services RCY provides</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">insert services RCY provides</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">insert services RCY provides</a></li>
                </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>              
                </div>
            </div>
            </div>
        </div>
        </div>
    </footer><!-- End Footer -->
  </div>
</template>


<script>
// import addcouncil from './components/addCouncil.vue'
// import formnav from './components/formNav.vue'
// import membershipform from './components/membershipForm.vue'
// import rolecard from './components/roleCard/vue'
// import committee from './components/committeeForm.vue'
// import home from './views/Home.vue'

import axios from 'axios';

export default {
  name: 'App',
  components: {
    // 'add': addcouncil,
    // 'FN': formnav,
    // home,
    // 'M': membershipform
    // 'C': committee,

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
#topbar {
    background: #ea1010;
    height: 40px;
    font-size: 14px;
    transition: all 0.5s;
    color: #fff;
    }

    #topbar.topbar-scrolled {
    top: -40px;
    }

    #topbar .contact-info a {
    line-height: 1;
    color: #fff;
    transition: 0.3s;
    }

    #topbar .contact-info a:hover {
    text-decoration: underline;
    }

    #topbar .contact-info i {
    padding-right: 4px;
    margin-left: 15px;
    }

    #topbar .contact-info i:first-child {
    margin-left: 0;
    }

    #topbar .social-links a {
    color: rgba(255, 255, 255, 0.6);
    padding-left: 15px;
    display: inline-block;
    line-height: 1px;
    transition: 0.3s;
    }

    #topbar .social-links a:hover {
    color: #fff;
    }
  body {
    font-family: "Open Sans", sans-serif;
    color: #444444;
  }

  a {
    color: #ea1010;
    text-decoration: none;
  }

  a:hover {
    color: #e65b5b;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto", sans-serif;
  }
  #header {
          background: #fff;
          transition: all 0.5s;
          z-index: 997;
          padding: 25px 0;
          top: 40px;
          box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
      }

      #header.header-scrolled {
          top: 0;
          padding: 15px;
      }

      #header .logo {
          font-size: 32px;
          margin: 0;
          padding: 0;
          line-height: 1;
          font-weight: 600;
          letter-spacing: 0.8px;
          font-family: "Poppins", sans-serif;
      }

      #header .logo a {
          color: #222222;
      }

      #header .logo a span {
          color: #ea1010;
      }

      #header .logo img {
          max-height: 45px;
      }

      @media (max-width: 992px) {
          #header {
              padding: 15px;
              top: 0;
          }
          #header .logo {
              font-size: 28px;
          }
      }

  /* ==============================================================================
                              All the CSS for the Navbar
  =================================================================================*/
    .nav-menu ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .nav-menu > ul {
      display: flex;
    }

    .nav-menu > ul > li {
      position: relative;
      white-space: nowrap;
      padding: 10px 0 10px 28px;
    }

    .nav-menu a {
      display: block;
      position: relative;
      color: #222222;
      transition: 0.3s;
      font-size: 15px;
      font-weight: 600;
      padding: 0 3px;
      font-family: "Open Sans", sans-serif;
    }

    .nav-menu > ul > li > a:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: #ea1010;
      visibility: hidden;
      width: 0px;
      transition: all 0.3s ease-in-out 0s;
    }

    .nav-menu a:hover:before, .nav-menu li:hover > a:before, .nav-menu .active > a:before {
      visibility: visible;
      width: 100%;
    }

    .nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {
      color: #ea1010;
    }

    .nav-menu .drop-down ul {
      display: block;
      position: absolute;
      left: 26px;
      top: calc(100% + 30px);
      z-index: 99;
      opacity: 0;
      visibility: hidden;
      padding: 10px 0;
      background: #fff;
      box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
      transition: 0.3s;
    }

    .nav-menu .drop-down:hover > ul {
      opacity: 1;
      top: 100%;
      visibility: visible;
    }

    .nav-menu .drop-down li {
      min-width: 180px;
      position: relative;
    }

    .nav-menu .drop-down ul a {
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 500;
      text-transform: none;
      color: #062b5b;
    }

    .nav-menu .drop-down ul a:hover, .nav-menu .drop-down ul .active > a, .nav-menu .drop-down ul li:hover > a {
      color: #ea1010;
    }

    .nav-menu .drop-down > a:after {
      content: "\ea99";
      font-family: IcoFont;
      padding-left: 5px;
    }

    .nav-menu .drop-down .drop-down ul {
      top: 0;
      left: calc(100% - 30px);
    }

    .nav-menu .drop-down .drop-down:hover > ul {
      opacity: 1;
      top: 0;
      left: 100%;
    }

    .nav-menu .drop-down .drop-down > a {
      padding-right: 35px;
    }

    .nav-menu .drop-down .drop-down > a:after {
      content: "\eaa0";
      font-family: IcoFont;
      position: absolute;
      right: 15px;
    }

    @media (max-width: 1366px) {
      .nav-menu .drop-down .drop-down ul {
        left: -90%;
      }
      .nav-menu .drop-down .drop-down:hover > ul {
        left: -100%;
      }
      .nav-menu .drop-down .drop-down > a:after {
        content: "\ea9d";
      }
    }

    /* Mobile Navigation */
    .mobile-nav-toggle {
      position: fixed;
      right: 15px;
      top: 15px;
      z-index: 9998;
      border: 0;
      background: none;
      font-size: 24px;
      transition: all 0.4s;
      outline: none !important;
      line-height: 1;
      cursor: pointer;
      text-align: right;
    }

    .mobile-nav-toggle i {
      color: #222222;
    }

    .mobile-nav {
      position: fixed;
      top: 55px;
      right: 15px;
      bottom: 15px;
      left: 15px;
      z-index: 9999;
      overflow-y: auto;
      background: #fff;
      transition: ease-in-out 0.2s;
      opacity: 0;
      visibility: hidden;
      border-radius: 10px;
      padding: 10px 0;
    }

    .mobile-nav * {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .mobile-nav a {
      display: block;
      position: relative;
      color: #222222;
      padding: 10px 20px;
      font-weight: 500;
      outline: none;
    }

    .mobile-nav a:hover, .mobile-nav .active > a, .mobile-nav li:hover > a {
      color: #ea1010;
      text-decoration: none;
    }

    .mobile-nav .drop-down > a:after {
      content: "\ea99";
      font-family: IcoFont;
      padding-left: 10px;
      position: absolute;
      right: 15px;
    }

    .mobile-nav .active.drop-down > a:after {
      content: "\eaa1";
    }

    .mobile-nav .drop-down > a {
      padding-right: 35px;
    }

    .mobile-nav .drop-down ul {
      display: none;
      overflow: hidden;
    }

    .mobile-nav .drop-down li {
      padding-left: 20px;
    }

    .mobile-nav-overly {
      width: 100%;
      height: 100%;
      z-index: 9997;
      top: 0;
      left: 0;
      position: fixed;
      background: rgba(9, 9, 9, 0.6);
      overflow: hidden;
      display: none;
      transition: ease-in-out 0.2s;
    }

    .mobile-nav-active {
      overflow: hidden;
    }

    .mobile-nav-active .mobile-nav {
      opacity: 1;
      visibility: visible;
    }

    .mobile-nav-active .mobile-nav-toggle i {
      color: #fff;
    }

    #footer {
      background: #fff;
      padding: 0 0 30px 0;
      color: #444444;
      font-size: 14px;
      background: #f1f6fe;
    }

    #footer .footer-newsletter {
      padding: 50px 0;
      background: #f1f6fe;
      text-align: center;
      font-size: 15px;
    }

    #footer .footer-newsletter h4 {
      font-size: 24px;
      margin: 0 0 20px 0;
      padding: 0;
      line-height: 1;
      font-weight: 600;
    }

    #footer .footer-newsletter form {
      margin-top: 30px;
      background: #fff;
      padding: 6px 10px;
      position: relative;
      border-radius: 4px;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);
      text-align: left;
    }

    #footer .footer-newsletter form input[type="email"] {
      border: 0;
      padding: 4px 8px;
      width: calc(100% - 100px);
    }

    #footer .footer-newsletter form input[type="submit"] {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border: 0;
      background: none;
      font-size: 16px;
      padding: 0 20px;
      background: #ea1010;
      color: #fff;
      transition: 0.3s;
      border-radius: 0 4px 4px 0;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    }

    #footer .footer-newsletter form input[type="submit"]:hover {
      background: #0d58ba;
    }

    #footer .footer-top {
      padding: 60px 0 30px 0;
      background: #fff;
    }

    #footer .footer-top .footer-contact {
      margin-bottom: 30px;
    }

    #footer .footer-top .footer-contact h3 {
      font-size: 24px;
      margin: 0 0 15px 0;
      padding: 2px 0 2px 0;
      line-height: 1;
      font-weight: 700;
    }

    #footer .footer-top .footer-contact h3 span {
      color: #ea1010;
    }

    #footer .footer-top .footer-contact p {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 0;
      font-family: "Roboto", sans-serif;
      color: #777777;
    }

    #footer .footer-top h4 {
      font-size: 16px;
      font-weight: bold;
      color: #444444;
      position: relative;
      padding-bottom: 12px;
    }

    #footer .footer-top .footer-links {
      margin-bottom: 30px;
    }

    #footer .footer-top .footer-links ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    #footer .footer-top .footer-links ul i {
      padding-right: 2px;
      color: #ea1010;
      font-size: 18px;
      line-height: 1;
    }

    #footer .footer-top .footer-links ul li {
      padding: 10px 0;
      display: flex;
      align-items: center;
    }

    #footer .footer-top .footer-links ul li:first-child {
      padding-top: 0;
    }

    #footer .footer-top .footer-links ul a {
      color: #777777;
      transition: 0.3s;
      display: inline-block;
      line-height: 1;
    }

    #footer .footer-top .footer-links ul a:hover {
      text-decoration: none;
      color: #ea1010;
    }

    #footer .footer-top .social-links a {
      font-size: 18px;
      display: inline-block;
      background: #ea1010;
      color: #fff;
      line-height: 1;
      padding: 8px 0;
      margin-right: 4px;
      border-radius: 4px;
      text-align: center;
      width: 36px;
      height: 36px;
      transition: 0.3s;
    }

    #footer .footer-top .social-links a:hover {
      background: #3b8af2;
      color: #fff;
      text-decoration: none;
    }

    #footer .copyright {
      text-align: center;
      float: left;
    }

    #footer .credits {
      float: right;
      text-align: center;
      font-size: 13px;
      color: #444444;
    }

    @media (max-width: 768px) {
      #footer .copyright, #footer .credits {
        float: none;
        text-align: center;
        padding: 2px 0;
      }
    }
</style>
