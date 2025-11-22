import React, { useState } from 'react';

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
// Interfaces for props if needed in the future, keeping it simple for now
// Images path assumption: /images/ (Make sure to move your assets to the public folder)

const TopHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="top-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="top-header-title">
              <h1>Materials Testing Equipment Manufacturer & Supplier Since 1939</h1>
            </div>
          </div>
          <div className="col-md-8">
            <div className="top-header-list">
              <ul>
                <li>
                  <a href="https://www.globalgilson.com/contact-us">
                    Contact Us <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <div className="contact-tab">
                    <div className="top-arrow">
                      <img loading="lazy" src={topAngle} alt="arrow" />
                    </div>
                    <div className="live-chat">
                      <a
                        href="https://home-c33.nice-incontact.com/incontact/chatclient/chatclient.aspx?poc=e441b03a-781f-49b4-b063-dc0320b162d7&bu=4598504"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live Chat"
                      ></a>
                      <div className="chat-icon">
                        <img loading="lazy" src={liveChat} alt="Live Chat" />
                      </div>
                      <div className="chat-para">
                        <p>Live Chat</p>
                      </div>
                    </div>
                    <div className="contact-links">
                      <h4>Email</h4>
                      <ul>
                        <li><a href="mailto:customerservice@gilsonco.com">US Sales</a></li>
                        <li><a href="mailto:international@gilsonco.com">International Sales</a></li>
                        <li><a href="mailto:quotes@gilsonco.com">Quotes Sales</a></li>
                        <li><a href="mailto:returns@gilsonco.com">Returns</a></li>
                        <li><a href="mailto:techsupport@gilsonco.com">Technical Support</a></li>
                        <li><a href="mailto:hr@gilsonco.com">Human Resources</a></li>
                      </ul>
                    </div>
                    <div className="support-links">
                      <ul>
                        <li><a href="https://www.globalgilson.com/support-center">Support & FAQ</a></li>
                        <li><a href="https://www.globalgilson.com/feedback">Give Us Feedback</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li><a href="#">Order Status</a></li>
                <li>
                  <a href="https://www.globalgilson.com/support-center">
                    <i className="fa fa-question-circle" aria-hidden="true"></i> Help
                  </a>
                </li>
                <li>
                  <a href="https://www.globalgilson.com/about-us">
                    <i className="fa fa-info-circle" aria-hidden="true"></i> About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* React State handles visibility instead of jQuery */}
        <i
          id="mcrtl"
          className="fa fa-close"
          aria-hidden="true"
          title="Close: Do not keep menu at the top."
          onClick={() => setIsVisible(false)}
          style={{ cursor: 'pointer' }}
        ></i>
      </div>
    </div>
  );
};

const CartDropdown = () => {
  return (
    <div className="cart-tab">
      <div className="top-arrow">
        <img loading="lazy" src={topAngle} alt="arrow" />
      </div>
      <div className="cart-head">
        <div className="cart-title">
          <h4>Cart (2 Items)</h4>
        </div>
        <div className="cart-total-price">
          <h4>$61.00</h4>
        </div>
      </div>
      <div className="cart-items">
        <ul>
          <li>
            <div className="cart-item1">
              <div className="cart-pic">
                <img loading="lazy" src={cartItem} alt="Product" />
              </div>
              <div className="cart-detail">
                <h3>3" Sieve, All Stainless, Full Height, 3/8"</h3>
                <div className="cart-detail-below">
                  <div className="item-number">
                    <h4>1</h4>
                    <h5>$35.50</h5>
                  </div>
                  <div className="cart-editor">
                    <ul>
                      <li><i className="fa fa-pencil-square-o" aria-hidden="true"></i></li>
                      <li><i className="fa fa-trash-o" aria-hidden="true"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="cart-item1">
              <div className="cart-pic">
                <img loading="lazy" src={cartItem} alt="Product" />
              </div>
              <div className="cart-detail">
                <h3>3" Sieve, All Stainless, Full Height, 3/8"</h3>
                <div className="cart-detail-below">
                  <div className="item-number">
                    <h4>1</h4>
                    <h5>$35.50</h5>
                  </div>
                  <div className="cart-editor">
                    <ul>
                      <li><i className="fa fa-pencil-square-o" aria-hidden="true"></i></li>
                      <li><i className="fa fa-trash-o" aria-hidden="true"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="checkout-btn">
        <a href="https://www.globalgilson.com/order/checkout">Proceed to Checkout</a>
      </div>
      <div className="signup-btn viewcart-padding">
        <a href="https://www.globalgilson.com/cart">View Cart</a>
      </div>
    </div>
  );
};

