import React from 'react';
import ServicesList from '../../data/services-data';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import ServiceDetailsArea from './service-details-area';
import HeaderTwo from '../../layout/headers/headertwo';
import FooterTwo from '../../layout/footers/footertwo';


const item = ServicesList[3]

const index = () => {
    return (
        <main>
            <HeaderTwo />
            <ServiceDetailsArea item={{serviceTitle:"24 Hour High Intensity Nursing and Personal Care"}} />
            <FooterTwo />
        </main>
    );
};

export default index;