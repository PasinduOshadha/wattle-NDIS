import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import ContactFormSection from './contact-form-section';
import ContactMapSection from './contact-map-section';
import HeaderTwo from '../../layout/headers/headertwo';
import FooterTwo from '../../layout/footers/footertwo';


const index = () => {
    return (
        <main>
            <HeaderTwo />
            <Breadcrumb breadTitle={'contact us'} breadSubtitle={'NDIS Provider'} breadHome={'Go to Home'} breadMenu={'contact'} bgBackground={"bg-about.png"}/>
            <ContactFormSection />
            <ContactMapSection />
            <FooterTwo />
        </main>
    );
};

export default index;