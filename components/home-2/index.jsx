import React from 'react';
import FooterTwo from '../../layout/footers/footertwo';
import HeaderTwo from '../../layout/headers/headertwo';
import BrandSliderTwo from '../elements/brand/brand-slider-two';
import HeroSliderTwo from '../elements/hero/hero-slider-two';
import PortfolioSlider from '../elements/portfolio/portfolio-slider';
import TestimonialSliderTwo from '../elements/testimonial/testimonial-slider-two';
import AboutSectionTwo from './about-section-two';
import BlogSectionTwo from './blog-section-two';
import ContactSection from './contact-section';
import FaqSectionTwo from './faq-section-two';
import NewsletterSection from './newsletter-section';
import ServiceSectionTwo from './service-section-two';
import AboutSectionThree from '../home-3/about-section-three';
import ServiceSectionFive from '../home-5/service-section-five';
import ClientsSectionFive from '../home-5/clients-section-five';
import ServiceSectionThree from '../home-3/service-section-three';
import ServiceSection from '../home/service-section';
import HeaderOne from '../../layout/headers/header';
import AboutSectionThree2 from '../home-3/about-section-three-2';


const index = () => {
  return (
    <main>
      <HeaderTwo />
      <HeroSliderTwo />
      <AboutSectionThree />
      {/* <ServiceSectionFive /> */}
      <ServiceSectionThree />
      {/* <ClientsSectionFive /> */}
      <ServiceSection />
      {/* <AboutSectionTwo /> */}
      {/* <BrandSliderTwo />
      <ServiceSectionTwo />
      <PortfolioSlider />
      <ContactSection /> */}
      <TestimonialSliderTwo />
      <FaqSectionTwo />
      {/* <NewsletterSection />
      <BlogSectionTwo /> */}
      <AboutSectionThree2 />
      <FooterTwo />
    </main>
  );
};

export default index;