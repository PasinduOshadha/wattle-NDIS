import Link from 'next/link';
import React from 'react';

const ServiceDetailsArea = ({ item }) => {
    return (
        <>  <div className="banner-area banner-area2 pos-rel">
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
                                    <li className="trail-item trail-end"><span>Service Details</span></li>
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
                        <div className="col-lg-9 col-md-12">
                            <div className="service-details-main mb-60">
                                <div className="service-image">
                                    <img src="/assets/img/service/new/940x570px_Service-12_Group-And-Centre-based-Activities.png" alt="" />
                                </div>
                                <h3 className="mb-15">Group and Centre-based Activities</h3>
                                <p className="mb-15">We encourage the partaking in group and centre-based activities that can promote
                                    the physical and emotional condition of participants. </p>
                                <p className="mb-15">Participants are provided with hands-on learning opportunities as well as to explore
                                    their interests.
                                </p>
                                <p className="mb-45">We assist and encourage participants to participate in social and recreational
                                    activities with a group. Participants get the opportunity to be part of an inclusive
                                    and stimulating environment in which they can meet new people, make new friends,
                                    learn new skills and participate in activities such as:
                                </p>
                                {/* <h4 className="mb-25">Our horticulture and permaculture Services</h4> */}
                                <div className="sidebar-service-list2">
                                    <ul>
                                        <li>Recreational activities such as dance, music, games, art and craft, etc.</li>
                                        <li> Community get-togethers and outings in book clubs, libraries, local
                                            shopping centers and visit to theaters and museums</li>
                                        <li>Educational activities such as health awareness, trivia regarding current
                                            affairs, etc.</li>
                                        <li>General skills such as cooking, tailoring, self-care, gardening other
                                            day-to-day tasks</li>
                                        <li>Computer/Technology lessons</li>
                                        <li>English Language lessons
                                        </li>
                                        <li>Drama and art classe</li>
                                        <li>Sport programs
                                        </li>
                                        <li>Local day trip</li>

                                    </ul>
                                </div>




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
                        <div className="col-lg-3 col-md-8">
                            <div className="service-sidebar-wrapper mb-60">
                                <div className="sidebar-widget sidebar-service mb-50">
                                    <h4 className="sidebar-widget-title">Our Services</h4>
                                    <div className="sidebar-service-list">
                                        <ul>
                                            <li><Link href="/service-details-2"><a>Daily Living Support</a></Link></li>
                                            <li><Link href="/service-details-3"><a>Life Assistance</a></Link></li>
                                            <li><Link href="/service-details-6"><a>24 Hour High Intensity Nursing and Personal Care</a></Link></li>
                                            <li><Link href="/service-details-8"><a>Assistance with Travel/Transport Arrangements</a></Link></li>

                                            <li><Link href="/service-details-5"><a>Social & Community Participation</a></Link></li>

                                            <li><Link href="/service-details-4"><a>Support Coordination</a></Link></li>
                                            <li><Link href="/service-details-10"><a>Home And Community Care Nursing
                                            </a></Link></li>
                                            <li><Link href="/service-details-13"><a>Group and Household Tasks
                                            </a></Link></li>

                                            {/* <li><Link href="/service-details-7"><a>Assistance with Life Stage Transition</a></Link></li>

                                            <li><Link href="/service-details-9"><a>Innovative Community Participation</a></Link></li>
                                            
                                            <li><Link href="/service-details-11"><a>Development of Life Skills</a></Link></li>
                                            <li><Link href="/service-details-12"><a>Group and Centre-based Activities</a></Link></li> */}


                                            <li><Link href="/service-details"><a>Accommodation Services</a></Link></li>
                                            {/* <li><Link href="/service"><a>Soil Preparing</a></Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="sidebar-widget sidebar-materials mb-50">
                                    <h4 className="sidebar-widget-title">Our Materials</h4>
                                    <div className="sidebar-materials-list">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-file-pdf"></i>Company Profile</a></li>
                                            <li><a href="#"><i className="fas fa-file-image"></i>Service Details</a></li>
                                            <li><a href="#"><i className="fas fa-file-prescription"></i>Service Technician</a></li>
                                        </ul>
                                    </div>
                                </div> */}
                                {/* <div className="sidebar-widget sidebar-adv mb-50">
                                    <img src="/assets/img/service/service-sidebar-adv.jpg" alt="" />
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