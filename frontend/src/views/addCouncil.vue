<template>
    <div id="addCouncil">
        <adminN/>
        <br>
        
        
        <section class="inner-page">
            <div class="container">
                <h2>Add Council</h2>
                <p>Fill out the following fields to create a new council</p>

                <div class="row">
                    <div class="col-md-8 order-md-1">
                        <form id="addForm" class="needs-validation" @submit="addCouncil">
                            <div class="row mb-5">
                                <label for="councilName">Council name</label>
                                <input type="text" class="form-control" v-model="councilName" id="councilName" name="councilName" placeholder="Council Name" value="" required="">
                                <div class="invalid-feedback">
                                    Valid council name is required.
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="chapter">Chapter</label>
                                    <select class="form-control" v-model="chapter" id="chapter" name="chapter">
                                        <option disabled selected value> -- select an option -- </option>
                                        <option v-for="(chapter,i) in chapters" :key="i" :value=chapter.id>{{chapter.name}}</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="category">Category</label>
                                    <select class="form-control" v-model="category" id="category" name="category">
                                        <option disabled selected value> -- select an option -- </option>
                                        <option value="Junior Red Cross Youth">Junior Red Cross Youth</option>
                                        <option value="Senior Red Cross Youth">Senior Red Cross Youth</option>
                                        <option value="Senior Plus Red Cross Youth">Senior Plus Red Cross Youth</option>
                                        <option value="College Red Cross Youth">College Red Cross Youth</option>
                                        <option value="Community Red Cross Youth">Community Red Cross Youth</option>
                                    </select>
                                </div>
                            </div>
                            <hr class="mb-4">        
                            <button type='submit' class="btn btn-danger btn-lg btn-block text-white">Add</button>        
                        </form>
                        <a href="activities.php">Back</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import adminnavbar from '../components/adminNavbar.vue'
import axios from 'axios';
export default {
    name: 'addCouncil',
    data(){
        return{
            chapters: [],
            councilName: null,
            chapter: null,
            category: null
        }
    },
    components: {
        'adminN': adminnavbar
    },
    mounted(){
        axios.get('http://localhost:3000/addCouncil')
            .then(response => {
                this.chapters = response.data
                console.log(JSON.parse(JSON.stringify(response.data)))
            })
    },
    methods: {
        addCouncil: function(){
            axios({
                method: 'POST',
                url: 'http://localhost:3000/act/addCouncil',
                data: {name: this.councilName, chapterId: this.chapter, category: this.category}
            })
        }
    }
}
</script>