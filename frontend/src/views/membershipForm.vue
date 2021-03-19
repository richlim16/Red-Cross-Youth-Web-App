<template lang="html">
  <div class="container">
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
          <div class="mainForm">
            <p>Fill out the following fields to apply for membership</p>
              <form id="addMemberForm" @submit="compile" class="needs-validation">
                <div class="row">
                  <div class="item">
                    <label for="bloodType">Blood Type</label>
                    <select v-model="bloodType" name="bloodType" id="bloodType">
                    <option disabled selected hidden value="">-select type-</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                    </select>
                  </div>

                  <div class="item">
                    <label for="rcyId">RCY ID No.</label>
                    <input type="number" v-model="rcyId" name="rcyId" placeholder="RCY ID No." value="" required="">
                    <div class="invalid-feedback">
                    Valid bloodtype is required.
                    </div>
                  </div>

                </div>
                <div class="row">
                  <div class="item">
                    <label for="surName">Surname</label>
                    <input type="text" class="form-control" v-model="surname" name="surname" placeholder="Dela Cruz" value="" required="">
                    <div class="invalid-feedback">
                    Valid surname is required.
                    </div>
                  </div>
                  <div class="item">
                    <label for="firstname">First Name</label>
                    <input type="text" class="form-control" v-model="firstname" name="firstname" placeholder="Juan" value="" required="">
                    <div class="invalid-feedback">
                    Valid first name is required.
                    </div>
                  </div>
                  <div class="item">
                    <label for="middleName">Middle name</label>
                    <input type="text" class="form-control" v-model="middlename" name="middlename" placeholder="Pepito" value="" required="">
                    <div class="invalid-feedback">
                    Valid middle name is required.
                    </div>
                  </div>
                  <div class="item">
                    <label for="nickname">Nickname</label>
                    <input type="text" class="form-control" v-model="nickname" name="nickname" placeholder="JuanD" value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item">
                    <label for="height">Height</label>
                    <input type="number" class="form-control" v-model="height" name="height" placeholder="inches" value="" required="">
                  </div>
                  <div class="item">
                    <label for="birthdate">Birthdate</label>
                    <input type="date" class="form-control" v-model="birthdate" name="birthdate" placeholder="Birthdate" value="" required="">
                  </div>
                  <div class="item">
                    <label for="age">Age</label>
                    <input type="number" class="form-control" v-model="age" name="age" placeholder="21" value="">
                  </div>
                  <div class="item">
                    <label for="civilStatus">Civil Status</label>
                    <select v-model="civilStatus" class="form-control" name="civilStatus">
                    <option disabled selected value hidden> -- select an option -- </option>
                    <option value="SINGLE">SINGLE</option>
                    <option value="MARRIED">MARRIED</option>
                    </select>
                  </div>
                  <div class="item">
                    <label for="nationality">Nationality</label>
                    <input type="text" class="form-control" v-model="nationality" name="nationality" placeholder="Filipino" value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item">
                    <label for="religion">Religion</label>
                    <input type="text" class="form-control" v-model="religion" name="religion" placeholder="Religion" value="" required="">
                  </div>
                  <div class="item">
                    <label for="contact">Contact Number</label>
                    <input type="text" class="form-control" v-model="contactNo" name="contactNo" placeholder="+63 917 123 4567" value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="widerInput" >
                    <label for="cityAddress">City Address</label>
                    <input type="text" class="form-control" v-model="cityAdd" name="cityAdd" placeholder="City Address" value="" required="">
                  </div>
                  <div class="item">
                    <label for="cityTel">City Telephone Number</label>
                    <input type="text" class="form-control" v-model="cityTel" name="cityTel" placeholder="City Telephone No." value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="widerInput" >
                    <label for="provincialAddress">Provincial Address</label>
                    <input type="text" class="form-control" v-model="provinceAdd" name="provinceAdd" placeholder="Provincial Address" value="" required="">
                  </div>
                  <div class="item">
                    <label for="provincialTel">Provincial Telephone Number</label>
                    <input type="text" class="form-control" v-model="provinceTel" name="provinceTel" placeholder="Provincial Telephone No." value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="wideInput">
                    <label for="ailments">Ailments</label>
                    <input type="text" class="form-control" v-model="ailments" name="ailments" placeholder="Chronic back pain, nausea, etc." value="" required="">
                  </div>
                  <div class="item" id="wideInput">
                    <label for="allergies">Allergies</label>
                    <input type="text" class="form-control" v-model="allergies" name="allergies" placeholder="nuts, shrimp, etc." value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="wideInput">
                    <label for="hobbies">Hobbies</label>
                    <input type="text" class="form-control" v-model="hobbies" name="hobbies" placeholder="Basketball, videogames, etc." value="" required="">
                  </div>
                  <div class="item" id="wideInput">
                    <label for="specialSkills">Special Skills</label>
                    <input type="text" class="form-control" v-model="specSkills" name="specSkills" placeholder="Magic tricks, beatboxing, etc." value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="widerInput">
                    <label for="fathersName">Father's Name</label>
                    <input type="text" class="form-control" v-model="fathersName" name="fathersName" placeholder="Pedro Dela Cruz" value="" required="">
                  </div>
                  <div class="item" id="wideInput">
                    <label for="fathersOccupation">Father's Occupation</label>
                    <input type="text" class="form-control" v-model="fathersOcc" name="fathersOcc" placeholder="Teacher" value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="widerInput">
                    <label for="fathersAddress">Father's Address</label>
                    <input type="text" class="form-control" v-model="fathersAdd" name="fathersAdd" placeholder="Father's Addresss" value="" required="">
                  </div>
                  <div class="item">
                    <label for="fathersTel">Father's Telephone Number</label>
                    <input type="text" class="form-control" v-model="fathersTel" name="fathersTel" placeholder="Father's Telephone No." value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="widerInput">
                    <label for="mothersName">Mother's Name</label>
                    <input type="text" class="form-control" v-model="mothersName" name="mothersName" placeholder="Mother's Name" value="" required="">
                  </div>
                  <div class="item" id="wideInput">
                    <label for="mothersOccupation">Mother's Occupation</label>
                    <input type="text" class="form-control" v-model="mothersOcc" name="mothersOcc" placeholder="Mother's Occupation" value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="widerInput">
                    <label for="mothersAddress">Mother's Address</label>
                    <input type="text" class="form-control" v-model="mothersAdd" name="mothersAdd" placeholder="Mother's Addresss" value="" required="">
                  </div>
                  <div class="item">
                    <label for="mothersTel">Mother's Telephone Number</label>
                    <input type="text" class="form-control" v-model="mothersTel" name="mothersTel" placeholder="Mother's Telephone No." value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="widerInput">
                    <label for="guardiansName">Guardian's Name</label>
                    <input type="text" class="form-control" v-model="guardiansName" name="guardiansName" placeholder="Guardian's Name" value="" required="">
                  </div>
                  <div class="item" id="wideInput">
                    <label for="guardiansOccupation">Guardian's Occupation</label>
                    <input type="text" class="form-control" v-model="guardiansOcc" name="guardiansOcc" placeholder="Guardian's Occupation" value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="widerInput">
                    <label for="guardiansAddress">Guardian's Address</label>
                    <input type="text" class="form-control" v-model="guardiansAdd" name="guardiansAdd" placeholder="Guardian's Addresss" value="" required="">
                  </div>
                  <div class="item">
                    <label for="guardiansTel">Guardian's Telephone Number</label>
                    <input type="text" class="form-control" v-model="guardiansTel" name="guardiansTel" placeholder="Guardian's Telephone No." value="" required="">
                  </div>
                </div>

                <hr>
                <h4>EDUCATIONAL BACKGROUND</h4>

                <div class="row">
                  <div class="item" id="widerInput">
                    <label for="presentSchool">Present School</label>
                    <input type="text" class="form-control" v-model="presentSchool" name="presentSchool" placeholder="Present School" value="" required="">
                  </div>
                  <div class="item">
                    <label for="course">Course</label>
                    <input type="text" class="form-control" v-model="course" name="course" placeholder="Course" value="" required="">
                  </div>
                  <div class="item">
                    <label for="year">Year</label>
                    <input type="text" class="form-control" v-model="year" name="year" placeholder="Year" value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="widerInput">
                    <label for="schoolAddress">School Address</label>
                    <input type="text" class="form-control" v-model="schoolAdd" name="schoolAdd" placeholder="School Address" value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="widerInput">
                    <label for="elementarySchool">Elementary School</label>
                    <input type="text" class="form-control" v-model="elemSchool" name="elemSchool" placeholder="Elementary School" value="" required="">
                  </div>
                  <div class="item">
                    <label for="elementaryDate">Date</label>
                    <input type="date" class="form-control" v-model="elemDate" name="elemDate" placeholder="" value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="widerInput">
                    <label for="secondarySchool">Secondary School</label>
                    <input type="text" class="form-control" v-model="secondarySchool" name="secondarySchool" placeholder="Secondary School" value="" required="">
                  </div>
                  <div class="item">
                    <label for="secondaryDate">Date</label>
                    <input type="date" class="form-control" v-model="secondaryDate" name="secondaryDate" placeholder="" value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="widerInput">
                    <label for="collegeSchool">College School</label>
                    <input type="text" class="form-control" v-model="collegeSchool" name="collegeSchool" placeholder="College School" value="" required="">
                  </div>
                  <div class="item">
                    <label for="collegeDate">Date</label>
                    <input type="date" class="form-control" v-model="collegeDate" name="collegeDate" placeholder="" value="" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="item" id="widerInput">
                    <label for="vocationalSchool">Vocational School</label>
                    <input type="text" class="form-control" v-model="vocSchool" name="vocSchool" placeholder="Vocational School" value="" required="">
                  </div>
                  <div class="item">
                    <label for="vocationalDate">Date</label>
                    <input type="date" class="form-control" v-model="vocDate" name="vocDate" placeholder="" value="" required="">
                  </div>
                </div>

                <hr>
                <h4>RED CROSS TRAININGS ATTENDED</h4>

                <div id="trainingsList" v-if="trainings==null">
                    <div class="row training">
                        <div class="col-md-6 mb-1 trainingDiv">
                            <label for="training">Training Attended</label>
                            <input type="text" class="form-control trainingAttended" name="training" placeholder="Training Attended" required="">
                        </div>
                        <div class="col-md-6 mb-1 certDiv">
                        <label for="cert">Certificate Number</label>
                        <input type="text" class="form-control certificateNo" name="cert" placeholder="Certificate Number" required="">
                         </div>
                        <div class="col-md-6 mb-4 placeDiv">
                            <label for="place">Place</label>
                            <input type="text" class="form-control place" name="place" placeholder="Place" required="">
                        </div>
                        <div class="col-md-3 mb-4 startDiv">
                            <label for="startDate">Start Date</label>
                            <input type="date" class="form-control startDate" name="startDate" placeholder="" required="">
                        </div>
                        <div class="col-md-3 mb-4 endDiv">
                            <label for="endDate">End Date</label>
                            <input type="date" class="form-control endDate" name="endDate" placeholder="" required="">
                        </div>
                    </div>
                  </div>

                  <div id="trainingsList" v-for="(training,i) in trainings" :key="i">
                      <div class="row training">
                          <div class="col-md-6 mb-1 trainingDiv">
                              <label for="training">Training Attended</label>
                              <input type="text" class="form-control trainingAttended" name="training" :value=training.training_attended required="">
                          </div>
                          <div class="col-md-6 mb-1 certDiv">
                          <label for="cert">Certificate Number</label>
                          <input type="text" class="form-control certificateNo" name="cert" placeholder="Certificate Number" :value=training.certificate_no required="">
                           </div>
                          <div class="col-md-6 mb-4 placeDiv">
                              <label for="place">Place</label>
                              <input type="text" class="form-control place" name="place" placeholder="Place" :value=training.place required="">
                          </div>
                          <div class="col-md-3 mb-4 startDiv">
                              <label for="startDate">Start Date</label>
                              <input type="date" class="form-control startDate" name="startDate" placeholder="" :value=formatDate(training.start_date) required="">
                          </div>
                          <div class="col-md-3 mb-4 endDiv">
                              <label for="endDate">End Date</label>
                              <input type="date" class="form-control endDate" name="endDate" placeholder="" :value=formatDate(training.end_date) required="">
                          </div>
                      </div>
                  </div>
                  <button type="button" v-on:click="addTraining" class="col-md-3 btn btn-success">Add Another Training</button>

                  <hr>
                  <h4>AFFILIATION WITH OTHER ORGANIZATIONS</h4>

                  <div id="organizations">
                      <div v-if="trainings==null" class="row organization">
                          <div class="col-md-6 mb-1 orgDiv">
                          <label for="organization">Organization</label>
                          <input type="text" class="form-control org" name="organization" placeholder="Organization" required="">
                          </div>
                          <div class="col-md-3 mb-1 startDiv">
                          <label for="startDate">Start Date</label>
                          <input type="date" class="form-control startDate" name="startDate" placeholder="" required="">
                          </div>
                          <div class="col-md-3 mb-1 endDiv">
                          <label for="endDate">End Date</label>
                          <input type="date" class="form-control endDate" name="endDate" placeholder="" required="">
                          </div>
                          <div class="col-md-6 mb-4 posDiv">
                          <label for="position">Position</label>
                          <input type="text" class="form-control position" name="position" placeholder="Position" required="">
                          </div>
                          <div class="col-md-6 mb-4 councilDiv">
                          <label for="council">Council</label>
                          <input type="text" class="form-control council" name="council" placeholder="Council" required="">
                          </div>
                      </div>
                  </div>

                  <div id="organizations">
                      <div class="row organization" v-for="(org,i) in organizations" :key="i">
                          <div class="col-md-6 mb-1 orgDiv">
                          <label for="organization">Organization</label>
                          <input type="text" class="form-control org" name="organization" placeholder="Organization" :value=org.organization required="">
                          </div>
                          <div class="col-md-3 mb-1 startDiv">
                          <label for="startDate">Start Date</label>
                          <input type="date" class="form-control startDate" name="startDate" placeholder="" :value=formatDate(org.start_date) required="">
                          </div>
                          <div class="col-md-3 mb-1 endDiv">
                          <label for="endDate">End Date</label>
                          <input type="date" class="form-control endDate" name="endDate" placeholder="" :value=formatDate(org.end_date) required="">
                          </div>
                          <div class="col-md-6 mb-4 posDiv">
                          <label for="position">Position</label>
                          <input type="text" class="form-control position" name="position" placeholder="Position" :value=org.position required="">
                          </div>
                          <div class="col-md-6 mb-4 councilDiv">
                          <label for="council">Council</label>
                          <input type="text" class="form-control council" name="council" placeholder="Council" :value=org.council required="">
                          </div>
                      </div>
                  </div>
                  <button type="button" v-on:click="addOrg" class="col-md-4 btn btn-success">Add Another Organization</button>

                  <hr class="my-4">


                  <div class="row mt-5 mb-2">
                      <div class="d-flex justify-content-center">
                          <h6>I hereby certify to the correctness of the foregoing information</h6>
                      </div>
                  </div>

                  <div class="row mt-3 mb-3 justify-content-center">
                      <div class="col-md-6 text-center">
                          <button v-if="council_pres_sig==1" class="btn btn-success">Approved</button>
                          <button v-if="council_pres_sig==2" class="btn btn-danger">Rejected</button>
                          <button v-if="council_pres_sig==0 && userType=='Council'" type="button" v-on:click="presApprove" class="btn btn-success">Approve</button>
                          <button v-if="council_pres_sig==0 && userType=='Council'" type="button" v-on:click="presReject" class="btn btn-danger">Reject</button>
                          <h5 name="cyc1" id="cyc1"></h5>
                          <hr class="my-1">
                          <p>Council President</p>
                      </div>
                      <div class="col-md-6 text-center">
                          <button v-if="member_sig==1" class="btn btn-success">Approved</button>
                          <button v-if="member_sig==2" class="btn btn-danger">Rejected</button>
                          <button v-if="member_sig==0 && userType=='Council'" type="button" v-on:click="memApprove" class="btn btn-success">Approve</button>
                          <button v-if="member_sig==0 && userType=='Council'" type="button" v-on:click="memReject" class="btn btn-danger">Reject</button>
                          <h5 name="cyc2" id="cyc2"></h5>
                          <hr class="my-1">
                          <p>Signature of Member</p>
                      </div>
                  </div>

                  <div class="row mt-5 mb-3 justify-content-center">
                      <div class="col-md-6 text-center">
                      </div>
                      <div class="col-md-6 text-center">
                          <button v-if="council_adv_sig==1" class="btn btn-success">Approved</button>
                          <button v-if="council_adv_sig==2" class="btn btn-danger">Rejected</button>
                          <button v-if="council_adv_sig==0 && userType=='Council Advisor'" type="button" v-on:click="advApprove" class="btn btn-success">Approve</button>
                          <button v-if="council_adv_sig==0 && userType=='Council Advisor'" type="button" v-on:click="advReject" class="btn btn-danger">Reject</button>
                          <h5 name="cyc2" id="cyc2"></h5>
                          <hr class="my-1">
                          <p>Council Advisor</p>
                      </div>
                  </div>
                  <button v-if="newFlag==null" type='submit' id="test" class="btn btn-danger btn-lg btn-block text-white">Submit</button>
              </form>
          </div>
        </section>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>
