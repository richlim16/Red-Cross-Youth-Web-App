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
                  <div class="item">
                      <img src="/images/Icons/membershipIcon.png" alt="redcross logo here">
                      <div class="text"><h3>Membership Form</h3></div>
                      <a href="/membershipForm">Make Form</a>
                  </div>
                  <div class="item">
                      <img src="/images/Icons/CouncilMonthlyIcon.png" alt="redcross logo here">
                      <div class="text"><h3>Council Monthly Reports</h3></div>
                      <a href="/councilMonthlyReportForm">Make Form</a>
                  </div>
                  <div class="item">
                      <img src="/images/Icons/UniformReqIcon.png" alt="redcross logo here">
                      <div class="text"><h3>Uniform Request Forms</h3></div>
                      <a href="/unifRequest">Make Form</a>
                  </div>
                  <div class="item">
                        <img src="/images/Icons/CommitteeMembershipIcon.png" alt="redcross logo here">
                        <div class="text"><h3>Committee Membership Forms</h3></div>
                        <a href="/committeeForm">Make Form</a>
                  </div>
                  <div class="item">
                      <img src="/images/Icons/ActivityReqIcon.png" alt="redcross logo here">
                      <div class="text"><h3>Activity Request Forms</h3></div>
                      <a href="/activityRequestForm">Make Form</a>
                  </div>
                  <div class="item">
                      <img src="/images/Icons/ActivityReportIcon.png" alt="redcross logo here">
                      <div class="text"><h3>Activity Report Forms</h3></div>
                      <a href="/activityReportForm">Make Form</a>
                  </div>
                  <div class="item">
                      <img src="/images/Icons/ServiceReqIcon.png" alt="redcross logo here">
                      <div class="text"><h3>Service Request Forms</h3></div>
                      <a href="/membershipForm">Make Form</a>
                  </div>
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
    background: #eee;
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

    @media (max-width: 768px) {
    #hero .container {
        padding-top: 58px;
    }
    .container h1{
    margin-top: 100px;

    }
    .formsContainer{
      row-gap: 10px;
    }

    }
    /*end of @media*/

    #hero h1 {
    margin: 1vh;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: #222222;
    font-family: "Poppins", sans-serif;
    }

    #hero h1 span {
    color: #ea1010;
    }
    .container{
    }
    .formsContainer{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
      padding: 5vh;
      column-gap: 50px;
      row-gap: 50px;
    }

    .item{
      display: grid;
      place-items: center;
      padding: 20px;
      background: #eee;
      border-radius: 10px;
      box-shadow: 10px 10px 30px #dfdfdf,
                  -10px -10px 30px #ffffff;
                  
      row-gap: 5px;
    }

    .item img{
      width: 50%;
    }
    .item .text{
      text-align: center;
      font-size: 5rem;
    }
    .item a{
      background: #e00;
      text-decoration: none;
      color: #eee;
      font-weight: 500;
      padding: 10px;
      border-radius: 5px;
    }

</style>
