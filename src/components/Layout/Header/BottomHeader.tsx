import { useState } from "react";
import MegaMenu, { aggregatesData, asphaltData, concreteData, generalLabData, sampleSplittingData, screeningData, sievingData, soilsData } from "./MegaMenu";

const styles = {
    colors: {
        bgTop: '#f4f5f6',
        borderGrey: '#d6d8db',
        textBlue: '#002d58', // Ձեր հիմնական կապույտը
        lightBlue: '#658dbc',
        placeholder: '#a3abb7',
        navHover: '#597aa8',
        navBorder: '#294f73',
        gilsonOrange: '#f59a1f', // Աջակցության կոճակի նարնջագույնը
        gilsonGreen: '#88c633', // Կոճակի կանաչը
        gilsonDarkBlue: '#002d5c' // Կոնտակտի գլխագրի կապույտը
    },
    fonts: {
        headerTitle: '14px',
        navLink: '14px',
    },
    search: {
        height: '45px',
        borderRadiusInput: '5px 0 0 5px',
        borderRadiusBtn: '0 5px 5px 0',
    }
};

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
    const navItems = [
    { name: "Sieving", link: "sieve-analysis-equipment", data: sievingData },
    { name: "Screening", link: "screening", data: screeningData },
    { name: "Sample Splitting", link: "sampling-dividing", data: sampleSplittingData },
    { name: "Aggregates", link: "aggregate-testing-equipment", data: aggregatesData },
    { name: "Asphalt", link: "asphalt-testing-equipment", data: asphaltData},
    { name: "Concrete", link: "concrete-testing-equipment", data: concreteData },
    { name: "Soils", link: "soil-testing-equipment", data: soilsData },
    { name: "General Lab", link: "pans-tools-glassware", data: generalLabData}
];

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
