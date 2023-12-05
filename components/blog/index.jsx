import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BlogSectionMain from './blog-section-main';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'blog & insights'} breadSubtitle={'NDIS Provider'} breadHome={'Home'} breadMenu={'Blog'} />
            <BlogSectionMain />
            <FooterOne />
        </main>
    );
};

export default index;