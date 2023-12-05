import React from 'react';

const FaqSectionTwo = ({ faq_area }) => {
   return (
      <div className={` ${faq_area ? faq_area : 'faq-area style-3 pt-120 pb-60'}`}>
         <div className="container">
            <div className="row wow fadeInUp d-flex justify-content-center" data-wow-delay=".3s">
               {/* <div className="col-lg-6">
                  <div className="faq-img mb-60">
                     <img src="/assets/img/about/faq-thumb.png" alt="" />
                     <div className="faq-thumb">
                        <img src="/assets/img/logo/gm-thumb.png" alt="" />
                     </div>
                  </div>
               </div> */}
               <div className="col-lg-6">
                  <div className="section-title style-3 text-center">
                     <span className="section-subtitle">faq</span>
                     <h2 className="section-main-title mb-55">some questions</h2>
                  </div>
                  <div className="faq-wrapper mb-60">
                     <div className="gm-faq">
                        <div className="accordion" id="accordionExample-st-2">
                           <div className="gm-faq-group">
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingOne-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseOne-st-2" aria-expanded="true"
                                       aria-controls="collapseOne-st-2">
                                       How can I request care services for myself or a loved one?
                                    </button>
                                 </h2>
                                 <div id="collapseOne-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingOne-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                       To request our care services, simply get in touch with us through our
                                       contact page or by calling our office. Our team will guide you through the
                                       process and assess your specific needs to create a personalized care plan
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingTwo-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseTwo-st-2" aria-expanded="false"
                                       aria-controls="collapseTwo-st-2">
                                       Is Wattle Healthcare accredited and compliant with quality standards ?
                                    </button>
                                 </h2>
                                 <div id="collapseTwo-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                       Yes, we are committed to maintaining the highest quality of care. We follow
                                       the NDIS Practice Standards and Quality Indicators to ensure excellence in
                                       our services and compliance with industry standards.
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingThree-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseThree-st-2" aria-expanded="false"
                                       aria-controls="collapseThree-st-2">
                                       What suburbs do you serve?
                                    </button>
                                 </h2>
                                 <div id="collapseThree-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                       We provide care services to many suburbs in Victoria. To check if we serve
                                       your specific location, please contact us, and our team will assist you with
                                       the details
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingFour-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseFour-st-2" aria-expanded="false"
                                       aria-controls="collapseFour-st-2">
                                       Can I join Wattle Healthcare as a caregiver or support staff?
                                    </button>
                                 </h2>
                                 <div id="collapseFour-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingFour-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                       Yes, we are always looking for dedicated and compassionate individuals to
                                       join our team. Visit our Careers page for information on available positions
                                       and how to
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
      </div>
   );
};

export default FaqSectionTwo;