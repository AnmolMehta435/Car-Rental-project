import React from "react";
import ReactDom from 'react-dom/client'
import { createBrowserRouter,  createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Create from "./components/Create/Create.jsx";
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
import Confirm_booking from "./components/CarDetials/Confirm_booking.jsx";
import ProtectedRoute from "./components/ProtectedRouter.jsx";
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="Cars" element={<ProtectedRoute><Cars/></ProtectedRoute>}/>
<Route path="Premium" element={<ProtectedRoute><Premium/></ProtectedRoute>}/>
    <Route  path="Electric" element={<ProtectedRoute><Electric/></ProtectedRoute>}/>
    <Route path="Mohali" element={ <ProtectedRoute><Mohali/></ProtectedRoute>}/>
    <Route  path="Chandigarh" element={<ProtectedRoute><Chandigarh/></ProtectedRoute>}/>
    <Route  path="Kharar" element={<ProtectedRoute><Kharar/></ProtectedRoute>}/>
    <Route path="Delhi" element={<ProtectedRoute><Delhi/></ProtectedRoute>}/>
    <Route path="Login"  element={<Login/>}/>
    <Route path="Create" element={<Create/>}/>
  <Route  path="/Car_details/:id" element={<Car_details/>}/>
  <Route path="/Car_details1/:id" element={<Car_details1/>}/>   
  <Route path="/Car_details2/:id" element={<Car_details2/>}/>   
  <Route path="/Car_details3/:id" element={<Car_details3/>}/>   
  <Route path="/Car_details4/:id"  element={<Car_details4/>}/>
  <Route path="/Car_details5/:id"  element={<Car_details5/>}/>
  <Route path="/Confirm_booking" element={<Confirm_booking/>}/>
   </Route>
  )
 )

 ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
 )