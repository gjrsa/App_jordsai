<template>
    <br>
    	<!--begin::Logo-->
                        	    		<h3 class="text-center">
                        	    			ลานจอดรถของคุณ
                                        </h3>
 <div class="content fs-6 d-flex flex-column-fluid" id="kt_content">
    						<!--begin::Container-->
    <div class=" container-xxl ">
        <!--begin::Card-->
    <div class="card">
        <div class="card-body">
        

    <!--end::Engage Widget 1-->

            <!--begin::Section-->
            <div class="mb-10">
                <!--begin::Heading-->
                <div class="d-flex justify-content-between align-items-center mb-7">
                    <h2 class="fw-bold text-dark fs-2 mb-0"></h2>
                  <router-link to="/Add_parking" class="btn btn-light-primary btn-sm fw-bold">เพิ่มข้อมูล</router-link>
                </div>
                <!--end::Heading-->

                <!--begin::Products-->
                <div class="row g-5 g-xxl-8">
      <!--begin::Product-->
      <div class="col-md-4 col-xxl-4 col-lg-12" v-for="parkingItem in parkingData" :key="parkingItem.id">
            <!--begin::Card-->
            <div class="card shadow-none">
              <div class="card-body p-0 d-flex">
                <!--begin::Image-->
                <div class="overlay rounded overflow-hidden col-md-6 col-lg-5 pr-4">
                  <div class="overlay-wrapper rounded bg-light text-center">
                    <img v-if="parkingItem.imageURL" :src="parkingItem.imageURL" alt="Parking Image" class="mw-100 w-100px">
                  </div>
                </div>
                <!--end::Image-->

                <!--begin::Details-->
                <div class="col-md-6 col-lg-7 d-flex flex-column justify-content-center pl-md-5 pl-lg-8">
                  <a href="" class="fs-4 fw-bold text-gray-800 text-hover-primary mb-1">  {{ parkingItem.name }}</a>
                  <span class="fs-6"> {{ parkingItem.type }}</span>
                </div>
                <!--end::Details-->
              </div>
            </div>
            <!--end::Card-->
          </div>
          <!--end::Product-->
    </div>

            </div>
            <!--end::Section-->

     

           
        </div>
    </div>
    <!--end::Card-->
    </div>
    <!--end::Container-->                	</div>
</template>

<script>
import firebase from '../../firebase/firebase'
import 'firebase/database'

export default {
    name: 'Parking_details_admin',
    data() {
        return {
            parkingData: []
        }
    },
    created() {
        const parkingRef = firebase.database().ref('parking')
        parkingRef.on('value', (snapshot) => {
            const parkingData = []
            snapshot.forEach((childSnapshot) => {
                const parkingItem = childSnapshot.val()
                parkingItem.id = childSnapshot.key
                parkingData.push(parkingItem)
            })
            this.parkingData = parkingData
        })
    }
}
</script>

<style></style>
