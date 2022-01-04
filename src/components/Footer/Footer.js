import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
        <>
      <div className="footer-top pb-4">
        <Container>
          <Row className="footer-row">
            <Col sm={12} md={6} lg={3}>
              <h4 className="col-title">WANT TO BE A MEMBER?</h4>
              <h5 className="text-muted">Sign up for our Newsletter</h5>
              <Fade bottom>
                <form className="d-flex newsletter">
                  <input
                    placeholder="Enter your email"
                    className="form-control rounded-0"
                    type="text"
                  />
                  <button className="btn rounded-0 btn-primary">Subs</button>
                </form>
              </Fade>

                <h5 className="text-muted mt-4">Follow us on</h5>
                <div>
                <ul className="social-icons">
                  <Fade bottom>

                    <li>
                      {/* <Fade bottom> */}
                      <a href="/d">
                        <i class="fab fa-youtube"></i>
                      </a>
                      {/* </Fade> */}

                    </li>
                  </Fade>
                  <Fade bottom>

                    <li>
                      <a href="https://www.facebook.com/">
                        <i class="fab fa-facebook-square"></i>
                      </a>
                    </li>
                  </Fade>
                  <Fade bottom>

                    <li>
                      <a href="/d">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </Fade>
                  <Fade bottom>

                    <li>
                      <a href="/d">
                        <i class="fab fa-twitter-square"></i>
                      </a>
                    </li>
                  </Fade>
                  </ul>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
                <h4 className="col-title">INFORMATION</h4>
              <ul className="information">
                {/* <Fade bottom> */}
                  <li>
                    <a href="/home">bKash Payments</a>
                  </li>
                {/* </Fade> */}

                  <li>
                  <a href="/home">TERMS &amp; CONDITIONS</a>
                  </li>
                  <li>
                    <a href="/home">bKash Payments</a>
                  </li>
                  <li>
                    <a href="/home">Payment Options</a>
                  </li>
                  <li>
                    <a href="/home">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/home">Refund Policy</a>
                  </li>
              </ul>
            </Col>

            <Col sm={12} md={6} lg={3}>
              {/* <Zoom> */}
                <h4 className="col-title">CUSTOMER SERVICE</h4>
                <ul className="information">
                  <li>
                    <a href="/home">FAQs</a>
                  </li>
                  <li>
                    <a href="/home">Food Feast</a>
                  </li>
                  <li>
                    <a href="/home">Store Locator</a>
                  </li>
                  <li>
                    <a href="/home">All About Food Feast</a>
                  </li>
                  <li>
                    <a href="/home">Contact Info</a>
                  </li>
                  <li>
                    <a href="/home">Delivery</a>
                  </li>
                </ul>
              {/* </Zoom> */}
            </Col>
            <Col sm={12} md={6} lg={3}>
              {/* <Zoom> */}
              <h4 className="col-title">CONTACT US</h4>
              {/* <div className="">
                  <img width="100px" src="https://i.ibb.co/sRh82qJ/contact.png" alt="" />
                </div> */}
                <ul className="information contact-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Dhaka, Bangladesh
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    Official: foodfeast@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    Helpline: +8801798626997
                  </li>
                </ul>
              {/* </Zoom> */}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <p>&copy;All Rights Reserved By Coders</p>
      </div>
    </>
  );
};

export default Footer;
