import closeMenu from '../../../assets/haeder-component/mobile-menu/close-menu.png';
import sievingMobile from '../../../assets/haeder-component/mobile-menu/sieving-mobile.png';
import screeningMobile from '../../../assets/haeder-component/mobile-menu/screening-mobile.png';
import splittingMobile from '../../../assets/haeder-component/mobile-menu/splitting-mobile.png';
import aggregatesMobile from '../../../assets/haeder-component/mobile-menu/aggregates-mobile.png';
import asphaltMobile from '../../../assets/haeder-component/mobile-menu/asphalt-mobile.png';
import concreteMobile from '../../../assets/haeder-component/mobile-menu/concrete-mobile.png';
import soilsMobile from '../../../assets/haeder-component/mobile-menu/soils-mobile.png';
import ovensMobile from '../../../assets/haeder-component/mobile-menu/ovens-mobile.png';
import scalesMobile from '../../../assets/haeder-component/mobile-menu/scales-mobile.png';
import generalLabMobile from '../../../assets/haeder-component/mobile-menu/general-lab-mobile.png';
import userSvg from '../../../assets/haeder-component/mobile-menu/user.svg';
import productSvg from '../../../assets/haeder-component/mobile-menu/product.svg';
import parcelSvg from '../../../assets/haeder-component/mobile-menu/parcel.svg';
import logoutSvg from '../../../assets/haeder-component/mobile-menu/logout.svg';
import { styles } from './style/headerstyle';

import mobEmail from '../../../assets/haeder-component/mobile-menu/icon/mob-email.png';
import mobPhone from '../../../assets/haeder-component/mobile-menu/icon/mob-phone-call.png';
import mobComment from '../../../assets/haeder-component/mobile-menu/icon/mob-comment.png';
import mobChatting from '../../../assets/haeder-component/mobile-menu/icon/mob-chatting.png';

import phoneIcon from '../../../assets/haeder-component/middle-header/phone-receiver-silhouette.png';
import callBackImg from '../../../assets/haeder-component/mobile-menu/icon/call-back.png';
import supportTicket from '../../../assets/haeder-component/mobile-menu/icon/support-ticket.png';
import printImg from '../../../assets/haeder-component/mobile-menu/icon/printing.png';

