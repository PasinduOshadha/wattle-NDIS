import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BrandSliderTwo from '../elements/brand/brand-slider-two';
import AboutFeatureSection from './about-feature-section';
import AboutTimeline from './about-timeline';
import AboutVideoSection from './about-video-section';
import AboutUsSection from './aboutus-section';
import HeaderTwo from '../../layout/headers/headertwo';
import FooterTwo from '../../layout/footers/footertwo';


const AboutMain = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb breadTitle={'about us'} breadSubtitle={'NDIS Provider'} breadHome={'Go to Home'} breadMenu={'about us'} bgBackground={"bg-about.png"}/>
                <AboutUsSection />
                {/* <AboutFeatureSection /> */}
                {/* <AboutVideoSection />
                <BrandSliderTwo />
                <AboutTimeline /> */}
            </main>
            <FooterTwo />
        </>
    );
};

export default AboutMain;