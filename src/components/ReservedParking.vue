<template>
           <div class="d-flex flex-column text-center bg-light   rounded py-8 px-5 mb-10">
        <h3 class="fs-2 fw-bold mb-2">ข้อมูลผู้จอง</h3>
           
            </div>
                
  <div class="content fs-6 d-flex flex-column-fluid" id="kt_content">
    <!--begin::Container-->
    <div class="container-xxl">
      <!--begin::Card-->
      <div class="card">
        <div class="card-body">
          <div class="card">
            <!--begin::Form-->
            <div v-if="selectedParking">
              <!-- <h1>Name: {{ selectedParking.name }}</h1> -->
              <button
                v-if="selectedParking.hourly"
                @click="showPrice('hourly')"
                class="btn btn-light-primary fw-semibold btn-sm" style="margin-right: 10px;"
              >
                รายชั่วโมง
              </button>
              <button
                v-if="selectedParking.daily"
                @click="showPrice('daily')"
                class="btn btn-light-primary fw-semibold btn-sm" style="margin-right: 10px;"
              >
                รายวัน
              </button>
              <button
                v-if="selectedParking.monthly"
                @click="showPrice('monthly')"
                class="btn btn-light-primary fw-semibold btn-sm"
              >
                รายเดือน
              </button>

              <div v-if="showingPrice">
                <form @submit.prevent="submitForm">
                  <div class="row mb-4">
                    <label for="name" class="col-lg-3 col-form-label"
                      >ชื่อ:</label
                    >
                    <input
                      type="text"
                      id="name"
                      class="form-control form-control-lg form-control-solid"
                      v-model="name"
                    />
                  </div>
                  <div class="row mb-4">
                    <label for="last-name" class="col-lg-3 col-form-label"
                      >นามสกุล:</label
                    >
                    <input
                      type="text"
                      id="last-name"
                      class="form-control form-control-lg form-control-solid"
                      v-model="lastName"
                    />
                  </div>
                  <div class="row mb-4">
                    <label for="tel" class="col-lg-3 col-form-label"
                      >เบอร์โทร:</label
                    >
                    <input
                      type="tel"
                      id="tel"
                      class="form-control form-control-lg form-control-solid"
                      v-model="tel"
                    />
                  </div>

                  <div v-if="price === selectedParking.daily" class="row mb-4">
                    <label for="date" class="col-lg-3 col-form-label"
                      >วันที่:</label
                    >
                    <input
                      type="date"
                      class="form-control form-control-lg form-control-solid"
                      v-model="date"
                    />
                  </div>
                  <div v-if="price === selectedParking.hourly">
                    <div class="row mb-4">
                      <label for="start-time" class="col-lg-3 col-form-label"
                        >เวลาเข้า:</label
                      >
                      <input
                        type="time"
                        id="start-time"
                        class="form-control form-control-lg form-control-solid"
                        v-model="startTime"
                      />
                    </div>
                    <div class="row mb-4">
                      <label for="end-time" class="col-lg-3 col-form-label"
                        >เวลาออก:</label
                      >
                      <input
                        type="time"
                        id="end-time"
                        class="form-control form-control-lg form-control-solid"
                        v-model="endTime"
                        disabled
                      />
                    </div>
                  </div>
                  <div
                    v-if="price === selectedParking.monthly"
                    class="row mb-4"
                  >
                    <label for="duration" class="col-lg-3 col-form-label"
                      >ระยะเวลา:</label
                    >
                    <select
                      id="duration"
                      class="form-control form-control-lg form-control-solid"
                      v-model="duration"
                    >
                      <option value="1">1 เดือน</option>
                      <option value="2">2 เดือน</option>
                      <option value="3">3 เดือน</option>
                      <!-- add more options as needed -->
                    </select>
                  </div>

                  <br />
                  
                      <router-link to="/registration_car">
                        <div class="col-lg-9">
                          <button class="btn btn-color-gray-600 btn-active-light-primary fw-bold px-8">
                            เพิ่มทะเบียนรถ
                          </button>
                        </div>
                        <!-- <button>เพิ่มทะเบียนรถ</button> -->
                      </router-link>
                      <br />
                
    <div
      class="d-flex flex-column text-center bg-light rounded py-8 px-5 mb-10"
      v-for="(registration, index) in registrations"
      :key="index"
    >
      <label>
        <input class="form-check-input" type="radio" name="registration" :value="registration">
        <h3 class="fs-2 fw-bold mb-2">
          {{ registration.regNumber }}
        </h3>
        <span class="text-muted fs-6 fw-bold">
          {{ registration.province }}
        </span>
      </label>
    </div>

                  <!-- <div
                    class="d-flex flex-column text-center bg-light rounded py-8 px-5 mb-10"
                    v-for="(registration, index) in registrations"
                    :key="index"
                  >

                  <input class="form-check-input" type="checkbox" id="kt_checkbox_2" value="1">

                    <h3 class="fs-2 fw-bold mb-2">
                      {{ registration.regNumber }}
                    </h3>
                    <span class="text-muted fs-6 fw-bold">{{
                      registration.province
                    }}</span>
                  </div> -->


                  <!-- <li v-for="(registration, index) in registrations" :key="index">
            <p>Registration Number: {{ registration.regNumber }}</p>
            <p>Province: {{ registration.province }}</p>
            <p>Brand: {{ registration.brand }}</p>
            <p>Model: {{ registration.model }}</p>
            <p>Color: {{ registration.color }}</p>
          </li> -->
                  <!-- <h2>{{ price }} บาท</h2> -->
                  <h3 class="fs-2 fw-bold mb-2" align = 'center'>รวม {{ price }} บาท</h3>

                  <div class="d-flex flex-column text-center bg-light   rounded py-8 px-5 mb-10">
     <button  class="btn btn-primary fw-bold mx-auto px-8 ">ดำเนินการต่อ</button>
           
        </div>
                 
                </form>
              </div>
            </div>

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
  </div>

  <!-- <div>
        <div v-if="selectedParking">
            <h1>Name: {{ selectedParking.name }}</h1>
    <button v-if="selectedParking.hourly" @click="showPrice('hourly')">รายชั่วโมง</button>
    <button v-if="selectedParking.daily" @click="showPrice('daily')">รายวัน</button>
    <button v-if="selectedParking.monthly" @click="showPrice('monthly')">รายเดือน</button>

            <div v-if="showingPrice">
                <h2>{{ price }} บาท</h2>
                <form @submit.prevent="submitForm">
                    <div>
                        <label for="name">ชื่อ:</label>
                        <input type="text" id="name" v-model="name">
                    </div>
                    <div>
                        <label for="last-name">นามสกุล:</label>
                        <input type="text" id="last-name" v-model="lastName">
                    </div>
                    <div>
                            <label for="tel">เบอร์โทร:</label>
                            <input type="tel" id="tel" v-model="tel">
                        </div>
                    
               <div v-if="price === selectedParking.daily">
      <label for="date">วันที่:</label>
      <input type="date" v-model="date">
    </div>
    <div v-if="price === selectedParking.hourly">
        <div>
            <label for="start-time">เวลาเข้า:</label>
            <input type="time" id="start-time" v-model="startTime">
        </div>
        <div>
            <label for="end-time">เวลาออก:</label>
            <input type="time" id="end-time" v-model="endTime" disabled>
        </div>
    </div>
    <div v-if="price === selectedParking.monthly">
      <label for="duration">ระยะเวลา:</label>
      <select id="duration" v-model="duration">
        <option value="1">1 เดือน</option>
        <option value="2">2 เดือน</option>
        <option value="3">3 เดือน</option>
      
      </select>
    </div>
    <router-link to="/registration_car">
      <button>เพิ่มทะเบียนรถ</button>
    </router-link>


     <li v-for="(registration, index) in registrations" :key="index">
        <p>Registration Number: {{ registration.regNumber }}</p>
        <p>Province: {{ registration.province }}</p>
        <p>Brand: {{ registration.brand }}</p>
        <p>Model: {{ registration.model }}</p>
        <p>Color: {{ registration.color }}</p>
      </li>

                    <button>Book now</button>
                </form>
            </div>
        </div>
    </div> -->
