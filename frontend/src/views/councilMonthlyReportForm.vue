<template>
    <div class="container">
        <n/>
    <!-- ======= Breadcrumbs ======= -->
        <section class="breadcrumbs">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <h2>Council Monthly Report Form</h2>
                    <ol>
                    <li><a href="/docs">Back To Activity Page</a></li>
                    <li>Adding Report</li>
                    </ol>
                </div>
            </div>
        </section>
    <!-- End Breadcrumbs -->
        <div class="mainForm">
            <div class="row">
                <p>INSTRUCTIONS: This form shall be accomplished by the chapter council secretary in triplicate copies and shall be submitted to the Area Coordinator at the end of every month.  
                One (1) copy for the Chapter Administrator, one(1) copy for the Area Coordinator and one (1) copy for the file.
                </p>
            </div>
            <hr>
            <div class="item">
                <label for="month">For the month of</label>
                <select name="month" id="month" type="text" required="">
                    <option value="" disabled selected hidden>-Select Month-</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>
            <div class="item">
                <table class="table table-bordered text-center">
                    <thead>
                    <tr>
                        <th>Name of Activity</th>
                        <th>Nature of Activity</th>
                        <th>Accomplishments</th>
                        <th>Objective</th>
                        <th>No. of RCY Participants</th>
                        <th>Remarks</th>
                    </tr>
                    </thead>
                    <tbody id="activityTable">

                    </tbody>
                </table>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Add an Activity</button>
                </div>
            </div>
        </div>
        <f/>
    </div>
</template>

<script>

import navbar from '../components/Navbar.vue'
import footer from '../components/footer.vue'

export default{
    name: 'councilMonthlyReportForm',
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
        padding: 3vh;
    }
    .row{
        padding: 3vh;
    }
    hr{
        background: #e00;
        height: 5px;
        border-radius: 5px;
        margin-bottom: 20px;
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
</style>
