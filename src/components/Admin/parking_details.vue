<template>
    <div>
        <h1>Parking List</h1>
        
        <ul>
            <li v-for="parking in parkingList" :key="parking.id">
                <RouterLink :to="{ name: 'List', params: { id: parking.id } }">
                    <img v-if="parking.imageURL" :src="parking.imageURL" class="mw-100 w-200px" alt="parking image">
                    {{ parking.name }}
                    <p>{{ parking.address }} {{ parking.county }} {{ parking.province }}</p>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
import firebase from '../../firebase/firebase'
import 'firebase/database'
import { ref, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

export default {
    name: 'parking_details',

    components: {
        RouterLink
    },

    setup() {
        const db = firebase.database()
        const parkingList = ref([])

        // Fetch parking list from database
        const fetchParkingList = () => {
            db.ref('parking').on('value', snapshot => {
                parkingList.value = []
                snapshot.forEach(childSnapshot => {
                    const id = childSnapshot.key
                    const data = childSnapshot.val()
                    parkingList.value.push({ id, ...data })
                })
            })
        }

        // Unsubscribe from database updates when component is unmounted
        onUnmounted(() => {
            db.ref('parking').off()
        })

        // Fetch parking list on component mount
        fetchParkingList()

        return {
            parkingList
        }
    }
}
</script>