</template>

<script>
import firebase from "../firebase/firebase";
import { RouterLink } from "vue-router";

export default {
  name: "ReservedParking",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    RouterLink,
  },
  data() {
    return {
      selectedParking: null,
      showingPrice: false,
      price: null,
      name: "",
      lastName: "",
      time: "",
      tel: "",
      date: null,
      startTime: "",
      endTime: "",
      duration: null,
      registrations: [],
        user: null,
        status: "กำลังจอง",
        
       
             selectedItem: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // Get the user's data from Firebase
        const snapshot = await firebase
          .database()
          .ref("users/" + user.uid)
          .once("value");
        const userData = snapshot.val();
        this.user = userData;

        // Filter out registrations where email doesn't match user's email
        const registrationsSnapshot = await firebase
          .database()
          .ref("registrations")
          .once("value");
        const registrationsData = registrationsSnapshot.val();
        const filteredRegistrations = Object.values(registrationsData).filter(
          (registration) => {
            return registration.email === this.user.email;
          }
        );
        this.registrations = filteredRegistrations;

        // Store the user data in localStorage
        localStorage.setItem("user", JSON.stringify(userData));
      }
    });
    this.selectedParkingId = this.$route.params.id;
    fetch(
      `https://softwareapp-62061-default-rtdb.firebaseio.com/parking/${this.selectedParkingId}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        this.selectedParking = data;
      })
      .catch((error) => {
        console.error("Error fetching parking data:", error);
      });

    firebase
      .database()
      .ref("registrations")
      .on("value", (snapshot) => {
        this.registrations = Object.values(snapshot.val());
      });
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      try {
        const user = firebase.auth().currentUser;
        const snapshot = await firebase
          .database()
          .ref("users/" + user.uid)
          .once("value");
        const userData = snapshot.val();
        this.user = userData;
      } catch (error) {
        console.log(error.message);
      }
    },
    showPrice(type) {
      this.price = this.selectedParking[type];
      this.showingPrice = true;
      if (type === "hourly") {
        const now = new Date();
        this.startTime = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        const end = new Date(now.getTime() + 60 * 60 * 1000);
        this.endTime = end.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      } else if (type === "monthly") {
        this.formType = "duration";
      } else {
        this.formType = null;
      }
    },
    submitForm() {
      // Get the current date
      const currentDate = new Date().toISOString().slice(0, 10);

      const booking = {
 
                    name_parking: this.selectedParking.name,
                    address_parking: this.selectedParking.address,
                    county_parking: this.selectedParking.county,
                    province_parking: this.selectedParking.province,
                    currentDate: currentDate,

                    name: this.name,
                    lastName: this.lastName,
                    tel: this.tel,
                    price: this.price,
                    startTime: this.startTime,
                    endTime: this.endTime,
                    date: this.date,
                    duration: this.duration,
                    user: this.user.email,
                    regNumber: this.registrations[0].regNumber,
                    province: this.registrations[0].province,
                    brand: this.registrations[0].brand,
                    model: this.registrations[0].model,
                    color: this.registrations[0].color,
                   status: this.status,
             

      };

      // Save the booking to Firebase
      firebase
        .database()
        .ref("bookings")
        .push(booking)
        .then(() => {
          console.log("Selected parking ID:", booking);
          this.$router.push({
            name: "pay",
            params: { bookingParam: booking, id: booking.key },
          });
          // Success!
          console.log("Booking saved to Firebase.");
        })
        .catch((error) => {
          console.error("Error saving booking to Firebase:", error);
        });
    },
  },
    computed: {
        selectedRegNumber() {
            return this.selectedItem ? this.selectedItem.regNumber : null;
        },
    endTime() {
      if (this.startTime) {
        const start = new Date(`1970-01-01T${this.startTime}`);
        const end = new Date(start.getTime() + 60 * 60 * 1000);
        return end.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      }
      return "";
    },
  },
  beforeDestroy() {
    // Remove the user data from localStorage when the component is destroyed
    localStorage.removeItem("user");
  },
};
</script>
