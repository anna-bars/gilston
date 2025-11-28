import React from 'react';
import imgDesktop from '../../../assets/footer-bg2.jpg';
import imgMobile from '../../../assets/footer-bg2-mob.jpg';

import callIcon from '../../../assets/footer-support/phone-call.png';
import textIcon from '../../../assets/footer-support/comment.png';
import chatIcon from '../../../assets/footer-support/chatting.png';
import emailIcon from '../../../assets/footer-support/email.png';

const supportItems = [
  {
    id: 'call',
    actionType: 'call',
    href: 'tel:18004441508',
    iconClass: 'fa fa-phone',
    label: 'Call',
    url: callIcon
  },
  {
    id: 'text',
    actionType: 'text',
    href: 'sms://18004441508',
    iconClass: 'fa fa-commenting-o',
    label: 'Text',
    url: textIcon
  },
  {
    id: 'chat',
    actionType: 'chat',
    href: '#',
    iconClass: 'fa fa-comments',
    label: 'Chat',
    target: '_blank',
    url: chatIcon
  },
  {
    id: 'email',
    actionType: 'email',
    href: 'mailto:customerservice@gilson.com',
    iconClass: 'fa fa-envelope',
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
                  className="w-100 object-fit-cover object-position-center"
                  style={{ height: '215px' }}
                />
              </picture>

              <div className="position-absolute top-0 end-0 h-100 w-50 p-3 p-md-4">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <h3 className="text-center text-primary fw-bold fs-5 mb-3 text-uppercase">
                    We're Dedicated to our customers!
                  </h3>
                  
                  <div className="row g-2 g-md-3 mb-3">
                    {supportItems.map((item) => (
                      <div key={item.id} className="col-3 position-relative">
                        <a 
                          href={item.href} 
                          target={item.target} 
                          className="stretched-link text-decoration-none"
                          aria-label={item.label}
                        >
                          <span className="visually-hidden">{item.actionType}</span>
                        </a>
                        <div className="d-flex flex-column align-items-center">
                          <div className="bg-warning rounded-1 p-2 p-md-3 text-white">
                            <i className={item.iconClass} aria-hidden="true"><img loading="lazy" src={item.url} alt="Live Chat" /></i>
                          </div>
                          <div className="mt-1 mt-md-2">
                            <p className="mb-0 text-dark fw-bold small">{item.label}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="position-relative d-flex align-items-center">
                    <hr className="flex-grow-1 text-dark m-0" />
                    <h4 className="text-center text-dark mb-0 mx-3 small">
                      or check out our <a href="#" className="text-primary fw-bold text-decoration-underline">Support Center</a>
                    </h4>
                    <hr className="flex-grow-1 text-dark m-0" />
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