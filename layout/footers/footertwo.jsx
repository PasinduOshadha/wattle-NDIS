import Link from 'next/link';
import React from 'react';

const FooterTwo = () => {
    return (
        <footer className="footer2-bg">
            <section className="footer-area footer-area2 footer-area2-bg pt-95 pb-55">
                <div className="container">
                    <div className="footer2-inner ">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                                    <div className="footer-widget-title">
                                        <h4>about us</h4>
                                    </div>
                                    <p className="mb-35">Wattle Healthcare, we take great pride in offering personalized, client-focused, and high-quality services. We are dedicated to following the NDIS Practice Standards and Quality Indicators to ensure outstanding outcomes for both our clients and our organization.</p>
                                    <div className="footer-support">
                                        <div className="irc-item support-meta">
                                            <div className="irc-item-icon">

                                                <i className="fas fa-lock-open"></i>
                                            </div>
                                            <div className="irc-item-content">
                                                <p>OPEN</p>
                                                <div className="support-number"><a href="">24x7</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer1-widget footer1-widget2 mb-40">
                                    <div className="footer-widget-title">
                                        <h4>main pages</h4>
                                    </div>
                                    <ul>
                                        <li><Link href="/"><a>Home</a></Link></li>
                                        <li><Link href="/about"><a>about</a></Link></li>
                                        {/* <li><Link href="/services"><a>services</a></Link></li> */}
                                        <li><Link href="/contact"><a>contact</a></Link></li>
                                        {/* <li><Link href="/team"><a>Team</a></Link></li> */}

                                        <li><Link href="/"><a>Participant Handbook</a></Link></li>
                                        <li><Link href="/"><a>Welcome Pack</a></Link></li>


                                    </ul>

                                </div>
                            </div>
                            {/* <div className="col-lg-5 col-md-6 col-sm-6">
                                <div className="footer-widget footer2-widget footer2-widget1 mb-40 ">
                                    <div className="footer-widget-title">
                                        <h4>our services</h4>
                                    </div>

                                    <ul>
                                        <li><Link href="/service-details">Accommodation Services</Link></li>
                                        <li><Link href="/service-details-2">Daily Living Support</Link></li>
                                        <li><Link href="/service-details-3">Life Assistance</Link></li>
                                        <li><Link href="/service-details-4">Support Coordination</Link></li>
                                        <li><Link href="/service-details-5">Social & Community Participation</Link></li>
                                        <li><Link href="/service-details-6">Nursing and Personal Care</Link></li>
                                        <li><Link href="/service-details-7">Assistance with Life Stage Transition</Link></li>

                                    </ul>
                                    <ul>
                                        <li><Link href="/service-details-8">Travel/Transport Arrangements</Link></li>
                                        <li><Link href="/service-details-9">Innovative Community Participation</Link></li>
                                        <li><Link href="/service-details-10">Community Care Nursing</Link></li>
                                        <li><Link href="/service-details-11">Development of Life Skills</Link></li>
                                        <li><Link href="/service-details-12">Group and Centre-based Activities</Link></li>
                                        <li><Link href="/service-details-13">Household Tasks</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="footer-widget footer2-widget footer2-widget3 mb-40 ">
                                    <div className="footer-widget-title">
                                        <h4>get in touch</h4>
                                    </div>
                                    <div className="footer-contact">
                                        <ul>
                                            <li>
                                                <div className="single-contact">
                                                    <div className="contact-icon">
                                                        <i className="fas fa-phone"></i>
                                                    </div>
                                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                                        <p><a href="tel:+61-405-344-594">+61-405-344-594</a></p>
                                                        <p><a href="tel:+61-484-655-174">+61-484-655-174</a></p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="single-contact">
                                                    <div className="contact-icon">
                                                        <i className="fas fa-envelope-open"></i>
                                                    </div>
                                                    <p><a href="mailto:info@wattlehealthcare.com.au">info@wattlehealthcare.com.au</a></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="single-contact">
                                                    <div className="contact-icon">
                                                        <i className="fas fa-map-marked-alt"></i>
                                                    </div>
                                                    <p><a href="#">69 Ferdinand Drive, Clyde North, VIC 3978</a></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="footer-social">
                                        <span>Open 24 x7</span>



                                    </div>
                                    <div className="footer-social">
                                        <span>Mon - Fri 09.00 - 17.00</span>
                                    </div>
                                    <div className="footer-social">
                                        <span>Sat - Sun 10.00 - 14.00</span>
                                    </div> */}
                                    <div className="footer-social">
                                        <span>Connect :</span>
                                        <div className="social-links">
                                            <ul>
                                                <li><a href="https://www.facebook.com/YourCareatAU" target='_blank' ><i className="fab fa-facebook"></i></a></li>
                                                {/* <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin"></i></a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-widget footer2-widget footer2-widget4 mb-40">
                                    <div className="footer-widget-title">
                                        <h4>Contact HOURS</h4>
                                    </div>
                                    <div className="footer-social">
                                        <span>Mon - Fri &ensp;: 09.00 - 17.00</span>
                                    </div>
                                    <div className="footer-social">
                                        <span>Sat - Sun &ensp;: 10.00 - 17.00</span>
                                    </div>



                                    {/* <ul>
                                        <li><Link href="/"><a>Item 1</a></Link></li>
                                        <li><Link href="/"><a>Item 2</a></Link></li>
                                        <li><Link href="/"><a>Item 3</a></Link></li>
                                        <li><Link href="/"><a>Item 4</a></Link></li>
                                        
                                    </ul> */}
                                    {/* <div className="instagam-shots">
                                        <a href="#"><img src="/assets/img/istagram/insta-1.jpg" alt="instagram-img" /></a>
                                        <a href="#"><img src="/assets/img/istagram/insta-2.jpg" alt="instagram-img" /></a>
                                        <a href="#"><img src="/assets/img/istagram/insta-3.jpg" alt="instagram-img" /></a>
                                        <a href="#"><img src="/assets/img/istagram/insta-4.jpg" alt="instagram-img" /></a>
                                        <a href="#"><img src="/assets/img/istagram/insta-5.jpg" alt="instagram-img" /></a>
                                        <a href="#"><img src="/assets/img/istagram/insta-6.jpg" alt="instagram-img" /></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="copyright-area copyright2-area">
                <div className="container">
                    <div className="copyright2-inner">
                        <div className="row align-items-center">
                            {/* <div className="col-lg-6 col-md-6">
                                <div className="footer-links">
                                    <Link href="/contact"><a>environment soluton</a></Link>
                                    <Link href="/faq"><a>faq</a></Link>
                                </div>
                            </div> */}
                            <div className="col-lg-12 col-md-12">
                                {/* <div className="copyright-text copyright2-text">
                                    Copyright & Design By <a href="https://themeforest.net/user/bdevs/portfolio">@BDevs</a> - 2022
                                </div> */}
                                <a href="https://infinitycs.com.au" target='_blank' >
                                    <div className="copyright-text copyright1-text">
                                        Copyright & Designed By <img src="/assets/img/company.png" alt="company" style={{ height: "30px", marginTop: "-5px" }} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterTwo;