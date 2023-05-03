<template>
     <div v-if="alert" :class="alert.type">
          {{ alert.message }}
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center text-center bg-light rounded py-8 px-5 mb-10" style="height: 100vh;">
          <h3 class="fs-2 fw-bold mb-2">Register</h3><br>
          <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
           <form @submit.prevent="register">
                <input type="text" class="form-control form-control-lg form-control-solid"  v-model="form.firstName" placeholder="First Name" /><br>
                <input type="text" class="form-control form-control-lg form-control-solid"  v-model="form.lastName" placeholder="Last Name" /><br>
                <input type="text" class="form-control form-control-lg form-control-solid"  v-model="form.address" placeholder="Address" /><br>
                <input type="email" class="form-control form-control-lg form-control-solid"  v-model="form.email" placeholder="Email" /><br>
                <input type="password" class="form-control form-control-lg form-control-solid"  v-model="form.password" placeholder="Password" /><br>
                
                <button class="btn btn-primary fw-bold mx-auto px-5 mt-6" type="submit">submit</button>
            </form>

  
    
        </div>


    <div>
     
    </div>
</template>

<script>
import firebase from '../firebase/firebase'
import 'firebase/auth'
import 'firebase/database'

export default {
    name: 'SignUp',
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                address: '',
                email: '',
                password: ''
            },
            errorMessage: '',
               alert: null,
        }
    },
    methods: {
        validateForm() {
            const { firstName, lastName, address, email, password } = this.form;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!firstName || !lastName || !address || !email || !password) {
                this.errorMessage = 'กรุณากรอกข้อมูลให้ครบถ้วน';
                return false;
            }

            if (!emailPattern.test(email)) {
                this.errorMessage = 'กรุณากรอกอีเมล์ให้ถูกต้อง';
                return false;
            }

            return true;
        },
       
        async register() {
            if (!this.validateForm()) {
                return;
            }
            try {
                const { firstName, lastName, address, email, password } = this.form

                // Create a new user in Firebase Authentication
                const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password)
                const user = userCredential.user

                // Add the user details to the Realtime Database
                await firebase.database().ref('users/' + user.uid).set({
                    firstName,
                    lastName,
                    address,
                    email,
                    role: 'user'
                })

                    // Set success message
                this.alert = {
                    type: 'alert-success',
                    message: 'สมัครสามาชิกเสร็จสิ้น'
                }

                // Redirect the user to another page, e.g. the dashboard
                this.$router.push('/')
            } catch (error) {
                   this.alert = {
                    type: 'alert-danger',
                    message: error.message,
                }
            }
        }
    }
}
</script>
