import Link from 'next/link';
import React from 'react';
import ContactFormSection from '../contact/contact-form-ref';

const ServiceDetailsArea = ({ item }) => {
    return (
        <>
            <div className="banner-area banner-area2 pos-rel">
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

                                        {/* <li className="trail-item trail-end"><span>{breadMenu}</span></li> */}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <div className="breadcrumb-wrapper">
                        <div className="container">
                            <div className="breadcrumb-menu">
                                <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                    <ul className="trail-items">
                                        <li className="trail-item trail-begin"><Link href="/"><a><span>Go to Home</span></a></Link></li>
                                        <li className="trail-item trail-end"><span> Referrals</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div> */}
                </section>
            </div>
            <section className="service-details pt-120 pb-60">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-12 col-md-12">
                            <div className="service-details-main mb-60">

                                <h3 className="mb-30"> Referrals
                                </h3>


                                <p className="mb-15">{`If you know of someone who could benefit from the comprehensive care and support
                                    offered by Wattle Healthcare, we welcome your referral. Your recommendation can be the
                                    first step in providing someone with the high-quality care and assistance they deserve.
                                    Please take a moment to fill out our Referral Form below. Your thoughtful gesture can make
                                    a significant difference in someone's life, and we appreciate your trust in our services.`}
                                </p>

                                <ContactFormSection />

                                <h3 className="mb-30 mt-45"> Privacy Statement
                                </h3>
                                <p className="mb-45">The management of Wattle Healthcare are committed to ensuring that dealings with
                                    Personal Information regarding job seekers, staff, clients and others with whom we deal
                                    comply with Australian Privacy laws. In accordance with the Australian Privacy Principles
                                    2014, and the Privacy Act 1988, we will only use your Personal Information for the purpose
                                    of assessing your application with us. The information we collect will be handled sensitively
                                    and secure with proper regard to privacy.
                                </p>


                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsArea;