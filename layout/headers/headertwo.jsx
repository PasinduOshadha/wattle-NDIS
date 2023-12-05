import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from '../../components/common/sidebar';
import SidebarCart from '../../components/common/sidebar-cart';
import useCartInfo from '../../hooks/use-cart-info';
import useGlobalContext from '../../hooks/use-context';
import HeaderTopTwo from './headertoptwo';

import NavMenu from './navmenu';

const HeaderTwo = () => {
    const [openCart, setOpenCart] = useState(false)
    const dispatch = useDispatch();
    const { quantity } = useCartInfo();
    //for mobile menu
    const { setShowSidebar } = useGlobalContext();


    // Sticky Menu Area start
    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    });

    const sticky = (e) => {
        const header = document.querySelector('.meta-header-area');
        const scrollTop = window.scrollY;
        scrollTop >= 140 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };
    // Sticky Menu Area End

    return (
        <>
            <header className="header2">
                <HeaderTopTwo />
                <div id="header-sticky" className="meta-header-area">
                    <div className="container">
                        <div className="meta-header-inner">
                            <div className="meta-header-left">
                                <div className="header-logo header2-logo">
                                    <Link href="/"><a className="logo-w"><img src="/assets/img/logo/5.png" alt="logo-img" /></a></Link>
                                </div>
                            </div>
                            <div className="meta-header-right">
                                <div className="meta-items meta-header-meta-items d-none d-lg-inline-flex">
                                    <div className="meta-item">
                                        <div className="meta-item-icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="meta-item-content">
                                            {/* <p style={{ color: "white", opacity: "0.8" }}>Contact</p> */}
                                            <div className="meta-title">+61-405-344-594</div>
                                            <div className="meta-title">+61-484-655-174
                                            </div>
                                        </div>
                                    </div>
                                    <div className="meta-item d-none d-xl-inline-flex">
                                        <div className="meta-item-icon">
                                            <i className="fas fa-envelope-open"></i>
                                        </div>
                                        <div className="meta-item-content">
                                            <p style={{ color: "white", opacity: "0.8" }}>
                                                Email
                                            </p>
                                            <div className="meta-title">info@wattlehealthcare.com.au</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-menu main-menu2">
                                    <nav id="mobile-menu-sticky">
                                        <NavMenu />
                                    </nav>
                                </div>
                                {/* <span className="action-btn cart-btn d-inline-flex action-item-cart" onClick={()=> setOpenCart(true)}><i
                                    className="fas fa-shopping-basket"></i><span className='product-quantity-circle-cart'>({quantity})</span></span> */}
                                <Link href="/referrels"><a className="border-btn-rounded3 d-none d-lg-inline-flex">
                                    {/* <i className="fal fa-farm"></i> */}
                                    <span>Referrels</span></a></Link>
                                <Link href="/feedback"><a className="border-btn-rounded2 d-none d-lg-inline-flex">
                                    {/* <i className="fal fa-farm"></i> */}
                                    <span>Feedback</span></a></Link>
                                <div className="menu-bar d-lg-none">
                                    <span className="side-toggle" onClick={() => setShowSidebar(true)}>
                                        <div className="bar-icon">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-main header-main2 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="header-main-content-wrapper">
                                    <div className="header-main-left header-main-left-header2">
                                        <div className="main-menu main-menu2 d-none d-lg-inline-block">
                                            <nav id="mobile-menu2">
                                                <NavMenu />
                                            </nav>
                                        </div>
                                        <div className="header-search d-none d-xl-inline-block">
                                            {/* <form action="#">
                                                <div className="single-input-field field-search">
                                                    <input type="search" placeholder="Keyword here..." />
                                                    <button type="submit"><i className="fas fa-search"></i></button>
                                                </div>
                                            </form> */}
                                        </div>
                                    </div>
                                    <div className="header-main-right header-main-right-header2">
                                        <div className="meta-item">
                                            {/* <div className="meta-item-icon">
                                                <i className="flaticon-telephone"></i>
                                            </div> */}
                                            {/* <div className="meta-item-content">
                                                <div className="meta-title">Emergency Call</div>
                                                <p><a href="tel:0493413000">+61-405-344-594</a></p>
                                            </div> */}
                                            <img src="/assets/img/service/100x100px_I Heart NDIS_2020-01.png" width={70} alt="service-img" style={{ display: "flex" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* sidebar start */}
            <Sidebar />
            {/* sidebar end */}

            {/* sidebar cart start */}
            <SidebarCart openCart={openCart} setOpenCart={setOpenCart} />
            {/* sidebar cart end */}
        </>
    );
};

export default HeaderTwo;