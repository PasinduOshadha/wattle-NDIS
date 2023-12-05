import React from 'react';

const ContactMapSection = () => {
   return (
      <section className="contact-info-area">
         <div className="contact-info-shape">
            {/* <img className="contact-img-1" src="/assets/img/about/shovle-img.png" alt=""/> */}
         </div>
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title text-center">
                     <span className="section-subtitle">contact</span>
                     <h2 className="section-main-title mb-45">get in touch</h2>
                  </div>
               </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-4">
                  <div className="contact-map">
                     <iframe
                        // src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=1F new cut street Hectorville SA 5073&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        src="https://maps.google.com/maps?q=69 Ferdinand Drive, Clyde North, VIC 3978&t=&z=12&ie=UTF8&iwloc=&output=embed"
                     ></iframe>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="info-item-wrapper info-wrapper-media">
                     <h4 className="contact-info-title">head quarter</h4>
                     <div className="info-contact">
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
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="info-item-wrapper info-wrapper-time">
                     <h4 className="contact-info-title">opening hours</h4>
                     <div className="info-contact-time">
                        <ul>
                           <li>
                              <div className="info-date">
                                 <span>24 x 7 Open</span>
                                 {/* <span>09:00 am - 05:00 pm</span> */}
                              </div>
                           </li>
                           {/* <li>
                              <div className="info-date">
                                 <span>Sat - Sun</span>
                                 <span>10:00 am - 02:00 pm</span>
                              </div>
                           </li> */}
                           {/* <li>
                              <div className="info-date">
                                 <span>friday</span>
                                 <span>off-day</span>
                              </div>
                           </li> */}
                        </ul>
                     </div>

                     <h4 className="contact-info-title mt-40">contact hours</h4>
                     <div className="info-contact-time">
                        <ul>
                           <li>
                              <div className="info-date">
                                 <span>Mon - Fri</span>
                                 <span>09:00 am - 05:00 pm</span>
                              </div>
                           </li>
                           <li>
                              <div className="info-date">
                                 <span>Sat - Sun</span>
                                 <span>10:00 am - 05:00 pm</span>
                              </div>
                           </li>
                           {/* <li>
                              <div className="info-date">
                                 <span>friday</span>
                                 <span>off-day</span>
                              </div>
                           </li> */}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactMapSection;