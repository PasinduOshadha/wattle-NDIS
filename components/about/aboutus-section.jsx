import Link from 'next/link';
import React from 'react';

const AboutUsSection = () => {
    return (
        <section className="about-area pt-120 pb-90">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div className="about-thumb mb-30">
                            <img src="/assets/img/about/510x560px_About- (2).png" alt="" />
                            <div className="about-thumb-meta">
                                {/* <p>since 2020</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content mb-30">
                            <div className="section-title">
                                {/* <span className="section-subtitle">about us</span>
                                <h2 className="section-main-title mb-20">XXXXXXXXXXXXX</h2> */}
                            </div>
                            <p className='mb-30'>Wattle Healthcare, we take great pride in offering personalized,
                                client-focused, and high-quality services. We are dedicated to following the NDIS
                                Practice Standards and Quality Indicators to ensure outstanding outcomes for both
                                our clients and our organization.
                            </p>
                            <p className="mb-30">Our disability services are built on these rigorous standards, and we believe it is
                                crucial not only to tailor our services to your specific needs but also to maintain the
                                highest quality of service in alignment with these standards. This way, you can fully
                                experience the benefits of choosing Wattle Healthcare and have clear
                                expectations of what to anticipate from us.</p>
                            <p className="mb-30">Wattle Healthcare, we aspire to make a positive impact in the lives of
                                individuals with disabilities. Our mission is to simplify and enhance life, promote
                                fairness, and encourage community engagement</p>
                            <p className="mb-45">We are committed to providing you with a personal and individualized experience,
                                ensuring that you are treated with fairness and respect throughout your journey
                                with us. We aim to empower you to pursue the activities and goals that matter most
                                to you. Your feedback and input are invaluable, as they enable us to continuously
                                enhance our services to better align with your needs and aspirations. </p>
                            {/* <p className="mb-45">Let ACG do the Professional work for you. We’re happy to work with you to get your lawns and gardens the way you want them and create a hassle-free maintenance schedule.</p> */}
                            <div className="about-btn">
                                <Link href="/contact"><a className="fill-btn">get in touch<i className="fal fa-angle-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-120">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6 d-flex justify-content-start">
                        <div className="about-content mb-30">
                            <div className="section-title">
                                {/* <span className="section-subtitle">about us</span> */}
                                <h2 className="section-main-title mb-20">OUR MISSION</h2>
                            </div>
                            <p className='mb-30'>To provide high quality and effective disability services, where healthcare
                                interventions and support of exceptional quality are designed to enrich lives and
                                improve well-being
                            </p>

                            {/* <p className="mb-45">Let ACG do the Professional work for you. We’re happy to work with you to get your lawns and gardens the way you want them and create a hassle-free maintenance schedule.</p> */}
                            {/* <div className="about-btn">
                                <Link href="/contact"><a className="fill-btn">get in touch<i className="fal fa-angle-right"></i></a></Link>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="col-lg-6">
                        <div className="about-thumb2 d-flex justify-content-center align-items-center">
                           
                            <div className="">

                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/60x60px_Mission Icon.png" alt="" width={120} />
                                </div>

                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-6 order-1 order-sm-2">
                        <div className="about-content mb-30">
                            <div className="section-title">
                                {/* <span className="section-subtitle">about us</span> */}
                                <h2 className="section-main-title mb-20">OUR Values</h2>
                            </div>
                            <ul className='sidebar-service-list4'>
                                <li className='mt-10'><b>Empathy</b> - We are compassionate, kind, and understanding.</li>
                                <li className='mt-10'><b>Respect</b> - We respect and value the trust participants & families place in u</li>
                                <li className='mt-10'><b>Excellence</b> - We strive to achieve excellence. We believe in providing
                                    outstanding care services.
                                </li>
                                <li className='mt-10'><b>Inclusion</b> - We are committed to equity, access and diversity. We work
                                    towards creating an inclusive, barrier-free society for people with
                                    disabilities</li>
                                <li className='mt-10'><b>Honesty</b> -We will be trustworthy, tell the truth and keep our promise to you
                                    and always provide the highest quality care we can.
                                </li >
                            </ul>

                            {/* <p className="mb-45">Let ACG do the Professional work for you. We’re happy to work with you to get your lawns and gardens the way you want them and create a hassle-free maintenance schedule.</p> */}
                            {/* <div className="about-btn">
                                <Link href="/contact"><a className="fill-btn">get in touch<i className="fal fa-angle-right"></i></a></Link>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="container pt-60">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">

                    <div className="col-lg-6 order-2 order-sm-1">
                        <div className="about-thumb2 d-flex justify-content-center align-items-center">
                          
                            <div className="">

                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/60x60px_Values Icon.png" alt="" width={70} />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 order-1 order-sm-2">
                        <div className="about-content mb-30">
                            <div className="section-title">
                                
                                <h2 className="section-main-title mb-20">OUR Values</h2>
                            </div>
                            <ul style={{ listStyle: "circle", }} className='sidebar-service-list2'>
                                <li className='mt-10'>Empathy - We are compassionate, kind, and understanding.</li>
                                <li className='mt-10'>Respect - We respect and value the trust participants & families place in u</li>
                                <li className='mt-10'>Excellence - We strive to achieve excellence. We believe in providing
                                    outstanding care services.
                                </li>
                                <li className='mt-10'>Inclusion - We are committed to equity, access and diversity. We work
                                    towards creating an inclusive, barrier-free society for people with
                                    disabilities</li>
                                <li className='mt-10'>Honesty-We will be trustworthy, tell the truth and keep our promise to you
                                    and always provide the highest quality care we can.
                                </li >
                            </ul>

                          
                        </div>
                    </div>

                </div>
            </div> */}
        </section>
    );
};

export default AboutUsSection;