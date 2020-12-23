<template>
    <div id="membershipForm">
        <n/>
        <!-- ======= Breadcrumbs ======= -->
        <section class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Membership Form</h2>
                    <ol>
                    <li><a href="index.html">Back To Activity Page</a></li>
                    <li>Adding Report</li>
                    </ol>
                </div>

            </div>
        </section><!-- End Breadcrumbs -->

        <section class="inner-page">
            <div class="container">
                <p>Fill out the following fields to apply for membership</p>
                <div class="row">
                    <div class="col-md-8 order-md-1">
                        <form id="addMemberForm" @submit="compile" class="needs-validation">
                            <div class="row d-flex justify-content-end">
                                <div class="col-md-2 mb-1">
                                    <label for="bloodType">Blood Type</label>
                                    <select v-model="bloodType" class="form-control" name="bloodType">
                                    <option disabled selected value>-select type-</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="AB">AB</option>
                                    <option value="O">O</option>
                                    </select>
                                </div>
                                <div class="row d-flex justify-content-end">
                                    <div class="col-md-4 mb-1">
                                        <label for="rcyId">RCY ID No.</label>
                                        <input type="number" class="form-control" v-model="rcyId" name="rcyId" placeholder="RCY ID No." value="" required="">
                                        <div class="invalid-feedback">
                                        Valid bloodtype is required.
                                        </div>
                                    </div>
                                </div>
                                <h4 class="my-3">PERSONAL DATA</h4>
                                <div class="row">
                                    <div class="col-md-4 mb-1">
                                        <label for="surName">Surname</label>
                                        <input type="text" class="form-control" v-model="surname" name="surname" placeholder="Surname" value="" required="">
                                        <div class="invalid-feedback">
                                        Valid surname is required.
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-1">
                                        <label for="firstName">First name</label>
                                        <input type="text" class="form-control" v-model="firstname" name="firstname" placeholder="First Name" value="" required="">
                                        <div class="invalid-feedback">
                                        Valid first name is required.
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-1">
                                        <label for="middleName">Middle name</label>
                                        <input type="text" class="form-control" v-model="middlename" name="middlename" placeholder="Middle Name" value="" required="">
                                        <div class="invalid-feedback">
                                        Valid middle name is required.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 mb-4">
                                    <label for="nickname">Nickname</label>
                                    <input type="text" class="form-control" v-model="nickname" name="nickname" placeholder="Nickame" value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <label for="birthdate">Birthdate</label>
                                    <input type="date" class="form-control" v-model="birthdate" name="birthdate" placeholder="Birthdate" value="" required="">
                                </div>
                                <div class="col-md-3 mb-4">
                                    <label for="age">Age</label>
                                    <input type="number" class="form-control" v-model="age" name="age" placeholder="Age" value="">
                                </div>
                                <div class="col-md-3 mb-4">
                                    <label for="civilStatus">Civil Status</label>
                                    <select v-model="civilStatus" class="form-control" name="civilStatus">
                                    <option disabled selected value> -- select an option -- </option>
                                    <option value="SINGLE">SINGLE</option>
                                    <option value="MARRIED">MARRIED</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-2 mb-4">
                                    <label for="height">Height</label>
                                    <input type="number" class="form-control" v-model="height" name="height" placeholder="inches" value="" required=""> 
                                </div>
                                <div class="col-md-2 mb-4">
                                    <label for="weight">Weight</label>
                                    <input type="number" class="form-control" v-model="weight" name="weight" placeholder="kg" value="" required=""> 
                                </div>
                                <div class="col-md-4 mb-4">
                                    <label for="nationality">Nationality</label>
                                    <input type="text" class="form-control" v-model="nationality" name="nationality" placeholder="Nationality" value="" required="">
                                </div>
                                <div class="col-md-4 mb-4">
                                    <label for="religion">Religion</label>
                                    <input type="text" class="form-control" v-model="religion" name="religion" placeholder="Religion" value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-4 mb-4">
                                    <label for="contact">Contact Number</label>
                                    <input type="text" class="form-control" v-model="contactNo" name="contactNo" placeholder="Contact No." value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8 mb-4">
                                    <label for="cityAddress">City Address</label>
                                    <input type="text" class="form-control" v-model="cityAdd" name="cityAdd" placeholder="City Address" value="" required="">
                                </div>
                                <div class="col-md-4 mb-4">
                                    <label for="cityTel">City Telephone Number</label>
                                    <input type="text" class="form-control" v-model="cityTel" name="cityTel" placeholder="City Telephone No." value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8 mb-4">
                                    <label for="provincialAddress">Provincial Address</label>
                                    <input type="text" class="form-control" v-model="provinceAdd" name="provinceAdd" placeholder="Provincial Address" value="" required="">
                                </div>
                                <div class="col-md-4 mb-4">
                                    <label for="provincialTel">Provincial Telephone Number</label>
                                    <input type="text" class="form-control" v-model="provinceTel" name="provinceTel" placeholder="Provincial Telephone No." value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <label for="ailments">Ailments (separate each with a comma)</label>
                                    <input type="text" class="form-control" v-model="ailments" name="ailments" placeholder="Ailments" value="" required="">
                                </div>
                                <div class="col-md-6 mb-4">
                                    <label for="allergies">Allergies (separate each with a comma)</label>
                                    <input type="text" class="form-control" v-model="allergies" name="allergies" placeholder="Allergies" value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <label for="hobbies">Hobbies (separate each with a comma)</label>
                                    <input type="text" class="form-control" v-model="hobbies" name="hobbies" placeholder="Hobbies" value="" required="">
                                </div>
                                <div class="col-md-6 mb-4">
                                    <label for="specialSkills">Special Skills (separate each with a comma)</label>
                                    <input type="text" class="form-control" v-model="specSkills" name="specSkills" placeholder="Special Skills" value="" required="">
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-md-8 mb-1">
                                    <label for="fathersName">Father's Name</label>
                                    <input type="text" class="form-control" v-model="fathersName" name="fathersName" placeholder="Father's Name" value="" required="">
                                </div>
                                <div class="col-md-4 mb-1">
                                    <label for="fathersOccupation">Father's Occupation</label>
                                    <input type="text" class="form-control" v-model="fathersOcc" name="fathersOcc" placeholder="Father's Occupation" value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8 mb-4">
                                    <label for="fathersAddress">Father's Address</label>
                                    <input type="text" class="form-control" v-model="fathersAdd" name="fathersAdd" placeholder="Father's Addresss" value="" required="">
                                </div>
                                <div class="col-md-4 mb-4">
                                    <label for="fathersTel">Father's Telephone Number</label>
                                    <input type="text" class="form-control" v-model="fathersTel" name="fathersTel" placeholder="Father's Telephone No." value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8 mb-1">
                                    <label for="mothersName">Mother's Name</label>
                                    <input type="text" class="form-control" v-model="mothersName" name="mothersName" placeholder="Mother's Name" value="" required="">
                                </div>
                                <div class="col-md-4 mb-1">
                                    <label for="mothersOccupation">Mother's Occupation</label>
                                    <input type="text" class="form-control" v-model="mothersOcc" name="mothersOcc" placeholder="Mother's Occupation" value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8 mb-4">
                                    <label for="mothersAddress">Mother's Address</label>
                                    <input type="text" class="form-control" v-model="mothersAdd" name="mothersAdd" placeholder="Mother's Addresss" value="" required="">
                                </div>
                                <div class="col-md-4 mb-4">
                                    <label for="mothersTel">Mother's Telephone Number</label>
                                    <input type="text" class="form-control" v-model="mothersTel" name="mothersTel" placeholder="Mother's Telephone No." value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8 mb-1">
                                    <label for="guardiansName">Guardian's Name</label>
                                    <input type="text" class="form-control" v-model="guardiansName" name="guardiansName" placeholder="Guardian's Name" value="" required="">
                                </div>
                                <div class="col-md-4 mb-1">
                                    <label for="guardiansOccupation">Guardian's Occupation</label>
                                    <input type="text" class="form-control" v-model="guardiansOcc" name="guardiansOcc" placeholder="Guardian's Occupation" value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8 mb-5">
                                    <label for="guardiansAddress">Guardian's Address</label>
                                    <input type="text" class="form-control" v-model="guardiansAdd" name="guardiansAdd" placeholder="Guardian's Addresss" value="" required="">
                                </div>
                                <div class="col-md-4 mb-5">
                                    <label for="guardiansTel">Guardian's Telephone Number</label>
                                    <input type="text" class="form-control" v-model="guardiansTel" name="guardiansTel" placeholder="Guardian's Telephone No." value="" required="">
                                </div>
                            </div>


                            <h4 class="mb-3">EDUCATIONAL BACKGROUND</h4>
                            <div class="row">
                                <div class="col-md-6 mb-1">
                                    <label for="presentSchool">Present School</label>
                                    <input type="text" class="form-control" v-model="presentSchool" name="presentSchool" placeholder="Present School" value="" required="">
                                </div>
                                <div class="col-md-3 mb-1">
                                    <label for="course">Course</label>
                                    <input type="text" class="form-control" v-model="course" name="course" placeholder="Course" value="" required="">
                                </div>
                                <div class="col-md-3 mb-1">
                                    <label for="year">Year</label>
                                    <input type="text" class="form-control" v-model="year" name="year" placeholder="Year" value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8 mb-4">
                                    <label for="schoolAddress">School Address</label>
                                    <input type="text" class="form-control" v-model="schoolAdd" name="schoolAdd" placeholder="School Address" value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8 mb-4">
                                    <label for="elementarySchool">Elementary School</label>
                                    <input type="text" class="form-control" v-model="elemSchool" name="elemSchool" placeholder="Elementary School" value="" required="">
                                </div>
                                <div class="col-md-4 mb-4">
                                    <label for="elementaryDate">Date</label>
                                    <input type="date" class="form-control" v-model="elemDate" name="elemDate" placeholder="" value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8 mb-4">
                                    <label for="secondarySchool">Secondary School</label>
                                    <input type="text" class="form-control" v-model="secondarySchool" name="secondarySchool" placeholder="Secondary School" value="" required="">
                                </div>
                                <div class="col-md-4 mb-4">
                                    <label for="secondaryDate">Date</label>
                                    <input type="date" class="form-control" v-model="secondaryDate" name="secondaryDate" placeholder="" value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8 mb-4">
                                    <label for="collegeSchool">College School</label>
                                    <input type="text" class="form-control" v-model="collegeSchool" name="collegeSchool" placeholder="College School" value="" required="">
                                </div>
                                <div class="col-md-4 mb-4">
                                    <label for="collegeDate">Date</label>
                                    <input type="date" class="form-control" v-model="collegeDate" name="collegeDate" placeholder="" value="" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8 mb-5">
                                    <label for="vocationalSchool">Vocational School</label>
                                    <input type="text" class="form-control" v-model="vocSchool" name="vocSchool" placeholder="Vocational School" value="" required="">
                                </div>
                                <div class="col-md-4 mb-5">
                                    <label for="vocationalDate">Date</label>
                                    <input type="date" class="form-control" v-model="vocDate" name="vocDate" placeholder="" value="" required="">
                                </div>
                            </div>


                            <h4 class="mb-3">RED CROSS TRAININGS ATTENDED</h4>
                            <!-- JS to add more lines for trainingList -->
                            <div id="trainingsList">
                                <div class="row training">
                                    <div class="col-md-6 mb-1 trainingDiv">
                                        <label for="training">Training Attended</label>
                                        <input type="text" class="form-control trainingAttended" name="training" placeholder="Training Attended" value="" required="">
                                    </div>
                                    <div class="col-md-6 mb-1 certDiv">
                                    <label for="cert">Certificate Number</label>
                                    <input type="text" class="form-control certificateNo" name="cert" placeholder="Certificate Number" value="" required="">
                                </div>
                                    <div class="col-md-6 mb-4 placeDiv">
                                        <label for="place">Place</label>
                                        <input type="text" class="form-control place" name="place" placeholder="Place" value="" required="">
                                    </div>
                                    <div class="col-md-3 mb-4 startDiv">
                                        <label for="startDate">Start Date</label>
                                        <input type="date" class="form-control startDate" name="startDate" placeholder="" value="" required="">
                                    </div>
                                    <div class="col-md-3 mb-4 endDiv">
                                        <label for="endDate">End Date</label>
                                        <input type="date" class="form-control endDate" name="endDate" placeholder="" value="" required="">
                                    </div>
                                </div>
                            </div>
                            <button type="button" v-on:click="addTraining" class="col-md-3 btn btn-success">Add Another Training</button>



                            <h4 class="mt-5 mb-3">AFFILIATION WITH OTHER ORGANIZATIONS</h4>
                            <!-- JS to add more lines for orgAffiliations -->
                            <div id="organizations">
                                <div class="row organization">
                                    <div class="col-md-6 mb-1 orgDiv">
                                    <label for="organization">Organization</label>
                                    <input type="text" class="form-control org" name="organization" placeholder="Organization" value="" required="">
                                    </div>
                                    <div class="col-md-3 mb-1 startDiv">
                                    <label for="startDate">Start Date</label>
                                    <input type="date" class="form-control startDate" name="startDate" placeholder="" value="" required="">
                                    </div>
                                    <div class="col-md-3 mb-1 endDiv">
                                    <label for="endDate">End Date</label>
                                    <input type="date" class="form-control endDate" name="endDate" placeholder="" value="" required="">
                                    </div>
                                    <div class="col-md-6 mb-4 posDiv">
                                    <label for="position">Position</label>
                                    <input type="text" class="form-control position" name="position" placeholder="Position" value="" required="">
                                    </div>
                                    <div class="col-md-6 mb-4 councilDiv">
                                    <label for="council">Council</label>
                                    <input type="text" class="form-control council" name="council" placeholder="Council" value="" required="">
                                    </div>
                                </div>
                            </div>
                            <button type="button" v-on:click="addOrg" class="col-md-4 btn btn-success">Add Another Organization</button>

                            <hr class="my-4">          
                            <button type='submit' id="test" class="btn btn-danger btn-lg btn-block text-white">Submit</button>        
                        </form>
                        <!--<a href="activities.php">Back</a> -->
                    </div>
                </div>
            </div>
        </section>
        <f/>
    </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>
