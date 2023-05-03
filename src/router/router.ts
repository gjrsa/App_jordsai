import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import add_parking from '../components/Add_parking.vue'
import Home from '../components/HelloWorld.vue'
import Admin from '../components/Admin/index.vue'
import User from '../components/index.vue'
import Login from '../components/Login.vue'
import Singup from '../components/Signup.vue'
import SelectedParking from '../components/selectedParking.vue'
import ReservedParking from '../components/ReservedParking.vue'
import registration_car from '../components/registration_car.vue'
import Logout from '../components/logout.vue'
import PayPage from '../components/pay.vue'
import Reserver from '../components/Reserver.vue'
import reservation_list from '../components/reservation_list.vue'
import profile from '../components/profile.vue'

// admin

import parking_details from '../components/Admin/parking_details.vue'
import List from '../components/Admin/List.vue'
import booking from '../components/Admin/booking.vue'
import document from '../components/Admin/document.vue'
import ImageGallery from '../components/Admin//ImageGallery.vue'
import Images1 from '../components/Admin//ImageGallery1.vue'
import EditImage from '../components/Admin//document_edit.vue'
import Booking_details from '../components/Admin/Booking_details.vue'
import Parking_details_admin from '../components/Admin/Parking_details_admin.vue'


const routes: RouteRecordRaw[] = [
    {
    path: '/',
    component: Login
    },
    {
  path: '/logout',
  name: 'logout',
  component: Logout
},
        {
    path: '/Singup',
    component: Singup
    },


{
  path: '/Home',
  name: 'Home',
  component: Home
    },
    {
  path: '/profile',
  name: 'profile',
  component: profile
    },
    {
        path: '/Add_parking',
        name: 'Add_parking',
        component: add_parking
    },
      {
    path: '/admin',
        component: Admin,
     meta: { requiresAuth: true }
  },
  {
    path: '/user',
    component: User
  },
  {
  path: '/parking/:id',
  name: 'SelectedParking',
  component: SelectedParking,
  props: (route) => ({
    id: route.params.id,
    parkingName: route.query.name,
    address: route.query.address,
    hourlyPrice: route.query.hourlyPrice,
    dailyPrice: route.query.dailyPrice,
    monthlyPrice: route.query.monthly ? route.query.monthly : null
  })
},

  // {
  //   path: '/parking/:id/:daily/:hourly',
  //   name: 'SelectedParking',
  //   component: SelectedParking,
  // //    props: (route) => ({ 
  // //   id: route.params.id,
  // //   parkingName: route.query.name,
  // //   address: route.query.address,
  // //   hourlyPrice: route.query.hourlyPrice,
  // //   dailyPrice: route.query.dailyPrice,
  // //   monthlyPrice: route.query.monthlyPrice
  // // })
  //   // props: true
  // },
  {
  path: '/reserved-parking/:id',
  name: 'ReservedParking',
  component: ReservedParking
},
{
  path: '/registration_car',
  name: 'registration_car',
  component: registration_car
},
{
    path: '/pay',
    name: 'pay',
    component: PayPage,
    props: true
  },
  {
    path: '/reserver',
    name: 'Reserver',
    component: Reserver
  },
  {
        path: '/reservation_list',
    name: 'reservation_list',
    component: reservation_list  
     },

  // admin
  {
    path: '/parking_details',
    name: 'parking_details',
    component: parking_details
  },
  {
  path: "/list/:id",
    name: "List",
    component: List,
    props: true,
  },
  {
    path: "/booking",
    name: "booking",
    component: booking,

  },
    {
    path: "/document",
    name: "document",
    component: document,

  },
     {
    path: '/gallery1',
    name: 'Images1',
    component: Images1
  },
       {
    path: '/gallery',
    name: 'ImageGallery',
    component: ImageGallery
  },
       
     {
    path: '/EditImage/:id',
    name: 'EditImage',
    component: EditImage
  },
  {
        path: '/Booking_details',
    name: 'Booking_details',
    component: Booking_details  
     },
       {
        path: '/Parking_details_admin',
    name: 'Parking_details_admin',
    component: Parking_details_admin  
     }




]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router