import React from "react";
import Footer from "../../components/Footer/Footer";
import HomePageProducts from "../../components/HomePageProducts/HomePageProducts";
import MidBanner from "../../components/Mid-banner/MidBanner";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Navbar/Header";

import "./Home.css";
const Home = () => {

    return (
        <div>
            <Header />
            <Banner />
            <HomePageProducts />

            <MidBanner />
            {/* <FAQ /> */}

            <Footer />
        </div>
    )
}
export default Home;
