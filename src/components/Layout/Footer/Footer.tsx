import React from 'react';

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
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">About Us</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Careers</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Contact Us</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Newsletter</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Testimonials</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Case Studies</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Distributor Information</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Privacy Policy</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Terms & Conditions</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Sitemap</a></li>
              </ul>
            </div>
          </div>

          {/* My Gilson Column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="mb-4">
              <h5 className="text-dark fw-bold text-uppercase mb-3">My Gilson</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Customer Information</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Addresses</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Orders</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Invoices</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Favorites List</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Shopping Cart</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Quick Order</a></li>
              </ul>
            </div>
          </div>

          {/* Products Column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="mb-4">
              <h5 className="text-dark fw-bold text-uppercase mb-3">Products</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Online Catalog</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Request Catalog</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Price List</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">New Products List</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Clearance List</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Recently Viewed Products</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-primary">Resource Center</a></li>
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
                    <a href="tel:18004441508" className="text-decoration-underline text-muted small">1-800-444-1508</a>
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
                {['fb', 'insta', 'twitter', 'linkedin', 'youtube', 'social'].map((social) => (
                  <a key={social} href="#" className="text-decoration-none">
                    <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center" 
                         style={{width: '30px', height: '30px'}}>
                      <span className="text-white small">{social}</span>
                    </div>
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
                {['google-rate', 'bbb-logo', 'download-icon'].map((cert) => (
                  <a key={cert} href="#" className="text-decoration-none">
                    <div className="bg-light border rounded p-2 d-flex align-items-center justify-content-center"
                         style={{width: '120px', height: '60px'}}>
                      <span className="text-muted small">{cert}</span>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Payment Methods */}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-2">
                {['paypal', 'visa', 'mastercard', 'discover', 'american-express'].map((payment) => (
                  <a key={payment} href="#" className="text-decoration-none">
                    <div className="bg-light border rounded p-2 d-flex align-items-center justify-content-center"
                         style={{width: '70px', height: '40px'}}>
                      <span className="text-muted small">{payment}</span>
                    </div>
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
              <a href="#" className="text-decoration-none text-primary small">Terms and Conditions</a>
              <a href="#" className="text-decoration-none text-primary small">Privacy Policy</a>
              <a href="#" className="text-decoration-none text-primary small">Site Map</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;