import axios from 'axios'
import navbar from '../components/Navbar.vue'

export default {
    name: 'membershipForm',
    components:{
        'n': navbar
    },
    data(){
        return{
            userType: null,
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
            trainings: null,
            organizations: null,
            council_pres_sig: null,
            member_sig: null,
            council_adv_sig: null,
            sessionUserId: null,
            memId: null,
            newFlag: null
        }
    },
    async mounted(){
        this.sessionUserId = this.$store.getters.getUserId
        this.userType = this.$store.getters.getUserType
        this.memId = this.$store.getters.getMemFormId
        await axios.get('http://localhost:3000/filledMemForm/' + this.memId)
            .then(response => {
                this.bloodType = response.data.member.blood_type
                this.rcyId = response.data.member.rcy_id
                this.committee = response.data.member.committee
                this.surname = response.data.member.surname
                this.firstname = response.data.member.first_name
                this.middlename = response.data.member.middle_name
                this.nickname = response.data.member.nickname
                this.birthdate = this.formatDate(response.data.member.birthdate)
                this.age = response.data.member.age
                this.civilStatus = response.data.member.civil_status
                this.height = response.data.member.height
                this.weight = response.data.member.weight
                this.nationality = response.data.member.nationality
                this.religion = response.data.member.religion
                this.contactNo = response.data.member.contact_no
                this.cityAdd = response.data.member.city_address
                this.cityTel = response.data.member.city_tel
                this.provinceAdd = response.data.member.provincial_address
                this.provinceTel = response.data.member.provincial_tel
                this.ailments = response.data.member.ailments
                this.allergies = response.data.member.allergies
                this.hobbies = response.data.member.hobbies
                this.specSkills = response.data.member.special_skills
                this.fathersName = response.data.member.fathers_name
                this.fathersOcc = response.data.member.fathers_occupation
                this.fathersAdd = response.data.member.fathers_address
                this.fathersTel = response.data.member.fathers_tel
                this.mothersName = response.data.member.mothers_name
                this.mothersOcc = response.data.member.mothers_occupation
                this.mothersAdd = response.data.member.mothers_address
                this.mothersTel = response.data.member.mothers_tel
                this.guardiansName = response.data.member.guardians_name
                this.guardiansOcc = response.data.member.guardians_occupation
                this.guardiansAdd = response.data.member.guardians_address
                this.guardiansTel = response.data.member.guardians_tel
                this.presentSchool = response.data.member.present_school
                this.course = response.data.member.course
                this.year = response.data.member.year
                this.schoolAdd = response.data.member.school_address
                this.elemSchool = response.data.member.elementary_school
                this.elemDate = this.formatDate(response.data.member.elementary_attainment)
                this.secondarySchool = response.data.member.secondary_school
                this.secondaryDate = this.formatDate(response.data.member.secondary_attainment)
                this.collegeSchool = response.data.member.college_school
                this.collegeDate = this.formatDate(response.data.member.college_attainment)
                this.vocSchool = response.data.member.vocational_school
                this.vocDate = this.formatDate(response.data.member.vocational_attainment)
                this.trainings = response.data.trainings,
                this.organizations = response.data.orgs,
                this.council_pres_sig = response.data.member.council_pres_sig,
                this.member_sig = response.data.member.member_sig,
                this.council_adv_sig = response.data.member.council_adv_sig,
                this.member_sig = response.data.member_sig,
                this.newFlag = 1
            })
            .catch(error => console.log(error))
        console.log(this.council_pres_sig)
        console.log(this.userType)
    },
    methods: {
        formatDate: function(dt){
            let date = new Date(dt)
            let month = (date.getMonth()+1).toString()
            let year = date.getFullYear()
            let day = (date.getDate()).toString()
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            let ret = year + "-" + month + "-" + day
            return ret
        },
        presApprove: function(){
            axios({
                method: 'POST',
                url: 'http://localhost:3000/memForm/presApprove/' + this.memId,
            }).then(response => this.council_pres_sig = response.data.sig)
        },
        presReject: function(){
            axios({
                method: 'POST',
                url: 'http://localhost:3000/memForm/presReject/' + this.memId,

            }).then(response => this.council_pres_sig = response.data.sig)
        },
        memApprove: function(){
            axios({
                method: 'POST',
                url: 'http://localhost:3000/memForm/memApprove/' + this.memId,
            }).then(response => this.member_sig = response.data.sig)
        },
        memReject: function(){
            axios({
                method: 'POST',
                url: 'http://localhost:3000/memForm/memReject/' + this.memId,

            }).then(response => this.member_sig = response.data.sig)
        },
        advApprove: function(){
            axios({
                method: 'POST',
                url: 'http://localhost:3000/memForm/advApprove/' + this.memId,
            }).then(response => this.council_adv_sig = response.data.sig)
        },
        advReject: function(){
            axios({
                method: 'POST',
                url: 'http://localhost:3000/memForm/advReject/' + this.memId,

            }).then(response => this.council_adv_sig = response.data.sig)
        },

        addTraining: function(){
            let training = $( ".training" ).first().clone();
            training.children(".trainingDiv").children(".trainingAttended").val("");
            training.children(".certDiv").children(".certificateNo").val("");
            training.children(".placeDiv").children(".place").val("");
            training.appendTo( "#trainingsList" );
            console.log(this.sessionUserId)
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
                    organizations: JSON.stringify(this.organizations),
                    sessionUserId: this.sessionUserId
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
    .inner-page{
      margin-top: 50px;
      margin-bottom: 50px;
      padding: 30px;
      background: #f9f9f9;
      box-shadow: 0 20px 20px #aaa;
    }
    .mainForm{
      padding: 20px;
    }
    .row{
      display: flex;
      width: 100%;
      margin: auto;
    }
    .item{
      display: flex;
      flex-direction: column;
      margin-right: 25px;
      margin-bottom: 15px;
    }
    .row input, .row select{
      height: 4vh;
      padding: 5px;
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
    hr{
      margin-top: 5vh;
      height: 5px;
      background: #e00;
      border-radius: 3px;
    }
    .my-4{
      height: 1px;
      background: #aaa;
    }
    .my-1{
      height: .5px;
      background: #aaa;
    }
    #test{
      margin-left: 65%;
      width: 30%;

      box-shadow: 0 5px 5px rgba(0, 0, 0, .5);
      transition: .4s;
    }
    #test:hover{
      background: #f00;
      margin-top: 5px;
      box-shadow: none;
    }
</style>
