<template>
               <div class="d-flex flex-column text-center bg-light   rounded py-8 ">
            <h3 class="fs-2 fw-bold mb-2">สรุปการจอง</h3>
           
                </div>
                
      <div class="content fs-6 d-flex flex-column-fluid" id="kt_content">
        <!--begin::Container-->
        <div class="container-xxl">
          <!--begin::Card-->
          <div class="card">
            <div class="card-body">
              <div class="card">
                <!--begin::Form-->


                 <div v-if="isLoading">Loading...</div>
        <div v-else>
            <div v-if="error">{{ error }}</div>
            <div v-else>
                <div v-if="user && booking">
                
                    <div v-if="user.email === booking.user">
                          <div class="container1">
              <span class="left-text" >ลานจอดรถ</span>
              <h6 class="right-text" > <p>{{ booking.name_parking }}</p></h6>
            </div>
                        <div class="container1">
                  <span class="left-text" >ที่อยู่</span>
                  <h6 class="right-text" > <p>{{ booking.name_parking }}</p></h6>
                </div>
                       
                      <div class="container1">
                          <span class="left-text">วันที่</span>
                          <h6 class="right-text">
                            <p>{{ formatDate(booking.currentDate) }}</p>
                          </h6>
                        </div>
                     <div class="container1">
                          <span class="left-text">เวลา</span>
                          <!-- <h6 class="right-text" > <p>{{ booking.startTime }} - {{ booking.endTime }} น. </p></h6> -->
                          <h6 class="right-text" style="margin-right: -383px">
                            <p v-if="booking.startTime">
                              {{ booking.startTime }} - {{ booking.endTime }} น.
                            </p>
                          </h6>
                          <h6 class="right-text">
                            <p v-if="booking.date">{{ booking.date }}</p>
                          </h6>
                          <h6 class="right-text">
                            <p v-if="booking.duration">
                              {{ booking.duration }} เดือน
                            </p>
                          </h6>
                        </div>
                         <hr style="border-top: 1px solid black; margin-top: 0.5rem;">
                                <div class="container1">
                              <span class="left-text">ราคา</span>
                              <h6 class="right-text">
                                <p>{{ booking.price }}</p>
                              </h6>
                            </div>
                                    <div class="container1">
                              <span class="left-text">ราคาจอง</span>
                              <h6 class="right-text">
                                <p>{{ this.calculateVat(booking.price) }}</p>
                              </h6>
                            </div>
                             <hr style="border-top: 1px solid black; margin-top: 0.5rem;">
                                <div class="container1">
                              <span class="left-text">ราคารวม</span>
                              <h6 class="right-text">
                                <p>{{ calculateTotalPrice(booking.price) }}</p>
                              </h6>
                            </div>
                        <!-- Display more booking details here -->
                            <!-- <p>ราคา: ฿{{ booking.price }}</p>
                           <p>ราคาจอง: ฿{{ this.calculateVat(booking.price) }}</p>
                             <p>รวม: ฿{{ calculateTotalPrice(booking.price) }}</p> -->

                             <br><br>
   <div class="d-flex justify-content-between align-items-center">
                         <h6 class="fs-2 fw-bold mb-2">เงินสด</h6>
           
      
                  <div class="text-right">
                   <input type="checkbox" class="form-check-input"/>
                  </div>
                </div>
                        </div>
                        
                    <div v-else>
                        <p>Error: The email addresses do not match.</p>
                    </div>
                </div>
            </div>
        </div>
              </div>
        
       
            </div>
          </div>
          <!--end::Card-->
        </div>
        
        <!--end::Container-->
      </div>
      
    <div>
            <router-link to="/Reserver">
            <div class="d-flex flex-column text-center bg-light   rounded py-8 px-5 mb-10">
         
                <button id="kt_sidebar_shop_new_form_btn" class="btn btn-primary fw-bold mx-auto px-5 mt-6">เสร็จสิ้น</button>
            </div>
          <!-- <button>เสร็จสิ้น</button> -->
        </router-link>
 
              <!--end::Card-->
            

            <!--end::Container-->
          
          
        <!-- <div v-if="isLoading">Loading...</div>
        <div v-else>
            <div v-if="error">{{ error }}</div>
            <div v-else>
                <div v-if="user && booking">
                    <h2>สรุปค่าใช้จ่าย</h2>
                    <div v-if="user.email === booking.user">
                        <p>ลานจอดรถ: {{ booking.name_parking}}</p>
                        <p>ที่อยู่: {{ booking.address_parking }} {{ booking.county_parking}} {{ booking.province_parking }}</p>
                        <p>วันที่: {{ formatDate(booking.currentDate) }}</p>
                    
                      <p v-if="booking.startTime">เวลา: {{ booking.startTime }} - {{ booking.endTime}} น.</p>
                <p v-if="booking.date">Date: {{ booking.date }}</p>
                <p v-if="booking.duration">Duration: {{ booking.duration }} เดือน</p>
                 
                            <p>ราคา: ฿{{ booking.price }}</p>
                           <p>ราคาจอง: ฿{{ this.calculateVat(booking.price) }}</p>
                             <p>รวม: ฿{{ calculateTotalPrice(booking.price) }}</p>
                    </div>
                    <div v-else>
                        <p>Error: The email addresses do not match.</p>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- <router-link to="/Reserver">
          <button>เสร็จสิ้น</button>
        </router-link> -->
    </div>
</template>

<script>
import firebase from '../firebase/firebase'
import 'firebase/auth'
import 'firebase/database'

export default {
    name: 'pay',
    data() {
        return {
            isLoading: false,
            booking: null,
            error: null,
            user: null,
            bookings: null,
        }
    },
    created() {
        const userData = localStorage.getItem('user')
        if (userData) {
            this.user = JSON.parse(userData)
        } else {
            // Get the user's data from Firebase
            firebase.auth().onAuthStateChanged(async (user) => {
                if (user) {
                    const snapshot = await firebase
                        .database()
                        .ref('users/' + user.uid)
                        .once('value')
                    const userData = snapshot.val()
                    this.user = userData
                    // Store the user data in localStorage
                    localStorage.setItem('user', JSON.stringify(userData))
                }
            })
        }
    },
    mounted() {
        this.fetchBookings()
    },
    methods: {

        calculateVat(price) {
            if (isNaN(price)) {
                return "Invalid price";
            }
            const vat = price * 0.07;
            return vat.toFixed(2);
        },
   calculateTotalPrice(price) {
            if (isNaN(price)) {
                return NaN;
            }
           const vat = price * 0.07;
            const totalPrice = parseInt(price) + parseInt(vat);
            console.log(totalPrice);
            return Math.round(totalPrice * 100) / 100;
        },


        formatDate(dateString) {
            const months = [
                "January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"
            ];

            const date = new Date(dateString);
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();

            return `${day} ${month} ${year}`;
        },
        async fetchBookings() {
            try {
                const response = await fetch(
                    `https://softwareapp-62061-default-rtdb.firebaseio.com/bookings.json`
                )
                const data = await response.json()
                // Sort the bookings data by timestamp (latest first)
                const sortedBookings = Object.values(data).sort((a, b) => {
                    return b.startTime - a.startTime
                })
                // Store the latest booking data in the booking data property
                this.booking = sortedBookings[sortedBookings.length - 1]
                // Store all the bookings data in the bookings data property
                this.bookings = sortedBookings
            } catch (error) {
                this.error = error.message
            } finally {
                this.isLoading = false
            }
        },
    },
    beforeDestroy() {
        // Remove the user data from localStorage when the component is destroyed
        localStorage.removeItem('user')
    },
}

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
