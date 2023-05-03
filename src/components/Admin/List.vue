<template>
    <div>
    <router-link to="#" class="btn btn-primary" @click="$router.go(-1)">Back to Parking List</router-link>

        <h1>{{ parking.name }}</h1>
        <p>{{ parking.address }} {{ parking.county }} {{ parking.province }}</p>
        <p> {{ parking.description }}</p>
    </div>
</template>

<script>
import firebase from "../../firebase/firebase";
import { ref, onUnmounted } from "vue";

export default {
    name: "List",
    props: {
        id: String,
    },
    setup(props) {
        const db = firebase.database();
        const parking = ref({});

        // Fetch parking details from database
        const fetchParkingDetails = () => {
            db.ref(`parking/${props.id}`).on("value", (snapshot) => {
                parking.value = snapshot.val();
            });
        };

        // Unsubscribe from database updates when component is unmounted
        onUnmounted(() => {
            db.ref(`parking/${props.id}`).off();
        });

        // Fetch parking details on component mount
        fetchParkingDetails();

        return {
            parking,
        };
    },

};
</script>
