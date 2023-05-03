<template>
 
    <div class="d-flex flex-column align-items-center justify-content-center text-center bg-light rounded py-8 px-5 mb-10" style="height: 100vh;">
      <h3 class="fs-2 fw-bold mb-2">Login</h3><br>
      <form @submit.prevent="login">
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
                <input class="form-control form-control-lg form-control-solid" type="email" v-model="form.email" placeholder="Email" /><br>
                <input class="form-control form-control-lg form-control-solid" type="password" v-model="form.password" placeholder="Password" /><br>
                <div class="form-text py-2">
                           ลงทะเบียนเพื่อรวมใช้แอพ
                            <a  @click="navigateTo('/Singup')"  class="fw-boldk">ที่นี่</a>.
                        </div>
                <button class="btn btn-primary fw-bold mx-auto px-5 mt-6" type="submit">Login</button>
            </form>
    
    </div>

    <!-- <div>
        <form @submit.prevent="login">
            <input type="email" v-model="form.email" placeholder="Email" />
            <input type="password" v-model="form.password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div> -->
</template>

<script>
import firebase from '../firebase/firebase'
import 'firebase/auth'

export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            error: '',
             user: null
        }
    },
    methods: {
        	  navigateTo(path) {
            this.$router.push(path);
            setTimeout(() => {
                this.$router.go(0);
            }, 50);
        },

        async login() {
         if (!this.form.email || !this.form.password) {
                this.error = 'กรุณากรอกข้อมูลให้ครบถ้วน';
                return;
            }
            try {
                const { email, password } = this.form

                // Sign in the user with their email and password
                await firebase.auth().signInWithEmailAndPassword(email, password)

                // Get the user's role from the Realtime Database
                const user = firebase.auth().currentUser
                const snapshot = await firebase.database().ref('users/' + user.uid).once('value')
                const role = snapshot.val().role

                const userData = snapshot.val()

                // Set the user data to the state
                this.user = userData


                // Redirect the user to their dashboard page based on their role
                if (role === 'admin') {
                    this.$router.push('/admin')
                } else {
                    this.$router.push('/user')
                }
            } catch (error) {
                console.log(error.message)
            }
        }
    }
}
</script>