import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import FaqSectionTwo from '../home-2/faq-section-two';
import FaqQues from './faq-ques';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'some ans & q.'} breadSubtitle={'NDIS Provider'} breadHome={'Home'} breadMenu={'FAQ'} />
            <FaqQues />
            <FaqSectionTwo faq_area="faq-area style-2 pt-120 pb-60" />
            <FooterOne />
        </main>
    );
};

export default index;