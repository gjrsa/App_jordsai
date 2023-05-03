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
        	    			อัปโหลดเอกสาร
                        </h3>
        	    		<!--end::Logo-->
        			        </div>
                <!--end::Left-->

      
            </div>
       </div>
  
        	<!--end::Container-->
        </div>     <!--end::Header-->
                            <!--begin::Main-->
       
      
                                


                                     
                                                
                                       <div class="content fs-6 d-flex flex-column-fluid" id="kt_content">
    						<!--begin::Container-->
    <div class=" container-xxl ">
        <!--begin::Profile Account-->
    <div class="card">
        <!--begin::Form-->
        <form class="form d-flex flex-center" @submit.prevent="submitForm">
            <div class="card-body mw-800px py-10">
               <label class="col-lg-3 col-form-label">รูปบัตรประชาชน</label>
            <input class="form-control form-control-lg form-control-solid" type="file" @change="selectImage1" />
           <label class="col-lg-3 col-form-label">เพิ่มหน้าบัญชี</label>
            <input class="form-control form-control-lg form-control-solid" type="file" @change="selectImage2" />
            <div class="row mb-8"></div>
            <button class="btn btn-primary fw-bold px-6 py-3 me-3"  type="submit">Submit</button>

                    <!-- <button class="btn btn-primary fw-bold px-6 py-3 me-3" type="submit">บันทึก</button> -->
       
           
            

              
            </div>
        </form>
        <!--end::Form-->
    </div>
    <!--end::Profile Account-->
    </div>
    <!--end::Container-->                	</div>  
                                          
                                 
                                         
                                    
                    




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
    <!-- <form @submit.prevent="submitForm">
        <input type="file" @change="selectImage1" />
        <input type="file" @change="selectImage2" />
        <button type="submit">Submit</button>
    </form> -->
</template>

<script>
import firebase from '../../firebase/firebase'
import 'firebase/storage'
import { ref } from 'vue'
import router from '../../router/router'

// get a reference to the default storage bucket
const storage = firebase.storage();

// get a reference to the database
const db = firebase.database().ref('images');

export default {
    name: 'document',
    setup() {
        const selectedImage1 = ref(null);
        const selectedImage2 = ref(null);

        const selectImage1 = (e) => {
            selectedImage1.value = e.target.files[0];
        };

        const selectImage2 = (e) => {
            selectedImage2.value = e.target.files[0];
        };

       const submitForm = async () => {
            if (!selectedImage1.value || !selectedImage2.value) {
                return; // return early if no image is selected
            }
            const image1Ref = storage.ref().child(selectedImage1.value.name);
            const image1Snapshot = await image1Ref.put(selectedImage1.value);
            const image1Url = await image1Snapshot.ref.getDownloadURL();

            const image2Ref = storage.ref().child(selectedImage2.value.name);
            const image2Snapshot = await image2Ref.put(selectedImage2.value);
            const image2Url = await image2Snapshot.ref.getDownloadURL();

            // save image URLs to database
            db.push({ image1Url, image2Url });

            // reset form
            selectedImage1.value = null;
           selectedImage2.value = null;

           router.push(`/gallery`)

 
        };


        return { selectImage1, selectImage2, submitForm };
    },
};
</script>
