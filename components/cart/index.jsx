import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import CartSection from './cart-section';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'my cart'} breadSubtitle={'NDIS Provider'} breadHome={'Home'} breadMenu={'my cart'} />
            <CartSection />
            <FooterOne />
        </main>
    );
};

export default index;