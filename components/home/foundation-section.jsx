import Link from 'next/link';
import React from 'react';

const FoundationSection = () => {
    return (
        <section className="foundation-area foundation-area-bg pt-120 pb-60">
            <div className="foundation-bg-shape">
                <img src="/assets/img/shape/pattern.png" alt="" />
            </div>
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div className="foundation-img mb-60">
                            <img src="/assets/img/about/foundation.png" alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="foundation-content mb-60">
                            <div className="section-title">
                                <span className="section-subtitle">since 2020</span>
                                <h2 className="section-main-title mb-20">A high level of attention to detail and professionalism</h2>
                            </div>
                            <p>Founder of the ACG, Princelin has begun ACG with 5 years of experience in the horticulture, permaculture, and
                                landscaping in South Australia. He holds a Diploma of Horticulture, Landscaping and Designing (TAFE-SA). ACG provides a
                                wide range of gardening and landscaping services
                                according to customers’ expectations with inspiring designs and high-quality foliage.</p>
                            <div className="founder-meta mt-45">
                                <div className="founder-info-meta">
                                    <div className="founder-img">
                                        <img src="/assets/img/testimonial/author-5.jpg" alt="" />
                                    </div>
                                    <div className="founder-desciption">
                                        <span className="designation">founder</span>
                                        <h4 className="founder-name">Princelin Niranjan</h4>
                                        <h5 className="founder-name2">Diploma of Horticulture, Landscaping and Designing (TAFE SA)</h5>
                                    </div>
                                </div>
                                <Link href="/contact"><a className="fill-btn-rounded">get in touch<i className="fal fa-angle-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundationSection;