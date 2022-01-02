import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div id='aboutUs'>
            <Navbar />
            <h2 className='text-center about-heading py-3'>About Us</h2>

            <Container className='about-container'>
                <Row className='py-3' lg={2} md={1} sm={1}>
                    <Col className='text-col' lg={6} md={6} sm={12}>
                        <p>A relaxed burger joint, utilising local ingredients to make delicious burgers, sides, and more. We are lucky to live in a glorious age that gives us everything we could ask for as a human race. What more could you need when you have meat covered in cheese nestled between bread. From smashed patties at Shake Shack to Glamburgers at Honky Tonk, there's a little something for everyone. Some burgers are humble, and some are ostentatious, and you just have to try them all to figure out what you want. Feel free to contact us.</p>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Fade bottom>
                            <img className='worker-img' src="https://i.ibb.co/BqV3n8f/pexels-anna-shvets-5953547.jpg" alt="" /></Fade>
                    </Col>
                </Row>
                <Fade bottom>
                    <div className='about-banner banner1'></div>
                </Fade>
                <Row className='py-3' lg={2} md={1} sm={1}>
                    <Col lg={6} md={6} sm={12}>
                        <Fade bottom>
                            <img className='worker-img' src="https://i.ibb.co/nccD4cH/pexels-anna-shvets-5953543.jpg" alt="" /></Fade>
                    </Col>
                    <Col className='text-col' lg={6} md={6} sm={12}>
                        <p>Whether you're a ketchup and mustard loyalist or you prefer house sauce to no sauce, you can agree that every cheeseburger has it's own special flair. Top tip: house sauce begs to be ordered on the side for fry-dipping purposes.The cheese melts on the burger and in your mouth, perfectly complementing the medium-rare beef. Any burger lover worth their salt knows the best patty is comprised of ground chuck and brisket.</p>
                    </Col>

                </Row>
                <Row className='py-3' lg={2} md={1} sm={1}>
                    <Col className='text-col' lg={6} md={6} sm={12}>
                        <p>A relaxed burger joint, utilising local ingredients to make delicious burgers, sides, and more. We are lucky to live in a glorious age that gives us everything we could ask for as a human race. What more could you need when you have meat covered in cheese nestled between bread. From smashed patties at Shake Shack to Glamburgers at Honky Tonk, there's a little something for everyone. Some burgers are humble, and some are ostentatious, and you just have to try them all to figure out what you want. Feel free to contact us.</p>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Fade bottom>
                            <img className='worker-img' src="https://i.ibb.co/25czY9N/pexels-anna-shvets-5953571.jpg" alt="" /></Fade>
                    </Col>
                </Row>
                <Fade bottom>
                    <div className='about-banner banner2'></div></Fade>
                <Row className='py-3' lg={2} md={1} sm={1}>
                    <Col lg={6} md={6} sm={12}>
                        <Fade bottom>
                            <img className='worker-img' src="https://i.ibb.co/nwHQf96/pexels-anna-shvets-5953550.jpg" alt="" /></Fade>
                    </Col>
                    <Col className='text-col' lg={6} md={6} sm={12}>
                        <p>Whether you're a ketchup and mustard loyalist or you prefer house sauce to no sauce, you can agree that every cheeseburger has it's own special flair. Top tip: house sauce begs to be ordered on the side for fry-dipping purposes.The cheese melts on the burger and in your mouth, perfectly complementing the medium-rare beef. Any burger lover worth their salt knows the best patty is comprised of ground chuck and brisket.</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
// https://i.ibb.co/VtHqysJ/hero-footer.jpg
// https://i.ibb.co/74LSjdG/background-about-us.jpg
export default About
