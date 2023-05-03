<template>
    	
    <!-- <div>
        <template v-if="selectedParking">
            <h2>{{ selectedParking.name }}</h2>
            <p>District: {{ selectedParking.district }}</p>
            <p>Address: {{ selectedParking.address }}</p>
          
        </template>
        <template v-else>
            <p>Loading...</p>
        </template>
    </div> -->

          		<div class="d-flex flex-column flex-root">
          			<!--begin::Page-->
          			<div class="page d-flex flex-row flex-column-fluid">
          				<!--begin::Wrapper-->
          				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
          					<!--begin::Header-->
          					<div id="kt_header" class="header" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
          						<!--begin::Container-->
          						<div class="container d-flex align-items-stretch justify-content-between">
          							<!--begin::Left-->
          							<div class="d-flex align-items-center">
          								<!--begin::Mega Menu Toggler-->
          								<button class="btn btn-icon btn-accent me-2 me-lg-6" id="kt_mega_menu_toggle" data-bs-toggle="modal" data-bs-target="#kt_mega_menu_modal">
          									<!--begin::Svg Icon | path: icons/duotone/Text/Article.svg-->
          									<span class="svg-icon svg-icon-1">
          										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          											<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          												<rect x="0" y="0" width="24" height="24" />
          												<rect fill="#000000" x="4" y="5" width="16" height="3" rx="1.5" />
          												<path d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L12.5,10 C13.3284271,10 14,10.6715729 14,11.5 C14,12.3284271 13.3284271,13 12.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z" fill="#000000" opacity="0.3" />
          											</g>
          										</svg>
          									</span>
          									<!--end::Svg Icon-->
          								</button>
          								<!--end::Mega Menu Toggler-->
          								<!--begin::Logo-->
          						<div class="d-flex align-items-center">
          								<!--begin::Title-->
          								<h3 class="text-dark fw-bolder my-1 fs-2">เพิ่มที่จอดรถ</h3>
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
                              
         <div class="col-md-4 col-lg-12 col-xxl-4 " v-if="selectedParking">
                    <div class="card h-100">
                        <div class="">
                            <div class="text-center rounded mb-7">
                               <img v-if="selectedParking.imageURL" :src="selectedParking.imageURL" class="mw-100 w-400px" alt="Parking image">
                            </div>
                            <div class="text-center">
                                <h1 class="fs-4" style="text-align: left;">{{ selectedParking.name }}</h1>
                                
                                 <div class="fs-6 text-muted fw-bold" style="text-align: left;">{{ selectedParking.address }} {{ selectedParking.County }} {{ selectedParking.district }} {{ selectedParking.province }}</div>
                                
								 <br>
								<div style="clear: both; border-top: 1px solid black;"></div>
								<br>
								
								
								 <h6 style="text-align: left;">รายละเอียด</h6>
                                 <div class="fs-6 text-muted fw-bold" style="text-align: left; margin-left: 8px;">{{ selectedParking.district }}</div>
   <br>
                                  <h6 style="text-align: left;">จุดสังเกต</h6>
                                   <div class="fs-6 text-muted fw-bold" style="text-align: left; margin-left: 8px;">{{ selectedParking.landmark }}</div>
                                   <br>
                                    <!-- <h6  style="text-align: left;">จุดสังเกต</h6>
                                       <div class="fs-6 text-muted fw-bold">{{ selectedParking.landmark }}</div> -->
                                         <h6 style="text-align: left;">สิ่งอำนวยความสะดวก  </h6>

										 <br>
                                           <div class="fs-6 text-muted fw-bold" style="text-align: left; margin-left: 8px;">{{ selectedParking.featured }}</div>
                                            <div class="fs-6 text-muted fw-bold" style="text-align: left; margin-left: 8px;">{{ selectedParking.door }}</div>
                                             <div class="fs-6 text-muted fw-bold" style="text-align: left; margin-left: 8px;">{{ selectedParking.roof }}</div>
                                              <div class="fs-6 text-muted fw-bold" style="text-align: left; margin-left: 8px;">{{ selectedParking.security }}</div>
                                               <div class="fs-6 text-muted fw-bold" style="text-align: left; margin-left: 8px;">{{ selectedParking.overnight }}</div>
                                                <div class="fs-6 text-muted fw-bold" style="text-align: left; margin-left: 8px;">{{ selectedParking.cctv }}</div>
                                                  <div class="fs-6 text-muted fw-bold" style="text-align: left; margin-left: 8px;">{{ selectedParking.toilet }}</div>
                                                    <div class="fs-6 text-muted fw-bold" style="text-align: left; margin-left: 8px;">{{ selectedParking.ev }}</div>
	<!-- <div class="d-flex justify-content-between align-items-center mb-7 text-start">
	  <br>
	  <h6 class="fw-bold text-dark fs-2 mb-0">ราคา:  บาท</h6>
	  <button @click="reserveParking" v-bind:disabled="parkingStatus === 'Full'" id="kt_sidebar_shop_new_form_btn" class="btn btn-light-primary btn-sm fw-bold">จอง</button>
	</div> -->
