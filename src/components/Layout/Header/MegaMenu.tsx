import { useState, useMemo, useRef } from 'react';

import gilsonCatalogBtn from '../../../assets/gilson-catalog-button.png'

const MEGA_MENU_STYLES: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    width: '98%', 
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
    const [hoverTab, setHoverTab] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    
    const hasMultipleTabs = data.tabs.length > 1;
    
    const currentTab = hoverTab || activeTab;
    const currentContent = data.content[currentTab];

    const handleTabClick = (tabId: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setActiveTab(tabId);
        setHoverTab(null);
    };

    const handleTabHover = (tabId: string) => {
        setHoverTab(tabId);
    };

    const handleMenuLeave = (e: React.MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.relatedTarget as Node)) {
            setHoverTab(null);
        }
    };

    const hasResources = currentContent?.resources && currentContent.resources.length > 0;

    return (
        <div 
            className="mega-dropdown" 
            style={MEGA_MENU_STYLES}
            ref={menuRef}
            onMouseLeave={handleMenuLeave}
        >
            
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

            <div className="tab-content">
                <div className="row g-0">
                    <div className={hasResources ? "col-md-9" : "col-12"}>
                        <div style={CATEGORIES_GRID_STYLE}>
                            {currentContent?.categories.map((cat, idx) => (
                                <CategoryItem key={cat.name + idx} category={cat} />
                            ))}
                        </div>
                    </div>

                    {hasResources && (
                        <ResourcesSection resources={currentContent.resources} />
                    )}
                </div>
            </div>
        </div>
    );
};

const CategoryItem = ({ category }: { category: { name: string; link: string; img: string } }) => {
    const [isHovered, setIsHovered] = useState(false);

    const boxShadowStyle = isHovered ? '0 2px 8px rgba(0,45,88,0.1)' : 'none';

    return (
        <div 
            className="d-flex flex-column align-items-center text-center border h-100"
            style={{ 
                padding: '15px', 
                transition: 'all 0.3s ease',
                boxShadow: boxShadowStyle
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

            <div className="border-bottom border-secondary mb-3 pb-3">
                <a 
                    href="https://www.globalgilson.com/customer-resource-center" 
                    className="d-block text-center text-decoration-none border border-secondary rounded text-primary fw-bold py-2"
                    style={{ fontSize: '14px' }}
                >
                    Resource Center
                </a>
            </div>

            <div className="mb-3">
                <a 
                    href="https://www.globalgilson.com/Content/Images/uploaded/pdf/product-catalogs/pdf-viewer/2021/index.html?reload=1591207903917#page=1" 
                    className="d-block text-decoration-none"
                >
                    <img 
                        src={gilsonCatalogBtn} 
                        alt="Gilson Catalog" 
                        className="w-100"
                        loading="lazy"
                    />
                </a>
            </div>

            <div>
                <a 
                    href="https://www.globalgilson.com/gilson-catalog" 
                    className="d-block text-center text-decoration-none border border-secondary rounded text-primary fw-bold py-2"
                    style={{ fontSize: '14px' }}
                >
                    Request Catalog
                </a>
            </div>
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
                    fontSize: '18px', 
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