import topAngle from '../../../assets/top-angle.png';
import liveChat from '../../../assets/live-chat.png';
import cartItem from '../../../assets/cart-item-img.png';
import logo from '../../../assets/logo.png';
import userIcon from '../../../assets/user-icon.png';
import myAccount from '../../../assets/my-account.png';
import orderDetail from '../../../assets/order-detail.png';
import pareclIcon from '../../../assets/parcel-icon.png';
import logOutIcon from '../../../assets/logout-icon.png';
import cartIcon from '../../../assets/grocery-store.png';
import toolsIcon from '../../../assets/settings.png';
import searchIcon from '../../../assets/loupe.png';

import phoneImg from '../../../assets/phone-receiver-silhouette.png'
// Նոր ֆայլերի ներմուծում մոբայլ մենյուի համար (համոզվեք, որ նկարները գոյություն ունեն)


import BottomHeader from './BottomHeader'
import { useState } from 'react';
import { MobileMenu } from './MobileMenuLegacy';

// 1. Գույների և ոճերի կոնստանտներ
export const styles = {
    colors: {
        bgTop: '#f4f5f6',
        borderGrey: '#d6d8db',
        textBlue: '#002d58', // Ձեր հիմնական կապույտը
        lightBlue: '#658dbc',
        placeholder: '#a3abb7',
        navHover: '#597aa8',
        navBorder: '#294f73',
        gilsonOrange: '#f59a1f', // Աջակցության կոճակի նարնջագույնը
        gilsonGreen: '#88c633', // Կոճակի կանաչը
        gilsonDarkBlue: '#002d5c' // Կոնտակտի գլխագրի կապույտը
    },
    fonts: {
        headerTitle: '14px',
        navLink: '14px',
    },
    search: {
        height: '45px',
        borderRadiusInput: '5px 0 0 5px',
        borderRadiusBtn: '0 5px 5px 0',
    }
};



// Կոմպոնենտ Մոբայլ Մենյուի համար (Offcanvas)


