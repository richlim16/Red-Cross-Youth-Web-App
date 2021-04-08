<template>
    <div>
        <n/>
        <!-- ======= Breadcrumbs ======= -->
        <section class="breadcrumbs">
            <div class="container">

            <div class="d-flex justify-content-between align-items-center">
                <h2>COMMITTEE MEMBERSHIP FORM</h2>
                <ol>
                <li><a href="/docs">Back To Documents Page</a></li>
                <li>Adding Report</li>
                </ol>
            </div>

            </div>
        </section><!-- End Breadcrumbs -->

        <section class="inner-page">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-3 mb-3">
                        <label for="councilName">Name of School/Community Council</label>
                        <input type="text" class="form-control" name="councilName" placeholder="automatic" value="" required="">
                    </div>
                </div>

                <form class="needs-validation" novalidate="" action="/act/add" method="post">
                
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-3 mb-5">
                        <label for="committee">Committee</label>
                        <select v-model="committeeType" @change="changeCommittee" id="committeeType" type="text" class="form-control" name="committee" required="">
                            <option disabled selected value>-select type-</option>
                            <option value="DRRM">DRRM</option>
                            <option value="Pledge 25">Pledge 25</option>
                            <option value="Trainings">Trainings</option>
                            <option value="Council Dev">Council Dev</option>
                            <option value="YAPE">YAPE</option>
                            <option value="YPE">YPE</option>
                            <option value="Health and Services">Health and Services</option>
                            <option value="Welfare">Welfare</option>
                            <option value="Awards and Recognition">Awards and Recognition</option>
                            <option value="Safety">Safety</option>
                        </select>
                        </div>
                    </div>

                <div class="row mb-5">
                    <div class="col-md-6">
                    <label for="chairperson">Chairperson</label>
                    <h5 name="chairperson" id="chairperson"></h5>
                    </div>
                    <div class="col-md-3">
                    <label for="cel">Cel. #</label>
                    <h5 name="cel" id="cel"></h5>
                    </div>
                    <div class="col-md-3">
                    <label for="tel">Tel. #</label>
                    <h5 name="tel" id="tel"></h5>
                    </div>
                </div>


                    <table class="table table-bordered text-center">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>SURNAME</th>
                            <th>FIRST NAME</th>
                            <th>MIDDLE INITIAL  </th>
                            <th>NICKNAME</th>
                            <th>CEL #</th>
                            <th>TEL #</th>
                        </tr>
                        </thead>
                        <tbody id="memberTable">    
                            <tr v-for="(member,i) in committeeMembers" :key="i">
                                <th> {{i+1}} </th>
                                <td> {{member.surname}} </td>
                                <td> {{member.first_name}} </td>
                                <td> {{member.middle_name}} </td>
                                <td> {{member.nickname}} </td>
                                <td> {{member.contact_no}} </td>
                                <td> {{member.city_tel}} </td>
                            </tr>
                        </tbody>
                    </table>


                <!-- Button trigger modal -->
                <div class="d-flex justify-content-center">
                    <button type="button" v-on:click="showMembers" id="showMembers" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Add a Member</button>
                </div>


                <div class="row mt-5 mb-3">
                    <div class="col-md-2 text-right">Prepared by: </div>
                        <div class="col-md-4 text-center">            
                        <h5 name="councilSec" id="councilSec"></h5>
                        <hr class="my-1">  
                        <p>School Council Secretary</p>
                        </div>
                        <div class="col-md-2 text-right">Submitted by: </div>
                        <div class="col-md-4 text-center">
                        <h5 name="councilPres" id="councilPres"></h5>
                        <hr class="my-1">  
                        <p>School Council President</p>
                    </div>
                </div>

                <div class="row mt-3 mb-3">
                    <div class="col-md-2 text-right">Noted by: </div>
                        <div class="col-md-4 text-center">            
                        <h5 name="councilAdv" id="councilAdv"></h5>
                        <hr class="my-1">  
                        <p>School Council Adviser</p>
                        </div>
                        <div class="col-md-2 text-right">Date filed: </div>
                        <div class="col-md-4 text-center">
                        <input type="date" class="form-control" name="dateFiled" placeholder="" value="" required="">
                    </div>
                </div>

                <div class="row mt-5 mb-3 justify-content-center">
                    <div class="col-md-4 text-center">            
                    <h5 name="cyc1" id="cyc1"></h5>
                    <hr class="my-1">  
                    <p>Chapter Youth Council</p>
                    </div>
                    <div class="col-md-4 text-center">
                    <h5 name="cyc2" id="cyc2"></h5>
                    <hr class="my-1">  
                    <p>Chapter Youth Council</p>
                    </div>
                </div>

                <div class="row mt-5 mb-3 justify-content-center">
                    <div class="col-md-4 text-center">            
                    <h5 name="cyc1" id="cyc1"></h5>
                    <hr class="my-1">  
                    <p>Chapter Service Representative - RCY</p>
                    </div>
                    <div class="col-md-4 text-center">
                    <h5 name="cyc2" id="cyc2"></h5>
                    <hr class="my-1">  
                    <p>Chapter Administrator</p>
                    </div>
                </div>



                <hr class="mb-4">        
                <button type='submit' class="btn btn-danger btn-lg btn-block text-white">Post</button>        
                </form>
            </div>
        </section>

        <!-- Modal -->
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Available Members</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <table class="table table-bordered text-center">
                        <thead>
                            <tr>
                            <th></th>
                            <th>SURNAME</th>
                            <th>FIRST NAME</th>
                            <th>MIDDLE INITIAL  </th>
                            <th>NICKNAME</th>
                            <th>CEL #</th>
                            <th>TEL #</th>
                            </tr>
                        </thead>
                        <tbody id="availMemberTable">
                            <tr v-for="(member,i) in availableMembers" :key="i">
                                <th> <button type="button" v-on:click="addToCommittee(member.id)" class="includeMember btn btn-primary">Add</button> </th>
                                <td> {{member.surname}} </td>
                                <td> {{member.first_name}} </td>
                                <td> {{member.middle_name}} </td>
                                <td> {{member.nickname}} </td>
                                <td> {{member.contact_no}} </td>
                                <td> {{member.city_tel}} </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button id="closeModal" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
