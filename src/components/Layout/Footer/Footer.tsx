import React, { useState } from 'react';

// Import images
import accreditedBusiness from '../../../assets/accredited-bus.png';
import digiSceert from '../../../assets/digisceert.png';
import googleReviews from '../../../assets/google-reviews.png';

import paypal from '../../../assets/Paypal.png';
import visa from '../../../assets/Visa.png';
import masterCard from '../../../assets/Master-Card.png';
import discover from '../../../assets/Discover.png';
import americanExpress from '../../../assets/American-Express.png';

import fb from '../../../assets/fb.png';
import insta from '../../../assets/insta.png';
import twitter from '../../../assets/twitter.png';
import linkedin from '../../../assets/linkedin.png';
import youtube from '../../../assets/utube.png';
import social from '../../../assets/social.png';

import locationIcon from '../../../assets/footer/maps-and-flags.png';
import phoneIcon from '../../../assets/footer/phone-call.png';

// Footer data
const footerData = {
  information: [
    { label: "About Us", url: "#" },
    { label: "Careers", url: "#" },
    { label: "Contact Us", url: "#" },
    { label: "Newsletter", url: "#" },
    { label: "Testimonials", url: "#" },
    { label: "Case Studies", url: "#" },
    { label: "Distributor Information", url: "#" },
    { label: "Privacy Policy", url: "#" },
    { label: "Terms & Conditions", url: "#" },
    { label: "Sitemap", url: "#" },
  ],
  myGilson: [
    { label: "Customer Information", url: "#" },
    { label: "Addresses", url: "#" },
    { label: "Orders", url: "#" },
    { label: "Invoices", url: "#" },
    { label: "Favorites List", url: "#" },
    { label: "Shopping Cart", url: "#" },
    { label: "Quick Order", url: "#" },
  ],
  products: [
    { label: "Online Catalog", url: "#" },
    { label: "Request Catalog", url: "#" },
    { label: "Price List", url: "#" },
    { label: "New Products List", url: "#" },
    { label: "Clearance List", url: "#" },
    { label: "Recently Viewed Products", url: "#" },
    { label: "Resource Center", url: "#" },
  ],
  socials: [
    { label: "fb", url: "#", path: fb },
    { label: "insta", url: "#", path: insta },
    { label: "twitter", url: "#", path: twitter },
    { label: "linkedin", url: "#", path: linkedin },
    { label: "youtube", url: "#", path: youtube },
    { label: "social", url: "#", path: social },
  ],
  certifications: [
    { label: "googlerate", url: "#", path: googleReviews },
    { label: "bbb-logo", url: "#", path: digiSceert },
    { label: "download1", url: "#", path: accreditedBusiness },
  ],
  payments: [
    { label: "paypal", url: "#", path: paypal },
    { label: "visa", url: "#", path: visa },
    { label: "mastercard", url: "#", path: masterCard },
    { label: "discover", url: "#", path: discover },
    { label: "american-express", url: "#", path: americanExpress },
  ],
  policies: [
    { label: "Terms and Conditions", url: "#" },
    { label: "Privacy Policy", url: "#" },
    { label: "Site Map", url: "#" },
  ]
};

