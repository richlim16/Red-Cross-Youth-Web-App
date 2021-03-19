<template>
    <div class="docs">
        <n/>
        <!-- ======= Hero Section ======= -->
        <section id="hero" class="d-flex align-items-center" style="height:100%;padding-bottom:0;">
            <!-- https://stackoverflow.com/questions/16244821/how-to-stop-sticky-footer-from-covering-content -->
            <div class="container" data-aos="zoom-out" data-aos-delay="100">
                <h1>Documents</h1>
                    <!-- https://www.w3schools.com/howto/howto_js_list_grid_view.asp -->
                    <!-- Load Font Awesome Icon Library -->
                    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->

                    <!-- Buttons to choose list or grid view -->
                    <!-- <button class="btn btn-primary" onclick="listView()"><i class="fa fa-bars"></i> List</button> -->
                    <!-- <button class="btn btn-primary" onclick="gridView()"><i class="fa fa-th-large"></i> Grid</button> -->
                <div class="formsContainer">
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                </div>
            </div>
        </section>
        <f/>
    </div>
</template>

<script>
import navbar from '../components/Navbar.vue'
import footer from '../components/footer.vue'
export default {
    name: 'docs',
    components: {
      'n': navbar,
      'f': footer
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
    background: url("/images/REDCROSS123-1280x720.jpg") top left;
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

    .formsContainer{
      display: grid;
      grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
      column-gap: 50px;
      row-gap: 50px;
    }
    .item{
      background: #eee;
      border-radius: 5px;
      height: 400px;
    }

</style>
