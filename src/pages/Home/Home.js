import React from 'react'
import Footer from '../../components/Footer/Footer'
import HomePageProducts from '../../components/HomePageProducts/HomePageProducts'
import MidBanner from '../../components/Mid-banner/MidBanner'
import Banner from '../../components/Banner/Banner'
import FAQ from './FAQ'
import Header from '../../components/Navbar/Header'


import './Home.css'
const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <HomePageProducts />
            <FAQ />
            <MidBanner />
            <Footer />
        </div>
    )
}

export default Home
