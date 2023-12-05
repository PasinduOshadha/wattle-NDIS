import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';

const ServiceSection = () => {
    return (
        <section className="services-area services-area-2">
            <div className="container">
                {/* <div className="services-action-wrapper wow fadeInUp" data-wow-delay=".3s">
                    <div className="service-action-bg-shape">
                        <img src="/assets/img/shape/pattern-1270.png" alt="shape-img" />
                    </div>
                    <h3 style={{ display: "flex", justifyContent: "center",width:"100%" }}>Why we are special</h3>
                    <Link href="/contact"><a className="fill-btn-rounded"><i className="fal fa-farm"></i><span>Get a Quote</span></a></Link>
                </div> */}
                <div className="section-title style-3 text-center">
                    <span className="section-subtitle">Expertises</span>
                    <h2 className="section-main-title mb-45">Why we are special</h2>
                </div>
                <div className="services-wrapper services-wrapper-2">
                    {ServicesList &&
                        <div className="services-inner services-inner-2 wow fadeInUp" data-wow-delay=".3s">
                            <div className="row g-0">
                                {ServicesList.map((item, num) => (
                                    <div className="col-lg-4 col-md-6" key={num}>
                                        <div className="single-service style-2">
                                            <div className="service-img">
                                                <img src={item.serviceImg} alt="service-img" />
                                            </div>
                                            <div className="single-service-content">
                                                {/* <div className="service-icon" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <i className={item.serviceIcon}></i>
                                                    <img src={item.serviceIcon} alt="service-icon" width={80} />

                                                </div> */}
                                                <h4 className="service-title">
                                                    {
                                                        num === 0 ?

                                                            <Link href={``}><a>{item.serviceTitle}</a></Link>

                                                            :
                                                            <Link href={``}><a>{item.serviceTitle}</a></Link>
                                                    }


                                                </h4>
                                                <p>{item.serviceDesc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }

                </div>
            </div>
        </section>
    );
};

export default ServiceSection;