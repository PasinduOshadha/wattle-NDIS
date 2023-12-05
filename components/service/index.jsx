import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BlogSection from '../home/blog-section';
import ServiceChooseSection from './service-choose-section';
import ServicesSection from './services-section';
import HeaderTwo from '../../layout/headers/headertwo';
import FooterTwo from '../../layout/footers/footertwo';



const index = () => {
    return (
        <main>
            <HeaderTwo />
            <Breadcrumb breadTitle={'what we do'} breadSubtitle={'NDIS Provider'} breadHome={'Home'} breadMenu={'services'} bgBackground={"bg-about.png"}/>
            <ServicesSection />
            <ServiceChooseSection />
            {/* <BlogSection /> */}
            <FooterTwo />
        </main>
    );
};

export default index;