import axios from 'axios'
import navbar from '../components/Navbar.vue'
import footer from '../components/formNav.vue'

export default {
    name: 'membershipForm',
    components:{
        'n': navbar,
        'f': footer
    },
    data(){
        return{
            bloodType: null,
            rcyId: null,
            surname : null,
            firstname : null,
            middlename : null,
            nickname : null,
            birthdate : null,
            age : null,
            civilStatus : null,
            height : null,
            weight : null,
            nationality : null,
            religion : null,
            contactNo : null,
            cityAdd : null,
            cityTel : null,
            provinceAdd : null,
            provinceTel : null,
            ailments : null,
            allergies : null,
            hobbies : null,
            specSkills : null,
            fathersName : null,
            fathersOcc : null,
            fathersAdd : null,
            fathersTel : null,
            mothersName : null,
            mothersOcc : null,
            mothersAdd : null,
            mothersTel : null,
            guardiansName : null,
            guardiansOcc : null,
            guardiansAdd : null,
            guardiansTel : null,
            presentSchool : null,
            course : null,
            year : null,
            schoolAdd : null,
            elemSchool : null,
            elemDate : null,
            secondarySchool : null,
            secondaryDate : null,
            collegeSchool : null,
            collegeDate : null,
            vocSchool : null,
            vocDate : null,
            trainings: [],
            organizations: []
        }
    }, 
    methods: {
        addTraining: function(){
            let training = $( ".training" ).first().clone();
            training.children(".trainingDiv").children(".trainingAttended").val("");
            training.children(".certDiv").children(".certificateNo").val("");
            training.children(".placeDiv").children(".place").val("");
            training.appendTo( "#trainingsList" ); 
        },
        addOrg: function(){
            let org = $( ".organization" ).first().clone()
            org.children(".orgDiv").children(".org").val("");
            org.children(".posDiv").children(".position").val("");
            org.children(".councilDiv").children(".council").val("");
            org.appendTo( "#organizations" ); 
        },
        addMember: function(){
            axios({
                method: 'POST',
                url: 'http://localhost:3000/act/addMemberForm',
                data:{
                    bloodType : this.bloodType,
                    rcyId : this.rcyId,
                    committee : 0,
                    surname : this.surname,
                    firstname : this.firstname,
                    middlename : this.middlename,
                    nickname : this.nickname,
                    birthdate : this.birthdate,
                    age : this.age,
                    civilStatus : this.civilStatus,
                    height : this.height,
                    weight : this.weight,
                    nationality : this.nationality,
                    religion : this.religion,
                    contactNo : this.contactNo,
                    cityAdd : this.cityAdd,
                    cityTel : this.cityTel,
                    provinceAdd : this.provinceAdd,
                    provinceTel : this.provinceTel,
                    ailments : this.ailments,
                    allergies : this.allergies,
                    hobbies : this.hobbies,
                    specSkills : this.specSkills,
                    fathersName : this.fathersName,
                    fathersOcc : this.fathersOcc,
                    fathersAdd : this.fathersAdd,
                    fathersTel : this.fathersTel,
                    mothersName : this.mothersName,
                    mothersOcc : this.mothersOcc,
                    mothersAdd : this.mothersAdd,
                    mothersTel : this.mothersTel,
                    guardiansName : this.guardiansName,
                    guardiansOcc : this.guardiansOcc,
                    guardiansAdd : this.guardiansAdd,
                    guardiansTel : this.guardiansTel,
                    presentSchool : this.presentSchool,
                    course : this.course,
                    year : this.year,
                    schoolAdd : this.schoolAdd,
                    elemSchool : this.elemSchool,
                    elemDate : this.elemDate,
                    secondarySchool : this.secondarySchool,
                    secondaryDate : this.secondaryDate,
                    collegeSchool : this.collegeSchool,
                    collegeDate : this.collegeDate,
                    vocSchool : this.vocSchool,
                    vocDate : this.vocDate,
                    trainings: JSON.stringify(this.trainings),
                    organizations: JSON.stringify(this.organizations)
                }
            })
        },
        compile: function(){
            let tArr = []
            $(".training").each(function() {
                let trainingAttended = $( this ).children(".trainingDiv").children(".trainingAttended").val();
                let certNo = $( this ).children(".certDiv").children(".certificateNo").val();
                let place = $( this ).children(".placeDiv").children(".place").val();
                let startDate = $( this ).children(".startDiv").children(".startDate").val();
                let endDate = $( this ).children(".endDiv").children(".endDate").val();

                let entry = {trainingAttended: trainingAttended, certificateNumber: certNo, place: place, startDate: startDate, endDate: endDate}
                tArr.push(entry);
            })
            this.trainings = tArr;

            let oArr = []
            $(".organization").each(function() {
                let org = $( this ).children(".orgDiv").children(".org").val();
                let position = $( this ).children(".posDiv").children(".position").val();
                let council = $( this ).children(".councilDiv").children(".council").val();
                let startDate = $( this ).children(".startDiv").children(".startDate").val();
                let endDate = $( this ).children(".endDiv").children(".endDate").val();

                let entry = {organization: org, position: position, council: council, startDate: startDate, endDate: endDate}
                oArr.push(entry);
            })
            this.organizations = oArr;

            this.addMember();
        }
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