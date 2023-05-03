<template>
    <div class="d-flex flex-column text-center bg-light   rounded py-8 px-5 mb-10">
                <h3 class="fs-2 fw-bold mb-2">รายละเอียดการจอง</h3>
           
                    </div>
                
          <div class="content fs-6 d-flex flex-column-fluid" id="kt_content">
            <!--begin::Container-->
            <div class="container-xxl">
              <!--begin::Card-->
              <div class="card">
                
            <!-- <div class="d-flex align-items-center flex-nowrap text-nowrap overflow-auto ">
                                    <a href="/start-html-pro/?page=apps/calendar" class="btn btn-active-accent  fw-bold ">
                            กำลังจอง                </a>
                                    <a href="/start-html-pro/?page=apps/chat/private" class="btn btn-active-accent  fw-bold ms-3">
                            สิ้นสุด                </a>
                                    <a href="/start-html-pro/?page=apps/chat/group" class="btn btn-active-accent  fw-bold ms-3">
                            ยกเลิก                </a>
               
                            </div> -->
        <div>


          <button @click="filterStatus('กำลังจอง')" class="btn btn-active-accent fw-bold">กำลังจอง</button>
                <button @click="filterStatus('in progress')" class="btn btn-active-accent fw-bold">กำลังจอด</button>
                <button @click="filterStatus('finished')" class="btn btn-active-accent fw-bold">สิ้นสุด</button>
    <button @click="filterStatus('cancelled')" class="btn btn-active-accent fw-bold">ยกเลิก</button>


                
          

    <br>
        <div class="row g-5 g-xxl-8">
              <div class="col-md-4 col-xxl-4 col-lg-12" v-for="(booking, id) in filteredBookings" :key="id">
                <div class="card shadow-none">
                  <div class="card-body p-0">
                    <div class="overlay rounded overflow-hidden">
                      <!-- You can display the booking image here -->
                    </div>
                    <div class="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                      <a class="fs-4 fw-bold text-gray-800 text-hover-primary mb-1" style="text-align: left;">{{ booking.name }}</a>
                      <span class="fs-6" style="text-align: left;">{{ booking.address_parking }} {{ booking.county_parking }} {{ booking.province_parking }}</span>
                    
                      <button v-if="booking.status === 'กำลังจอง'" class="btn btn-danger" @click="cancelBooking(booking.id)">ยกเลิก</button>
                  <!-- <button v-if="booking.status === 'กำลังจอง'" class="btn btn-danger" @click="cancelBooking(booking.id)">Cancel</button> -->

                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
                  </div>

                  <!--end::Engage Widget 1-->

                  <!--begin::Section-->

                  <!--begin::Section-->
                </div>
              </div>
              <!--end::Card-->
  

    <!-- <div>
        <div>
            <button @click="filterStatus('กำลังจอง')">กำลังจอง</button>
            <button @click="filterStatus('in progress')">กำลังจอด</button>
            <button @click="filterStatus('finished')">เสร็จสิ้น</button>
        </div>
        <ul>
            <li v-for="(booking, id) in filteredBookings" :key="id">
                {{ booking.name }}
                <button v-if="booking.status === 'กำลังจอง'" @click="cancelBooking(booking.id)">Cancel</button>
            </li>
        </ul>
    </div> -->
</template>

<script>
import { ref, onUnmounted } from 'vue';
import firebase from '../firebase/firebase';

const db = firebase.database();

export default {
    name: 'Bookings',
    setup() {
        const bookings = ref([]);
        const filteredBookings = ref([]);

        const loadBookings = () => {
            db.ref('bookings').on('value', (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    bookings.value = Object.entries(data)
                        .map(([id, booking]) => ({ id, ...booking }))
                        .filter((booking) => booking.status !== '');
                }
            });
        };
    const filterStatus = (status) => {
            if (status === '') {
                filteredBookings.value = bookings.value;
            } else if (status === 'cancelled') {
                filteredBookings.value = bookings.value.filter((booking) => booking.status === 'cancelled');
            } else {
                filteredBookings.value = bookings.value.filter((booking) => booking.status === status);
            }
        };

        const cancelBooking = (id) => {
            db.ref(`bookings/${id}/status`).set('cancelled');
            
        };

        onUnmounted(() => {
            db.ref('bookings').off();
        });

        loadBookings();

        return { filteredBookings, filterStatus, cancelBooking };
    },
};
</script>

<style>
.left-align {
    text-align: left;
}
</style>