export const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
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

    const listStyle = "py-3 px-3 border-bottom border-light position-relative";
    const linkStyle = "d-flex align-items-center text-decoration-none";
    const textStyle = "fs-6 text-primary fw-bold mb-0";
    const arrowStyle = "fa fa-angle-right fs-5 fw-bold position-absolute end-0 me-3";

    return (
        <div 
            className={`position-fixed top-0 end-0 h-100 mobile-menu-area ${isOpen ? 'mobile-menu-open' : ''}`}
            style={{ 
                zIndex: 999999, 
                transition: 'all .5s ease-in-out',
                overflowX: 'hidden',
                backgroundColor: 'rgba(0,0,0,0.7)',
                width: isOpen ? '100%' : '0'
            }}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div 
                className="mobile-menu1 bg-white position-absolute top-0 end-0"
                style={{
                    width: '80%', 
                    height: '100%',
                    overflowY: 'auto',
                    padding: '50px 0 100px 0', 
                }}
            >
               
                <div className="close-btn position-absolute" style={{top: '25px', left: '25px', cursor: 'pointer'}} onClick={onClose}>
                    <img loading="lazy" src={closeMenu} alt="Close Menu" />
                </div>

                
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

                
                <div className="mob-account-list mt-4">
                    <h3 className="fs-6 text-secondary text-uppercase fw-bold py-3 px-3 border-bottom border-light mb-0" style={{color: '#535353', fontSize: '15px'}}>Account</h3>
                    <ul className="list-unstyled mb-0">
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/customer/info" className={linkStyle}>
                                <img loading="lazy" src={userSvg} alt="My Account" className="svgimg me-2" style={{width: '18px', height: '18px', marginRight: '10px'}}/>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>My Account</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                         <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/order/history" className={linkStyle}>
                                <img loading="lazy" src={productSvg} alt="Order History" className="svgimg me-2" style={{width: '18px', height: '18px', marginRight: '10px'}}/>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Order History</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                         <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="#" className={linkStyle}>
                                <img loading="lazy" src={parcelSvg} alt="Returns" className="svgimg me-2" style={{width: '18px', height: '18px', marginRight: '10px'}}/>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Returns</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                         <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/logout" className={linkStyle}>
                                <img loading="lazy" src={logoutSvg} alt="Logout" className="svgimg me-2" style={{width: '18px', height: '18px', marginRight: '10px'}}/>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Logout</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mob-account-list mt-4">
                     <h3 className="fs-6 text-secondary text-uppercase fw-bold py-3 px-3 border-bottom border-light mb-0" style={{color: '#535353', fontSize: '15px'}}>Tools</h3>
                    <ul className="list-unstyled mb-0">
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/gilson-catalog" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Catalog</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/quick-order" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Quick Order</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="#" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Reorder</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="#" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Saved Carts</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/favoriteslist" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Lists</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mob-account-list mt-4">
                    <h3 className="fs-6 text-secondary text-uppercase fw-bold py-3 px-3 border-bottom border-light mb-0" style={{color: '#535353', fontSize: '15px'}}>Resources</h3>
                    <ul className="list-unstyled mb-0">
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/blog" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Blog</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/gilson-videos" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Video Library</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/product-manuals" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Manuals and Instructions</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/product-sds" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>SDS</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                        <li className={listStyle} style={{padding: '13px 15px'}}>
                            <a href="https://www.globalgilson.com/360-product-views" className={linkStyle}>
                                <p className="fs-6 fw-normal mb-0" style={{color: '#597baa', fontSize: '15px'}}>Product 360s</p>
                                <i className={arrowStyle} aria-hidden="false"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="part-btn">
                    <a href="https://www.globalgilson.com/replacement-parts" 
                       className="btn text-white fw-bold d-block text-center mx-3 my-4 py-3" 
                       style={{ background: styles.colors.gilsonGreen, fontSize: '15px', borderRadius: '5px' }}>
                        Replacement Parts
                    </a>
                </div>

                <div className="mob-menu-contact px-3 pt-1 pb-4">
                    <div className="sprite-img menu-contact-img" style={{display: 'block', margin: '0 auto 25px auto'}}></div>
                    <div className="mob-contact-text text-center">
                        <h4 className="fs-6 fw-bold mb-2" style={{color: styles.colors.gilsonDarkBlue, fontSize: '16px'}}>We're here to help</h4>
                        <p className="fs-7" style={{color: '#424445', fontSize: '14px'}}>We'll do anything we can to help find and answer to your question.</p>
                        <div className="mob-call-btn position-relative text-center mt-3">
                            <a href="#" className="d-inline-flex align-items-center justify-content-center text-decoration-none px-3 py-2 border rounded" 
                               style={{border: `1px solid ${styles.colors.borderGrey}`, background: '#fff', color: styles.colors.textBlue, fontSize: '14px'}}>
                                <i className="fa fa-phone me-2 fs-4 fw-bold"><img loading="lazy" src={phoneIcon} alt="Live Chat" /></i> 800-444-1508
                            </a>
                        </div>
                    </div>

                    <div className="support-text mt-4 px-3">
                        <ul className="list-unstyled d-flex justify-content-around">
                            <li className="position-relative">
                                <a href="tel:18004441508" className="position-absolute w-100 h-100 top-0 start-0"></a>
                                <div className="support-icon">
                                    <i className="fa fa-phone p-3 rounded text-white" style={{background: styles.colors.gilsonOrange, fontSize: '20px'}}>
                                        <img loading="lazy" src={mobPhone} alt="Live Chat" />
                                    </i>
                                </div>
                                <div className="call-text1">
                                    <p className="text-center fw-bold fs-6 mt-14"  style={{ paddingTop: '20px', color: '#424445'}}>Call</p>
                                </div>
                            </li>
                            <li className="position-relative">
                                <a href="sms://18004441508" className="position-absolute w-100 h-100 top-0 start-0"></a>
                                <div className="support-icon">
                                    <i className="fa fa-commenting-o p-3 rounded text-white" style={{background: styles.colors.gilsonOrange, fontSize: '20px'}}>
                                        <img loading="lazy" src={mobChatting} alt="Live Chat" />
                                    </i>
                                </div>
                                <div className="call-text1">
                                    <p className="text-center fw-bold fs-6 mt-1" style={{ paddingTop: '20px', color: '#424445'}}>Text</p>
                                </div>
                            </li>
                            <li className="position-relative">
                                <a href="https://home-c33.nice-incontact.com/incontact/chatclient/chatclient.aspx?poc=e441b03a-781f-49b4-b063-dc0320b162d7&amp;bu=4598504" target="_blank" rel="noreferrer" className="position-absolute w-100 h-100 top-0 start-0"></a>
                                <div className="support-icon">
                                    <i className="fa fa-comments p-3 rounded text-white" style={{background: styles.colors.gilsonOrange, fontSize: '20px'}}>
                                        <img loading="lazy" src={mobComment} alt="Live Chat" />
                                    </i>
                                </div>
                                <div className="call-text1">
                                    <p className="text-center fw-bold fs-6 mt-1" style={{ paddingTop: '20px', color: '#424445'}}>Chat</p>
                                </div>
                            </li>
                            <li className="position-relative">
                                <a href="mailto:customerservice@gilsonco.com" className="position-absolute w-100 h-100 top-0 start-0"></a>
                                <div className="support-icon">
                                    <i className="fa fa-envelope p-3 rounded text-white" style={{background: styles.colors.gilsonOrange, fontSize: '20px'}}>
                                        <img loading="lazy" src={mobEmail} alt="Live Chat" />
                                    </i>
                                </div>
                                <div className="call-text1">
                                    <p className="text-center fw-bold fs-6 mt-1" style={{ paddingTop: '20px', color: '#424445'}}>Email</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="mob-call-back mt-4">
                        <ul className="list-unstyled d-flex justify-content-center align-items-center position-relative">
                            <li className="mx-3">
                                <a href="#" className="text-center d-inline-block p-3 text-decoration-none" style={{border: '1px solid transparent', borderRadius: '5px'}}>
                                    <div className="sprite-img call-back" style={{width: '20px', height: '20px', display: 'inline-block'}}><img loading="lazy" src={callBackImg} alt="Live Chat" /></div>
                                    <p className="fs-7 fw-bold mb-1 lh-sm" style={{color: styles.colors.textBlue, fontSize: '14px'}}>Request Callback</p>
                                    <i className="fa fa-angle-right fs-6" aria-hidden="false"></i>
                                </a>
                            </li>
                            <li className="mx-3">
                                <a href="#" className="text-center d-inline-block p-3 text-decoration-none" style={{border: '1px solid transparent', borderRadius: '5px'}}>
                                    <div className="sprite-img support-ticket" style={{width: '20px', height: '20px', display: 'inline-block'}}><img loading="lazy" src={supportTicket} alt="Live Chat" /></div>
                                    <p className="fs-7 fw-bold mb-1 lh-sm" style={{color: styles.colors.textBlue, fontSize: '14px'}}>Support Ticket</p>
                                    <i className="fa fa-angle-right fs-6" aria-hidden="false"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="mob-call-btn text-center mt-3" style={{border: 'none'}}>
                        <div className="sprite-img fax-icon me-1" style={{width: '25px', height: '25px', display: 'inline-block'}}><img loading="lazy" src={printImg} alt="Live Chat" /></div> 740-548-5314
                    </div>

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
   