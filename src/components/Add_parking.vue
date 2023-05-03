<template>

  		<!--begin::Main-->
  		<!--begin::Root-->
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
  										<div class="card card-stretch mb-5 mb-xxl-8">
  								                <div class="card-body mw-800px py-6">
													
                              
     <div>
        <h5>รายละเอียดลานจอดรถ</h5><br>
        <form @submit.prevent="submit">
          <div>
            <label>ชื่อ:</label>
            <input class="form-control form-control-lg form-control-solid" type="text" v-model="form.name" />
          </div>
          <div>
            <label>ประเภทที่จอด:</label>
            <input class="form-control form-control-lg form-control-solid" type="text" v-model="form.type" />
          </div>
         
          <div>
            <label>จุดสังเกต:</label>
            <input class="form-control form-control-lg form-control-solid" type="text" v-model="form.landmark" />
          </div>
          <div>
            <label>คำอธิบาย:</label>
            <textarea class="form-control form-control-lg form-control-solid"  v-model="form.description"></textarea>
          </div>

	
          <div>
            <label>จำนวนที่จอดรถ (คัน)</label>
            <input class="form-control form-control-lg form-control-solid" type="number" v-model="form.count" />
          </div>
          <div>
            <label>ที่อยู่:</label>
            <input class="form-control form-control-lg form-control-solid" type="text" v-model="form.address" />
          </div>
          <div>
            <label>แขวง/ตำบล:</label>
            <input class="form-control form-control-lg form-control-solid" type="text" v-model="form.county" />
          </div>
          <div>
            <label>เขต/อำเภอ:</label>
            <input class="form-control form-control-lg form-control-solid" type="text" v-model="form.district" />
          </div>
          <div>
            <label>จังหวัด:</label>
            <input class="form-control form-control-lg form-control-solid" type="text" v-model="form.province" />
          </div>

		  	   <div>
		            <label>รูปที่จอดรถ:</label>
		            <input class="form-control form-control-lg form-control-solid" type="file" @change="onImageChange" />
		          </div>
				  <br>
		  <h5>รายละเอียดราคา</h5>
       <br>
		     <div>
	            <label>รายชั่วโมง:</label>
	            <input class="form-control form-control-lg form-control-solid" type="text" v-model="form.hourly" /> 
	          </div>
			     <div>
            <label>รายวัน:</label>
            <input class="form-control form-control-lg form-control-solid" type="text" v-model="form.daily" />
          </div>
		     <div>
	            <label>รายเดือน:</label>
	            <input class="form-control form-control-lg form-control-solid" type="text" v-model="form.monthly" />
	          </div>
			  
							<br><h5>สิ่งอำนวยความสะดวก</h5><br>
			  	

		       
	     
	                    <div class="form-check form-check-custom form-check-solid me-5">
		                       <input class="form-check-input" type="checkbox" id="featured" v-model="form.featured" />
			                  <label class="form-check-label fw-semibold" for="featured">เจ้าหน้าที่:</label>
		                </div>
						    <div class="form-check form-check-custom form-check-solid me-5">
			                       <input class="form-check-input" type="checkbox" id="door" v-model="form.door" />
				                   <label class="form-check-label fw-semibold"  for="featured">ประตู:</label>
			                </div>
							    <div class="form-check form-check-custom form-check-solid me-5">
				                       <input class="form-check-input" type="checkbox" id="roof" v-model="form.roof" />
					                  <label class="form-check-label fw-semibold" for="featured">หลังคา:</label>
				                </div>
		
								    <div class="form-check form-check-custom form-check-solid me-5">
			                       <input class="form-check-input" type="checkbox" id="security" v-model="form.security" />
				                    <label class="form-check-label fw-semibold" for="featured">รปภ:</label>
			                </div>
		
							    <div class="form-check form-check-custom form-check-solid me-5">
				                      <input class="form-check-input" type="checkbox" id="overnight " v-model="form.overnight" />
					                  <label class="form-check-label fw-semibold" for="featured">จอดข้ามคืน:</label>
				                </div>
		
		    <div class="form-check form-check-custom form-check-solid me-5">
				                      <input class="form-check-input" type="checkbox" id="cctv" v-model="form.cctv" />
					                   <label class="form-check-label fw-semibold" for="featured">กล้องวงจรปิด:</label>
				                </div>
		
								    <div class="form-check form-check-custom form-check-solid me-5">
				                       <input class="form-check-input" type="checkbox" id="toilet" v-model="form.toilet" />
					                <label class="form-check-label fw-semibold" for="featured">ห้องน้ำ:</label>
				                </div>
		
								    <div class="form-check form-check-custom form-check-solid me-5">
				                      <input class="form-check-input" type="checkbox" id="ev" v-model="form.ev" />
					                   <label class="form-check-label fw-semibold" for="featured">ev ชาร์ท:</label>
				                </div>
		
		
		
		     <!-- <div>
		      <label class="form-check-label fw-semibold" for="featured">หลังคา:</label>
		      <input class="form-check-input" type="checkbox" id="roof" v-model="form.roof" />
		    </div>
			     <div>
	      <label class="form-check-label fw-semibold" for="featured">รปภ:</label>
	      <input class="form-check-input" type="checkbox" id="security" v-model="form.security" />
	    </div> -->
		     <!-- <div>
	      <label class="form-check-label fw-semibold" for="featured">จอดข้ามคืน:</label>
	      <input class="form-check-input" type="checkbox" id="overnight " v-model="form.overnight" />
	    </div>
		     <div>
		      <label class="form-check-label fw-semibold" for="featured">กล้องวงจรปิด:</label>
		      <input class="form-check-input" type="checkbox" id="cctv" v-model="form.cctv" />
		    </div>
			     <div>
		      <label class="form-check-label fw-semibold" for="featured">ห้องน้ำ:</label>
		      <input class="form-check-input" type="checkbox" id="toilet" v-model="form.toilet" />
		    </div>
			     <div>
		      <label class="form-check-label fw-semibold" for="featured">ev ชาร์ท:</label>
		      <input class="form-check-input" type="checkbox" id="ev" v-model="form.ev" />
		    </div> -->
			<br>
          <button class="btn btn-primary fw-bold px-6 py-3 me-3" type="submit">บันทึก</button>
		  
        </form>
      </div>
                                                    
                                                   
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
  		

  		
</template>

