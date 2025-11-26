import { useState } from "react";
import MegaMenu from "./MegaMenu";
import {navItems} from '../../../data/menudata/menuData'
import { styles } from "./style/headerstyle";


// NavItem-ը թարմացված
export const NavItem = ({ item, isLast, menuData }: { item: any, isLast: boolean, menuData?: any }) => {
    const [hover, setHover] = useState(false);

    return (
        <li 
            className="flex-fill text-center " // position-relative կարևոր է
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <a 
                href={`https://www.globalgilson.com/${item.link}`}
                className="d-block text-white fw-bold text-decoration-none py-3"
                style={{
                    fontSize: '16px',
                    transition: 'all .4s ease-in-out',
                    backgroundColor: hover ? styles.colors.navHover : 'transparent',
                    borderRight: isLast ? 'none' : `1px solid ${styles.colors.navBorder}`
                }}
            >
                {item.name}
            </a>

            {/* Եթե hover է և կա menuData, ցուցադրել MegaMenu-ն */}
            {hover && menuData && (
                <MegaMenu data={menuData} />
            )}
        </li>
    );
};

// BottomHeader-ը թարմացված
const BottomHeader = () => { 
 

    return (
        <div style={{ backgroundColor: styles.colors.textBlue, boxShadow: '0 3px 8px rgba(115,116,118,1)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-none d-lg-block">
                        <ul className="d-flex justify-content-between m-0 p-0 list-unstyled w-100">
                            {navItems.map((item, index) => (
                                <NavItem 
                                    key={item.name} 
                                    item={item} 
                                    isLast={index === navItems.length - 1} 
                                    menuData={item.data} // Փոխանցում ենք տվյալները
                                />
                            ))}
                        </ul>
                    </div>
                    {/* ... mobile view code ... */}
                </div>
            </div>
        </div>
    );
};


export default BottomHeader;
