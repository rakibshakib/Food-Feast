import React from 'react';

const FAQ = () => {
    return (
        <div className="container mb-5">
        <h1 className="text-center color fw-bold mt-5 mb-5">BECOME OUT AFFOLIATE PARTNER</h1>
        <div className="row d-flex justify-content-lg-between">
            <div className="col-lg-5 mx-auto d-flex justify-content-center align-items-center">
                <img src="https://raw.githubusercontent.com/shibinkhan/skb-bike-shop-client/main/src/Images/2350619-1.png" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6">
                <div className="accordion " id="accordionExample">
                    <div className="accordion-item my-2 honda-cbr-faq">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                1. What are the pre-requisites to join?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            All you need is an approved website, app and/or social media account.At least 500 total minutes broadcast in the last 30 days.An average of 3 concurrent viewers or more over the last 30 days.At least 50 Followers.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-4 honda-cbr-faq">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2. How does it work?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Affiliate marketing works when someone (an affiliate) refers a product or service by sharing it on a blog, social media platform, podcast, or website. The affiliate earns a commission each time someone makes a purchase through the unique link associated with their recommendation.   
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-4 honda-cbr-faq">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                3. How much do I earn?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            We will share the commission rate after you have signed up. Average annual earnings for affiliate marketers are $65,800, with the range between $42,000 at the low end, and $83,000 at the top end.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-4 honda-cbr-faq">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                4. When can I start?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>You can start after your account has been approved.</p>
                                <p>3. You may write in to affiliate@foodfeast.com.bd and we will get back to you as soon as possible.</p>
                                <p>Start today, and you'll be in a prime position to take advantage of that. ... As an affiliate marketer, you can promote products from many way.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default FAQ;