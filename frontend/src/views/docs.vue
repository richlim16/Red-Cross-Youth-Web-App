<template>
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center" style="height:100%;padding-bottom:0;">
        <!-- https://stackoverflow.com/questions/16244821/how-to-stop-sticky-footer-from-covering-content -->
        <div class="container" data-aos="zoom-out" data-aos-delay="100">
            <h1>Documents</h1>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <button class="btn btn-light active" onclick="filterSelection('all')">Show all</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn" onclick="filterSelection('cebu')">Cebu</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn" onclick="filterSelection('mandaue')">Mandaue</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn" onclick="filterSelection('talisay')">Talisay</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn" onclick="filterSelection('lapu')">Lapu-lapu</button>
                        </li>
                    </ul>
                    <ul class="navbar-nav justify-content-end">
                        <li class="nav-item">
                            <button class="btn btn-light active" onclick="listView()">List</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn" onclick="gridView()">Grid</button>
                        </li>
                    </ul>
                </div>
            </nav>
                <!-- https://www.w3schools.com/howto/howto_js_list_grid_view.asp -->
                <!-- Load Font Awesome Icon Library -->
                <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->

                <!-- Buttons to choose list or grid view -->
                <!-- <button class="btn btn-primary" onclick="listView()"><i class="fa fa-bars"></i> List</button> -->
                <!-- <button class="btn btn-primary" onclick="gridView()"><i class="fa fa-th-large"></i> Grid</button> -->
                <div class="row">
                    <div class="col-2">
                        <div class="card m-2">
                            <img src="https://www.carigamers.com/blog/wp-content/uploads/2017/06/blue-sq.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Membership Forms</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                    of the
                                    card's content.</p>
                                <a href="membershipForm"><router-link :to="{name: 'membershipform'}" class="btn btn-primary">Go somewhere</router-link></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="card m-2">
                            <img src="https://www.carigamers.com/blog/wp-content/uploads/2017/06/blue-sq.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Committee Membership Forms</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                    of the
                                    card's content.</p>
                                <a href="committeeMembershipForm"><router-link :to="{name: 'committeeform'}" class="btn btn-primary">Go somewhere</router-link></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="card m-2">
                            <img src="https://www.carigamers.com/blog/wp-content/uploads/2017/06/blue-sq.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Activity Request Forms</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                    of the
                                    card's content.</p>
                                <a href="activityRequestForm" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="card m-2">
                            <img src="https://www.carigamers.com/blog/wp-content/uploads/2017/06/blue-sq.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Activity Report Forms</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                    of the
                                    card's content.</p>
                                <a href="activityReportForm" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="card m-2">
                            <img src="https://www.carigamers.com/blog/wp-content/uploads/2017/06/blue-sq.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Uniform Request Forms</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                    of the
                                    card's content.</p>
                                <a href="unifRequest" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="card m-2">
                            <img src="https://www.carigamers.com/blog/wp-content/uploads/2017/06/blue-sq.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Service Request Forms</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                    of the
                                    card's content.</p>
                                <a href="serviceReq" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="card m-2">
                            <img src="https://www.carigamers.com/blog/wp-content/uploads/2017/06/blue-sq.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Council Monthly Reports</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                    of the
                                    card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="card m-2">
                            <img src="https://www.carigamers.com/blog/wp-content/uploads/2017/06/blue-sq.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                    of the
                                    card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'docs'
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