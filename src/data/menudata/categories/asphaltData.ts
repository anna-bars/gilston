import * as images from '../images';

export const asphaltData = {
    tabs: [
        { id: 'mix-design', label: 'Mix Design', isActive: true },
        { id: 'binder-testing', label: 'Asphalt Binder Testing', isActive: false },
        { id: 'pavement-quality', label: 'Pavement Quality Testing', isActive: false },
    ],
    content: {
        'mix-design': {
            categories: [
                { name: 'Marshall Testing', link: '/marshall-testing', img: images.marshall },
                { name: 'Specific Gravity', link: '/asphalt-specific-gravity', img: images.specificGravity },
                { name: 'Asphalt Content Furnaces', link: '/asphalt-content-furnaces', img: images.contentFurnace },
                { name: 'Quartermaster Asphalt Sample Divider', link: '/quartermaster-asphalt-sample-divider', img: images.quartermaster },
                { name: 'Extraction Testing', link: '/extraction-testing', img: images.extraction },
                { name: 'Wheel Trackers', link: '/wheel-trackers', img: images.wheelTracker },
                { name: 'Superpave Oven', link: '/superpave-oven', img: images.superpaveOven },
                { name: 'Superpave Gyratory Compactors', link: '/superpave-gyratory-compactors', img: images.gyratoryCompactor },
                { name: 'Asphalt Mixers', link: '/asphalt-mixers', img: images.labMixers },
                { name: 'Draindown Basket', link: '/draindown-basket', img: images.draindownBasket },
                { name: 'Hveem Testing Machine', link: '/hveem-testing-machine', img: images.hveem },
                { name: 'Specimen Measurement', link: '/specimen-measurement', img: images.digitalCalipers },
            ],
            resources: [
                { title: 'Marshall Mix Design Guide', link: '/blog/marshall-mix-design', img: images.marshallBlog },
                { title: 'Superpave Mix Design Procedures', link: '/blog/superpave-mix-design', img: images.asphaltSgBlog },
                { title: 'Asphalt Content Testing Video', link: 'https://www.youtube.com/watch?v=asphalt-content-video', img: images.marshallSetupVd, isVideo: true }
            ]
        },
        'binder-testing': {
            categories: [
                { name: 'Rolling Thin Film Ovens (RTFO)', link: '/rolling-thin-film-ovens', img: images.rtfo },
                { name: 'Dynamic Shear Rheometers (DSR)', link: '/dynamic-shear-rheometers', img: images.dsr },
                { name: 'Viscosity Testing', link: '/viscosity-testing', img: images.viscosity },
                { name: 'Bending Beam Rheometers (BBR)', link: '/bending-beam-rheometers', img: images.bbr },
                { name: 'Pressure Aging Vessel (PAV)', link: '/pressure-aging-vessel', img: images.pav },
                { name: 'Vacuum Degassing Oven (VDO)', link: '/vacuum-degassing-oven', img: images.vdo },
                { name: 'Universal Penetrometers', link: '/universal-penetrometers', img: images.universalPenetrometers },
                { name: 'Flash Point Testers', link: '/flash-point-testers', img: images.flashpointTesters },
                { name: 'Softening Point Apparatus', link: '/softening-point-apparatus', img: images.softeningPoint },
                { name: 'Melting Pots', link: '/asphalt-melting-pots', img: images.asphaltMeltingPots },
                { name: 'Ductility Tester', link: '/ductility-tester', img: images.ductilityTester },
                { name: 'Pyrolytic Oven', link: '/pyrolytic-oven', img: images.pyrolyticOven },
            ],
            resources: [
                { title: 'Binder Testing Standards', link: '/blog/binder-testing-standards', img: images.rtfoBlog },
                { title: 'Rheology Testing Guide', link: '/blog/rheology-testing-guide', img: images.pavBlog },
                { title: 'Aging Test Procedures Video', link: 'https://www.youtube.com/watch?v=aging-test-video', img: images.bbrVideo, isVideo: true }
            ]
        },
        'pavement-quality': {
            categories: [
                { name: 'Coring and Sawing', link: '/coring-and-sawing', img: images.coreSampling },
                { name: 'NCAT Asphalt Field Permeameter', link: '/ncat-asphalt-field-permeameter', img: images.ncatFieldPermeameter },
                { name: 'Asphalt Lab Permeameters', link: '/asphalt-lab-permeameters', img: images.labPermeameter },
                { name: 'Digital IR Thermometers & Thermal Imaging Cameras', link: '/thermal-imaging-cameras', img: images.thermalImagingCameras },
                { name: 'Asphalt Depth Gauge', link: '/asphalt-depth-gauge', img: images.asphaltDepthGauge },
                { name: 'Benkelman Beam', link: '/benkelman-beam', img: images.benkelmanBeam },
                { name: 'Digital Calipers', link: '/asphalt-digital-calipers', img: images.digitalCalipers },
            ],
            resources: [
                { title: 'Pavement Quality Assessment', link: '/blog/pavement-quality-assessment', img: images.aspahltTechBlog },
                { title: 'Field Permeability Testing', link: '/blog/field-permeability-testing', img: images.flirCamerasVd },
                { title: 'Thermal Imaging Applications Video', link: 'https://www.youtube.com/watch?v=thermal-imaging-video', img: images.ncatPermVd, isVideo: true }
            ]
        }
    }
};