const Footer: React.FC = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isSectionOpen = (section: string) => openSections.includes(section);

  return (
    <footer className="bg-light pt-5 pb-3">
      <div className="container">
        
        {/* --- ROW 1: Links & Contact --- */}
        <div className="row border-bottom border-light pb-5 mb-5">
          
          {/* Information Column */}
          <div className="col-lg-3 p-sm-0 p-md-15 mb-4 mb-lg-0">
            <div className={`footer-1 ${isSectionOpen('information') ? 'footer-menu-open' : ''}`}>
              <h4 
                className="text-dark fw-bold text-uppercase mb-3 d-flex justify-content-between align-items-center d-lg-block"
                onClick={() => toggleSection('information')}
                style={{ cursor: 'pointer' }}
              >
                Information
                <span className="d-lg-none">
                  {isSectionOpen('information') ? '−' : '+'}
                </span>
              </h4>
              <div className={`footer-mob ${isSectionOpen('information') ? 'd-block' : 'd-none d-lg-block'}`}>
                <ul className="list-unstyled mb-0">
                  {footerData.information.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      <a href={item.url} className="text-dark text-decoration-none">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* My Gilson Column */}
          <div className="col-lg-3 p-sm-0 p-md-15 mb-4">
            <div className={`footer-1 ${isSectionOpen('myGilson') ? 'footer-menu-open' : ''}`}>
              <h4 
                className="text-dark fw-bold text-uppercase mb-3 d-flex justify-content-between align-items-center d-lg-block"
                onClick={() => toggleSection('myGilson')}
                style={{ cursor: 'pointer' }}
              >
                My Gilson
                <span className="d-lg-none">
                  {isSectionOpen('myGilson') ? '−' : '+'}
                </span>
              </h4>
              <div className={`footer-mob ${isSectionOpen('myGilson') ? 'd-block' : 'd-none d-lg-block'}`}>
                <ul className="list-unstyled mb-0">
                  {footerData.myGilson.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      <a href={item.url} className="text-dark text-decoration-none">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div className="col-lg-3 p-sm-0 p-md-15 mb-4">
            <div className={`footer-1 ${isSectionOpen('products') ? 'footer-menu-open' : ''}`}>
              <h4 
                className="text-dark fw-bold text-uppercase mb-3 d-flex justify-content-between align-items-center d-lg-block"
                onClick={() => toggleSection('products')}
                style={{ cursor: 'pointer' }}
              >
                Products
                <span className="d-lg-none">
                  {isSectionOpen('products') ? '−' : '+'}
                </span>
              </h4>
              <div className={`footer-mob ${isSectionOpen('products') ? 'd-block' : 'd-none d-lg-block'}`}>
                <ul className="list-unstyled mb-0">
                  {footerData.products.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      <a href={item.url} className="text-dark text-decoration-none">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Us Column */}
          <div className="col-lg-3 p-sm-0 p-md-15 mb-4">
            <div className={`footer-1 contact-mob ${isSectionOpen('contact') ? 'footer-menu-open' : ''}`}>
              <h4 
                className="text-dark fw-bold text-uppercase mb-3 d-flex justify-content-between align-items-center d-lg-block"
                onClick={() => toggleSection('contact')}
                style={{ cursor: 'pointer' }}
              >
                Contact Us
                <span className="d-lg-none">
                  {isSectionOpen('contact') ? '−' : '+'}
                </span>
              </h4>
              <div className={`contact-mob-wrap ${isSectionOpen('contact') ? 'd-block' : 'd-none d-lg-block'}`}>
                <div className="contact-detail bg-white rounded-3 p-3 shadow-sm mb-3">
                  <div className="address d-flex align-items-center mb-2">
                    <div className="address-icon bg-light rounded-2 p-2 me-2">
                      <img src={locationIcon} alt="Location" width="16" height="16" />
                    </div>
                    <div className="address-para">
                      <p className="mb-0 small text-muted">7975 North Central Drive<br />Lewis Center, OH 43035</p>
                    </div>
                  </div>
                  <div className="call d-flex align-items-center">
                    <div className="address-icon bg-light rounded-2 p-2 me-2">
                      <img src={phoneIcon} alt="Phone" width="16" height="16" />
                    </div>
                    <div className="address-para">
                      <p className="mb-0">
                        <a href="tel:18004441508" className="text-muted text-decoration-underline small">
                          1-800-444-1508
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Product links in contact section */}
                <ul className="list-unstyled mb-0">
                  {footerData.products.map((item, idx) => (
                    <li key={`contact-${idx}`} className="mb-2">
                      <a href={item.url} className="text-dark text-decoration-none">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* --- ROW 2: Newsletter & Icons --- */}
        <div className="footer-row-2 row border-bottom border-light pb-4 mb-4">
          
          {/* Newsletter & Socials */}
          <div className="col-lg-5 mb-4">
            <div className="newsletter-area text-center text-lg-start">
              <h4 className="text-dark fw-bold text-uppercase mb-2">Stay Updated</h4>
              <p className="text-muted small mb-3">
                Lorem ispsum dolor sit amet, consectuer adipiscing<br />
                elit, sed do eiusmod tempor incidunt ut labore et
              </p>
              
              <form className="mb-3">
                <div className="form-group d-flex align-items-center justify-content-center justify-content-lg-start">
                  <input 
                    type="email" 
                    name="email"
                    className="form-control newsletter-input border-0 shadow-sm rounded-0 rounded-start"
                    placeholder="Enter Email Address"
                    style={{width: '310px'}}
                  />
                  <input 
                    type="submit" 
                    name="submit" 
                    value="Subscribe" 
                    className="btn btn-warning text-white fw-bold rounded-0 rounded-end px-4"
                  />
                </div>
              </form>

              <ul className="list-unstyled d-flex justify-content-center justify-content-lg-start gap-3 mb-0">
                {footerData.socials.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.url} className="text-decoration-none" aria-label={item.label}>
                      <img 
                        src={item.path} 
                        alt={item.label}
                        loading="lazy"
                        className="img-fluid"
                        style={{width: '26px', height: '26px', objectFit: 'contain'}}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications & Payments */}
          <div className="col-lg-7">
            <div className="certify-area text-center text-lg-end">
              <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center gap-3 mb-3">
                {footerData.certifications.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.url} className="text-decoration-none" aria-label={item.label}>
                      <img 
                        src={item.path} 
                        alt={item.label}
                        loading="lazy"
                        className="img-fluid"
                        style={{width: '137px', height: '49px', objectFit: 'contain'}}
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center gap-2 mb-0">
                {footerData.payments.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.url} className="text-decoration-none" aria-label={item.label}>
                      <img 
                        src={item.path} 
                        alt={item.label}
                        loading="lazy"
                        className="img-fluid"
                        style={{width: '70px', height: '40px', objectFit: 'contain'}}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* --- ROW 3: Copyright & Policy --- */}
        <div className="footer-row-3 row">
          <div className="col-lg-6 col-md-6 mb-2 mb-md-0">
            <div className="copy-text">
              <p className="text-muted small mb-0 text-center text-md-start">
                Copyright &copy; 2020 GlobalGilson.com. All rights reserved.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="policy-list">
              <ul className="list-unstyled d-flex justify-content-center justify-content-md-end gap-3 mb-0">
                {footerData.policies.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.url} className="text-dark text-decoration-none small">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;