const MiddleHeader = ({ toggleMobileMenu }: { toggleMobileMenu: () => void }) => {
  return (
    <div className="middle-header">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo and Search Area */}
          <div className="col-lg-6 col-md-12 d-1024-full">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-6">
                <div className="logo-area">
                  <a href="https://www.globalgilson.com">
                    {/* LCP Optimization: Eager load logo, explicit width/height */}
                    <img 
                        loading="eager" 
                        src={logo} 
                        alt="Gilson Company, Inc."
                        width="210"
                        height="85"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-6">
                <div className="search-form d-none d-1024-none d-lg-block">
                  <form action="#" method="post">
                    <div className="form-group d-flex align-items-center mb-0">
                      <input
                        type="text"
                        name="search"
                        className="form-control search-input"
                        placeholder="Search For Product or model #"
                      />
                      <button type="submit" className="search-btn">
                        <img loading="lazy" src={searchIcon} alt="search" width="16px" />
                    </button>

                    </div>
                  </form>
                </div>
                <div className="mob-top-right d-1024-block d-md-block d-lg-none d-block">
                  <ul>
                    <li>
                      <div className="phone-mob">
                        <a href="tel:18004441508">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          <p>Contact</p>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="menu-toggler" onClick={toggleMobileMenu}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                        <p>Menu</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Account & Cart Area */}
          <div className="col-lg-6 col-md-12">
            <div className="d-md-none d-lg-block d-none d-1024-none">
              <div className="row align-items-center">
                <div className="col-md-5 ml-auto right-divider">
                  <div className="call-area">
                    <div className="call-icon">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className="call-text-top">
                      <p>Have a question? Call us</p>
                      <p><em>800-444-1508</em></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="account-area">
                    <div className="account-tools">
                      <div className="sprite-img tool-icon">
                        <img loading="lazy" src={toolsIcon} alt="Tools" />
                      </div>
                      <p>Tools</p>
                      <div className="tool-list">
                        <div className="top-arrow">
                          <img loading="lazy" src={topAngle} alt="arrow" />
                        </div>
                        <ul >
                          <li><a href="https://www.globalgilson.com/online-catalog" target="_blank" rel="noreferrer">Online Catalog</a></li>
                          <li><a href="quick-order">Quick Order</a></li>
                          <li><a href="#">Reorder</a></li>
                          <li><a href="https://www.globalgilson.com/recentlyviewedproducts">Recently Viewed</a></li>
                          <li><a href="https://www.globalgilson.com/favoriteslist">Favorites List</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="my-account-area">
                      <div className="my-account-icon">
                        <img loading="lazy" src={userIcon} alt="user" />
                      </div>
                      <div className="my-account-text">
                        <p>Login</p>
                        <h3>My Account <i className="fa fa-angle-down" aria-hidden="true"></i></h3>
                      </div>
                      <div className="account-list">
                        <div className="top-arrow">
                          <img loading="lazy" src={topAngle} alt="arrow" />
                        </div>
                        <div className="account-btns">
                          <div className="login-btn"><a href="#">Login</a></div>
                          <div className="signup-btn"><a href="#">Sign Up</a></div>
                        </div>
                        <div className="account-option">
                          <ul>
                            <li>
                                <a href="https://www.globalgilson.com/customer/info">
                                <img loading="lazy" src={myAccount} alt="my account" />
                                My Account</a></li>
                            <li>
                                <a href="https://www.globalgilson.com/order/history">
                                <img loading="lazy" src={orderDetail} alt="order" />
                                Orders</a></li>
                            <li>
                                <a href="#">
                                    <img loading="lazy" src={pareclIcon} alt="parcel" />
                                    Returns</a></li>
                            <img loading="lazy" src={liveChat} alt="Live Chat" />
                            <li>
                                <a href="https://www.globalgilson.com/logout">
                                <img loading="lazy" src={logOutIcon} alt="logout" />
                                Logout</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="cart-area">
                      <div className="sprite-img cart-icon">
                        <img loading="lazy" src={cartIcon} alt="cart" />
                      </div>
                      <p>2</p>
                      <h4>Cart</h4>
                      <CartDropdown />
                    </div>
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

const BottomHeader = () => {
  return (
    <div className="bottom-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="menu-list d-1024-none d-lg-block d-none">
              <ul>
                {[
                  { name: "Sieving", link: "sieve-analysis-equipment" },
                  { name: "Screening", link: "screening" },
                  { name: "Sample Splitting", link: "sampling-dividing" },
                  { name: "Aggregates", link: "aggregate-testing-equipment" },
                  { name: "Asphalt", link: "asphalt-testing-equipment" },
                  { name: "Concrete", link: "concrete-testing-equipment" },
                  { name: "Soils", link: "soil-testing-equipment" },
                  { name: "General Lab", link: "pans-tools-glassware" }
                ].map((item) => (
                  <li className="flex-item" key={item.name}>
                    <a href={`https://www.globalgilson.com/${item.link}`}>{item.name}</a>
                    <div className="mega-dropdown"></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mob-bottom-list d-1024-block d-lg-none d-md-block">
              <div className="row align-items-center">
                <div id="search-form" className="col-md-7 col-7">
                  <form action="#" method="post">
                    <div className="form-group d-flex align-items-center mb-0">
                      <input
                        id="mobsearch"
                        type="text"
                        name="search"
                        className="form-control search-input d-block d-md-none d-lg-none"
                        placeholder="Search"
                      />
                      {/* Keeping the hidden input for layout consistency if needed by CSS */}
                      <input
                         type="submit"
                         name="submit"
                         value="submit"
                         className="search-btn"
                      />
                    </div>
                  </form>
                </div>
                <div id="mob-acc-cart" className="col-md-5 col-5">
                  <ul>
                    <li>
                      <div className="account-tools">
                        <a href="https://www.globalgilson.com/customer/info">
                          <i className="fa fa-user" aria-hidden="true"></i>
                          <p>Account</p>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="cart-area">
                        <a href="https://www.globalgilson.com/cart">
                          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                          <p>2</p>
                          <h4>Cart</h4>
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

export const Toolbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // If the legacy CSS relies on a class on the body or a specific element to show the menu,
    // you would toggle that class here using document.body.classList.toggle('show-menu')
    // For now, we keep the state internal or ready for a drawer component.
    console.log('Toggle Mobile Menu', !isMobileMenuOpen);
  };

  return (
    <header className="header-down">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <TopHeader />
            <MiddleHeader toggleMobileMenu={toggleMobileMenu} />
            <BottomHeader />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Toolbar;