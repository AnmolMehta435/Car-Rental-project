import React from "react";
import ReactDom from 'react-dom/client'
import { createBrowserRouter,  createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Create from "./components/Create/Create.jsx";
// import All_cars from"./components/Footer/all_cars.jsx"
import Cars from "./components/Footer/Cars.jsx";
import Premium from "./components/Footer/Premium.jsx";
import Electric from"./components/Footer/Electric .jsx";
import Mohali from "./components/Home/Mohali.jsx";
import Chandigarh from "./components/Home/Chandigarh.jsx";
import Kharar from  "./components/Home/Kharar.jsx";
import Delhi  from "./components/Home/Delhi.jsx";
import Car_details from"./components/CarDetials/Car_details.jsx";
import Car_details1 from"./components/CarDetials/Car_Details1.jsx";
import Car_details2 from"./components/CarDetials/Car_details2.jsx"
import Car_details3 from"./components/CarDetials/Car_details3.jsx"
import Car_details4 from"./components/CarDetials/Car_details4.jsx";
import Car_details5 from"./components/CarDetials/Car_details5.jsx";
import Car_details6 from "./components/CarDetials/Car_details6.jsx"
import Confirm_booking from "./components/CarDetials/Confirm_booking.jsx";
import ProtectedRoute from "./components/ProtectedRouter.jsx";
const router =createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  {/* <Route path="all_cars" element={<all_cars/>}/> */}
  <Route path="Cars" element={<Cars/>}/>
  <Route path="Premium" element={<Premium/>}/>
  <Route path="Electric" element={<Electric/>}/>
  <Route path="Mohali" element={<Mohali/>}/>
  <Route path="Chandigarh" element={<Chandigarh/>}/>
  <Route path="Kharar" element={<Kharar/>}/>
  <Route path="Delhi" element={<Delhi/>}/>
  <Route path="Login" element={<Login/>}/>
  <Route path="Create" element={<Create/>}/>
  <Route path="Car_details/:id" element={<Car_details/>}/>
  <Route path="Car_details1/:id" element={<Car_details1/>}/>
  <Route path="Car_details2/:id" element={<Car_details2/>}/>
  <Route path="Car_details3/:id" element={<Car_details3/>}/>
  <Route path="Car_details4/:id" element={<Car_details4/>}/>
  <Route path="Car_details5/:id" element={<Car_details5/>}/>
  <Route path="Car_details6/:id" element={<Car_details6/>}/>
  <Route path="Confirm_booking" element={<ProtectedRoute><Confirm_booking/></ProtectedRoute>}/>
</Route>
  )
 )

 ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
 )