<br>
	<div class="d-flex justify-content-between align-items-center mb-7">
	<h6  v-if="monthlyPrice">ราคา {{ monthlyPrice }} บาท</h6>
	<h6 v-else-if="dailyPrice && hourlyPrice">ราคา: {{ dailyPrice }} -  {{ hourlyPrice }} บาท</h6>


	
	<p v-else>No price information available</p>


	                <!-- <h6 class="fw-bold text-dark fs-2 mb-0" style="font-size: 10px;">ราคา: {{ price.hourly }}-{{ price.daily }} บาท</h6> -->
	                <a @click="reserveParking" v-bind:disabled="parkingStatus === 'Full'" class="btn btn-light-primary btn-sm fw-bold" style="font-size: 15px;">จอง</a>
	            </div>
                                                   
                            </div>
                        </div>
                    </div>
                </div>
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
          		<div class="modal bg-white fade" id="kt_mega_menu_modal" tabindex="-1" aria-hidden="true">
          			<div class="modal-dialog modal-fullscreen">
          				<div class="modal-content shadow-none">
          					<div class="container">
          						<div class="modal-header d-flex flex-stack border-0">
          							<div class="d-flex align-items-center">
          							
          								<!--end::Logo-->
          							</div>
          							<!--begin::Close-->
          							<div class="btn btn-icon btn-sm btn-light-primary ms-2" data-bs-dismiss="modal">
          								<!--begin::Svg Icon | path: icons/duotone/Navigation/Close.svg-->
          								<span class="svg-icon svg-icon-1">
          									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          										<g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
          											<rect fill="#000000" x="0" y="7" width="16" height="2" rx="1" />
          											<rect fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1" />
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
	                        <a class="menu-link ps-0 py-2" href="index.html"
	                          >ค้นหาที่จอดรถ</a
	                        >
	                      </li>
	                      <li class="menu-item">
	                        <a
	                          class="menu-link ps-0 py-2"
	                          href="#"
	                          data-kt-page="pro"
	                          >รายการจอง</a
	                        >
	                      </li>
	                      <li class="menu-item">
	                        <a
	                          class="menu-link ps-0 py-2"
	                          href="dashboards/light.html"
	                          >ข้อมูลส่วนตัว</a
	                        >
	                      </li>
	                      <li class="menu-item">
	                        <a
	                          class="menu-link ps-0 py-2"
	                          href="#"
	                          data-kt-page="pro"
	                          >ทะเบียนรถ
	                        </a>
	                      </li>
	                      <li class="menu-item">
	                        <a
	                          class="menu-link ps-0 py-2"
	                          href="#"
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
import firebase from '../firebase/firebase'
import 'firebase/storage'

export default {
    name: 'SelectedParking',
    data() {
        return {
            selectedParking: null,
            reservations: null,
			user: null,
			     id: null,
			price: {
				 monthly: null,
				daily: null,
				hourly: null
			},
			 monthlyPrice: '',
			dailyPrice: '',
			hourlyPrice: '',
			isMonthlyView: false,

		
        }
    },
	created() {
	
     const userData = localStorage.getItem('user')
        if (userData) {
            this.user = JSON.parse(userData)
        } else {
            // Get the user's data from Firebase
            firebase.auth().onAuthStateChanged(async user => {
                if (user) {
                    const snapshot = await firebase.database().ref('users/' + user.uid).once('value')
                    const userData = snapshot.val()
                    this.user = userData
                    // Store the user data in localStorage
                    localStorage.setItem('user', JSON.stringify(userData))
                }
            })
        }
        const selectedParkingId = this.$route.params.id
        fetch(`https://softwareapp-62061-default-rtdb.firebaseio.com/parking/${selectedParkingId}.json`)
            .then(response => response.json())
            .then(data => {
                this.selectedParking = data
            })
            .catch(error => {
                console.error('Error fetching parking data:', error)
            })
    },
	mounted() {
	if (this.$route.params.monthly) {
			this.monthlyPrice = this.$route.params.monthly;
			this.isMonthlyView = true;
		} else {
			this.dailyPrice = this.$route.params.daily;
			this.hourlyPrice = this.$route.params.hourly;
		}
		// this.price.monthly = this.$route.params.monthly;
		// this.price.daily = this.$route.params.daily;
		// this.price.hourly = this.$route.params.hourly;
        this.getUserData()
    },
	computed: {
	

        hourlyPrice() {
            return this.selectedParking ? this.selectedParking.hourly : ''
        },
        dailyPrice() {
            return this.selectedParking ? this.selectedParking.daily : ''
        },
        monthlyPrice() {
            return this.selectedParking ? this.selectedParking.monthly : ''
        },
        parkingStatus() {
            if (!this.selectedParking) return '';

            if (this.selectedParking.reservations && this.selectedParking.reservations.length >= this.selectedParking.capacity) {
                return 'Full';
            } else {
                return 'Available';
            }
        }
    },
    methods: {
         async getUserData() {
            try {
                const user = firebase.auth().currentUser
                const snapshot = await firebase.database().ref('users/' + user.uid).once('value')
                const userData = snapshot.val()
                this.user = userData
            } catch (error) {
                console.log(error.message)
            }
        },

        reserveParking() {
            const selectedParkingId = this.$route.params.id;
            this.$router.push({ name: 'ReservedParking', params: { id: selectedParkingId } });
        }
    },
       beforeDestroy() {
        // Remove the user data from localStorage when the component is destroyed
        localStorage.removeItem('user')
    }
}
</script>
