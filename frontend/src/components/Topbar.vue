<template>
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
</template>

<script>
export default {
    name: 'topbar',
}
</script>



<style scoped>
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
</style>