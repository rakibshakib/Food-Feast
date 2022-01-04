import React from 'react'
import Footer from '../../components/Footer/Footer'
import HomePageProducts from '../../components/HomePageProducts/HomePageProducts'
import MidBanner from '../../components/Mid-banner/MidBanner'
import Banner from '../../components/Banner/Banner'


import Navbar from '../../components/Navbar/Navbar'

import FAQ from './FAQ'


import Banner from '../../components/Navbar/Banner'

import Header from '../../components/Navbar/Header'


import './Home.css'
const Home = () => {
    return (
        <div>
            <Header />

            <Banner />
            <HomePageProducts />

            <FAQ />
            <Footer />

            <MidBanner />

            <Footer />

            {/* <Footer /> */}

        </div>
    )
}

export default Home