<script>
import { ref } from 'vue'
import firebase from '../firebase/firebase'
import 'firebase/firestore'
import 'firebase/compat/storage'
import router from '../router/router'

export default {
	name: 'add_parking',
	  methods: {
		clearForm() {
			this.$refs.form.reset();
		}
	},
    setup() {
        const form = ref({
            name: '',
            type: '',
            image: null,
            landmark: '',
            description: '',
            count: 0,
            address: '',
            county: '',
            district: '',
			province: '',
			hourly: '',
			daily: '',
			monthly: '',
			featured: false,
			door: false,
			roof: false,
			security: false,
			overnight: false,
			cctv: false,
			toilet: false,
			ev: false,

			
        })

        const db = firebase.database()
        const parkingRef = db.ref('parking')

        const submit = async () => {

			    if (!form.value.name || !form.value.type || !form.value.landmark || !form.value.description || !form.value.name || !form.value.type || !form.value.landmark || !form.value.description) {
        // Show an error message
        const notification = document.createElement('div')
        notification.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show')
        notification.innerHTML = `
            <strong>ผิดพลาด!</strong> โปรดกรอกข้อมูลที่จำเป็นให้ครบถ้วน.
        `
        document.body.prepend(notification)
        setTimeout(() => {
            notification.remove();
        }, 5000);

					window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
			}
	
            const data = {
                name: form.value.name,
                type: form.value.type,
                landmark: form.value.landmark,
                description: form.value.description,
                count: form.value.count,
                address: form.value.address,
                county: form.value.county,
                district: form.value.district,
				province: form.value.province,
				hourly:form.value.hourly,
				daily:form.value.daily,
				monthly: form.value.monthly,
			
			}

			  // Only add the "featured" property to the data object if the checkbox is checked
			if (form.value.featured) {
				data.featured = 'เจ้าหน้าที่'
			}
				if (form.value.door) {
				data.door = 'ประตูกั้น'
			}
				if (form.value.roof) {
				data.roof = 'หลังคา'
			}
				if (form.value.security) {
				data.security = 'รปภ'
			}
				if (form.value.overnight) {
				data.overnight = 'จอดข้ามคืน'
			}
				if (form.value.cctv) {
				data.cctv = 'cctv'
			}
				if (form.value.toilet) {
				data.toilet = 'ห้องน้ำ'
			}
				if (form.value.ev) {
				data.ev = 'ชาร์ท EV'
			}


            // Upload the image to Firebase Storage and get its URL
            if (form.value.image) {
                const storageRef = firebase.storage().ref(`images/${form.value.image.name}`)
                const imageSnapshot = await storageRef.put(form.value.image)
                const imageURL = await imageSnapshot.ref.getDownloadURL()
                data.imageURL = imageURL
            }

            try {
                const newParkingRef = parkingRef.push()
				await newParkingRef.set(data)


			const notification = document.createElement('div')
				notification.classList.add('alert', 'alert-success', 'alert-dismissible', 'fade', 'show')
				notification.innerHTML = `
  <strong>สำเร็จ!</strong> คุณได้บันทึกข้อมูลสำเร็จแล้ว.`
				document.body.prepend(notification)
				setTimeout(() => {
					notification.remove();
				}, 5000);

				window.scrollTo({ top: 0, behavior: 'smooth' });
				console.log('Data written to Realtime Database.')
				  router.push(`/Parking_details_admin`);
            } catch (error) {
                console.error('Error writing data to Realtime Database: ', error)
            }
        }

        const onImageChange = (event) => {
            if (event.target.files.length) {
                form.value.image = event.target.files[0]
            } else {
                form.value.image = null
            }
        }

        return {
            form,
            submit,
            onImageChange
        }
    }
}
</script>

<style>

</style>