<template>
    <div>
      <n/>
      <!-- ======= Breadcrumbs ======= -->
      <section class="breadcrumbs">
          <div class="container">
    
            <div class="d-flex justify-content-between align-items-center">
              <h2>Activity Reports</h2>
              <ol>
                <li><a href="/home">Home</a></li>
                <li>Activity Reports</li>
              </ol>
            </div>
    
          </div>
        </section><!-- End Breadcrumbs -->
    
        <section class="inner-page">
          <div class="container">
            <!--<div>
              <a href="/addReport" class ="btn btn-danger" >+Add Report</a>
            </div> -->
            <div class="row">
              <div class="col-md-6">
                  <div class="card">
                    <div class="card-header card-header-danger">
                      <h4 class="card-title">Membership Forms</h4>                    
                    </div>
                    <div class="card-body table-responsive">
                      <table class="table table-hover">
                        <thead class="text-warning">
                          <tr>
                            <th scope="col">ID</th>
                            <!--<th scope="col">Status</th>-->
                            <th scope="col">Volunteer</th>                          
                            <th scope="col" value="approve"></th>
                            <th scope="col" value="reject"></th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr v-on:click="viewMemForm(member.id)" v-for="(member,i) in memForms" :key="i">                  
                        <th scope="row">{{member.id}}</th> 
                        <td> {{member.surname}} {{member.first_name}} </td>     
                        <td>Pending</td>                 
                      </tr>
                    </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header card-header-danger">
                    <h4 class="card-title">Committee Membership Forms</h4>
                    <!-- <p class="card-category">New employees on 15th September, 2016</p> -->
                  </div>
                  <div class="card-body table-responsive">
                    <table class="table table-hover">
                      <thead class="text-warning">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Status</th>
                          <th scope="col">Title</th>
                          <th scope="col">Sender</th>
                          <th scope="col" value="approve"></th>
                          <th scope="col" value="reject"></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <th scope="row">1</th>
                      <td>Pending</td>
                      <td>New Recruit</td>
                      <td>USC TC Chapter</td>
                      <td><span>&#10003;</span></td>
                      <td><span>&#9747;</span></td>
                      </tr>
                      <tr>
                      <th scope="row">2</th>
                      <td>Recieved</td>
                      <td>Event Plan</td>
                      <td>STC Chapter</td>
                      <td><a href="#" ><span>&#10003;</span></a></td>
                      <td><span>&#9747;</span></td>
                      </tr>
                      <tr>
                      <th scope="row">3</th>
                      <td>Pending</td>
                      <td>Training for newbs</td>
                      <td>Sacred Heart Chapter</td>
                      <td><span>&#10003;</span></td>
                      <td><span>&#9747;</span></td>
                      </tr>
                  </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header card-header-danger">
                    <h4 class="card-title">Uniform Request Forms</h4>
                    <!-- <p class="card-category">New employees on 15th September, 2016</p> -->
                  </div>
                  <div class="card-body table-responsive">
                    <table class="table table-hover">
                      <thead class="text-warning">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Status</th>
                          <th scope="col">Title</th>
                          <th scope="col">Sender</th>
                          <th scope="col" value="approve"></th>
                          <th scope="col" value="reject"></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <th scope="row">1</th>
                      <td>Pending</td>
                      <td>New Recruit</td>
                      <td>USC TC Chapter</td>
                      <td><span>&#10003;</span></td>
                      <td><span>&#9747;</span></td>
                      </tr>
                      <tr>
                      <th scope="row">2</th>
                      <td>Recieved</td>
                      <td>Event Plan</td>
                      <td>STC Chapter</td>
                      <td><a href="#" ><span>&#10003;</span></a></td>
                      <td><span>&#9747;</span></td>
                      </tr>
                      <tr>
                      <th scope="row">3</th>
                      <td>Pending</td>
                      <td>Training for newbs</td>
                      <td>Sacred Heart Chapter</td>
                      <td><span>&#10003;</span></td>
                      <td><span>&#9747;</span></td>
                      </tr>
                  </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <f/>
      <!-- </main>End #main -->
    </div>
</template>

<script>
import navbar from '../components/Navbar.vue'
import footer from '../components/footer.vue'
import axios from 'axios';
export default {
    name: 'masterlist',
    components: {
      'n': navbar,
      'f': footer
    },
    data() {
      return {
        memForms: [],
        userType: null
      }
    },
    mounted(){
        this.userType = this.$store.getters.getUserType

        axios.get('http://localhost:3000/officerActivity/' + this.userType)
            .then(response => this.memForms = response.data)
            .catch(error => console.log(error))
    },
    methods: {
      viewMemForm: function(memId){
        this.$store.commit('setMemFormId', memId)
        this.$router.push({ path: `/membershipform` })
      }
    }
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
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