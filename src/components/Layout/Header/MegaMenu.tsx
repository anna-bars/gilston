// MegaMenu.tsx
import { useState } from 'react';

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
    const initialTab = data.tabs.find((t: any) => t.isActive)?.id || data.tabs[0].id;
    const [activeTab, setActiveTab] = useState(initialTab);

    const currentContent = data.content[activeTab];

    return (
        <div className="mega-dropdown" style={megaMenuStyles}>
            
            {/* Tab Headers */}
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
            <div className="tab-content">
                <div className="row">
                    {/* Categories Section - 5 items per row */}
                    <div className="col-md-9" style={{ padding: '0 0 0 12px' }}>
                        <div className="categories-grid">
                            {currentContent?.categories.map((cat: any, idx: number) => (
                                <div className="category-item" key={idx}>
                                    <div className="category-content">
                                        <div className='category-img'>
                                            <img 
                                                src={cat.img} 
                                                alt={cat.name} 
                                                className="category-image"
                                            />
                                        </div>
                                        <div className='category-name'>
                                            <a href={cat.link}>
                                                {cat.name}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Resources Section */}
                    <div className="col-md-3 border-start" style={{ padding: '20px' }}>
                        <h6 style={{ color: '#002d58', marginBottom: '15px' }}>Resources</h6>
                        <ul className="list-unstyled">
                            {currentContent?.resources.map((res: any, idx: number) => (
                                <li key={idx} className="mb-3">
                                    <a href={res.link} className="resource-item d-flex align-items-start text-decoration-none">
                                        <img 
                                            src={res.img} 
                                            alt={res.title} 
                                            className="resource-image"
                                            style={{ width: '60px', height: '60px', objectFit: 'contain', marginRight: '10px' }}
                                        />
                                        <span style={{ fontSize: '13px', color: '#002d58', fontWeight: 'bold', lineHeight: '1.3' }}>
                                            {res.title}
                                        </span>
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