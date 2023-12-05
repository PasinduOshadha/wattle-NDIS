import React from 'react';

const AboutSectionThree = () => {
    return (
        <div className="about-area">
            <div className="container">
                <div className="about-tab-wrapper">
                    <div className="about-tab-nav mb-0 wow fadeInUp" data-wow-delay=".3s">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <div className="nav-link active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1"
                                    role="tab" aria-controls="nav-1" aria-selected="true">
                                    {/* <span className="tab-number">01</span> */}
                                    Disability Care

                                    {/* <i className="flaticon-home"></i> */}
                                </div>
                                <div className="nav-link" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" role="tab"
                                    aria-controls="nav-1" aria-selected="false">
                                    {/* <span className="tab-number">02</span> */}

                                    Home Care


                                    {/* <i className="flaticon-working"></i> */}
                                </div>
                                <div className="nav-link" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" role="tab"
                                    aria-controls="nav-1" aria-selected="false">
                                    {/* <span className="tab-number">03</span> */}
                                    Therapeutic Support

                                    {/* <i className="flaticon-working"></i> */}
                                </div>
                                <div className="nav-link" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" role="tab"
                                    aria-controls="nav-1" aria-selected="false">
                                    {/* <span className="tab-number">04</span> */}
                                    Community Care

                                    {/* <i className="flaticon-working"></i> */}
                                </div>
                                {/* <div className="nav-link" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" role="tab"
                                    aria-controls="nav-1" aria-selected="false">
                                    <span className="tab-number">05</span>
                                    Rehabilitation
                                    <i className="flaticon-working"></i>
                                </div>
                                <div className="nav-link" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" role="tab"
                                    aria-controls="nav-1" aria-selected="false">
                                    <span className="tab-number">06</span>
                                    Mobility Equipment
                                    <i className="flaticon-working"></i>
                                </div> */}
                            </div>
                        </nav>
                    </div>
                    <div className="about-tab-content wow fadeInUp" data-wow-delay=".3s">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                                <div className="about-service-wrapper">
                                    <div className="about-service-bg">
                                        {/* <img src="/assets/img/bg/about-service-bg.png" alt="" /> */}
                                    </div>
                                    <div className="row gx-0 align-items-center">
                                        <div className="col-lg-12">

                                            <div className='d-flex justify-content-center d-block d-sm-none'>

                                                <img src="/assets/img/service/100x100px_I Heart NDIS_2020-01.png" alt="" width={140} />

                                            </div>


                                            <div className="service-tab-content ">
                                                <div className='d-flex justify-content-center'>
                                                    <div className="section-title style-3">
                                                        <div className='d-flex justify-content-center mt-40'>
                                                            <span className="section-subtitle ">About us</span>
                                                        </div>
                                                        <h2 className="section-main-title mb-20 " style={{ textAlign: "center" }} >Compassionate Disability care and Home nursing service</h2>
                                                    </div>
                                                </div>
                                                <p style={{ textAlign: "center" }}>Wattle Healthcare, we take great pride in offering personalized,
                                                    client-focused, and high-quality services. We are dedicated to following the NDIS
                                                    Practice Standards and Quality Indicators to ensure outstanding outcomes for both
                                                    our clients and our organization. Our disability services are built on these rigorous standards, and we believe it is
                                                    crucial not only to tailor our services to your specific needs but also to maintain the
                                                    highest quality of service in alignment with these standards. This way, you can fully
                                                    experience the benefits of choosing Wattle Healthcare and have clear
                                                    expectations of what to anticipate from us.
                                                </p>
                                                <div className='d-flex justify-content-center'>
                                                    <div className="service-tab-point">
                                                        <i className="fal fa-check"></i>
                                                        <p>High standards of professionalism,
                                                            integrity Establishment.</p>
                                                        {/* <i className="flaticon-garden-1 backside-icon"></i> */}
                                                    </div>
                                                </div>
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