import React, { useState } from 'react';
// menuData.ts կամ նույն ֆայլի մեջ
export const sievingData = {
    tabs: [
        { id: 'test-sieves', label: 'Test Sieves', isActive: false },
        { id: 'shakers', label: 'Sieve Shakers', isActive: true }, // Default active
        { id: 'service', label: 'Sieve Services', isActive: false },
        { id: 'accessories', label: 'Sieve Accessories', isActive: false },
        // ... մյուս թաբերը
    ],
    content: {
        'test-sieves': {
            categories: [
                { name: 'ASTM Test Sieves', link: '/astm-test-sieves', img: 'images/astm-test-sieves.png' },
                { name: 'ISO Test Sieves', link: '/iso-test-sieves', img: 'images/iso-sieves.png' },
                // ... այստեղ ավելացրու մնացածը
            ],
            resources: [
                { title: 'Sieve Analysis Guide', link: '/blog/sieve-analysis', img: 'images/sieve-analysis-blog.png' }
            ]
        },
        'shakers': {
            categories: [
                { name: 'Mechanical Tapping', link: '/mechanical-tapping-shakers', img: 'images/mechanical-tapping.png' },
                { name: 'Orbital Shakers', link: '/orbital-shakers', img: 'images/shakers2.png' },
                // ...
            ],
            resources: [
                { title: 'Selecting a Shaker', link: '/blog/selecting-shaker', img: 'images/sieve-shaker-blog.png' }
            ]
        }
        // ... ավելացրու մյուս ID-ների համար տվյալները
    }
};
// Ոճավորում Mega Menu-ի համար (կարող ես տեղափոխել CSS ֆայլ)
const megaMenuStyles: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    width: '85%', 
    zIndex: 1000,
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'left',
    color: '#333',
    margin: 'auto',
};

const MegaMenu = ({ data }: { data: any }) => {
    // Default active tab-ը գտնում ենք տվյալներից կամ վերցնում առաջինը
    const initialTab = data.tabs.find((t: any) => t.isActive)?.id || data.tabs[0].id;
    const [activeTab, setActiveTab] = useState(initialTab);

    const currentContent = data.content[activeTab];

    return (
        <div className="mega-dropdown" style={megaMenuStyles}>
            {/* Tab Header-ներ */}
            <ul className="nav nav-tabs">
                {data.tabs.map((tab: any) => (
                    <li className="nav-item" key={tab.id}>
                        <button
                            className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab(tab.id);
                            }}
                            style={{ cursor: 'pointer', color: activeTab === tab.id ? '#002d58' : '#666' }}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Tab Content */}
            <div className="tab-content p-3">
                <div className="row">
                    {/* Ձախ մաս - Կատեգորիաներ (col-md-9) */}
                    <div className="col-md-9">
                        <div className="row">
                            {currentContent?.categories.map((cat: any, idx: number) => (
                                <div className="col-md-4 mb-3" key={idx}>
                                    <div className="d-flex align-items-center">
                                        <img src={cat.img} alt={cat.name} style={{ width: '50px', marginRight: '10px' }} />
                                        <a href={cat.link} style={{ textDecoration: 'none', color: '#333', fontSize: '14px' }}>
                                            {cat.name}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Աջ մաս - Ռեսուրսներ (col-md-3) */}
                    <div className="col-md-3 border-start">
                        <h6>Resources</h6>
                        <ul className="list-unstyled">
                            {currentContent?.resources.map((res: any, idx: number) => (
                                <li key={idx} className="mb-3">
                                    <a href={res.link} className="d-block text-decoration-none">
                                        <img src={res.img} alt={res.title} style={{ width: '100%', marginBottom: '5px' }} />
                                        <span style={{ fontSize: '13px', color: '#002d58', fontWeight: 'bold' }}>{res.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;