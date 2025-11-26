

// Նոր ֆայլերի ներմուծում մոբայլ մենյուի համար (համոզվեք, որ նկարները գոյություն ունեն)


import BottomHeader from './BottomHeader'
import { useState } from 'react';
import { MobileMenu } from './MobileMenuLegacy';
import { MiddleHeader } from './MiddleHeader'
import { TopHeader } from './TopHeader';

export const Toolbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="sticky-top" style={{ top: 0, zIndex: 9999 }}>
            <TopHeader />
            <MiddleHeader toggleMobileMenu={toggleMobileMenu} />
            <BottomHeader />
            <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
        </header>
    );
};

export default Toolbar;