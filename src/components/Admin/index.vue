<template>
  
      <!--begin::Main-->
        <!--begin::Root-->
        <div class="d-flex flex-column flex-root">
            <!--begin::Page-->
            <div class="page d-flex flex-row flex-column-fluid">
                <!--begin::Wrapper-->
                <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                    <!--begin::Header-->
                   
                    <!--end::Header-->
                    <!--begin::Main-->
                    <div class="d-flex flex-column flex-column-fluid">
                        <!--begin::Content-->
                        <div class="content fs-6 d-flex flex-column-fluid" id="kt_content">
                            <!--begin::Container-->
                            <div class="container">
                                <!--begin::Row-->

                                <!--end::Row-->
                                <!--begin::Row-->
                                <div class="row g-0 g-xl-5 g-xxl-8">
                                    <div class="col-xl-4">
                                        <!--begin::Stats Widget 1-->
                                        <div class="card card-stretch mb-5 mb-xxl-8">
                                            <!--begin::Header-->
                                            <div class="card-header align-items-center border-0 mt-5">
                                                <h3 class="card-title align-items-start flex-column">
     <h1>{{ calculateRevenue() }} บาท</h1>
     <br>
                                                    <span class="text-muted mt-2 fw-bold fs-6">  {{ getCurrentMonthYear() }}</span>
                                                   
                                                </h3>
                                                <div class="card-toolbar">
                                                    <!--begin::Dropdown-->

                                                    <!--begin::Menu-->

                                                    <!--end::Menu-->
                                                    <!--end::Dropdown-->
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
                                <div class="row g-0 g-xl-5 g-xxl-8">

                                    <div class="col-xxl-8 gy-0 gy-xxl-8">
                                        <!--begin::Stats Widget 7-->
                                        <div class="card card-stretch mb-5 mb-xxl-8">
                                            <!--begin::Body-->
                                            <div class="card-body">

                                                <!--end::Title-->
                                                <!--begin::Section-->
                                                <div class="mb-10">
                                  <div class="row g-5">
                                    <div class="col-sm-4">
                                        <a @click="navigateTo('/booking')" class="card bg-light-success hoverable min-h-125px shadow-none mb-5">
                                            <div class="card-body d-flex flex-column flex-center">
                                                <h3 class="fs-3 mb-2 text-dark fw-bold">การจองที่จอดรถ</h3>
                                                
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-sm-4">
                                        <a @click="navigateTo('/Parking_details_admin')"  class="card bg-light-danger hoverable min-h-125px shadow-none mb-5">
                                            <div class="card-body d-flex flex-column flex-center text-center">
                                                <h3 class="fs-3 mb-2 text-dark fw-bold">ที่จอดรถของคุณ</h3>
                                                <p class="mb-0 text-gray-600">เพิ่มที่จอดรถที่นี่</p>
                                            </div>
                                        </a>
                                    </div>
                                      <a @click="navigateTo('/Booking_details')"  class="card bg-light-danger hoverable min-h-125px shadow-none mb-5">
                                                    <div class="card-body d-flex flex-column flex-center text-center">
                                                        <h3 class="fs-3 mb-2 text-dark fw-bold">ประวัติการจอง</h3>
                                                        <p class="mb-0 text-gray-600"></p>
                                                    </div>
                                                </a>
                                            </div>
                                    <div class="col-sm-4">
                                            <a @click="navigateTo('/document')"  class="card bg-light-info hoverable min-h-125px shadow-none mb-5">
                                                <div class="card-body d-flex flex-column flex-center text-center">
                                                    <h3 class="fs-3 mb-2 text-dark text-hover-primary fw-bold">เอกสาร</h3>
                                           
                                                </div>
                                            </a>
                                        </div>
                                            <div class="col-sm-4">
                                          
                                </div>
                                                </div>


                                            </div>
                                            <!--end: Card Body-->
                                        </div>
                                        <!--end::Stats Widget 7-->
                                    </div>
                                </div>


                                


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
    
</template>

<script>
import firebase from '../../firebase/firebase';
import 'firebase/database';
export default {
    name: 'Admin',
      data() {
        return {
            bookingList: [],
        };
    },
     created() {
        const ref = firebase.database().ref('bookings');
        ref.on('value', (snapshot) => {
            const bookings = [];
            snapshot.forEach((childSnapshot) => {
                const booking = childSnapshot.val();
                booking.id = childSnapshot.key;
                bookings.push(booking);
            });
            this.bookingList = bookings;
        });
    },
    methods: {
        navigateTo(path) {
            this.$router.push(path);
        },
        getCurrentMonthYear() {
            const months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
            const now = new Date();
            const month = months[now.getMonth()];
            const year = now.getFullYear() + 543;
            return `รายได้ประจำเดือน ${month} ${year}`;
        },
        calculateRevenue() {
            let revenue = 0;
            if (Array.isArray(this.bookingList)) {
                for (const booking of this.bookingList) {
                    if (booking.status === 'finished') {
                        revenue += parseInt(booking.price);
                    }
                }
            }
            return revenue;
        }
    }
  

}
</script>

<style>

</style>