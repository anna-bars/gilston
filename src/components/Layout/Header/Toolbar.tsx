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
// Նոր ֆայլերի ներմուծում մոբայլ մենյուի համար (համոզվեք, որ նկարները գոյություն ունեն)
import closeMenu from '../../../assets/close-menu.png'; // Փակման նկար
import sievingMobile from '../../../assets/sieving-mobile.png';
import screeningMobile from '../../../assets/screening-mobile.png';
import splittingMobile from '../../../assets/splitting-mobile.png';
import aggregatesMobile from '../../../assets/aggregates-mobile.png';
import asphaltMobile from '../../../assets/asphalt-mobile.png';
import concreteMobile from '../../../assets/concrete-mobile.png';
import soilsMobile from '../../../assets/soils-mobile.png';
import ovensMobile from '../../../assets/ovens-mobile.png';
import scalesMobile from '../../../assets/scales-mobile.png';
import generalLabMobile from '../../../assets/general-lab-mobile.png';
import userSvg from '../../../assets/user.svg';
import productSvg from '../../../assets/product.svg';
import parcelSvg from '../../../assets/parcel.svg';
import logoutSvg from '../../../assets/logout.svg';

import BottomHeader from './BottomHeader'
import { useState } from 'react';

// 1. Գույների և ոճերի կոնստանտներ
const styles = {
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
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    // Կատեգորիաների ցուցակ
    const categories = [
        { name: "Sieving", link: "sieve-analysis-equipment", img: sievingMobile },
        { name: "Screening", link: "screening", img: screeningMobile },
        { name: "Sample Splitting", link: "sampling-dividing", img: splittingMobile },
        { name: "Aggregates", link: "aggregate-testing-equipment", img: aggregatesMobile },
        { name: "Asphalt", link: "asphalt-testing-equipment", img: asphaltMobile },
        { name: "Concrete", link: "concrete-testing-equipment", img: concreteMobile },
        { name: "Soils", link: "soil-testing-equipment", img: soilsMobile },
        { name: "Ovens and Furnaces", link: "ovens-and-furnaces", img: ovensMobile },
        { name: "Scales and Balances", link: "scales-balances", img: scalesMobile },
        { name: "General Labs", link: "pans-tools-glassware", img: generalLabMobile },
    ];

    // Աջակցության ցուցակների ընդհանուր ոճ
    const listStyle = "py-3 px-3 border-bottom border-light position-relative";
    const linkStyle = "d-flex align-items-center text-decoration-none";
    const textStyle = "fs-6 text-primary fw-bold mb-0";
    const arrowStyle = "fa fa-angle-right fs-5 fw-bold position-absolute end-0 me-3";

    return (
        // Այստեղ օգտագործվում են Offcanvas-ին մոտ դասեր, սակայն `mobile-menu-area` և `mobile-menu1`
        // դասերի ֆիքսված px չափերը պահանջում են Custom CSS կամ inline ոճեր
        <div 
            className={`position-fixed top-0 end-0 h-100 mobile-menu-area ${isOpen ? 'mobile-menu-open' : ''}`}
            style={{ 
                zIndex: 999999, 
                transition: 'all .5s ease-in-out',
                overflowX: 'hidden',
                backgroundColor: 'rgba(0,0,0,0.7)',
                width: isOpen ? '100%' : '0' // Կառավարում է բացված/փակված վիճակը
            }}
            onClick={(e) => {
                // Եթե սեղմում ենք մենյուի կոնտեյների վրա, բայց ոչ բուն մենյուի վրա
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            {/* Բուն մենյուի բլոկը */}
            <div 
                className="mobile-menu1 bg-white position-absolute top-0 end-0"
                style={{
                    width: '80%', // Custom CSS-ից
                    height: '100%',
                    overflowY: 'auto',
                    padding: '50px 0 100px 0', // Custom CSS-ից
                }}
            >
                {/* Փակման կոճակը */}
                <div className="close-btn position-absolute" style={{top: '25px', left: '25px', cursor: 'pointer'}} onClick={onClose}>
                    <img loading="lazy" src={closeMenu} alt="Close Menu" />
                </div>

                {/* Կատեգորիաներ */}
                <h3 className="fs-6 text-secondary text-uppercase fw-bold py-3 px-3 border-bottom border-light mb-0" style={{color: '#535353', fontSize: '15px'}}>Shop by Category</h3>
                <ul className="list-unstyled mb-0">
                    {categories.map((cat) => (
                        <li key={cat.name} className={listStyle} style={{padding: '13px 15px'}}>
                            <a href={`https://www.globalgilson.com/${cat.link}`} className={linkStyle}>
                                <img loading="lazy" src={cat.img} alt={cat.name} style={{width: '50px', height: '50px', objectFit: 'contain', marginRight: '15px'}}/>
                                <p className="fs-5 fw-bold mb-0" style={{color: styles.colors.textBlue, fontSize: '17px'}}>{cat.name}</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Account Բաժին */}
                <div className="mob-account-list mt-4">
                    <h3 className="fs-6 text-secondary text-uppercase fw-bold py-3 px-3 border-bottom border-light mb-0" style={{color: '#535353', fontSize: '15px'}}>Account</h3>
                    <ul className="list-unstyled mb-0">
                        {/* My Account */}
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/customer/info" className={linkStyle}>
                                <img loading="lazy" src={userSvg} alt="My Account" className="svgimg me-2" style={{width: '18px', height: '18px', marginRight: '10px'}}/>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>My Account</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        {/* Order History */}
                         <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/order/history" className={linkStyle}>
                                <img loading="lazy" src={productSvg} alt="Order History" className="svgimg me-2" style={{width: '18px', height: '18px', marginRight: '10px'}}/>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Order History</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        {/* Returns */}
                         <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="#" className={linkStyle}>
                                <img loading="lazy" src={parcelSvg} alt="Returns" className="svgimg me-2" style={{width: '18px', height: '18px', marginRight: '10px'}}/>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Returns</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        {/* Logout */}
                         <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/logout" className={linkStyle}>
                                <img loading="lazy" src={logoutSvg} alt="Logout" className="svgimg me-2" style={{width: '18px', height: '18px', marginRight: '10px'}}/>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Logout</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Tools Բաժին */}
                <div className="mob-account-list mt-4">
                     <h3 className="fs-6 text-secondary text-uppercase fw-bold py-3 px-3 border-bottom border-light mb-0" style={{color: '#535353', fontSize: '15px'}}>Tools</h3>
                    <ul className="list-unstyled mb-0">
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/gilson-catalog" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px', marginLeft: '28px'}}>Catalog</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/quick-order" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px', marginLeft: '28px'}}>Quick Order</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="#" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px', marginLeft: '28px'}}>Reorder</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="#" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px', marginLeft: '28px'}}>Saved Carts</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/favoriteslist" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px', marginLeft: '28px'}}>Lists</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Resources Բաժին */}
                <div className="mob-account-list mt-4">
                    <h3 className="fs-6 text-secondary text-uppercase fw-bold py-3 px-3 border-bottom border-light mb-0" style={{color: '#535353', fontSize: '15px'}}>Resources</h3>
                    <ul className="list-unstyled mb-0">
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/blog" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px', marginLeft: '28px'}}>Blog</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/gilson-videos" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px', marginLeft: '28px'}}>Video Library</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/product-manuals" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px', marginLeft: '28px'}}>Manuals and Instructions</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/product-sds" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px', marginLeft: '28px'}}>SDS</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/360-product-views" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px', marginLeft: '28px'}}>Product 360s</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Replacement Parts Կոճակ */}
                <div className="part-btn">
                    <a href="https://www.globalgilson.com/replacement-parts" 
                       className="btn text-white fw-bold d-block text-center mx-3 my-4 py-3" 
                       style={{ background: styles.colors.gilsonGreen, fontSize: '15px', borderRadius: '5px' }}>
                        Replacement Parts
                    </a>
                </div>

                {/* Կոնտակտային Բաժին */}
                <div className="mob-menu-contact px-3 pt-1 pb-4">
                    {/* Սփրայթ նկարի դասը պահպանված է, որպեսզի աշխատի ֆոնային նկարը */}
                    <div className="sprite-img menu-contact-img" style={{display: 'block', margin: '0 auto 25px auto'}}></div>
                    <div className="mob-contact-text text-center">
                        <h4 className="fs-6 fw-bold mb-2" style={{color: styles.colors.gilsonDarkBlue, fontSize: '16px'}}>We're here to help</h4>
                        <p className="fs-7" style={{color: '#424445', fontSize: '14px'}}>We'll do anything we can to help find and answer to your question.</p>
                        <div className="mob-call-btn position-relative text-center mt-3">
                            <a href="#" className="d-inline-flex align-items-center justify-content-center text-decoration-none px-3 py-2 border rounded" 
                               style={{border: `1px solid ${styles.colors.borderGrey}`, background: '#fff', color: styles.colors.textBlue, fontSize: '14px'}}>
                                <i className="fa fa-phone me-2 fs-4 fw-bold"></i> 800-444-1508
                            </a>
                            {/* Սա ապահովելու համար Custom CSS կպահանջվի, որը չի նշված կոդում */}
                        </div>
                    </div>

                    {/* Աջակցության Իկոններ */}
                    <div className="support-text mt-4 px-3">
                        <ul className="list-unstyled d-flex justify-content-around">
                            {/* Call */}
                            <li className="position-relative">
                                <a href="tel:18004441508" className="position-absolute w-100 h-100 top-0 start-0">call</a>
                                <div className="support-icon">
                                    <i className="fa fa-phone p-3 rounded text-white" style={{background: styles.colors.gilsonOrange, fontSize: '20px'}}></i>
                                </div>
                                <div className="call-text1">
                                    <p className="text-center fw-bold fs-6 mt-1" style={{color: '#424445'}}>Call</p>
                                </div>
                            </li>
                             {/* Text */}
                            <li className="position-relative">
                                <a href="sms://18004441508" className="position-absolute w-100 h-100 top-0 start-0">Text</a>
                                <div className="support-icon">
                                    <i className="fa fa-commenting-o p-3 rounded text-white" style={{background: styles.colors.gilsonOrange, fontSize: '20px'}}></i>
                                </div>
                                <div className="call-text1">
                                    <p className="text-center fw-bold fs-6 mt-1" style={{color: '#424445'}}>Text</p>
                                </div>
                            </li>
                             {/* Chat */}
                            <li className="position-relative">
                                <a href="https://home-c33.nice-incontact.com/incontact/chatclient/chatclient.aspx?poc=e441b03a-781f-49b4-b063-dc0320b162d7&amp;bu=4598504" target="_blank" rel="noreferrer" className="position-absolute w-100 h-100 top-0 start-0">Chat</a>
                                <div className="support-icon">
                                    <i className="fa fa-comments p-3 rounded text-white" style={{background: styles.colors.gilsonOrange, fontSize: '20px'}}></i>
                                </div>
                                <div className="call-text1">
                                    <p className="text-center fw-bold fs-6 mt-1" style={{color: '#424445'}}>Chat</p>
                                </div>
                            </li>
                             {/* Email */}
                            <li className="position-relative">
                                <a href="mailto:customerservice@gilsonco.com" className="position-absolute w-100 h-100 top-0 start-0">Email</a>
                                <div className="support-icon">
                                    <i className="fa fa-envelope p-3 rounded text-white" style={{background: styles.colors.gilsonOrange, fontSize: '20px'}}></i>
                                </div>
                                <div className="call-text1">
                                    <p className="text-center fw-bold fs-6 mt-1" style={{color: '#424445'}}>Email</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Callback / Support Ticket */}
                    <div className="mob-call-back mt-4">
                        <ul className="list-unstyled d-flex justify-content-center align-items-center position-relative">
                             {/* Ուղղահայաց բաժանարարի համար անհրաժեշտ է Custom CSS::after */}
                            <li className="mx-3">
                                <a href="#" className="text-center d-inline-block p-3 text-decoration-none" style={{border: '1px solid transparent', borderRadius: '5px'}}>
                                    <div className="sprite-img call-back" style={{width: '20px', height: '20px', display: 'inline-block'}}></div>
                                    <p className="fs-7 fw-bold mb-1 lh-sm" style={{color: styles.colors.textBlue, fontSize: '14px'}}>Request Callback</p>
                                    <i className="fa fa-angle-right fs-6" aria-hidden="false"></i>
                                </a>
                            </li>
                            <li className="mx-3">
                                <a href="#" className="text-center d-inline-block p-3 text-decoration-none" style={{border: '1px solid transparent', borderRadius: '5px'}}>
                                    <div className="sprite-img support-ticket" style={{width: '20px', height: '20px', display: 'inline-block'}}></div>
                                    <p className="fs-7 fw-bold mb-1 lh-sm" style={{color: styles.colors.textBlue, fontSize: '14px'}}>Support Ticket</p>
                                    <i className="fa fa-angle-right fs-6" aria-hidden="false"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Fax */}
                    <div className="mob-call-btn text-center mt-3" style={{border: 'none'}}>
                        <div className="sprite-img fax-icon me-1" style={{width: '25px', height: '25px', display: 'inline-block'}}></div> 740-548-5314
                    </div>

                    {/* Սոցիալական Մեդիա */}
                    <div className="newsletter-area mt-4 px-3">
                        <ul className="list-unstyled d-flex justify-content-start">
                            <li className="me-2"><a href="https://www.facebook.com/GilsonCompany" className="text-decoration-none"><div className="sprite-img fb-icon" style={{width: '26px', height: '26px', display: 'inline-block'}}></div></a></li>
                            <li className="me-2"><a href="https://www.instagram.com/gilsoncompanyinc" className="text-decoration-none"><div className="sprite-img insta-icon" style={{width: '26px', height: '26px', display: 'inline-block'}}></div></a></li>
                            <li className="me-2"><a href="https://twitter.com/gilsoncompany" className="text-decoration-none"><div className="sprite-img twitter-icon" style={{width: '26px', height: '26px', display: 'inline-block'}}></div></a></li>
                            <li className="me-2"><a href="https://www.linkedin.com/company/gilson-company-inc." className="text-decoration-none"><div className="sprite-img linkedin-icon" style={{width: '26px', height: '26px', display: 'inline-block'}}></div></a></li>
                            <li className="me-2"><a href="https://www.youtube.com/user/GilsonCompanyInc" className="text-decoration-none"><div className="sprite-img youtube-icon" style={{width: '26px', height: '26px', display: 'inline-block'}}></div></a></li>
                            <li className="me-2"><a href="https://www.globalgilson.com/news/rss/1" className="text-decoration-none"><div className="sprite-img social-icon" style={{width: '26px', height: '26px', display: 'inline-block'}}></div></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


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
                                <div className="me-3 text-center"><i className="fa fa-phone fs-4" style={{color: styles.colors.textBlue}}></i><p className="m-0" style={{fontSize: '10px'}}>Contact</p></div>
                                <div onClick={toggleMobileMenu} className="text-center" style={{cursor: 'pointer'}}><i className="fa fa-bars fs-3" style={{color: styles.colors.textBlue}}></i><p className="m-0" style={{fontSize: '10px'}}>Menu</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="row align-items-center">
                            <div className="col-md-5 ms-auto border-end" style={{ borderColor: styles.colors.borderGrey }}>
                                <div className="d-flex align-items-center justify-content-end pe-3">
                                    <div className="me-2"><i className="fa fa-phone" style={{ fontSize: '28px', border: `1px solid ${styles.colors.textBlue}`, borderRadius: '5px', padding: '5px 8px', color: styles.colors.textBlue }}></i></div>
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