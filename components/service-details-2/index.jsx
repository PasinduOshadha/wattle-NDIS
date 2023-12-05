import React from 'react';
import ServicesList from '../../data/services-data';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import ServiceDetailsArea from './service-details-area';
import HeaderTwo from '../../layout/headers/headertwo';
import FooterTwo from '../../layout/footers/footertwo';


const item = ServicesList[1]

const index = () => {
    return (
        <main>
            <HeaderTwo />
            <ServiceDetailsArea item={{serviceTitle:"Daily Living Support"}} />
            <FooterTwo />
        </main>
    );
};

export default index;