const TopHeader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isContactOpen, setIsContactOpen] = useState(false);

    if (!isVisible) return null;

    const linkStyle = {
        color: styles.colors.lightBlue,
        fontSize: '14px',
        padding: '12px 18px',
        borderLeft: `1px solid ${styles.colors.borderGrey}`,
        display: 'block',
        textDecoration: 'none'
    };

    return (
        <div className="position-relative" style={{ backgroundColor: styles.colors.bgTop, borderBottom: `1px solid ${styles.colors.borderGrey}`, zIndex: 9999 }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="py-2">
                            <h1 className="m-0 fw-normal" style={{ fontSize: '14px', color: 'rgb(0 45 88 / 60%)' }}>
                                Materials Testing Equipment Manufacturer & Supplier Since 1939
                            </h1>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex justify-content-end">
                            <ul className="list-unstyled d-flex m-0 p-0 align-items-center">
                                <li className="position-relative"
                                    onMouseEnter={() => setIsContactOpen(true)}
                                    onMouseLeave={() => setIsContactOpen(false)}
                                >
                                    <a href="https://www.globalgilson.com/contact-us" style={linkStyle}>
                                        Contact Us <i className="fa fa-angle-down ms-1" style={{ color: '#7b92a8' }}></i>
                                    </a>
                                    
                                    {isContactOpen && (
                                        <div className="position-absolute bg-white shadow p-3 rounded start-0" style={{ top: '100%', width: '280px', zIndex: 1000 }}>
                                            <div className="text-center position-absolute" style={{ top: '-9px', left: '20px' }}>
                                                <img src={topAngle} alt="arrow" />
                                            </div>
                                            <div className="d-flex align-items-center border-bottom pb-2 mb-2">
                                                <div className="me-2"><img src={liveChat} alt="Live Chat" /></div>
                                                <p className="m-0 fw-bold" style={{ color: '#002d58' }}>Live Chat</p>
                                            </div>
                                            <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>Email</h4>
                                            <ul className="list-unstyled ps-0 mb-2">
                                                <li><a href="mailto:customerservice@gilsonco.com" className="text-decoration-none text-secondary" style={{fontSize: '13px'}}>US Sales</a></li>
                                                <li><a href="mailto:international@gilsonco.com" className="text-decoration-none text-secondary" style={{fontSize: '13px'}}>International Sales</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li><a href="#" style={linkStyle}>Order Status</a></li>
                                <li><a href="https://www.globalgilson.com/support-center" style={linkStyle}><i className="fa fa-question-circle me-1" style={{ color: '#7b92a8' }}></i> Help</a></li>
                                <li><a href="https://www.globalgilson.com/about-us" style={{ ...linkStyle, borderRight: `1px solid ${styles.colors.borderGrey}` }}><i className="fa fa-info-circle me-1" style={{ color: '#7b92a8' }}></i> About Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <i className="fa fa-close position-absolute top-50 end-0 translate-middle-y me-3" title="Close" onClick={() => setIsVisible(false)} style={{ cursor: 'pointer', color: '#333' }}></i>
            </div>
        </div>
    );
};

const CartDropdown = () => {
    return (
        <div className="position-absolute bg-white shadow rounded end-0 mt-0" style={{ top: '100%', width: '300px', zIndex: 1000, cursor: 'default' }}>
            <div className="position-absolute" style={{ top: '-9px', right: '15px' }}>
                <img src={topAngle} alt="arrow" />
            </div>
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-light rounded-top">
                <h4 className="m-0" style={{ fontSize: '14px', color: '#002d58' }}>Cart (2 Items)</h4>
                <h4 className="m-0 fw-bold" style={{ fontSize: '14px', color: '#002d58' }}>$61.00</h4>
            </div>
            <div className="cart-items p-0">
                <ul className="list-unstyled m-0">
                    {[1, 2].map((item) => (
                        <li key={item} className="d-flex p-3 border-bottom">
                            <div className="me-2" style={{ width: '60px' }}><img src={cartItem} alt="Product" className="img-fluid border" /></div>
                            <div className="flex-grow-1">
                                <h3 className="m-0 mb-1" style={{ fontSize: '13px', lineHeight: '1.4', color: '#333' }}>3" Sieve, All Stainless, Full Height, 3/8"</h3>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div><h4 className="d-inline-block me-2 m-0 border px-2 bg-light">1</h4><h5 className="d-inline-block m-0 fw-bold" style={{ fontSize: '14px' }}>$35.50</h5></div>
                                    <div><i className="fa fa-pencil-square-o text-primary me-2" style={{cursor: 'pointer'}}></i><i className="fa fa-trash-o text-danger" style={{cursor: 'pointer'}}></i></div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-3">
                <a href="https://www.globalgilson.com/order/checkout" className="btn btn-primary w-100 mb-2 text-white fw-bold" style={{ background: '#002d58', border: 'none' }}>Proceed to Checkout</a>
                <a href="https://www.globalgilson.com/cart" className="btn btn-outline-secondary w-100 fw-bold">View Cart</a>
            </div>
        </div>
    );
};

const MiddleHeader = ({ toggleMobileMenu }: { toggleMobileMenu: () => void }) => {
    const [isCartHovered, setIsCartHovered] = useState(false);
    const [isAccountHovered, setIsAccountHovered] = useState(false);
    const [isToolsHovered, setIsToolsHovered] = useState(false);

    return (
        <div className="py-3 bg-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4 col-6">
                                <a href="https://www.globalgilson.com"><img loading="eager" src={logo} alt="Gilson Company, Inc." width="210" height="85" className="img-fluid" /></a>
                            </div>
                            <div className="col-lg-8 col-md-8 d-none d-lg-block">
                                <form action="#" method="post">
                                    <div className="d-flex align-items-center position-relative">
                                        <input type="text" className="form-control" placeholder="Search For Product or model #"
                                            style={{ height: styles.search.height, borderColor: styles.colors.lightBlue, borderRight: 0, borderRadius: styles.search.borderRadiusInput, color: 'rgb(0 45 88 / 50%)', boxShadow: 'none' }} />
                                        <button type="submit" className="d-flex align-items-center justify-content-center"
                                            style={{ height: styles.search.height, width: '45px', border: `1px solid ${styles.colors.lightBlue}`, borderLeft: 0, backgroundColor: '#fff', borderRadius: styles.search.borderRadiusBtn, cursor: 'pointer' }}>
                                            <img src={searchIcon} alt="search" width="16px" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-6 d-lg-none d-flex justify-content-end align-items-center">
                                <div className="me-3 text-center">
                                    <i className="fa fa-phone fs-4" style={{color: styles.colors.textBlue}}>
                                        </i><p className="m-0" style={{fontSize: '10px'}}>Contact</p></div>
                                <div onClick={toggleMobileMenu} className="text-center" style={{cursor: 'pointer'}}><i className="fa fa-bars fs-3" style={{color: styles.colors.textBlue}}></i><p className="m-0" style={{fontSize: '10px'}}>Menu</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="row align-items-center">
                            <div className="col-md-5 ms-auto border-end" style={{ borderColor: styles.colors.borderGrey }}>
                                <div className="d-flex align-items-center justify-content-end pe-3">
                                    <div className="me-2"><i className="fa fa-phone" style={{ fontSize: '28px', border: `1px solid ${styles.colors.textBlue}`, borderRadius: '5px', padding: '5px 8px', color: styles.colors.textBlue, display: 'flex', alignItems: 'center', height: '100%' }}
><img loading="lazy" src={phoneImg} alt="Live Chat" /></i></div>
                                    <div className="text-end" style={{ lineHeight: 1.2 }}><p className="m-0" style={{ fontSize: '14px', color: '#686868' }}>Have a question? Call us</p><p className="m-0"><em style={{ color: styles.colors.lightBlue, fontSize: '24px', fontWeight: 'bold', fontStyle: 'normal' }}>800-444-1508</em></p></div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="d-flex align-items-center justify-content-end">
                                    
                                    {/* Tools with Hover Dropdown */}
                                    <div className="text-center me-3 position-relative" 
                                         style={{cursor: 'pointer'}}
                                         onMouseEnter={() => setIsToolsHovered(true)}
                                         onMouseLeave={() => setIsToolsHovered(false)}
                                    >
                                        <div className="mb-1"><img src={toolsIcon} alt="Tools" /></div>
                                        <p className="m-0" style={{ fontSize: '12px', color: 'rgb(0 45 88 / 80%)' }}>Tools</p>
                                        
                                        {isToolsHovered && (
                                            <div className="position-absolute bg-white shadow p-3 rounded start-50 translate-middle-x" style={{ top: '100%', width: '180px', zIndex: 1050, marginTop: '10px' }}>
                                                 <div className="text-center position-absolute" style={{ top: '-9px', left: '50%', transform: 'translateX(-50%)' }}>
                                                    <img src={topAngle} alt="arrow" />
                                                </div>
                                                <ul className="list-unstyled m-0 text-start">
                                                    <li className="mb-2"><a href="https://www.globalgilson.com/online-catalog" target="_blank" rel="noreferrer" className="text-decoration-none" style={{color: styles.colors.lightBlue, fontSize: '13px'}}>Online Catalog</a></li>
                                                    <li className="mb-2"><a href="quick-order" className="text-decoration-none" style={{color: styles.colors.lightBlue, fontSize: '13px'}}>Quick Order</a></li>
                                                    <li className="mb-2"><a href="#" className="text-decoration-none" style={{color: styles.colors.lightBlue, fontSize: '13px'}}>Reorder</a></li>
                                                    <li className="mb-2"><a href="https://www.globalgilson.com/recentlyviewedproducts" className="text-decoration-none" style={{color: styles.colors.lightBlue, fontSize: '13px'}}>Recently Viewed</a></li>
                                                    <li><a href="https://www.globalgilson.com/favoriteslist" className="text-decoration-none" style={{color: styles.colors.lightBlue, fontSize: '13px'}}>Favorites List</a></li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* My Account */}
                                    <div className="d-flex align-items-center border rounded px-3 py-2 me-3 position-relative"
                                        style={{ borderColor: styles.colors.lightBlue, cursor: 'pointer' }}
                                        onMouseEnter={() => setIsAccountHovered(true)}
                                        onMouseLeave={() => setIsAccountHovered(false)}>
                                        <div className="me-2"><img src={userIcon} alt="user" /></div>
                                        <div style={{ lineHeight: 1 }}>
                                            <p className="m-0" style={{ fontSize: '12px', color: 'rgb(0 45 88 / 80%)', marginBottom: '2px' }}>Login</p>
                                            <h3 className="m-0" style={{ color: styles.colors.textBlue, fontSize: '16px', fontWeight: 'bold' }}>My Account <i className="fa fa-angle-down"></i></h3>
                                        </div>
                                        {isAccountHovered && (
                                             <div className="position-absolute bg-white shadow p-3 rounded" style={{top:'100%', right: 0, width: '220px', zIndex: 1000, marginTop: '5px'}}>
                                                 <div className="text-center position-absolute" style={{ top: '-9px', right: '30px' }}><img src={topAngle} alt="arrow" /></div>
                                                <div className="d-flex gap-2 mb-2">
                                                    <a href="#" className="btn btn-sm w-50 text-white" style={{backgroundColor: styles.colors.textBlue}}>Login</a>
                                                    <a href="#" className="btn btn-sm btn-outline-primary w-50">Sign Up</a>
                                                </div>
                                                <ul className="list-unstyled">
                                                    <li className="py-1"><a href="#" className="text-dark text-decoration-none small d-flex align-items-center"> <img src={myAccount} width="16" className="me-2"/> My Account</a></li>
                                                    <li className="py-1"><a href="#" className="text-dark text-decoration-none small d-flex align-items-center"> <img src={orderDetail} width="16" className="me-2"/> Orders</a></li>
                                                    <li className="py-1"><a href="#" className="text-dark text-decoration-none small d-flex align-items-center"> <img src={pareclIcon} width="16" className="me-2"/> Returns</a></li>
                                                    <li className="py-1"><a href="#" className="text-dark text-decoration-none small d-flex align-items-center"> <img src={logOutIcon} width="16" className="me-2"/> Logout</a></li>
                                                </ul>
                                             </div>
                                        )}
                                    </div>

                                    {/* Cart Area - Corrected Layout */}
                                    <div className="position-relative ps-2 pe-3" 
                                        style={{ cursor: 'pointer', paddingRight: '18px' }}
                                        onMouseEnter={() => setIsCartHovered(true)}
                                        onMouseLeave={() => setIsCartHovered(false)}>
                                        
                                        {/* Flex column for Icon (top) and Text (bottom) */}
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="me-0">
                                                 <img src={cartIcon} alt="cart" />
                                            </div>
                                            {/* Text Below Icon */}
                                            <h4 className="m-0 mt-1" style={{ color: 'rgb(0 45 88 / 80%)', fontSize: '12px' }}>Cart</h4>
                                        </div>

                                        {/* Absolute Positioned Number - Top Right of the container */}
                                        <p className="m-0 fw-bold" style={{ 
                                            position: 'absolute', 
                                            top: '0px', 
                                            right: '0px', 
                                            fontSize: '18px', 
                                            color: styles.colors.textBlue,
                                            lineHeight: 1
                                        }}>2</p>
                                        
                                        {isCartHovered && <CartDropdown />}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export const Toolbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="sticky-top" style={{ top: 0, zIndex: 9999 }}>
            <TopHeader />
            <MiddleHeader toggleMobileMenu={toggleMobileMenu} />
            <BottomHeader />
            
            {/* ՆԵՐԱՌՎԱԾ ՄՈԲԱՅԼ ՄԵՆՅՈՒՆ */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
        </header>
    );
};

export default Toolbar;