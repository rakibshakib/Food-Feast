import React from 'react'
import Footer from '../../components/Footer/Footer'
import HomePageProducts from '../../components/HomePageProducts/HomePageProducts'
import Banner from '../../components/Navbar/Banner'
import Header from '../../components/Navbar/Header'
import './Home.css'
const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Header />
            <Banner />
            <HomePageProducts />
            <Footer />
        </div>
    )
}

export default Home
