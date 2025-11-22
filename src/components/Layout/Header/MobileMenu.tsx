import React from 'react';

interface MobileMenuProps {
  closeMenu: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  return (
    <div className="mobile-menu-area" style={{ display: 'block' }}> {/* style block-ը ժամանակավոր է, եթե CSS-ով hidden չէ */}
      <div className="close-btn" onClick={closeMenu}>
          <img loading="lazy" src="/images/close-menu.png" alt="Close" />
      </div>
      <div className="mobile-menu1">
        <h3>Shop by Category</h3>
        <ul>
          <li>
            <a href="#">
              <img loading="lazy" src="/images/sieving-mobile.png" alt="" />
              <p>Sieving</p>
              <i className="fa fa-angle-right" aria-hidden="false"></i>
            </a>
          </li>
          {/* Մնացած կատեգորիաները նույն սկզբունքով... */}
          <li>
            <a href="#">
              <img loading="lazy" src="/images/screening-mobile.png" alt="" />
              <p>Screening</p>
              <i className="fa fa-angle-right" aria-hidden="false"></i>
            </a>
          </li>
          {/* ... և այլն */}
        </ul>

        <div className="mob-account-list">
          <h3>Account</h3>
          <ul>
            <li>
              <a href="#">
                <img loading="lazy" src="/images/user.svg" alt="" className="svgimg" />
                <p>My Account</p>
                <i className="fa fa-angle-right" aria-hidden="false"></i>
              </a>
            </li>
            {/* ... */}
          </ul>
        </div>

        <div className="mob-account-list">
          <h3>Tools</h3>
          <ul>
             <li><a href="#"><p>Catalog</p><i className="fa fa-angle-right" aria-hidden="false"></i></a></li>
             {/* ... */}
          </ul>
        </div>

        <div className="mob-account-list">
          <h3>Resources</h3>
          <ul>
             <li><a href="#"><p>Blog</p><i className="fa fa-angle-right" aria-hidden="false"></i></a></li>
             {/* ... */}
          </ul>
        </div>

        <div className="part-btn">
          <a href="#">Replacement Parts</a>
        </div>

        <div className="mob-menu-contact">
          <div className="sprite-img menu-contact-img"></div>
          <div className="mob-contact-text">
            <h4>We're here to help</h4>
            <p>We'll do anything we can to help find and answer to your question.</p>
            <div className="mob-call-btn"><a href="#"><i className="fa fa-phone"></i> 800-444-1508</a></div>
          </div>
          
          <div className="support-text">
             <ul>
                 <li>
                     <a href="tel:18004441508">call</a>
                     <div className="support-icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                     <div className="call-text1"><p>Call</p></div>
                 </li>
                 {/* ... մյուս կոնտակտները */}
             </ul>
          </div>

          <div className="mob-call-back">
            <ul>
              <li>
                <a href="#">
                  <div className="sprite-img call-back"></div>
                  <p>Request Callback</p>
                  <i className="fa fa-angle-right" aria-hidden="false"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sprite-img support-ticket"></div>
                  <p>Support Ticket</p>
                  <i className="fa fa-angle-right" aria-hidden="false"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="mob-call-btn"><div className="sprite-img fax-icon"></div> 740-548-5314</div>
          
          <div className="newsletter-area">
            <ul>
               <li><a href="#"><div className="sprite-img fb-icon"></div>Facebook</a></li>
               <li><a href="#"><div className="sprite-img insta-icon"></div>Instagram</a></li>
               {/* ... */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};