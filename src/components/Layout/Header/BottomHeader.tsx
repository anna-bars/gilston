import { useState } from "react";
import MegaMenu from "./MegaMenu";
import {navItems} from '../../../data/menudata/menuData'
import { styles } from "./style/headerstyle";

import searchIcon from '../../../assets/haeder-component/loupe.png';
import cartIcon from '../../../assets/haeder-component/grocery-store.png';
import userIcon from '../../../assets/haeder-component/user.png';

export const NavItem = ({ item, isLast, menuData }: { item: any, isLast: boolean, menuData?: any }) => {
    const [hover, setHover] = useState(false);

    return (
        <li 
            className="flex-fill text-center " 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <a 
                href={`https://www.globalgilson.com/${item.link}`}
                className="d-block text-white fw-bold text-decoration-none py-3"
                style={{
                    fontSize: '16px',
                    transition: 'all .4s ease-in-out',
                    backgroundColor: hover ? styles.colors.navHover : 'transparent',
                    borderRight: isLast ? 'none' : `1px solid ${styles.colors.navBorder}`
                }}
            >
                {item.name}
            </a>

            {hover && menuData && (
                <MegaMenu data={menuData} />
            )}
        </li>
    );
};

const BottomHeader = () => { 
    return (
        <div style={{ 
            backgroundColor: styles.colors.textBlue, 
            boxShadow: '0 3px 8px rgba(115,116,118,1)',
        }} className="py-2 py-lg-0">
            <div className="container" style={{ maxWidth: '98%'}}>
                <div className="row">
                    <div className="col-md-12">
                        {/* Desktop Menu */}
                        <div className="d-none d-lg-block">
                            <ul className="d-flex justify-content-between m-0 p-0 list-unstyled w-100">
                                {navItems.map((item, index) => (
                                    <NavItem 
                                        key={item.name} 
                                        item={item} 
                                        isLast={index === navItems.length - 1} 
                                        menuData={item.data} 
                                    />
                                ))}
                            </ul>
                        </div>

                        {/* Mobile Menu */}
                        <div className="d-lg-none">
                            <div className="row align-items-center">
                                {/* Search Form */}
                                <div className="col-7">
                                    <form action="#" method="post">
                                        <div className="form-group d-flex align-items-center mb-0">
                                            <input 
                                                id="mobsearch"
                                                type="text" 
                                                name="search" 
                                                className="form-control search-input" 
                                                placeholder="Search"
                                                style={{
                                                    height: '35px',
                                                    border: `1px solid ${styles.colors.lightBlue}`,
                                                    borderRight: 'none',
                                                    borderRadius: '4px 0 0 4px',
                                                    fontSize: '14px'
                                                }}
                                            />
                                            <button 
                                                type="submit" 
                                                className="d-flex align-items-center justify-content-center"
                                                style={{
                                                    height: '35px',
                                                    width: '40px',
                                                    border: `1px solid ${styles.colors.lightBlue}`,
                                                    borderLeft: 'none',
                                                    backgroundColor: '#fff',
                                                    borderRadius: '0 4px 4px 0',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                <img src={searchIcon} alt="search" width="16px" />
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* Account & Cart */}
                                <div className="col-5">
                                    <ul className="d-flex justify-content-end list-unstyled m-0">
                                        <li className="me-3">
                                            <div className="account-tools text-center">
                                                <a 
                                                    href="https://www.globalgilson.com/customer/info" 
                                                    className="text-decoration-none"
                                                >
                                                    <i 
                                                        className="fa fa-user fs-5" 
                                                        style={{color: '#fff'}}
                                                    ><img loading="lazy" src={userIcon} alt="Live Chat" /></i>
                                                    <p className="m-0 small text-white" style={{fontSize: '12px'}}>Account</p>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="cart-area text-center position-relative">
                                                <a 
                                                    href="https://www.globalgilson.com/cart" 
                                                    className="text-decoration-none position-relative"
                                                >
                                                    <i 
                                                        className="fa fa-shopping-cart fs-5" 
                                                        style={{color: '#fff'}}
                                                    ><img loading="lazy" src={cartIcon} alt="Live Chat" /></i>
                                                    <span 
                                                        className="position-absolute badge fw-bold"
                                                        style={{
                                                            top: '-5px',
                                                            right: '-5px',
                                                            fontSize: '12px',
                                                            minWidth: '18px',
                                                            height: '12px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            padding: '2px 4px',
                                                            backgroundColor: styles.colors.textBlue,
                                                            color: '#fff',
                                                            lineHeight: 1
                                                        }}
                                                    >2</span>
                                                    <p className="m-0 small text-white" style={{fontSize: '12px'}}>Cart</p>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomHeader;