import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MidBanner.css';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-reveal';

const MidBanner = () => {
    return (
        <div className='mid-banner-container'>
            <div className='mid-banner'>
                <Row className=' mid-banner-row me-0'>
                    <Col className='mid-banner-intro' lg={6} sm={12} md={6} >
                        <div>
                            <h2>Get your favorite food instantly</h2>
                            <p className=''>It's all at your fingertips-the taste you love and make the first bite last. Go ahead, Download us</p>
                            <button variant="contained" className='app-btn' href="https://www.apple.com/app-store/"><FontAwesomeIcon className='icon' icon={faApple} />App Store</button>
                            <button className='play-btn' href="https://play.google.com/store/apps"><FontAwesomeIcon className='icon' icon={faGooglePlay} />Play Store</button>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='img-col'>
                        <Fade right className=''>
                            <img className='mid-banner-img' src="https://i.ibb.co/kgrWC8x/home-foodpanda-apps.png" alt="" />
                        </Fade>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

// #ff0022,         Secondery
// #edfdfb          Primary

export default MidBanner;