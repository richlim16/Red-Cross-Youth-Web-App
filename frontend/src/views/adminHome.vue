<template>
    <div>
        <div class="wrapper ">
            <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
            <!--
                Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

                Tip 2: you can also add an image using data-image tag
            -->
            <div class="logo"><a href="http://www.creative-tim.com" class="simple-text logo-normal">
                Profile</a></div>
            <adminSB/>
            <div class="main-panel">
            <!-- Navbar -->
            <adminN/>
            
            <div class="content">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                    <div class="card">
                        <div class="card-header card-header-danger">
                        <h4 class="card-title">Pending and Recieved Forms</h4>
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
                    <div class="col-12">
                    <div class="card">
                        <div class="card-header card-header-danger">
                        <h4 class="card-title">Chapter Members:</h4>
                        </div>
                        <div class="card-body">
                        <table class="table table-striped table-sm">
                            <thead>
                            <tr>		
                                <th rowspan="2">Name</th>
                                <th>Contact</th>
                                <th>Recruited</th>
                                <th>Profile</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                <img src="http://imgur.com/GaBdGdz.png" class="mx-2" style="height: 5em;">
                                <span>Rory Mercury</span>
                                </td>
                                <td>...</td>
                                <td>...</td>
                                <td><a>View Profile</a></td>
                            </tr>
                            <tr>
                                <td>
                                <img src="http://imgur.com/GaBdGdz.png" class="mx-2" style="height: 5em;">
                                <span>Rory Mercury</span>
                                </td>
                                <td>...</td>
                                <td>...</td>
                                <td><a>View Profile</a></td>
                            </tr>
                            <tr>
                                <td>
                                <img src="http://imgur.com/GaBdGdz.png" class="mx-2" style="height: 5em;">
                                <span>Rory Mercury</span>
                                </td>
                                <td>...</td>
                                <td>...</td>
                                <td><a>View Profile</a></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <footer class="footer">
                <div class="container-fluid">
                <nav class="float-left">
                    <ul>
                    <li>
                        <a href="https://www.creative-tim.com">
                        Creative Tim
                        </a>
                    </li>
                    <li>
                        <a href="https://creative-tim.com/presentation">
                        About Us
                        </a>
                    </li>
                    <li>
                        <a href="http://blog.creative-tim.com">
                        Blog
                        </a>
                    </li>
                    <li>
                        <a href="https://www.creative-tim.com/license">
                        Licenses
                        </a>
                    </li>
                    </ul>
                </nav>
                </div>
            </footer>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import adminsidebar from '../components/adminSidebar.vue'
import adminnavbar from '../components/adminNavbar.vue'

export default {
    name: 'adminhome',
    components:{
        'adminSB': adminsidebar,
        'adminN': adminnavbar
    }
}
</script>

<style scoped>

</style>