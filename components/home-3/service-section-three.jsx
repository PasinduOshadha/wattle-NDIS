import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-new';

const ServiceSectionThree = () => {
   return (
      <section className="services-area pt-120 pb-70">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title style-3 text-center">
                     <span className="section-subtitle">services</span>
                     <h2 className="section-main-title mb-45">what we provide</h2>
                  </div>
               </div>
            </div>
            <div className="services-wrapper wow fadeInUp" data-wow-delay=".3s">
               {ServicesList &&
                  <div className="row">
                     {ServicesList.map((item, num) => (
                        <div className="col-lg-3 col-md-6" key={num}>
                           <Link href={item.sId !== 0 ? `/service-details-${item.sId + 1}` : "/service-details"}>
                              <div className="single-service style-3 mb-40">
                                 <div className="service-img">
                                    <img src={item.serviceImg} alt="service icon" />
                                 </div>
                                 <div className="single-service-content">
                                    <div className="service-icon">
                                       {/* <i className={item.serviceIcon}></i> */}
                                       <img src={item.serviceIcon} alt="service icon" width={70} />

                                    </div>
                                    <h4 className="service-title"> <Link href={item.sId !== 0 ? `/service-details-${item.sId + 1}` : "/service-details"}><a>{item.serviceTitle}</a></Link></h4>
                                    <p style={{ minHeight: "100px" }}>{item.serviceDesc}</p>
                                    <Link href={item.sId !== 0 ? `/service-details-${item.sId + 1}` : "/service-details"}><a className="text-btn"><i className="fal fa-long-arrow-right"></i>{item.serviceBtn}<i className="fal fa-long-arrow-right"></i></a></Link>
                                 </div>
                              </div>
                           </Link>
                        </div>
                     ))}
                  </div>
               }
            </div>
         </div>
      </section>
   );
};

export default ServiceSectionThree;