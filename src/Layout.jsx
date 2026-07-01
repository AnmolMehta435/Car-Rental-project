import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";

function Layout() {
    return(
        <>
        <ScrollToTop />
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout