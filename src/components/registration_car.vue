<template>
      <div v-if="errorMessage" class="alert alert-danger" role="alert">
        {{ errorMessage }}
      </div>
      <div v-if="successMessage" class="alert alert-success" role="alert">
        {{ successMessage }}
      </div>
      <div class="content fs-6 d-flex flex-column-fluid" id="kt_content">
        						<!--begin::Container-->
        <div class=" container-xxl ">
            <!--begin::Card-->
        <div class="card">
            <div class="card-body">

                <div class="card">

                     <div >
                    <h1>ทะเบียนรถ</h1>
                    <br>
        <form @submit.prevent="submitForm">
            <div class="row mb-4">
                <label lass="col-lg-3 col-form-label" for="reg-number">เลขทะเบียน:</label>
                <input class="form-control form-control-lg form-control-solid" type="text" id="reg-number" v-model="regNumber">
            </div>
            <div class="row mb-4">
                <label lass="col-lg-3 col-form-label" for="province">จังหวัด:</label>
                <input  class="form-control form-control-lg form-control-solid" type="text" id="province" v-model="province">
            </div>
            <div class="row mb-4">
                <label lass="col-lg-3 col-form-label" for="brand">ยี่ห้อ:</label>
                <input  class="form-control form-control-lg form-control-solid" type="text" id="brand" v-model="brand">
            </div>
            <div class="row mb-4">
                <label lass="col-lg-3 col-form-label"  for="model">รุ่น:</label>
                <input  class="form-control form-control-lg form-control-solid" type="text" id="model" v-model="model">
            </div>
            <div class="row mb-4">
                <label lass="col-lg-3 col-form-label" for="color">สี:</label>
                <input   class="form-control form-control-lg form-control-solid" type="text" id="color" v-model="color">
            </div>
            <button class="btn btn-primary fw-bold mx-auto px-5 mt-6" type="submit">Save</button>
        </form>
                  </div>
                </div>
            <!--begin::Form-->
     
                           
                      
                 
               
        
       
            <!--end::Form-->
        </div>
        

        <!--end::Engage Widget 1-->

     

                <!--begin::Section-->
          

                <!--begin::Section-->
           
            </div>
        </div>
        <!--end::Card-->
        </div>
        <!--end::Container-->                	
     <!-- <div>
    	    <div v-if="user">
    	      <h1>{{ user.firstName }} {{ user.lastName }}</h1>

    	    </div>
    	    <p v-else>Loading...</p>
    	  </div> -->
    
    <!-- <h1>ทะเบียนรถ</h1>
    <form @submit.prevent="submitForm">
        <div>
            <label for="reg-number">เลขทะเบียน:</label>
            <input type="text" id="reg-number" v-model="regNumber">
        </div>
        <div>
            <label for="province">จังหวัด:</label>
            <input type="text" id="province" v-model="province">
        </div>
        <div>
            <label for="brand">ยี่ห้อ:</label>
            <input type="text" id="brand" v-model="brand">
        </div>
        <div>
            <label for="model">รุ่น:</label>
            <input type="text" id="model" v-model="model">
        </div>
        <div>
            <label for="color">สี:</label>
            <input type="text" id="color" v-model="color">
        </div>
        <button type="submit">Save</button>
    </form> -->
</template>

<script>
import firebase from '../firebase/firebase'
import { RouterLink } from "vue-router";
const db = firebase.database();

export default {
    name: 'registration_car',
    data() {
        return {
            regNumber: "",
            province: "",
            brand: "",
            model: "",
            color: "",
            user: null,
                 errorMessage: '',
            successMessage: '',
        };
    },
    created() {
        const userData = localStorage.getItem('user')
        if (userData) {
            this.user = JSON.parse(userData)
        } else {
            // Get the user's data from Firebase
            firebase.auth().onAuthStateChanged(async user => {
                if (user) {
                    const snapshot = await firebase.database().ref('users/' + user.uid).once('value')
                    const userData = snapshot.val()
                    this.user = userData
                    // Store the user data in localStorage
                    localStorage.setItem('user', JSON.stringify(userData))
                }
            })
        }
    },
     mounted() {
        this.getUserData()
    },
    methods: {
        	 async getUserData() {
            try {
                const user = firebase.auth().currentUser
                const snapshot = await firebase.database().ref('users/' + user.uid).once('value')
                const userData = snapshot.val()
                this.user = userData
            } catch (error) {
                console.log(error.message)
            }
        },
        async submitForm() {
             if (!this.regNumber || !this.province || !this.brand || !this.model || !this.color) {
                 this.errorMessage = "กรุณากรอกข้อมูลให้ครบ";
                 
                return;
            }
            try {
                const data = {
                    regNumber: this.regNumber,
                    province: this.province,
                    brand: this.brand,
                    model: this.model,
                    color: this.color,
                    email: this.user.email
                };
                 
                await db.ref("registrations").push(data);
                this.successMessage = "บันทึกข้อมูลเสร็จสิ้น";
                setTimeout(() => {
                    this.successMessage = "";
                }, 5000);
                // this.$router.push({ name: "User" });
                
              
            } catch (error) {
                console.error(error);
               
            }
        },

    },
       beforeDestroy() {
        // Remove the user data from localStorage when the component is destroyed
        localStorage.removeItem('user')
    }
};
</script>









<style>

</style>