import React from 'react'
import Footer from '../../components/Footer/Footer'
import HomePageProducts from '../../components/HomePageProducts/HomePageProducts'
import Banner from '../../components/Navbar/Banner'
import Navbar from '../../components/Navbar/Navbar'
import FAQ from './FAQ'
import './Home.css'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <HomePageProducts />
            <FAQ />
            <Footer />
        </div>
    )
}

export default Home
