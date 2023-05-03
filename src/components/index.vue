<template>
  <!-- <div>
    <h2>Select a parking:</h2>
    <ul>
      <li v-for="parking in parkings" :key="parking.id" @click="showSelectedParking(parking.id)">
        {{ parking.name }}
      </li>
    </ul>
  </div> -->

  <!--begin::Main-->
  <!--begin::Root-->
  <div class="d-flex flex-column flex-root">
    <!--begin::Page-->
    <div class="page d-flex flex-row flex-column-fluid">
      <!--begin::Wrapper-->
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <!--begin::Header-->
        <div
          id="kt_header"
          class="header"
          data-kt-sticky="true"
          data-kt-sticky-name="header"
          data-kt-sticky-offset="{default: '200px', lg: '300px'}"
        >
          <!--begin::Container-->
          <div
            class="container d-flex align-items-stretch justify-content-between"
          >
            <!--begin::Left-->
            <div class="d-flex align-items-center">
              <!--begin::Mega Menu Toggler-->
              <button
                class="btn btn-icon btn-accent me-2 me-lg-6"
                id="kt_mega_menu_toggle"
                data-bs-toggle="modal"
                data-bs-target="#kt_mega_menu_modal"
              >
                <!--begin::Svg Icon | path: icons/duotone/Text/Article.svg-->
                <span class="svg-icon svg-icon-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <rect x="0" y="0" width="24" height="24" />
                      <rect
                        fill="#000000"
                        x="4"
                        y="5"
                        width="16"
                        height="3"
                        rx="1.5"
                      />
                      <path
                        d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L12.5,10 C13.3284271,10 14,10.6715729 14,11.5 C14,12.3284271 13.3284271,13 12.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                    </g>
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </button>
              <!--end::Mega Menu Toggler-->
              <!--begin::Logo-->
              <div class="d-flex align-items-center">
                <!--begin::Title-->

                <h3 class="text-center">ค้นาสถานที่</h3>
                <!--end::Title-->
              </div>
              <!--end::Logo-->
            </div>
            <!--end::Left-->
            <!--begin::Right-->
            <div class="d-flex align-items-center">
              <!--end::Sidebar Toggler-->
            </div>
            <!--end::Right-->
          </div>
          <!--end::Container-->
        </div>
        <!--end::Header-->
        <!--begin::Main-->
        <div class="d-flex flex-column flex-column-fluid">
          <form></form>
          <!--begin::Content-->
          <div class="content fs-6 d-flex flex-column-fluid" id="kt_content">
            <!--begin::Container-->
            <div class="container">
              <!--begin::Row-->
              <div class="row g-0 g-xl-5 g-xxl-8">
                <div class="col-xl-4">
                  <!--begin::Stats Widget 1-->
                  <div class="card card-stretch mb-5 mb-xxl-20">
                    <div class="card-body mw-800px py-6">
                      <!-- <div class="d-flex align-items-center flex-nowrap text-nowrap overflow-auto py-1">
	           <a class="btn btn-active-accent fw-bold" :class="{ 'active': monthlyButton.selected }" @click="toggleSelectedButton(monthlyButton)">
	    รายเดือน
	</a>
	<a class="btn btn-active-accent fw-bold ms-3" :class="{ 'active': dailyHourlyButton.selected }" @click="toggleSelectedButton(dailyHourlyButton)">
	    รายชม/รายเดือน
	</a>
	                       
	                   
	                
	                    </div>                        -->

                      <div
                        class="d-flex align-items-center flex-nowrap text-nowrap overflow-auto py-1"
                      >
                        <button
                          class="btn btn-active-accent fw-bold"
                          :class="{ 'is-active': dailyHourlyButton.selected }"
                          @click="
                            dailyHourlyButton.selected = true;
                            monthlyButton.selected = false;
                          "
                        >
                          ราย ชม./รายวัน
                        </button>
                        <button
                          class="btn btn-active-accent fw-bold"
                          :class="{ 'is-active': monthlyButton.selected }"
                          @click="
                            monthlyButton.selected = true;
                            dailyHourlyButton.selected = false;
                          "
                        >
                          รายเดือน
                        </button>
                      </div>

                      <div
                        class="col-md-4 col-lg-12 col-xxl-4"
                        v-for="parking in filteredParkings()"
                        :key="parking.id"
                      >
                        <div class="card h-100">
                          <div
                            class="card-body d-flex flex-row rounded bg-light justify-content-between"
                          >
                            <div class="text-center rounded mb-7">
                              <img
                                v-if="parking.imageURL"
                                :src="parking.imageURL"
                                class="mw-100 w-200px"
                                alt="Parking image"
                              />
                            </div>
                            <div class="text-start ms-5">
                              <h4 class="fs-4">
                                <a
                                  href="/start-html-pro/?page=apps/shop/product"
                                  class="text-gray-800 text-hover-primary fw-bold"
                                  >{{ parking.name }}</a
                                >
                              </h4>
                              <p>ที่อยู่: {{ parking.address }}</p>
                              <p>รายละเอียด: {{ parking.description }}</p>
                              <div class="fs-6 text-muted fw-bold">
                                <p
                                  v-if="monthlyButton.selected"
                                  style="font-size: 12px; color: blue"
                                >
                                  ราคา {{ parking.monthly }} บาท
                                </p>
                                <p v-else style="font-size: 12px; color: blue">
                                  {{ parking.daily }} (วัน) /
                                  {{ parking.hourly }} (ชม.)
                                </p>

                                <!-- <p v-if="parking.hourly">รายชั่วโมง: {{ parking.hourly }} บาท</p>
	                        <p v-if="parking.daily">รายวัน: {{ parking.daily }} บาท</p>
	                        <p v-if="parking.monthly">รายเดือน: {{ parking.monthly }} บาท</p> -->
                              </div>
                              <button
                                class="btn btn-primary fw-bold mx-auto px-5 mt-6"
                              @click=" showSelectedParking(parking.id, { hourly: parking.hourly, daily: parking.daily, monthly: parking.monthly }, monthlyButton.selected) "

                              >
                                ดูรายละเอียด
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- <div  v-for="parking in filteredParkings()" :key=" parking.id ">
	      <h2>{{ parking.name }}</h2>
	      <p>{{ parking.address }}</p>
	      <p>{{ parking.description }}</p>
	      <p>Image: {{ parking.imageURL }}</p>
	      <p>Status: {{ getParkingStatus(parking) }}</p>
	      <p v-if=" monthlyButton.selected ">Monthly Rate: {{ parking.monthly }}</p>
	      <p v-else>Daily Rate: {{ parking.daily }}, Hourly Rate: {{ parking.hourly }}</p>
	      <p>Available Count: {{ parking.count }}</p>
	      <button @click=" showSelectedParking(parking.id) ">View Details</button>
	    </div>
	  </div> -->

                      <!--end::Form row-->
                    </div>
                    <!--end::Header-->
                    <!--begin::Body-->

                    <!--end: Card Body-->
                  </div>
                  <!--end::Stats Widget 1-->
                </div>

                <!--end::Stats Widget 2-->
              </div>
              <!--end::Row-->
              <!--begin::Row-->

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
  <div
    class="modal bg-white fade"
    id="kt_mega_menu_modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content shadow-none">
        <div class="container">
          <div class="modal-header d-flex flex-stack border-0">
            <div class="d-flex align-items-center">
              <!--end::Logo-->
            </div>
            <!--begin::Close-->
            <div
              class="btn btn-icon btn-sm btn-light-primary ms-2"
              data-bs-dismiss="modal"
            >
              <!--begin::Svg Icon | path: icons/duotone/Navigation/Close.svg-->
              <span class="svg-icon svg-icon-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
                    fill="#000000"
                  >
                    <rect
                      fill="#000000"
                      x="0"
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                    />
                    <rect
                      fill="#000000"
                      opacity="0.5"
                      transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)"
                      x="0"
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                    />
                  </g>
                </svg>
              </span>
              <!--end::Svg Icon-->
            </div>
            <!--end::Close-->
          </div>
          <div class="modal-body">
            <!--begin::Row-->
            <div class="row py-10 g-5">
              <!--begin::Column-->
              <div class="col-lg-6 pe-lg-25">
                <!--begin::Row-->
                <div class="row">
                  <div class="col-sm-4">
                    <h3 class="fw-bolder mb-5">
                      <div>
                        <div v-if="user">
                          <h1>{{ user.firstName }} {{ user.lastName }}</h1>
                        </div>
                        <p v-else>Loading...</p>
                      </div>
                    </h3>
                    <ul
                      class="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10"
                    >
                      <li class="menu-item">
                        <a class="menu-link ps-0 py-2"  @click="navigateTo('/user')" 
                          >ค้นหาที่จอดรถ</a
                        >
                      </li>
                      <li class="menu-item">
                        <a
                          class="menu-link ps-0 py-2"
                          @click="navigateTo('/reservation_list')"
                          data-kt-page="pro"
                          >รายการจอง</a
                        >
                      </li>
                      <!-- <li class="menu-item">
                        <a
                          class="menu-link ps-0 py-2"
                          href="dashboards/light.html"
                          >ข้อมูลส่วนตัว</a
                        >
                      </li> -->
                      <li class="menu-item">
                        <a
                          class="menu-link ps-0 py-2"
                           @click=" navigateTo('/registration_car') "
                          data-kt-page="pro"
                          >ทะเบียนรถ
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          class="menu-link ps-0 py-2"
                         @click=" navigateTo('/') "
                          data-kt-page="pro"
                          >ออกจากระบบ</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <!--end::Row-->
                <!--begin::Row-->

                <!--end::Row-->
              </div>
              <!--end::Column-->
              <!--begin::Column-->
            </div>
            <!--end::Row-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase/firebase";
