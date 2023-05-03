

<template>

      <!--begin::Main-->
            <!--begin::Root-->
            <div class="d-flex flex-column flex-root">
                <!--begin::Page-->
                <div class="page d-flex flex-row flex-column-fluid">
                    <!--begin::Wrapper-->
                    <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                        <!--begin::Header-->
                   <div class=" container-xxl  d-flex align-items-stretch justify-content-between">
            <!--begin::Left-->
    
   <div id="kt_header" class="header" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}" style="animation-duration: 0.3s;">

    	<!--begin::Container-->
    	<div class=" container-xxl  d-flex align-items-stretch justify-content-between">
            <!--begin::Left-->
            <div class="d-flex align-items-center">
    	

    				<!--begin::Logo-->
    	    		<h3 class="text-center">
    	    			รายการจองที่จอดรถ
                    </h3>
    	    		<!--end::Logo-->
    			        </div>
            <!--end::Left-->

      
        </div>
   </div>
  
    	<!--end::Container-->
    </div>     <!--end::Header-->
                        <!--begin::Main-->
                        <div class="d-flex flex-column flex-column-fluid">
                            <!--begin::Content-->
                            <div class="content fs-6 d-flex flex-column-fluid" id="kt_content">
                                <!--begin::Container-->
                                <div class="container">
                              


            


     <div v-if="bookingList.length > 0">
        <div class="d-flex flex-column text-center bg-light   rounded py-8 px-5 mb-10" v-for="booking in bookingList" :key="booking.id">
            
            <h3 class="fs-2 fw-bold mb-2">{{ booking.name_parking }}</h3>
       <span class="text-muted fs-6 fw-bold">{{ booking.user }}</span>
       <br>
        <div style="clear: both; border-top: 1px solid black;"></div>
        <br>
         <div class="container1">
          <span class="left-text" >ประเภทการจอง</span>
          <span class="right-text" > <p>{{ getBookingType(booking) }}</p></span>
        </div>

        <div class="container1">
      <span class="left-text" >เข้าจอดเวลา</span>
      <span class="right-text">{{ booking.inTime ? getTimeString(booking.inTime) : '-' }} น.</span>
    </div>
          <div class="container1">
          <span class="left-text" >เวลาออก</span>
          <span class="right-text">{{ booking.outTime ? getTimeString(booking.outTime) : '-' }} น.</span>
        </div>
       
             <button v-if="!booking.inTime" class="btn btn-primary fw-bold mx-auto px-5 mt-6" @click="updateBooking(booking.id, 'inTime')">เข้าจอด</button>
                  <button v-if="booking.inTime && !booking.outTime" class="btn btn-primary fw-bold mx-auto px-5 mt-6" @click="updateBooking(booking.id, 'outTime')">นำรถออก</button>
        </div>
     </div>
      <h3 v-else>ยังไม่มีข้อมูลการจอง</h3>


      
                                


                                    <div class="modal fade" id="kt_modal_create_app" tabindex="-1" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered mw-1000px">
                                            <div class="modal-content">
                                                <div class="container px-10 py-10">
                                                    <div class="modal-header py-2 d-flex justify-content-end border-0">
                                                        <!--begin::Close-->
                                                        <div class="btn btn-icon btn-sm btn-light-primary" data-bs-dismiss="modal">
                                                            <!--begin::Svg Icon | path: icons/duotone/Navigation/Close.svg-->
                                                            <span class="svg-icon svg-icon-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                                                                    height="24px" viewBox="0 0 24 24" version="1.1">
                                                                    <g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
                                                                        fill="#000000">
                                                                        <rect fill="#000000" x="0" y="7" width="16" height="2"
                                                                            rx="1"></rect>
                                                                        <rect fill="#000000" opacity="0.5"
                                                                            transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)"
                                                                            x="0" y="7" width="16" height="2" rx="1"></rect>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                            <!--end::Svg Icon-->
                                                        </div>
                                                        <!--end::Close-->
                                       
                                                
                                         
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--end::Modal - Create App-->
                                <!--begin::Modal - Select Location-->
                           
                                <!--end::Modal - Select Location-->
                                <!--end::Modals-->
                            </div>
                            <!--end::Container-->
                        </div>
                        <!--end::Content-->
                    </div>





                    <!--end::Main-->
                    <!--begin::Footer-->

                    <!--end::Footer-->
                </div>
                <!--end::Wrapper-->
                <!--begin::Sidebar-->

                <!--end::Sidebar-->
            </div>
            <!--end::Page-->
        </div>
        <!--end::Root-->
        <!--begin::Header Search-->

        <!--end::Header Search-->
        <!--begin::Mega Menu-->
    <!-- <div>
        <button class="btn btn-primary" @click="goBack">กลับสู่หน้าหลัก</button>
        <ul>
          <li v-for="booking in bookingList" :key="booking.id">
            <div>
              <p>ชื่อข้อมูลการจอง: {{ booking.name_parking }}</p>
               <p>เวลาเข้า: {{ booking.inTime ? getTimeString(booking.inTime) : '-' }}</p>
              <p>เวลาออก: {{ booking.outTime ? getTimeString(booking.outTime) : '-' }}</p>
               <span>Status: {{ booking.status }}</span>
             <button v-if="!booking.inTime" class="btn btn-primary" @click="updateBooking(booking.id, 'inTime')">เข้า</button>
              <button v-if="booking.inTime && !booking.outTime" class="btn btn-primary" @click="updateBooking(booking.id, 'outTime')">ออก</button>
            </div>
          </li>
        </ul>
      </div> -->
</template>

<script>
import firebase from "../../firebase/firebase";
import { ref, onUnmounted } from "vue";

export default {
    name: "booking",
    methods: {
        goBack() {
            this.$router.back();
        },
        updateBooking(id, property) {
            const now = Date.now();
            const data = {
                [property]: now,
              status: property === "inTime" ? "in progress" : "finished"
            }
            firebase
                .database()
                .ref(`bookings/${id}`)
                .update(data);
        },
    },
    computed: {
        getBookingType() {
            return function (booking) {
                if (booking.startTime && booking.endTime) {
                    return 'รายชั่วโมง';
                } else if (booking.date) {
                    return 'รายวัน';
                } else if (booking.duration) {
                    return 'รายเดือน';
                } else {
                    return 'Unknown';
                }
            }
        }
    },
    setup() {
        const db = firebase.database();
        const bookingList = ref([]);

        const getTimeString = (timestamp) => {
            const date = new Date(timestamp);
            const hours = date.getHours().toString().padStart(2, "0");
            const minutes = date.getMinutes().toString().padStart(2, "0");
            return `${hours}:${minutes}`;
        };

        // Fetch booking list from database
        const fetchBookingList = () => {
            db.ref("bookings").on("value", (snapshot) => {
                bookingList.value = [];
                snapshot.forEach((childSnapshot) => {
                    const id = childSnapshot.key;
                    const data = childSnapshot.val();
                    if (data.status !== "in progress" && data.status !== "finished") {
                        bookingList.value.push({ id, ...data });
                    }
                });
            });
        };

        // Unsubscribe from database updates when component is unmounted
        onUnmounted(() => {
            db.ref("bookings").off();
        });

        // Fetch booking list on component mount
        fetchBookingList();

        return {
            bookingList,
            getTimeString,
        };
    },
};
</script>

<style scoped>
.container1 {
  display: flex;
  justify-content: space-between;
}

.left-align {
  text-align: left;
}

.right-align {
  text-align: right;
}
.text-center {
  text-align: center;
}
</style>
