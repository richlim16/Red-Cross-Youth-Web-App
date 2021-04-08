<template>
    <div class="container">
        <n/>
        <!-- ======= Breadcrumbs ======= -->
            <section class="breadcrumbs">
                <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <h2>ACTIVITY FORM</h2>
                    <ol>
                    <li><a href="/docs">Back To Documents Page</a></li>
                    <li>Adding Report</li>
                    </ol>
                </div>
                </div>
            </section>
        <!-- End Breadcrumbs -->
        <div class="mainForm">
            <div class="title">
                <h1>Activity Request Form</h1>
            </div>

            <form class="needs-validation" novalidate="" action="/act/add" method="post">
                <div class="row">
                    <div class="item" id="widerInput">
                        <label for="committee">Council</label>
                        <select type="text" class="form-control" name="committee" value="" required="">
                            <option></option>
                        </select>
                    </div>
                    <div class="item" id="wideInput">
                        <label for="dateFiled">Date Filed:</label>
                        <input type="date" class="form-control" name="dateFiled" placeholder="" value="" required="">
                    </div>
                </div>
                <div class="row">
                    <div class="item" id="widerInput">
                        <label for="filedby">Filed by</label>
                        <input type="text" class="form-control" name="filedby" placeholder="Filed by:" value="" required="">
                    </div>
                    <div class="item" id="wideInput">
                        <label for="position">Position</label>
                        <input type="text" class="form-control" name="position" placeholder="Position" value="" required="">
                    </div>
                </div>
                <div class="row">
                    <div class="item" id="widerInput">
                        <label for="objectives">Objectives</label>
                        <textarea class="form-control" name="objectives" rows="5"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <label for="date">Date</label>
                        <input type="date" class="form-control" name="date" value="" required="">
                    </div>
                    <div class="item">
                        <label for="startTime">Start Time</label>
                        <input type="time" class="form-control" name="startTime" value="" required="">
                    </div>
                    <div class="item">
                        <label for="endTime">End Time</label>
                        <input type="time" class="form-control" name="endTime" value="" required="">
                    </div>
                    <div class="item" id="wideInput">
                        <label for="venue">Venue</label>
                        <input type="text" class="form-control" name="venue" placeholder="Venue" value="" required="">
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <label for="rcys">Number of RCYs involved</label>
                        <input type="number" class="form-control" name="rcys" placeholder="" value="" required="">
                    </div>
                    <div class="item" id="widerInput">
                        <label for="committeesList">Commitee/s Involved</label>
                        <div id="committeesList" name="committeesList">
                            <div id="committee" class="row col-md-6 mb-2">
                            <select type="text" class="form-control" value="" required="">
                                <option></option>
                            </select>
                            </div>
                            <svg id="addCommittee" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="item" id="widerInput">
                        <label for="chairList">Commitee Chairperson/s</label>
                        <div id="chairList" class="mb-5" name="chairList">
                        automatic fill when Committee is selected
                        </div>
                    </div>
                </div>

                <h6>Recommending Approval: </h6>
          <div class="row mb-3 text-center">
            <div class="col-md-6 mt-5">
              <h5 name="chapterRep" id="chapterRep"></h5>
              <hr class="my-1">  
              <p class="mb-1">Chapter Service Representative</p>
              <p>Red Cross Youth</p>
            </div>
          </div>

          <h6>Approved By: </h6>
          <div class="row mb-3 text-center">
            <div class="col-md-6 mt-5">
              <h5 name="chapterAdmin" id="chapterAdmin"></h5>
              <hr class="my-1">  
              <p class="mb-1">Chapter Administrator</p>
              <p>Red Cross insertChapterHere</p>
            </div>
          </div>        

          <hr class="mb-4">        
          <button type='submit' class="btn btn-danger btn-lg btn-block text-white">Post</button>        
        
            </form>
        </div>
        <f/>
    </div>
</template>

<script>

import navbar from '../components/Navbar.vue'
import footer from '../components/footer.vue'

export default{
    name: 'activityRequestForm',
    components: {
        'n':navbar,
        'f': footer
    }

}
</script>
<style scoped>
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
    .item input:focus, .item select:focus, .item textarea:focus{
      outline:none;
      box-shadow: 0 5px 3px -1px rgba(200, 0, 0, .8);
    }
    .item textarea{
        resize: none;
        width: 100%;
        padding: 5px;
        margin: 0;
        border: 0;
        border-radius: 3px;
        transition: .4s;
        box-shadow: 0 3px 3px -1px rgba(0, 0, 0, .5);
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
    .my-4{
      height: 1px;
      background: #aaa;
    }
    .my-1{
      height: .5px;
      background: #aaa;
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
    .row{
      flex-direction: column;
    }
    .item{
      width: 100%;
    }
    #wideInput{
      width: 100%;
    }
    #widerInput{
      width: 100%;
    }

    }

    /* end of @media */
</style>