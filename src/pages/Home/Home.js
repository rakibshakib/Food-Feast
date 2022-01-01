import React from 'react'
import Footer from '../../components/Footer/Footer'
import HomePageProducts from '../../components/HomePageProducts/HomePageProducts'
import Banner from '../../components/Navbar/Banner'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <HomePageProducts />
            <Footer />
        </div>
    )
}

export default Home
