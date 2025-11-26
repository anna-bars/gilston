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

// Inline styles for specific design requirements
const categoryImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100px',
    objectFit: 'contain',
};

const resourceImageStyle: React.CSSProperties = {
    width: '60px',
    height: '60px',
    objectFit: 'contain',
};

const categoriesGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '0',
};

// Custom colors
const tabBackgroundColor = 'rgb(68, 103, 152)'; // #446798
const tabHoverColor = 'rgb(68, 103, 152)'; // #446798
const textPrimaryColor = '#002d58';

const MegaMenu = ({ data }: { data: any }) => {
    const initialTab = data.tabs.find((t: any) => t.isActive)?.id || data.tabs[0].id;
    const [activeTab, setActiveTab] = useState(initialTab);

    const currentContent = data.content[activeTab];
    
    // Check if there's only one tab
    const hasMultipleTabs = data.tabs.length > 1;

    return (
        <div className="mega-dropdown" style={megaMenuStyles}>
            
            {/* Tab Headers - Only show if multiple tabs exist */}
            {hasMultipleTabs && (
                <ul className="nav nav-tabs border-0">
                    {data.tabs.map((tab: any) => (
                        <li className="nav-item" key={tab.id}>
                            <button
                                className="nav-link border-0 rounded-0"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab(tab.id);
                                }}
                                style={{ 
                                    cursor: 'pointer', 
                                    borderRight: '1px solid #869bb8',
                                    fontSize: '14px',
                                    padding: '10px 18px',
                                    transition: 'all 0.3s ease',
                                    margin: '0',
                                    backgroundColor: activeTab === tab.id ? '#fff' : tabBackgroundColor,
                                    color: activeTab === tab.id ? tabHoverColor : '#fff'
                                }}
                                onMouseEnter={(e) => {
                                    if (activeTab !== tab.id) {
                                        e.currentTarget.style.backgroundColor = '#fff';
                                        e.currentTarget.style.color = tabHoverColor;
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeTab !== tab.id) {
                                        e.currentTarget.style.backgroundColor = tabBackgroundColor;
                                        e.currentTarget.style.color = '#fff';
                                    }
                                }}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {/* Tab Content */}
            <div className="tab-content">
                <div className="row g-0">
                    {/* Categories Section - 5 items per row */}
                    <div className={hasMultipleTabs ? "col-md-9" : "col-12"}>
                        <div style={categoriesGridStyle}>
                            {currentContent?.categories.map((cat: any, idx: number) => (
                                <div key={idx}>
                                    <div className="d-flex flex-column align-items-center text-center border h-100"
                                         style={{ 
                                             padding: '15px',
                                             transition: 'all 0.3s ease'
                                         }}
                                         onMouseEnter={(e) => {
                                             e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,45,88,0.1)';
                                         }}
                                         onMouseLeave={(e) => {
                                             e.currentTarget.style.boxShadow = 'none';
                                         }}>
                                        <div className="mb-2">
                                            <img 
                                                src={cat.img} 
                                                alt={cat.name} 
                                                style={categoryImageStyle}
                                            />
                                        </div>
                                        <div>
                                            <a href={cat.link} 
                                               className="text-decoration-none fw-medium"
                                               style={{ 
                                                   fontSize: '14px', 
                                                   lineHeight: '1.3',
                                                   color: '#333'
                                               }}
                                               onMouseEnter={(e) => {
                                                   e.currentTarget.style.color = textPrimaryColor;
                                               }}
                                               onMouseLeave={(e) => {
                                                   e.currentTarget.style.color = '#333';
                                               }}>
                                                {cat.name}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Resources Section - Only show if multiple tabs exist */}
                    {hasMultipleTabs && (
                        <div className="col-md-3 border-start p-3">
                            <h6 className="mb-3" style={{ color: textPrimaryColor }}>Resources</h6>
                            <ul className="list-unstyled">
                                {currentContent?.resources.map((res: any, idx: number) => (
                                    <li key={idx} className="mb-2">
                                        <a href={res.link} 
                                           className="d-flex align-items-start text-decoration-none p-2"
                                           style={{
                                               transition: 'all 0.3s ease',
                                               borderRadius: '4px'
                                           }}
                                           onMouseEnter={(e) => {
                                               e.currentTarget.style.backgroundColor = '#f8f9fa';
                                           }}
                                           onMouseLeave={(e) => {
                                               e.currentTarget.style.backgroundColor = 'transparent';
                                           }}>
                                            <img 
                                                src={res.img} 
                                                alt={res.title} 
                                                style={resourceImageStyle}
                                                className="me-2 flex-shrink-0"
                                            />
                                            <span style={{ 
                                                fontSize: '13px', 
                                                lineHeight: '1.3',
                                                fontWeight: '400',
                                                color: textPrimaryColor
                                            }}>
                                                {res.title}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;