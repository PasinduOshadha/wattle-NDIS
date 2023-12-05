import Link from 'next/link';
import React from 'react';

const AboutFeatureSection = () => {
    return (
        <div className="section strategy-area pb-90">
            <div className="container">
                <div className="strategy-wrapper">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-strategy mb-30">
                                <div className="st-hover">
                                    <div className="st-h-content" style={{ background: "url(/assets/img/bg/mission.jpg)" }}>
                                        <p>To provide high quality and effective disability services, where healthcare
                                            interventions and support of exceptional quality are designed to enrich lives and
                                            improve well-being</p>
                                    </div>
                                    <div className="st-h-btn">
                                        <Link href="/contact"><a className="fill-btn">get in touch<i className="fal fa-angle-right"></i></a></Link>
                                    </div>
                                </div>
                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/60x60px_Mission Icon.png" alt="" width={120}/>
                                </div>
                                <h4>our mission</h4>
                                <Link href="/contact"><a className="strategy-arrow"><i className="fal fa-long-arrow-right"></i></a></Link>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-strategy mb-30">
                                <div className="st-hover">
                                    <div className="st-h-content" style={{ background: "url(/assets/img/bg/mission.jpg)" }}>
                                        <p>To become a leading landscaping and garden services provider in South Australia through sustainable landscape solutions.</p>
                                    </div>
                                    <div className="st-h-btn">
                                        <Link href="/contact"><a className="fill-btn">get in touch<i className="fal fa-angle-right"></i></a></Link>
                                    </div>
                                </div>
                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/vision-icon.png" alt="" />
                                </div>
                                <h4>our vision</h4>
                                <Link href="/contact"><a className="strategy-arrow"><i className="fal fa-long-arrow-right"></i></a></Link>
                            </div>
                        </div> */}
                        <div className="col-lg-6 col-md-6">
                            <div className="single-strategy mb-30">
                                <div className="st-hover">
                                    <div className="st-h-content " style={{ background: "url(/assets/img/bg/mission.jpg)", textAlign: "left" }}>
                                        {/* <p>Integrity, Honesty and Professionalism.</p> */}

                                        <ul style={{listStyle:"circle",}} className='sidebar-service-list3'>
                                            <li style={{ color: "white" }}>Empathy - We are compassionate, kind, and understanding.</li>
                                            <li style={{ color: "white" }}>Respect - We respect and value the trust participants & families place in u</li>
                                            <li style={{ color: "white" }}>Excellence - We strive to achieve excellence. We believe in providing
                                                outstanding care services.
                                            </li>
                                            <li style={{ color: "white" }}>Inclusion - We are committed to equity, access and diversity. We work
                                                towards creating an inclusive, barrier-free society for people with
                                                disabilities</li>
                                            <li style={{ color: "white" }}>Honesty-We will be trustworthy, tell the truth and keep our promise to you
                                                and always provide the highest quality care we can.
                                            </li >
                                        </ul>
                                    </div>
                                    <div className="st-h-btn">
                                        <Link href="/contact"><a className="fill-btn">get in touch<i className="fal fa-angle-right"></i></a></Link>
                                    </div>
                                </div>
                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/60x60px_Values Icon.png" alt="" width={90}/>
                                </div>
                                <h4>our values</h4>
                                <Link href="/contact"><a className="strategy-arrow"><i className="fal fa-long-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFeatureSection;