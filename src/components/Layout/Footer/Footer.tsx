import React from 'react';
// Ենթադրում ենք, որ ձեր CSS-ը կցված է գլոբալ կամ այս ֆայլին
// import './Footer.css'; 

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
import youtube from '../../../assets/utube.png'
import social from '../../../assets/social.png';

// // --- Types & Data (Modularity) ---
// interface LinkItem {
//   label: string;
//   url: string;
//   iconClass?: string; // Սոցիալական կայքերի համար
// }

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
    { label: "fb", url: "#", iconClass: "fb-icon", path : fb},
    { label: "insta", url: "#", iconClass: "insta-icon", path : insta },
    { label: "twitter", url: "#", iconClass: "twitter-icon", path : twitter },
    { label: "linkedin", url: "#", iconClass: "linkedin-icon", path : linkedin },
    { label: "youtube", url: "#", iconClass: "youtube-icon", path : youtube },
    { label: "social", url: "#", iconClass: "social-icon", path : social },
  ],
  certifications: [
    { label: "googlerate", url: "#", iconClass: "google-rate", path : googleReviews },
    { label: "bbb-logo", url: "#", iconClass: "bbb-logo", path : digiSceert },
    { label: "download1", url: "#", iconClass: "download-icon", path : accreditedBusiness },
  ],
  payments: [
    { label: "paypal", url: "#", iconClass: "paypal", path : paypal },
    { label: "visa", url: "#", iconClass: "visa", path : visa },
    { label: "mastercard", url: "#", iconClass: "mastercard", path : masterCard },
    { label: "discover", url: "#", iconClass: "discover", path : discover },
    { label: "american-express", url: "#", iconClass: "american", path : americanExpress },
  ],
  policies: [
    { label: "Terms and Conditions", url: "#" },
    { label: "Privacy Policy", url: "#" },
    { label: "Site Map", url: "#" },
  ]
};

// --- Component ---
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        
        {/* --- ROW 1: Links & Contact --- */}
        <div className="footer-row-1">
          <div className="row">
            
            {/* Col 1: Information */}
            <div className="col-lg-3 p-sm-0 p-md-15 print-25">
              <div className="footer-1">
                <h4>Information</h4>
                <div className="footer-mob">
                  <ul>
                    {footerData.information.map((link, idx) => (
                      <li key={idx}><a href={link.url}>{link.label}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Col 2: My Gilson */}
            <div className="col-lg-3 p-sm-0 p-md-15 print-25">
              <div className="footer-1">
                <h4>My Gilson</h4>
                <div className="footer-mob">
                  <ul>
                    {footerData.myGilson.map((link, idx) => (
                      <li key={idx}><a href={link.url}>{link.label}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Col 3: Products */}
            <div className="col-lg-3 p-sm-0 p-md-15 print-25">
              <div className="footer-1">
                <h4>Products</h4>
                <div className="footer-mob">
                  <ul>
                    {footerData.products.map((link, idx) => (
                      <li key={idx}><a href={link.url}>{link.label}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Col 4: Contact Us */}
            <div className="col-lg-3 p-sm-0 p-md-15 print-25">
              <div className="footer-1 contact-mob">
                <h4>Contact Us</h4>
                <div className="contact-mob-wrap">
                  <div className="contact-detail">
                    <div className="address">
                      <div className="address-icon">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                      </div>
                      <div className="address-para">
                        <p>7975 North Central Drive<br /> Lewis Center, OH 43035</p>
                      </div>
                    </div>
                    <div className="call">
                      <div className="address-icon">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </div>
                      <div className="address-para">
                        <p><a href="tel:18004441508">1-800-444-1508</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Note: Original design repeats product links here */}
                  <ul>
                    {footerData.products.map((link, idx) => (
                      <li key={`contact-${idx}`}><a href={link.url}>{link.label}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* --- ROW 2: Newsletter & Icons --- */}
        <div className="footer-row-2">
          <div className="row">
            
            {/* Newsletter & Socials */}
            <div className="col-lg-5 print-50">
              <div className="newsletter-area">
                <h4>Stay Updated</h4>
                <p>Lorem ispsum dolor sit amet, consectuer adipiscing<br /> elit, sed do eiusmod tempor incidunt ut labore et</p>
                
                <form action="#" method="post">
                  <div className="form-group d-flex align-items-center justify-content-lg-start">
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control newsletter-input" 
                      placeholder="Enter Email Address" 
                      aria-label="Email Address" // Optimization for Accessibility
                    />
                    <input 
                      type="submit" 
                      name="submit" 
                      value="Subscribe" 
                      className="subscribe-btn" 
                    />
                  </div>
                </form>

                <ul>
                  {footerData.socials.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.url} aria-label={item.label}>
                        <div className={`sprite-img ${item.iconClass}`}>
                          <img loading="lazy" src={item.path} alt="Live Chat" />
                        </div>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Certifications & Payments */}
            <div className="col-lg-7 print-50">
              <div className="certify-area">
                <ul>
                  {footerData.certifications.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.url} aria-label={item.label}>
                        <div className={`sprite-img ${item.iconClass}`}>
                            <img loading="lazy" src={item.path} alt="Live Chat" />
                        </div>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul>
                  {footerData.payments.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.url} aria-label={item.label}>
                        <div className={`sprite-img ${item.iconClass}`}>
                          <img loading="lazy" src={item.path} alt="Live Chat" />
                        </div>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* --- ROW 3: Copyright & Policy --- */}
        <div className="footer-row-3">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copy-text">
                <p>Copyright &copy; 2020 GlobalGilson.com. All rights reserved.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="policy-list">
                <ul>
                  {footerData.policies.map((link, idx) => (
                    <li key={idx}><a href={link.url}>{link.label}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;