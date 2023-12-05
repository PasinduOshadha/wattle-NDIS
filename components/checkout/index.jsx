import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import CheckOutSection from './checkout-section';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'checkout'} breadSubtitle={'NDIS Provider'} breadHome={'Home'} breadMenu={'checkout'} />
            <CheckOutSection />
            <FooterOne />
        </main>
    );
};

export default index;