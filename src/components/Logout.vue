<template>
    <div>
        <div v-if="user">
            <h1>{{ user.firstName }} {{ user.lastName }}</h1>
         
            <button @click="logout">Logout</button>
        </div>
        <form>
            ...
        </form>
    </div>
</template>

<script>
import firebase from '../firebase/firebase'
import 'firebase/auth'
import 'firebase/database'

export default {
    name: 'login',
    data() {
        return {
            user: null
        }
    },
    mounted() {
        this.fetchUserData()
    },
    methods: {
        async fetchUserData() {
            const user = firebase.auth().currentUser
            if (user) {
                const snapshot = await firebase.database().ref('users/' + user.uid).once('value')
                this.user = snapshot.val()
            }
        },
        async logout() {
            try {
                await firebase.auth().signOut()
                this.user = null
                this.$router.push('/')
            } catch (error) {
                console.log(error.message)
            }
        }
    }
}
</script>