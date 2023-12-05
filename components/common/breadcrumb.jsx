import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({ breadTitle, breadSubtitle, breadHome, breadMenu, bgBackground = "bg-about.png" }) => {
   return (
      <div className="banner-area banner-area2 pos-rel">
         <section className="page-title-area" style={{ background: `url(/assets/img/bg/${bgBackground})`,backgroundPosition:"right top",backgroundSize:"cover" }}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="page-title-wrapper">
                        <p>{breadSubtitle}</p>
                        <h1 className="page-title mb-10">{breadTitle}</h1>
                     </div>
                  </div>
               </div>
            </div>

            <div className="breadcrumb-wrapper">
               <div className="container">
                  <div className="breadcrumb-menu">
                     <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                        <ul className="trail-items">
                           <li className="trail-item trail-begin"><Link href="/"><a><span>{breadHome}</span></a></Link></li>
                           {/* <li className="trail-item trail-end"><span>{breadMenu}</span></li> */}
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>

         </section>
      </div>
   );
};

export default Breadcrumb;