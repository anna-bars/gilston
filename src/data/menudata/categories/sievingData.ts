import * as images from '../images';

export const sievingData = {
    tabs: [
        { id: 'test-sieves', label: 'Test Sieves', isActive: false },
        { id: 'shakers', label: 'Sieve Shakers', isActive: true },
        { id: 'service', label: 'Sieve Services', isActive: false },
        { id: 'accessories', label: 'Sieve Accessories', isActive: false },
        { id: 'reference-materials', label: 'Standard Reference Materials', isActive: false },
        { id: 'inspection-tools', label: 'Sieve Inspection Tools', isActive: false },
        { id: 'cut-to-order', label: 'Cut-to-order cloth', isActive: false },
    ],
    content: {
        'test-sieves': {
            categories: [
                { name: 'ASTM Test Sieves', link: '/astm-test-sieves', img: images.astmTestSieves },
                { name: 'ASTM Supplemental Sieves', link: '/astm-test-sieves-supplemental-sizes', img: images.supplementalSieves },
                { name: 'ISO Test Sieves', link: '/iso-test-sieves', img: images.isoSieves },
                { name: 'Wet-Wash Sieves', link: '/wet-wash-sieves', img: images.wetWashSieves },
                { name: '3in Acrylic Frame Sieves', link: '/3-inch-acrylic-frame-test-sieves', img: images.acrylicSieves },
                { name: 'Air Jet Sieves', link: '/air-jet-sieves', img: images.airJetSieve },
                { name: 'ASTM Precision Electroformed Sieves', link: '/astm-precision-electroformed-sieves', img: images.astmElectroSieves },
                { name: 'Two-Part Replaceable Mesh Sieves', link: '/two-part-replaceable-mesh-sieves', img: images.twoPartSieves },
                { name: '3in Non-Metallic Sieves', link: '/3-inch-non-metallic-sieves', img: images.nonMetallicSieves },
            ],
            resources: [
                { title: 'Sieve Analysis of Coarse Aggregate', link: '/blog/sieve-analysis-of-coarse-aggregate', img: images.astmTestSieves },
                { title: 'Wet Sieving: A Practical Guide', link: '/blog/wet-sieving-practical-guide', img: images.wetWashSieves },
                { title: 'How To Clean Your Test Sieves', link: 'http://www.youtube.com/watch?v=VXvHRKLB-Zc', img: images.astmTestSieves, isVideo: true }
            ]
        },
        'shakers': {
            categories: [
                { name: 'Mechanical Sieve Shakers with Tapping', link: '/mechanical-tapping-shakers', img: images.mechanicalTapping },
                { name: 'Mechanical Sieve Shakers without Tapping', link: '/gilson-orbital-sieve-shakers', img: images.shakers2 },
                { name: 'Rotary Sifters', link: '/rotary-sifters-with-tapping', img: images.rotary },
                { name: 'Vibratory Sieve Shakers', link: '/vibratory-sieve-shakers', img: images.vibratory },
                { name: 'Sonic Sifters', link: '/sonic-shakers', img: images.sonic },
                { name: 'Circular Motion Sieve Shakers', link: '/circular-shakers', img: images.circular },
                { name: 'Mikro Air Jet Sieve™', link: '/mikro-air-jet-sieve', img: images.airJet },
                { name: 'Gilson Wet-Vac® Wet Sieving Shakers', link: '/gilson-wet-vac-wet-sieve-shaker', img: images.wetVac },
            ],
            resources: [
                { title: 'An Expert Guide to Selecting a Sieve Shaker', link: '/blog/an-expert-guide-to-selecting-a-sieve-shaker', img: images.mechanicalTapping },
                { title: 'Standard Method for Sieve Analysis', link: 'https://www.youtube.com/watch?v=3Xqq1cxhD-s', img: images.shakers2, isVideo: true },
                { title: 'Gilson Sieve Shakers', link: 'https://www.youtube.com/watch?v=w6YJMT5BChs', img: images.rotary, isVideo: true }
            ]
        },
        'service': {
            categories: [
                { name: 'Verification of New Sieves', link: '/test-sieve-verification', img: images.verification },
                { name: 'Reverification of Used Sieves', link: '/test-sieve-reverification', img: images.reverification },
                { name: 'Master-Matched Services', link: '/master-matched-services-for-sieves', img: images.masterMatched },
            ],
            resources: [
                { title: 'A Guide to Acing the Sieve Grade Selection Process', link: '/blog/compliance-inspection-or-calibration-astm-test-sieves-whats-right-for-me', img: images.verification },
                { title: 'Gilson Verification of New Test Sieves', link: 'https://www.youtube.com/watch?v=xVBdk5tBhHU', img: images.reverification, isVideo: true },
                { title: 'Gilson Master-Matched Services', link: 'https://www.youtube.com/watch?v=yDiZrQTNXRg', img: images.masterMatched, isVideo: true }
            ]
        },
        'accessories': {
            categories: [
                { name: 'Sieve Pans & Covers', link: '/sieve-pans-covers', img: images.pansCovers },
                { name: 'Wet Sieving Essentials', link: '/wet-sieving-essentials', img: images.wetSievingEssentials },
                { name: 'Sieve Spacers', link: '/sieve-spacers', img: images.sieveSpacers },
                { name: 'Scoops', link: '/sample-material-scoops', img: images.scoops },
                { name: 'Sieve Brushes', link: '/sieve-brushes', img: images.sieveBrushes },
                { name: 'Ultrasonic Sieve Cleaners', link: '/ultrasonic-sieve-cleaners', img: images.ultrasonicSieveCleaners },
                { name: 'Sieve Storage Racks', link: '/sieve-storage-racks', img: images.sieveStorageRacks },
                { name: 'Sieving Aid', link: '/sieving-aid', img: images.sievingAid },
                { name: 'Magnetic Separators', link: '/magnetic-separators', img: images.magneticSeparators },
                { name: 'Clean-N-Stor', link: '/clean-n-stor', img: images.cleanNStor },
            ],
            resources: [
                { title: 'Sieve Analysis of Coarse Aggregate: Sample Prepping', link: '/blog/sample-prepping-for-coarse-aggregate-sieve-analysis', img: images.pansCovers },
                { title: 'How to Clean Your Test Sieves', link: '/blog/how-to-clean-a-sieve', img: images.sieveBrushes },
                { title: 'Wet Sieving: A Practical Guide', link: 'https://www.youtube.com/watch?v=YKgmelyCc68', img: images.wetSievingEssentials, isVideo: true }
            ]
        },
        'reference-materials': {
            categories: [
                { name: 'Whitehouse Sieve Standards', link: '/whitehouse-sieve-standards', img: images.whitehouseSrm },
                { name: 'NIST Reference Materials', link: '/nist-reference-materials', img: images.nistSrm },
            ],
            resources: [
                { title: 'Reference Materials for Test Sieves: Performance Testing for Quality', link: '/blog/reference-materials-for-test-sieves-performance-testing-for-quality', img: images.whitehouseSrm },
                { title: 'How to Optimize Fines Content Determinations', link: '/blog/how-to-optimize-fines-content-determinations', img: images.nistSrm },
                { title: 'Choosing the Right Test Sieve: Test Specifications', link: 'https://www.youtube.com/watch?v=Acjw3FR_H6c', img: images.whitehouseSrm, isVideo: true }
            ]
        },
        'inspection-tools': {
            categories: [
                { name: 'Digital Calipers', link: '/digital-calipers', img: images.digitalCalipers },
                { name: 'Pocket Magnifier', link: '/pocket-magnifier', img: images.pocketMagnifier },
                { name: 'Screen Opening Gauge', link: '/screen-opening-gauge', img: images.screenOpeningGauge },
                { name: '10x Optical Comparator', link: '/10x-optical-comparator', img: images.opticalComparator },
            ],
            resources: [
                { title: 'Tips to Preserve & Extend Service Life of Your Equipment', link: '/blog/simple-steps-to-preserve-extend-service-life-of-costly-equipment', img: images.digitalCalipers },
                { title: '5 Steps to Setting Up a Flawless Quality Control Program', link: '/blog/test-sieves-setting-up-a-quality-control-program', img: images.pocketMagnifier },
                { title: 'Choosing the Right Test Sieve Mesh', link: 'https://www.youtube.com/watch?v=Jq0DrMyhEPk', img: images.screenOpeningGauge, isVideo: true }
            ]
        },
        'cut-to-order': {
            categories: [
                { name: 'ASTM Wire Cloth', link: '/astm-testing-grade-wire-cloth', img: images.astmWireCloth },
                { name: 'Polyester and Nylon Cloth', link: '/polyester-nylon-monofilament-screen-fabric', img: images.polyCloth },
            ],
            resources: [
                { title: 'Selecting the Right Sieve for Non-Conventional Use', link: '/blog/selecting-the-right-test-sieve-for-non-conventional-use', img: images.astmWireCloth },
                { title: 'Hand Sieving Method for Materials Sieve Analysis', link: 'https://www.youtube.com/watch?v=Jf_p934fSpA', img: images.polyCloth, isVideo: true },
                { title: 'Choosing the Right Specialized Test Sieve', link: 'https://www.youtube.com/watch?v=9me8RbBGZlE', img: images.astmWireCloth, isVideo: true }
            ]
        }
    }
};