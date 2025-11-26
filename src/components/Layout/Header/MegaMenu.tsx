// MegaMenu.tsx - FIXED VERSION
import { useState, useMemo } from 'react';

// Constants outside component to prevent re-renders
const MEGA_MENU_STYLES: React.CSSProperties = {
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

const CATEGORY_IMAGE_STYLE: React.CSSProperties = {
    width: '100%',
    height: '100px',
    objectFit: 'contain',
};

const RESOURCE_IMAGE_STYLE: React.CSSProperties = {
    width: '60px',
    height: '60px',
    objectFit: 'contain',
};

const CATEGORIES_GRID_STYLE: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '0',
};

const COLORS = {
    tabBackground: 'rgb(68, 103, 152)', // #446798
    tabHover: 'rgb(68, 103, 152)', 
    textPrimary: '#002d58',
    resourcesBackground: '#f2f3f4'
} as const;

// Simple TypeScript interface
interface MenuItem {
    id: string;
    label: string;
    isActive?: boolean;
}

interface MenuData {
    tabs: MenuItem[];
    content: {
        [key: string]: {
            categories: Array<{
                name: string;
                link: string;
                img: string;
            }>;
            resources: Array<{
                title: string;
                link: string;
                img: string;
            }>;
        };
    };
}

const MegaMenu = ({ data }: { data: MenuData }) => {
    const initialTab = useMemo(() => 
        data.tabs.find(t => t.isActive)?.id || data.tabs[0].id, 
        [data.tabs]
    );
    
    const [activeTab, setActiveTab] = useState(initialTab);
    const [hoverTab, setHoverTab] = useState<string | null>(null); // Added hover state for tabs
    
    const hasMultipleTabs = data.tabs.length > 1;
    
    // Use hoverTab if exists, otherwise activeTab
    const currentTab = hoverTab || activeTab;
    const currentContent = data.content[currentTab];

    const handleTabClick = (tabId: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setActiveTab(tabId);
        setHoverTab(null); // Reset hover when clicked
    };

    const handleTabHover = (tabId: string) => {
        setHoverTab(tabId);
    };

    const handleTabLeave = () => {
        setHoverTab(null);
    };

    return (
        <div className="mega-dropdown" style={MEGA_MENU_STYLES}>
            
            {/* Tab Headers - Conditional Rendering */}
            {hasMultipleTabs && (
                <ul 
                    className="nav nav-tabs border-0"
                    style={{ backgroundColor: COLORS.tabBackground }}
                >
                    {data.tabs.map((tab) => (
                        <li className="nav-item" key={tab.id}>
                            <button
                                className="nav-link border-0 rounded-0"
                                onClick={handleTabClick(tab.id)}
                                onMouseEnter={() => handleTabHover(tab.id)}
                                onMouseLeave={handleTabLeave}
                                style={{ 
                                    cursor: 'pointer', 
                                    borderRight: '1px solid #869bb8',
                                    fontSize: '14px',
                                    padding: '10px 18px',
                                    transition: 'all 0.3s ease',
                                    margin: '0',
                                    backgroundColor: currentTab === tab.id ? '#fff' : COLORS.tabBackground,
                                    color: currentTab === tab.id ? COLORS.tabHover : '#fff'
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
                    {/* Categories Grid */}
                    <div className={hasMultipleTabs ? "col-md-9" : "col-12"}>
                        <div style={CATEGORIES_GRID_STYLE}>
                            {currentContent?.categories.map((cat, idx) => (
                                <CategoryItem key={cat.name + idx} category={cat} />
                            ))}
                        </div>
                    </div>

                    {/* Resources Section - Conditional */}
                    {hasMultipleTabs && currentContent?.resources && (
                        <ResourcesSection resources={currentContent.resources} />
                    )}
                </div>
            </div>
        </div>
    );
};

// Extracted sub-components for better readability
const CategoryItem = ({ category }: { category: { name: string; link: string; img: string } }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Apply box shadow based on hover state
    const boxShadowStyle = isHovered ? '0 2px 8px rgba(0,45,88,0.1)' : 'none';

    return (
        <div 
            className="d-flex flex-column align-items-center text-center border h-100"
            style={{ 
                padding: '15px', 
                transition: 'all 0.3s ease',
                boxShadow: boxShadowStyle // Fixed: apply box shadow based on state
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="mb-2">
                <img 
                    src={category.img} 
                    alt={category.name} 
                    style={CATEGORY_IMAGE_STYLE}
                    loading="lazy"
                />
            </div>
            <div>
                <a 
                    href={category.link} 
                    className="text-decoration-none fw-medium"
                    style={{ 
                        fontSize: '14px', 
                        lineHeight: '1.3',
                        color: isHovered ? COLORS.textPrimary : '#333',
                        transition: 'color 0.3s ease'
                    }}
                >
                    {category.name}
                </a>
            </div>
        </div>
    );
};

const ResourcesSection = ({ resources }: { resources: Array<{ title: string; link: string; img: string }> }) => {
    return (
        <div 
            className="col-md-3 border-start p-3"
            style={{ backgroundColor: COLORS.resourcesBackground }}
        >
            <h6 className="mb-3" style={{ color: COLORS.textPrimary }}>Resources</h6>
            <ul className="list-unstyled">
                {resources.map((res, idx) => (
                    <ResourceItem key={res.title + idx} resource={res} />
                ))}
            </ul>
        </div>
    );
};

const ResourceItem = ({ resource }: { resource: { title: string; link: string; img: string } }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <li className="mb-2">
            <a 
                href={resource.link} 
                className="d-flex align-items-start text-decoration-none p-2"
                style={{
                    transition: 'all 0.3s ease',
                    borderRadius: '4px',
                    backgroundColor: isHovered ? '#f8f9fa' : 'transparent'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img 
                    src={resource.img} 
                    alt={resource.title} 
                    style={RESOURCE_IMAGE_STYLE}
                    className="me-2 flex-shrink-0"
                    loading="lazy"
                />
                <span style={{ 
                    fontSize: '13px', 
                    lineHeight: '1.3',
                    fontWeight: '400',
                    color: COLORS.textPrimary
                }}>
                    {resource.title}
                </span>
            </a>
        </li>
    );
};

export default MegaMenu;