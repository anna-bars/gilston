import * as images from '../images';

export const screeningData = { 
    tabs: [
        { id: 'screen-shakers', label: 'Screen Shakers', isActive: true },
        { id: 'screen-trays', label: 'Screen Trays', isActive: false },
        { id: 'screen-accessories', label: 'Screen Accessories', isActive: false },
    ],
    content: {
        'screen-shakers': {
            categories: [
                { name: 'Gilson Testing Screens', link: '/gilson-testing-screens', img: images.testingScreen },
                { name: 'Gilson Test-Master® Testing Screens', link: '/gilson-test-master-testing-screens', img: images.testMaster },
                { name: 'Gilson Porta-Screen®', link: '/gilson-porta-screen', img: images.porta },
                { name: 'Continuous-Flow Screen', link: '/continuous-flow-screen', img: images.continuousFlow },
                { name: 'Rocker Screen Set', link: '/rocker-screen-set', img: images.rockerScreen },
                { name: 'Gilso-Matic® Screening Assemblies', link: '/gilso-matic-screening-assemblies', img: images.gilsomatic },
            ],
            resources: [
                { title: 'Screen Shaking Techniques Guide', link: '/blog/screen-shaking-techniques', img: images.coarseGraduationBlog },
                { title: 'Screen Shaker Maintenance', link: 'https://www.youtube.com/watch?v=example1', img: images.ScreenShakersVd, isVideo: true },
                { title: 'Choosing the Right Screen Shaker', link: '/blog/choosing-screen-shaker', img: images.ScreeningAccessoriesVd }
            ]
        },
        'screen-trays': {
            categories: [
                { name: 'ASTM Testing Screen & Test-Master® Trays', link: '/astm-testing-screen-test-master-trays', img: images.astmScreenTrays },
                { name: 'ISO Testing Screen & Test-Master® Trays', link: '/iso-testing-screen-test-master-trays', img: images.isoScreenTrays },
                { name: 'ASTM Perforated Plate Testing Screen & Test-Master® Trays', link: '/astm-perforated-plate-testing-screen-trays', img: images.perforatedTrays },
                { name: 'ASTM Porta-Screen® Trays', link: '/astm-porta-screen-trays', img: images.astmPortaTrays },
                { name: 'ISO Porta-Screen® Trays', link: '/iso-porta-screen-trays', img: images.isoPortaTrays },
                { name: 'Continuous-Flow Screen Trays', link: '/continuous-flow-screen-trays', img: images.continuousFlowTray },
                { name: 'Rocker Screen Wire Cloth', link: '/rocker-screen-wire-cloth', img: images.astmWireCloth },
                { name: 'Gilso-Matic® Screen Trays', link: '/gilso-matic-screen-trays', img: images.gilsomatic },
                { name: 'Verification of New Trays', link: '/verification-of-new-trays', img: images.trayVerification },
                { name: 'Reverification of Used Trays', link: '/reverification-of-used-trays', img: images.trayReverification },
            ],
            resources: [
                { title: 'Screen Tray Selection Guide', link: '/blog/screen-tray-selection', img: images.testScreenBlog },
                { title: 'Screen Tray Installation', link: 'https://www.youtube.com/watch?v=example2', img: images.screenShakerVd, isVideo: true },
                { title: 'Tray Maintenance Best Practices', link: '/blog/tray-maintenance-best-practices', img: images.screenTrayVd }
            ]
        },
        'screen-accessories': {
            categories: [
                { name: 'Screen Tray Storage Rack', link: '/screen-tray-storage-rack', img: images.screenTrayRack },
                { name: 'Porta-Screen® Tray Rack', link: '/porta-screen-tray-rack', img: images.portaTrayRack },
                { name: 'Clean-N-Weigh Accessory', link: '/clean-n-weigh-accessory', img: images.cleanNWeigh },
                { name: 'Brushes', link: '/screen-tray-brushes', img: images.screenTrayBrushes },
                { name: 'Scoops', link: '/screening-scoops', img: images.scoops },
                { name: 'Material Handling Pans', link: '/material-handling-pans', img: images.materialHandlingPan },
                { name: 'Dustpans', link: '/screening-dustpans', img: images.screeningPan },
                { name: 'Digital Lab Timer', link: '/digital-lab-timer', img: images.screeningTimer },
                { name: 'Speed Variation Accessory', link: '/speed-variation-accessory', img: images.speedVariationAccessory },
                { name: 'Digital Calipers', link: '/screening-digital-calipers', img: images.digitalCalipers },
                { name: 'Pocket Magnifier', link: '/screening-pocket-magnifier', img: images.pocketMagnifier },
                { name: 'Screen Opening Gauge', link: '/screen-opening-gauge', img: images.screenOpeningGauge },
                { name: 'Door Enclosure', link: '/door-enclosure', img: images.doorEnclosure },
                { name: 'Sound Enclosure', link: '/sound-enclosure', img: images.soundEnclosure },
                { name: 'Hydraulic Clamping Conversion Kit', link: '/hydraulic-clamping-conversion-kit', img: images.hydraulicClampKit },
            ],
            resources: [
                { title: 'Screen Accessories Maintenance', link: '/blog/screen-accessories-maintenance', img: images.screeningAccessoriesVd },
                { title: 'Screen Cleaning Techniques', link: 'https://www.youtube.com/watch?v=example3', img: images.screeningBrushesVd, isVideo: true },
                { title: 'Accessory Setup Guide', link: '/blog/screen-accessory-setup', img: images.cleanWeighVd }
            ]
        }
    }
};
