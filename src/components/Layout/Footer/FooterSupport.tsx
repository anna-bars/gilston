import React from 'react';

// Սահմանում ենք տվյալների տիպերը (TypeScript)
interface SupportItem {
  id: string;
  actionType: string; // 'call', 'text', 'chat', 'email'
  href: string;
  iconClass: string;
  label: string;
  target?: string;
}

// Տվյալները առանձնացված են (Clean Code)
const supportItems: SupportItem[] = [
  {
    id: 'call',
    actionType: 'call',
    href: 'tel:18004441508',
    iconClass: 'fa fa-phone',
    label: 'Call',
  },
  {
    id: 'text',
    actionType: 'text',
    href: 'sms://18004441508',
    iconClass: 'fa fa-commenting-o',
    label: 'Text',
  },
  {
    id: 'chat',
    actionType: 'chat',
    href: '#',
    iconClass: 'fa fa-comments',
    label: 'Chat',
    target: '_blank',
  },
  {
    id: 'email',
    actionType: 'email',
    href: 'mailto:customerservice@gilson.com',
    iconClass: 'fa fa-envelope',
    label: 'Email',
  },
];
import imgDesktop from '../../../assets/footer-bg2.jpg';
import imgMobile from '../../../assets/footer-bg2-mob.jpg';

const FooterSupport: React.FC = () => {
  // Նկարների ճանապարհները (ենթադրվում է, որ դրանք public ֆոլդերում են կամ import են արված)


  return (
    <div className="footer-support">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="footer-support-img">
              {/* 
                  LCP Optimization: 
                  Օգտագործում ենք <picture> տարբեր էկրանների համար։
                  loading="lazy"-ը թողնում ենք, եթե սա էջի ամենավերևում չէ։
              */}
              
              <picture>
                <source media="(min-width:1025px)" srcSet={imgDesktop} />
                <source media="(min-width:319px)" srcSet={imgMobile} />
                <img
                  loading="lazy"
                  src={imgMobile}
                  alt="Gilson Customer Support Banner"
                  width="375"
                  height="413"
                  style={{ width: '100%', height: 'auto' }} // height: auto ավելացվել է ասպեկտի պահպանման համար
                />
              </picture>

              <div className="support-text">
                <h3>We're Dedicated to our customers!</h3>
                <ul>
                  {supportItems.map((item) => (
                    <li key={item.id}>
                      <a href={item.href} target={item.target} aria-label={item.label}>
                        {item.actionType}
                      </a>
                      <div className="support-icon">
                        <i className={item.iconClass} aria-hidden="true"></i>
                      </div>
                      <div className="call-text1">
                        <p>{item.label}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <h4>
                  or check out our <a href="#">Support Center</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSupport;