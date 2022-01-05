import React from "react";
import Footer from "../../components/Footer/Footer";
import HomePageProducts from "../../components/HomePageProducts/HomePageProducts";
import MidBanner from "../../components/Mid-banner/MidBanner";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Navbar/Header";
import FAQ from './FAQ'
import './Home.css'
import Contactus from '../Contactus/Contactus'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <HomePageProducts />
            <FAQ />
            <MidBanner />
            <Contactus></Contactus>
            <Footer />
        </div>
    )
}
export default Home;