<!-- <<<<<<< HEAD -->
        <f/>
<!-- ======= -->
<!-- >>>>>>> 8c74bca45eeb3142a56783ebc2e93e26d3b3593e -->
    </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
// <<<<<<< HEAD
import navbar from '../components/Navbar.vue'
import footer from '../components/footer.vue'
// =======
import axios from 'axios';

export default {
    name: 'committeeForm',
    components: {
        'n': navbar,
        'f': footer
    },
    data() {
        return {
            committeeType: null,
            committeeMembers: [],
            availableMembers: [],
            sessionUserId: null
        }
    },
    mounted(){
        this.sessionUserId = this.$store.getters.getUserId
    },
    methods: {
        changeCommittee: function(){
            axios.get('http://localhost:3000/generatedCommitteeMembershipForm/' + this.committeeType + '&' + this.sessionUserId)
            .then(response => this.committeeMembers = response.data)
            .catch(error => console.log(error))
        },
        showMembers: function(){
            axios.get('http://localhost:3000/getNoneCommitteeMembers')
            .then(response => this.availableMembers = response.data)
            .catch(error => console.log(error))
        },
        addToCommittee: function(memId){
            axios({
                method: 'POST',
                url: 'http://localhost:3000/act/addCommitteeMember',
                data: {memberId: memId, type: this.committeeType, sessionUserId: this.sessionUserId}
            })

            this.changeCommittee()
            $('#closeModal').click()
        }
// >>>>>>> 8c74bca45eeb3142a56783ebc2e93e26d3b3593e
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