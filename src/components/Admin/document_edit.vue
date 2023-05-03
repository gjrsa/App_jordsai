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
            <form class="form d-flex flex-center" @submit.prevent="updateImage">
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
                                          
                                
                        </div>
                        <!--end::Wrapper-->
                        <!--begin::Sidebar-->

                        <!--end::Sidebar-->
                    </div>
                    <!--end::Page-->
                </div>
    <!-- <div>
        <h1>Edit Image</h1>
        <form @submit.prevent="updateImage">
            <label>Image 1:</label>
            <input type="file" @change="selectImage1" />
            <br />
            <label>Image 2:</label>
            <input type="file" @change="selectImage2" />
            <br />
            <button type="submit">Update Image</button>
        </form>
    </div> -->
</template>

<script>
import firebase from '../../firebase/firebase'
import 'firebase/storage'
import 'firebase/database'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    name: 'EditImage',
    setup() {
        const router = useRouter();
        const selectedImage1 = ref(null);
        const selectedImage2 = ref(null);
        const image1Url = ref('');
        const image2Url = ref('');

        // get a reference to the default storage bucket
        const storage = firebase.storage();

        // get a reference to the database
        const db = firebase.database().ref('images');

        const selectImage1 = (e) => {
            selectedImage1.value = e.target.files[0];
        };

        const selectImage2 = (e) => {
            selectedImage2.value = e.target.files[0];
        };

        const updateImage = async () => {
            const id = router.currentRoute.value.params.id;

            // update image 1
            if (selectedImage1.value) {
                const image1Ref = storage.ref().child(selectedImage1.value.name);
                const image1Snapshot = await image1Ref.put(selectedImage1.value);
                image1Url.value = await image1Snapshot.ref.getDownloadURL();
            }

            // update image 2
            if (selectedImage2.value) {
                const image2Ref = storage.ref().child(selectedImage2.value.name);
                const image2Snapshot = await image2Ref.put(selectedImage2.value);
                image2Url.value = await image2Snapshot.ref.getDownloadURL();
            }

            // update database record
            db.child(id).update({ image1Url: image1Url.value, image2Url: image2Url.value });

            // navigate back to show page
            router.push({ name: 'Images1', params: { id: id } });
        };

        return { selectImage1, selectImage2, updateImage };
    },
    async created() {
        const id = this.$route.params.id;
        const db = firebase.database().ref(`images/${id}`);
        const snapshot = await db.once('value');
        const data = snapshot.val();
        this.image1Url = data.image1Url;
        this.image2Url = data.image2Url;
    },
};
</script>
