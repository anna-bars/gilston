import React from 'react';

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
  return (
    <footer className="bg-light pt-5 pb-3">
      <div className="container">
        
        {/* --- ROW 1: Links & Contact --- */}
        <div className="row border-bottom border-light pb-5 mb-5">
          
          {/* Information Column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="mb-4">
              <h5 className="text-dark fw-bold text-uppercase mb-3">Information</h5>
              <ul className="list-unstyled">
                {footerData.information.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    <a href={item.url} className="text-decoration-none text-primary">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* My Gilson Column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="mb-4">
              <h5 className="text-dark fw-bold text-uppercase mb-3">My Gilson</h5>
              <ul className="list-unstyled">
                {footerData.myGilson.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    <a href={item.url} className="text-decoration-none text-primary">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products Column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="mb-4">
              <h5 className="text-dark fw-bold text-uppercase mb-3">Products</h5>
              <ul className="list-unstyled">
                {footerData.products.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    <a href={item.url} className="text-decoration-none text-primary">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Us Column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="mb-4">
              <h5 className="text-dark fw-bold text-uppercase mb-3">Contact Us</h5>
              <div className="bg-white rounded-3 p-3 shadow-sm mb-3">
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-light rounded-2 p-2 me-2 text-primary">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div>
                    <p className="mb-0 small text-muted">7975 North Central Drive<br />Lewis Center, OH 43035</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-light rounded-2 p-2 me-2 text-primary">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div>
                    <a href="tel:18004441508" className="text-decoration-underline text-muted small">
                      1-800-444-1508
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- ROW 2: Newsletter & Icons --- */}
        <div className="row border-bottom border-light pb-4 mb-4">
          
          {/* Newsletter & Socials */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="text-center text-lg-start">
              <h5 className="text-dark fw-bold text-uppercase mb-2">Stay Updated</h5>
              <p className="text-muted small mb-3">
                Lorem ispsum dolor sit amet, consectuer adipiscing<br />
                elit, sed do eiusmod tempor incidunt ut labore et
              </p>
              
              <form className="mb-3">
                <div className="d-flex w-100 w-lg-auto">
                  <input 
                    type="email" 
                    className="form-control rounded-0 rounded-start border-0 shadow-sm"
                    placeholder="Enter Email Address"
                    style={{maxWidth: '310px'}}
                  />
                  <button 
                    type="submit" 
                    className="btn btn-warning text-white fw-bold rounded-0 rounded-end px-4"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                {footerData.socials.map((item, idx) => (
                  <a key={idx} href={item.url} className="text-decoration-none" aria-label={item.label}>
                    <img 
                      src={item.path} 
                      alt={item.label}
                      loading="lazy"
                      className="img-fluid"
                      style={{width: '30px', height: '30px', objectFit: 'contain'}}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Payments */}
          <div className="col-lg-7">
            <div className="text-center text-lg-end">
              {/* Certifications */}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-3 mb-3">
                {footerData.certifications.map((item, idx) => (
                  <a key={idx} href={item.url} className="text-decoration-none" aria-label={item.label}>
                    <img 
                      src={item.path} 
                      alt={item.label}
                      loading="lazy"
                      className="img-fluid"
                      style={{width: '120px', height: '60px', objectFit: 'contain'}}
                    />
                  </a>
                ))}
              </div>
              
              {/* Payment Methods */}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-2">
                {footerData.payments.map((item, idx) => (
                  <a key={idx} href={item.url} className="text-decoration-none" aria-label={item.label}>
                    <img 
                      src={item.path} 
                      alt={item.label}
                      loading="lazy"
                      className="img-fluid"
                      style={{width: '70px', height: '40px', objectFit: 'contain'}}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* --- ROW 3: Copyright & Policy --- */}
        <div className="row">
          <div className="col-md-6 mb-2 mb-md-0">
            <div className="text-center text-md-start">
              <p className="text-muted small mb-0">
                Copyright &copy; 2020 GlobalGilson.com. All rights reserved.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              {footerData.policies.map((item, idx) => (
                <a key={idx} href={item.url} className="text-decoration-none text-primary small">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;