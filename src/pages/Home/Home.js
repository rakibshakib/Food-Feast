import React from 'react'
import Footer from '../../components/Footer/Footer'
import HomePageProducts from '../../components/HomePageProducts/HomePageProducts'
import MidBanner from '../../components/Mid-banner/MidBanner'
import Banner from '../../components/Banner/Banner'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner />
            <HomePageProducts />
            <MidBanner />
            <Footer />
        </div>
    )
}

export default Home