import "firebase/storage";
import { ref, onMounted } from "vue";

export default {
  name: "User",
  data() {
    return {
      parkings: [],
      user: null,
      monthlyButton: { selected: false },
      dailyHourlyButton: { selected: true },
    };
  },
  created() {
    const userData = localStorage.getItem("user");
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      // Get the user's data from Firebase
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          const snapshot = await firebase
            .database()
            .ref("users/" + user.uid)
            .once("value");
          const userData = snapshot.val();
          this.user = userData;
          // Store the user data in localStorage
          localStorage.setItem("user", JSON.stringify(userData));
        }
      });
    }
    fetch("https://softwareapp-62061-default-rtdb.firebaseio.com/parking.json")
      .then((response) => response.json())
      .then((data) => {
        const parkings = Object.entries(data).map(([key, value]) => {
          return {
            id: key,
            name: value.name,
            address: value.address,
            description: value.description,
            imageURL: value.imageURL,
            hourly: value.hourly,
            daily: value.daily,
            monthly: value.monthly,
            count: value.count,
          };
        });
        this.parkings = parkings;
      })
      .catch((error) => {
        // handle error
      });
  },
  mounted() {
	  this.getUserData();
	 const pricingInfo = this.$route.query.pricing;
		console.log("Pricing information:", pricingInfo);
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

	  navigateTo(path) {
			this.$router.push(path);
			setTimeout(() => {
				this.$router.go(0);
			}, 50);
		},

    filteredParkings() {
      if (this.monthlyButton.selected) {
        return this.parkings.filter((parking) => parking.monthly > 0);
      } else {
        if (this.dailyHourlyButton.selected) {
          return this.parkings.filter((parking) => parking.daily > 0);
        } else {
          return this.parkings.filter((parking) => parking.hourly > 0);
        }
      }
	  },
showSelectedParking(parkingId, price, isMonthlyView) {
  // Navigate to another page with the selected parking ID and price
  if (isMonthlyView) {
    if (price.monthly) {
      console.log(`Navigating to SelectedParking page with monthly price: ${price.monthly}`);
      this.$router.push({ name: 'SelectedParking', params: { id: parkingId, price: price.monthly } });
    } else {
      console.log(`Monthly price not available`);
    }
  } else {
    console.log(`Navigating to SelectedParking page with daily price: ${price.daily}${price.hourly}`);
    this.$router.push({
      name: 'SelectedParking',
      params: {
        id: parkingId,
        daily: price.daily,
        hourly: price.hourly,
      }
    });
  }
},


	//   showSelectedParking(parkingId, parkingName) {
	// 		console.log("Selected parking ID:", parkingId);
	// 		console.log("Selected parking name:", parkingName);
	// 		// navigate to parking detail page
	// 		this.$router.push({ name: 'SelectedParking', params: { id: parkingId, name: parkingName } });
		


    // //   console.log("Selected parking ID:", parkingId);
    // //   this.$router.push(`/parking/${parkingId}`);
    // },
    getParkingStatus(parking) {
      if (parking.count > 0) {
        return "Available";
      } else {
        return "Full";
      }
    },

    beforeDestroy() {
      // Remove the user data from localStorage when the component is destroyed
      localStorage.removeItem("user");
    },
  },
};
</script>
