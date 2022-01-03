import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './MidBanner.css';

const MidBanner = () => {
    return (
        <div className='mid-banner'>
            <div className='mid-banner-img'>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <img src="https://i.ibb.co/kgrWC8x/home-foodpanda-apps.png" alt="" />
                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default MidBanner;