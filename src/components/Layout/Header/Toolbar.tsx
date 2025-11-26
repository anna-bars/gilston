

// Նոր ֆայլերի ներմուծում մոբայլ մենյուի համար (համոզվեք, որ նկարները գոյություն ունեն)


import BottomHeader from './BottomHeader'
import { useState } from 'react';
import { MobileMenu } from './MobileMenuLegacy';
import { MiddleHeader } from './MiddleHeader'
import { TopHeader } from './TopHeader';

// 1. Գույների և ոճերի կոնստանտներ
export const styles = {
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



// Կոմպոնենտ Մոբայլ Մենյուի համար (Offcanvas)








export const Toolbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="sticky-top" style={{ top: 0, zIndex: 9999 }}>
            <TopHeader />
            <MiddleHeader toggleMobileMenu={toggleMobileMenu} />
            <BottomHeader />
            
            {/* ՆԵՐԱՌՎԱԾ ՄՈԲԱՅԼ ՄԵՆՅՈՒՆ */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
        </header>
    );
};

export default Toolbar;