import React from 'react';

const AboutSectionThree = () => {
    return (
        <div className="about-area">
            <div className="container">
                <div className="">

                    <div className="about-tab-content wow fadeInUp" data-wow-delay=".3s">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                                <div className="about-service-wrapper">
                                    <div className="about-service-bg">
                                        {/* <img src="/assets/img/bg/about-service-bg.png" alt="" /> */}
                                    </div>
                                    <div className="row gx-0 align-items-center">
                                        <div className="col-lg-12">
                                            <div className="service-tab-content ">
                                                <div className='d-flex justify-content-center'>
                                                    <div className="section-title style-3">
                                                        {/* <div className='d-flex justify-content-center mt-40'>
                                                            <span className="section-subtitle ">About us</span>
                                                        </div>
                                                        <h2 className="section-main-title mb-20 " style={{ textAlign: "center" }} >Your Trusted Partner for Compassionate Home Nursing Services</h2> */}
                                                    </div>
                                                </div>
                                                <p style={{ textAlign: "center" }}>Wattle Healthcare maintains memberships and partnerships with relevant care governing bodies and organisations as part of our commitment to quality. We promote and welcome a culturally diverse community include Aboriginal and Torres Strait Islanders people.
                                                </p>
                                                <div className='d-flex justify-content-center'>

                                                    <img src="/assets/img/about/flag.jpg" alt="" width={180} />

                                                </div>

                                                {/* <div className='d-flex justify-content-center'>
                                                    <div className="service-tab-point">
                                                      
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-6">
                                            <div className="service-tab-img">
                                                <img src="/assets/img/about/576x549px_About-us_home.png" alt="" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
                                <div className="about-service-wrapper">
                                    <div className="about-service-bg">
                                        <img src="/assets/img/bg/about-service-bg.png" alt="" />
                                    </div>
                                    <div className="row gx-0 align-items-center">
                                        <div className="col-lg-6">
                                            <div className="service-tab-content">
                                                <div className="section-title style-3">
                                                    <span className="section-subtitle">get service</span>
                                                    <h2 className="section-main-title mb-20">Gardomia offers a full-service</h2>
                                                </div>
                                                <p>Gardens consist of a mix of natural and constructed elements, although
                                                    even very natural garden are always inherently artificial creation. Natural
                                                    elements present in a garden principally.</p>
                                                <div className="service-tab-point">
                                                    <i className="fal fa-check"></i>
                                                    <p>High standards of professionalism,
                                                        integrity Establishment.</p>
                                                    <i className="flaticon-garden-1 backside-icon"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="service-tab-img">
                                                <img src="/assets/img/service/service-tab2-img.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSectionThree;