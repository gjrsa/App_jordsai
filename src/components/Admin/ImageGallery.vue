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
                	    			รูปเอกสาร
                                </h3>
                	    		<!--end::Logo-->
                			        </div>
                        <!--end::Left-->

      
                    </div>
               </div>
  
         	</div>  
              
                                     <div class="row g-5 g-xxl-8" v-for="image in images" :key="image.id">
                        <!--begin::Product-->
                                    <div class="d-flex justify-content-between align-items-center mb-7">
                        <h2 class="fw-bold text-dark fs-2 mb-0"></h2>
                        <button @click="editImage(image.id)" class="btn btn-light-primary btn-sm fw-bold">แก้ไข</button>
                    </div>
                         
                    
                        <div class="col-md-4 col-xxl-4 col-lg-12"  >
                            <!--begin::Card-->
                            <div class="card shadow-none">
                                <div class="card-body p-0">
                                    <!--begin::Image-->
                                    <div class="overlay rounded overflow-hidden">
                                        <div class="overlay-wrapper rounded bg-light   text-center">
                                            <!-- <img :src="image.image1Url" alt="" class="mw-100 w-200px"> -->
                                             <img :src="image.image1Url" class="mw-100 w-200px" />
                              
               
                                        </div>
                                  
                                    </div>
                                    <!--end::Image-->

                              
                                </div>
                            </div>
                            <!--end::Card-->
                        </div>
                        <!--end::Product-->

                        <div class="col-md-4 col-xxl-4 col-lg-12"  >
                                <!--begin::Card-->
                                <div class="card shadow-none">
                                    <div class="card-body p-0">
                                        <!--begin::Image-->
                                        <div class="overlay rounded overflow-hidden">
                                            <div class="overlay-wrapper rounded bg-light   text-center">
                                                <!-- <img :src="image.image1Url" alt="" class="mw-100 w-200px"> -->
                                                 
                                                  <img :src="image.image2Url" class="mw-100 w-200px" />
               
                                            </div>
                                  
                                        </div>
                                        <!--end::Image-->

                              
                                    </div>
                                </div>
                                <!--end::Card-->
                            </div>
                            <!--end::Product-->

                    

                   
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
    <!-- <div>
        <h1>Images</h1>
        <div v-for="image in images" :key="image.id">
            <img :src="image.image1Url" />
            <img :src="image.image2Url" />
            <button @click="editImage(image.id)">Edit</button>
        </div>
    </div> -->
</template>
<script>
import firebase from '../../firebase/firebase'
import 'firebase/database'
import { ref, onMounted } from 'vue'
import  router  from '../../router/router'

// get a reference to the database
const db = firebase.database().ref('images');

export default {
    name: 'Images',
    setup() {
        const images = ref([]);

        const getImages = () => {
            db.on('value', (snapshot) => {
                const data = snapshot.val();
                const fetchedImages = [];
                for (let id in data) {
                    fetchedImages.push({ id, ...data[id] });
                }
                images.value = fetchedImages;
            });
        };

        const editImage = (id) => {
            router.push(`/EditImage/${id}`);
        };

        onMounted(getImages);

        return { images, editImage };
    },
};
</script>
