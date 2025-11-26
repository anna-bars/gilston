import { useState } from 'react';

import topAngle from '../../../assets/top-angle.png';
import liveChat from '../../../assets/live-chat.png';
import { styles } from './Toolbar';

export const TopHeader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isContactOpen, setIsContactOpen] = useState(false);

    if (!isVisible) return null;

    const linkStyle = {
        color: styles.colors.lightBlue,
        fontSize: '14px',
        padding: '12px 18px',
        borderLeft: `1px solid ${styles.colors.borderGrey}`,
        display: 'block',
        textDecoration: 'none'
    };

    return (
        <div className="position-relative" style={{ backgroundColor: styles.colors.bgTop, borderBottom: `1px solid ${styles.colors.borderGrey}`, zIndex: 9999 }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="py-2">
                            <h1 className="m-0 fw-normal" style={{ fontSize: '14px', color: 'rgb(0 45 88 / 60%)' }}>
                                Materials Testing Equipment Manufacturer & Supplier Since 1939
                            </h1>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex justify-content-end">
                            <ul className="list-unstyled d-flex m-0 p-0 align-items-center">
                                <li className="position-relative"
                                    onMouseEnter={() => setIsContactOpen(true)}
                                    onMouseLeave={() => setIsContactOpen(false)}
                                >
                                    <a href="https://www.globalgilson.com/contact-us" style={linkStyle}>
                                        Contact Us <i className="fa fa-angle-down ms-1" style={{ color: '#7b92a8' }}></i>
                                    </a>
                                    
                                    {isContactOpen && (
                                        <div className="position-absolute bg-white shadow p-3 rounded start-0" style={{ top: '100%', width: '280px', zIndex: 1000 }}>
                                            <div className="text-center position-absolute" style={{ top: '-9px', left: '20px' }}>
                                                <img src={topAngle} alt="arrow" />
                                            </div>
                                            <div className="d-flex align-items-center border-bottom pb-2 mb-2">
                                                <div className="me-2"><img src={liveChat} alt="Live Chat" /></div>
                                                <p className="m-0 fw-bold" style={{ color: '#002d58' }}>Live Chat</p>
                                            </div>
                                            <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>Email</h4>
                                            <ul className="list-unstyled ps-0 mb-2">
                                                <li><a href="mailto:customerservice@gilsonco.com" className="text-decoration-none text-secondary" style={{fontSize: '13px'}}>US Sales</a></li>
                                                <li><a href="mailto:international@gilsonco.com" className="text-decoration-none text-secondary" style={{fontSize: '13px'}}>International Sales</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li><a href="#" style={linkStyle}>Order Status</a></li>
                                <li><a href="https://www.globalgilson.com/support-center" style={linkStyle}><i className="fa fa-question-circle me-1" style={{ color: '#7b92a8' }}></i> Help</a></li>
                                <li><a href="https://www.globalgilson.com/about-us" style={{ ...linkStyle, borderRight: `1px solid ${styles.colors.borderGrey}` }}><i className="fa fa-info-circle me-1" style={{ color: '#7b92a8' }}></i> About Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <i className="fa fa-close position-absolute top-50 end-0 translate-middle-y me-3" title="Close" onClick={() => setIsVisible(false)} style={{ cursor: 'pointer', color: '#333' }}></i>
            </div>
        </div>
    );
};