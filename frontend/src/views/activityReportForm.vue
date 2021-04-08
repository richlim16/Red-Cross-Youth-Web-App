<template>
    <div class="container">
        <n/>
        <!-- ======= Breadcrumbs ======= -->
        <section class="breadcrumbs">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <h2>Activity Report Form</h2>
                    <ol>
                    <li><a href="/docs">Back To Activity Page</a></li>
                    <li>Uniform</li>
                    </ol>
                </div>
            </div>
        </section>
        <!-- End Breadcrumbs -->   
        <div class="mainForm">
            <div class="title">
                <h1>Activity Report Form</h1>
            </div>
            <form class="needs-validation" novalidate="" action="/act/add" method="post">
                <div class="row">
                    <div class="item" id="wideInput">
                        <label for="committee">Council</label>
                        <select type="text" class="form-control" name="committee" value="" required="">
                        <option></option>
                        </select>
                    </div>
                    <div class="item" id="wideInput">
                        <label for="activity">Name of Activity</label>
                        <select type="text" class="form-control" name="activity" value="" required="">
                        <option></option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
        <f/>
    </div>
</template>
<script>

import navbar from '../components/Navbar.vue'
import footer from '../components/footer.vue'

export default{
    name: 'activityReportForm',
    components: {
        'n':navbar,
        'f': footer
    }

}
</script>
<script>

import navbar from '../components/Navbar.vue'
import footer from '../components/footer.vue'

export default{
    name: 'uniformRequestForm',
    components: {
        'n':navbar,
        'f': footer
    }

}
</script>
<style lang="css" scoped>
.breadcrumbs {
    padding: 20px 0;
    background-color: #f1f6fe;
    min-height: 40px;
    margin-top: 134px;
    }

    @media (max-width: 992px) {
    .breadcrumbs {
        margin-top: 58px;
    }
    }

    .breadcrumbs h2 {
    font-size: 24px;
    font-weight: 300;
    margin: 0;
    }

    @media (max-width: 992px) {
    .breadcrumbs h2 {
        margin: 0 0 10px 0;
    }
    }

    .breadcrumbs ol {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 14px;
    }

    .breadcrumbs ol li + li {
    padding-left: 10px;
    }

    .breadcrumbs ol li + li::before {
    display: inline-block;
    padding-right: 10px;
    color: #6c757d;
    content: "/";
    }

    @media (max-width: 768px) {
    .breadcrumbs .d-flex {
        display: block !important;
    }
    .breadcrumbs ol {
        display: block;
    }
    .breadcrumbs ol li {
        display: inline-block;
    }
    }
    .mainForm{
      margin-top: 50px;
      margin-bottom: 50px;
      padding: 30px;
      background: #f9f9f9;
      box-shadow: 0 20px 20px #aaa;
    }
    .mainForm .title{
        margin-bottom: 50px;
    }
    select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';

    margin: 1vh;
    width: 150px;
    padding: .5vh;
    border: 1px solid #aaa;
    color: #333;
    border-radius: 3px;
    transition: .4s;
    }
    select:focus{
        border: 1px solid #00aaff;
        box-shadow: 0 0 5px #00aaff;
    }
    .item{
        display: flex;
        flex-direction: column;
        margin-right: 25px;
        margin-bottom: 15px;
    }
    .item input, .item select{
        width: 100%;
        height: 4vh;
        padding: 5px;
        margin: 0;
        border: 0;
        border-radius: 3px;
        transition: .4s;
        box-shadow: 0 3px 3px -1px rgba(0, 0, 0, .5);
    }
    .item input:focus, .item select:focus{
      outline:none;
      box-shadow: 0 5px 3px -1px rgba(200, 0, 0, .8);
    }
    #widerInput{
      width: 50%;
    }
    #wideInput{
      width: 30%;
    }
    .row{
        padding-left: 30px;
    }
    hr{
        background: #e00;
        height: 5px;
        border-radius: 5px;
        margin-bottom: 20px;
    }
    button{
        font-size: 2vh;
        padding: 1vh 2vh 1vh 2vh;
        border: 0;
        border-radius: 5px;
        background: #e00;
        color: #eee;
        box-shadow: 0 5px 5px rgba(0, 0, 0, .5);
        transition: .2s;
    }
    button:hover{
        background: #f00;
        margin-top: 5px;
        box-shadow: none;
    }
</style>
