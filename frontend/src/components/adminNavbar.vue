<template>
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
            <div class="navbar-wrapper">
            <a class="navbar-brand"><router-link :to="{name: 'adminHome'}">Home</router-link></a>
            </div>
            <!-- <div class="navbar-wrapper">
            <a class="navbar-brand">Forms</a>
            </div> -->
            <div class="navbar-wrapper">
            <a class="navbar-brand"><router-link :to="{name: 'addCouncil'}">Councils</router-link></a>
            </div>
            <!-- <div class="navbar-wrapper">
            <a class="navbar-brand" href="/adminCouncils">Councils</a>
            </div> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end">
            <form class="navbar-form">
                <!-- <div class="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Search...">
                <button type="submit" class="btn btn-white btn-round btn-just-icon">
                    <i class="material-icons">search</i>
                    <div class="ripple-container"></div>
                </button>
                </div> -->
            </form>
            <ul class="navbar-nav">
                <!-- <li class="nav-item">
                <a class="nav-link" href="javascript:;">
                    <i class="material-icons">dashboard</i>
                    <p class="d-lg-none d-md-block">
                    Stats
                    </p>
                </a>
                </li> -->
                <li class="nav-item dropdown">
                <a class="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="material-icons">notifications</i>
                    <span class="notification">5</span>
                    <p class="d-lg-none d-md-block">
                    Some Actions
                    </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Mike John responded to your email</a>
                    <a class="dropdown-item" href="#">You have 5 new tasks</a>
                    <a class="dropdown-item" href="#">You're now friend with Andrew</a>
                    <a class="dropdown-item" href="#">Another Notification</a>
                    <a class="dropdown-item" href="#">Another One</a>
                </div>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link" href="javascript:;" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="material-icons">person</i>
                    <p class="d-lg-none d-md-block">
                    Account
                    </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                    <a href="/adminProfile" class="dropdown-item" >Profile</a>
                    <!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>help</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div> -->
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" v-on:click="logout">Log out</a>
                </div>
                </li>
            </ul>
            </div>
        </div>
        </nav>
</template>

<script>
export default {
    name: 'adminNavbar',
    methods: {
      logout: function(){
        this.$store.commit('setUserId', null)
        this.$store.commit('setUserType', null) 
        this.$router.replace({ path: `/` })
      }
    }
}
</script>

<style scoped>
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
</style>