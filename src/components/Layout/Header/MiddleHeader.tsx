import { useState } from 'react';
import topAngle from '../../../assets/top-angle.png';
import logo from '../../../assets/logo.png';
import userIcon from '../../../assets/user-icon.png';
import myAccount from '../../../assets/my-account.png';
import orderDetail from '../../../assets/order-detail.png';
import pareclIcon from '../../../assets/parcel-icon.png';
import logOutIcon from '../../../assets/logout-icon.png';
import cartIcon from '../../../assets/grocery-store.png';
import toolsIcon from '../../../assets/settings.png';
import searchIcon from '../../../assets/loupe.png';

import contactIcon from '../../../assets/toolbar/phone-receiver-silhouette.png'
import hamburgerIcon from '../../../assets/toolbar/hamburger.png'

import phoneImg from '../../../assets/phone-receiver-silhouette.png'
import { CartDropdown } from './CartDropdown';
import { styles } from './style/headerstyle';

export const MiddleHeader = ({ toggleMobileMenu }: { toggleMobileMenu: () => void }) => {
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
                                        </i><img loading="lazy" src={contactIcon} alt="Live Chat" /><p className="m-0" style={{fontSize: '10px'}}>Contact</p></div>
                                <div onClick={toggleMobileMenu} className="text-center" style={{cursor: 'pointer'}}><i className="fa fa-bars fs-3" style={{color: styles.colors.textBlue}}></i><img loading="lazy" src={hamburgerIcon} alt="Live Chat" /><p className="m-0" style={{fontSize: '10px'}}>Menu</p></div>
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
                                                 <div className="text-center position-absolute" style={{ top: '-9px', right: '30px' }}></div>
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

                                    <div className="position-relative ps-2 pe-3" 
                                        style={{ cursor: 'pointer', paddingRight: '18px' }}
                                        onMouseEnter={() => setIsCartHovered(true)}
                                        onMouseLeave={() => setIsCartHovered(false)}>
                                        
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="me-0">
                                                 <img src={cartIcon} alt="cart" />
                                            </div>
                                            <h4 className="m-0 mt-1" style={{ color: 'rgb(0 45 88 / 80%)', fontSize: '12px' }}>Cart</h4>
                                        </div>

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
