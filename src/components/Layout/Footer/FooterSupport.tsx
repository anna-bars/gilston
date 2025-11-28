import React from 'react';
import imgDesktop from '../../../assets/footer-component/footer-support/footer-bg2.jpg';
import imgMobile from '../../../assets/footer-component/footer-support/footer-bg2-mob.jpg';

import callIcon from '../../../assets/footer-component/footer-support/icon/phone-call.png';
import textIcon from '../../../assets/footer-component/footer-support/icon/comment.png';
import chatIcon from '../../../assets/footer-component/footer-support/icon/chatting.png';
import emailIcon from '../../../assets/footer-component/footer-support/icon/email.png'; 

const supportItems = [
  {
    id: 'call',
    actionType: 'call',
    href: 'tel:18004441508',
    label: 'Call',
    url: callIcon
  },
  {
    id: 'text',
    actionType: 'text',
    href: 'sms://18004441508',
    label: 'Text',
    url: textIcon
  },
  {
    id: 'chat',
    actionType: 'chat',
    href: '#',
    label: 'Chat',
    target: '_blank',
    url: chatIcon
  },
  {
    id: 'email',
    actionType: 'email',
    href: 'mailto:customerservice@gilson.com',
    label: 'Email',
    url: emailIcon
  },
];

const FooterSupport: React.FC = () => {
  return ( 
    <div className="footer-support">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12 p-0">
            <div className="position-relative">
              <picture>
                <source media="(min-width:1025px)" srcSet={imgDesktop} />
                <source media="(min-width:319px)" srcSet={imgMobile} />
                <img
                  loading="lazy"
                  src={imgMobile}
                  alt="Gilson Customer Support Banner"
                  className="w-100"
                  style={{ height: 'auto', minHeight: '215px', objectFit: 'cover' }}
                />
              </picture>

              {/* Desktop version - right side 50% width */}
              <div className="position-absolute top-0 end-0 h-100 w-50 p-4 d-none d-lg-flex flex-column justify-content-center">
                <h3 className="text-center text-primary fw-bold fs-5 mb-3 text-uppercase">
                  We're Dedicated to our customers!
                </h3>
                
                <div className="d-flex justify-content-around align-items-center mb-3">
                  {supportItems.map((item) => (
                    <div key={item.id} className="position-relative text-center">
                      <a 
                        href={item.href} 
                        target={item.target} 
                        className="stretched-link text-decoration-none"
                        aria-label={item.label}
                      >
                        <span className="visually-hidden">{item.actionType}</span>
                      </a>
                      <div className="d-flex flex-column align-items-center">
                        <div className="bg-warning rounded-1 p-3 mb-2">
                          <img 
                            src={item.url} 
                            alt={item.label}
                            loading="lazy"
                            className="img-fluid"
                            style={{width: '24px', height: '24px'}}
                          />
                        </div>
                        <div>
                          <p className="mb-0 text-dark fw-bold small text-nowrap">{item.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="position-relative d-flex align-items-center justify-content-center">
                  <hr className="flex-grow-1 text-dark m-0" />
                  <h4 className="text-center text-dark mb-0 mx-3 small">
                    or check out our <a href="#" className="text-primary fw-bold text-decoration-underline">Support Center</a>
                  </h4>
                  <hr className="flex-grow-1 text-dark m-0" />
                </div>
              </div>

              {/* Mobile version - centered at top */}
              <div className="position-absolute top-0 start-0 w-100 p-3 d-lg-none">
                <div className="d-flex flex-column">
                  <h3 className="text-center text-primary fw-bold fs-5 mb-3 text-uppercase">
                    We're Dedicated to our customers!
                  </h3>
                  
                  <div className="d-flex justify-content-center align-items-center gap-3 gap-md-4 mb-3 w-100">
                    {supportItems.map((item) => (
                      <div key={item.id} className="position-relative text-center">
                        <a 
                          href={item.href} 
                          target={item.target} 
                          className="stretched-link text-decoration-none"
                          aria-label={item.label}
                        >
                          <span className="visually-hidden">{item.actionType}</span>
                        </a>
                        <div className="d-flex flex-column align-items-center">
                          <div className="bg-warning rounded-1 p-2 mb-1">
                            <img 
                              src={item.url} 
                              alt={item.label}
                              loading="lazy"
                              className="img-fluid"
                              style={{width: '20px', height: '20px'}}
                            />
                          </div>
                          <div>
                            <p className="mb-0 text-dark fw-bold small text-nowrap">{item.label}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="position-relative d-flex align-items-center justify-content-center w-100">
                    <hr className="flex-grow-1 text-dark m-0 d-none d-sm-block" style={{maxWidth: '40px'}} />
                    <h4 className="text-center text-dark mb-0 mx-2 mx-sm-3 small">
                      or check out our <a href="#" className="text-primary fw-bold text-decoration-underline">Support Center</a>
                    </h4>
                    <hr className="flex-grow-1 text-dark m-0 d-none d-sm-block" style={{maxWidth: '40px'}} />
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

export default FooterSupport;