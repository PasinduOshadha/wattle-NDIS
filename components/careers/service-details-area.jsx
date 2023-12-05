import Link from 'next/link';
import React from 'react';

const ServiceDetailsArea = ({ item }) => {
    return (
        <>
            <section className="page-title-area" style={{ background: "url(/assets/img/bg/bg-about.png)",backgroundPosition:"right top",backgroundSize:"cover" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title-wrapper">
                                <p>NDIS Provider</p>
                                <h1 className="page-title mb-10">{item.serviceTitle}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="breadcrumb-menu">
                            <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items">
                                    <li className="trail-item trail-begin"><Link href="/"><a><span>Go to Home</span></a></Link></li>
                                    <li className="trail-item trail-end"><span>Careers</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-details pt-120 pb-60">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-12 col-md-12">
                            <div className="service-details-main mb-60">
                                {/* <div className="service-image">
                                    <img src="/assets/img/service/Horticulture.png" alt="" />
                                </div> */}
                                <h3 className="mb-30">Careers
                                </h3>

                                <h4 className="mb-15">Join Our Compassionate Team
                                </h4>
                                <p className="mb-15">{`We are more than just a care provider; we are a family dedicated to making a positive
                                    impact on the lives of individuals in need. If you're passionate about making a difference,
                                    providing high-quality care, and enhancing the well-being of others, we welcome you to
                                    explore career opportunities with us. Join our compassionate team and be a part of a
                                    rewarding journey where you can truly make a difference in the lives of those we serve.
                                    Your dedication and skills can help us continue to provide top-notch care and support.
                                    Discover the possibilities and find your place with us today.`}
                                </p>
                                {/* <p className="mb-45">We assist you with everyday tasks or help you in learn the required skills for
                                    independent living
                                </p> */}

                                {/* <h4 className="mb-25">Our horticulture and permaculture Services</h4> */}
                                {/* <div className="sidebar-service-list2">
                                    <ul>
                                        <li>Light cleaning, housekeeping and tidying up
                                        </li>
                                        <li> Laundry and essential ironing</li>
                                        <li>Garden maintenance</li>
                                        <li>Meal preparation</li>
                                        <li>Cleaning the floors, mats, stairs, and other surfaces
                                        </li>
                                        <li>Dusting
                                        </li>
                                        <li>Emptying rubbish bins
                                        </li>
                                        <li>Budgeting and shopping
                                        </li>
                                        <li>Paying bills on time
                                        </li>

                                    </ul>
                                </div> */}




                                {/* <p className="mb-55">Still not convinced that gaming is good for you? That’s understandable,
                                    considering concerns
                                    long raised by parents that
                                    include
                                    the treatment of women social gaming, violence in games and gaming addiction. For more
                                    information, explore the Safer
                                    Gaming
                                    Guide from the Family Online Safety Institute. The absolute best recommendation for parents
                                    worried about game safety or
                                    that
                                    your kid is gaming too much: Join your kids on their favorite platform.</p> */}
                                {/* <div className="service-sub-image">
                                    <img src="/assets/img/service/service-sub1.jpg" alt="" />
                                    <img src="/assets/img/service/service-sub2.jpg" alt="" />
                                </div> */}
                                {/* <div className="service-features mb-60">
                                    <h4>Core Features</h4>
                                    <div className="service-feature-list">
                                        <span>Easy sign-up</span>
                                        <span>Business Content Makes</span>
                                        <span>Overall Marketing</span>
                                        <span>Biggest Social Channels</span>
                                        <span>Business associates</span>
                                        <span>Interaction between</span>
                                        <span>Customers and search</span>
                                        <span>Traffic exponentially</span>
                                        <span>SEO strategy</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsArea;