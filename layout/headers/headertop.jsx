import React from 'react';

const HeaderTop = () => {
    return (
        <div className="header-top-area d-none d-lg-block">
            <div className="container container-big">
                <div className="header-top-inner">
                    <div className="header-top-left">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p><a href="tel:0493413000">+61-405-344-594</a></p>
                                </div>
                            </div>
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-envelope-open"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p><a href="mailto:info@adelaidecreativegardening.au">info@adelaidecreativegardening.au</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-top-right">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p>Mon - Fri: 9:00 - 17:00 <span className="d-none d-xl-inline-block"> 
                                    {/* / Closed on 
                                        <strong> Weekends</strong> */}
                                         / Sat: 9:00 - 16:00
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="header-top-social">
                            <div className="social-links">
                                <ul>
                                    {/* <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li> */}
                                    <li><a href="https://www.facebook.com/AdelaideCreativeGardening" target={"_blank"}><i className="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;