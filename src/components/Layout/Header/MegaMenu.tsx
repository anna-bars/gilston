// menuData.ts
import React from 'react';

// Sieving image imports
import astmTestSieves from '../../../assets/astm-test-sieves.png';
import supplementalSieves from '../../../assets/supplemental-sieves.png';
import isoSieves from '../../../assets/iso-sieves.png';
import wetWashSieves from '../../../assets/wet-wash-sieves.png';
import acrylicSieves from '../../../assets/3in-acrylic-sieves.png';
import airJetSieve from '../../../assets/air-jet-sieve.png';
import astmElectroSieves from '../../../assets/astm-electro-sieves.png';
import twoPartSieves from '../../../assets/2part-replaceable-sieves.png';
import nonMetallicSieves from '../../../assets/3in-non-metallic-sieves.png';

// Sieve Shakers images
import mechanicalTapping from '../../../assets/mechanical-tapping.png';
import shakers2 from '../../../assets/shakers2.png';
import rotary from '../../../assets/rotary.png';
import vibratory from '../../../assets/vibratory.png';
import sonic from '../../../assets/sonic.png';
import circular from '../../../assets/circular.png';
import airJet from '../../../assets/air-jet.png';
import wetVac from '../../../assets/wet-vac.png';

// Sieve Services images
import verification from '../../../assets/verification.png';
import reverification from '../../../assets/reverification.png';
import masterMatched from '../../../assets/master-matched.png';

// Sieve Accessories images
import pansCovers from '../../../assets/pans-covers.png';
import wetSievingEssentials from '../../../assets/wet-sieving-essentials.png';
import sieveSpacers from '../../../assets/sieve-spacers.png';
import scoops from '../../../assets/scoops.png';
import sieveBrushes from '../../../assets/sieve-brushes.png';
import ultrasonicSieveCleaners from '../../../assets/ultrasonic-sieve-cleaners.png';
import sieveStorageRacks from '../../../assets/sieve-storage-racks.png';
import sievingAid from '../../../assets/sieving-aid.png';
import magneticSeparators from '../../../assets/magnetic-separators.png';
import cleanNStor from '../../../assets/clean-n-stor.png';

// Standard Reference Materials images
import whitehouseSrm from '../../../assets/whitehouse-srm.png';
import nistSrm from '../../../assets/nist-srm.png';

// Sieve Inspection Tools images
import digitalCalipers from '../../../assets/digital-calipers.png';
import pocketMagnifier from '../../../assets/pocket-magnifier.png';
import screenOpeningGauge from '../../../assets/screen-opening-gauge.png';
import opticalComparator from '../../../assets/optical-comparator.png';

// Cut-to-order cloth images
import astmWireCloth from '../../../assets/astm-wire-cloth.png';
import polyCloth from '../../../assets/poly-cloth.png';

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
                { name: 'ASTM Test Sieves', link: '/astm-test-sieves', img: astmTestSieves },
                { name: 'ASTM Supplemental Sieves', link: '/astm-test-sieves-supplemental-sizes', img: supplementalSieves },
                { name: 'ISO Test Sieves', link: '/iso-test-sieves', img: isoSieves },
                { name: 'Wet-Wash Sieves', link: '/wet-wash-sieves', img: wetWashSieves },
                { name: '3in Acrylic Frame Sieves', link: '/3-inch-acrylic-frame-test-sieves', img: acrylicSieves },
                { name: 'Air Jet Sieves', link: '/air-jet-sieves', img: airJetSieve },
                { name: 'ASTM Precision Electroformed Sieves', link: '/astm-precision-electroformed-sieves', img: astmElectroSieves },
                { name: 'Two-Part Replaceable Mesh Sieves', link: '/two-part-replaceable-mesh-sieves', img: twoPartSieves },
                { name: '3in Non-Metallic Sieves', link: '/3-inch-non-metallic-sieves', img: nonMetallicSieves },
            ],
            resources: [
                { title: 'Sieve Analysis of Coarse Aggregate', link: '/blog/sieve-analysis-of-coarse-aggregate', img: astmTestSieves },
                { title: 'Wet Sieving: A Practical Guide', link: '/blog/wet-sieving-practical-guide', img: wetWashSieves },
                { title: 'How To Clean Your Test Sieves', link: 'http://www.youtube.com/watch?v=VXvHRKLB-Zc', img: astmTestSieves, isVideo: true }
            ]
        },
        'shakers': {
            categories: [
                { name: 'Mechanical Sieve Shakers with Tapping', link: '/mechanical-tapping-shakers', img: mechanicalTapping },
                { name: 'Mechanical Sieve Shakers without Tapping', link: '/gilson-orbital-sieve-shakers', img: shakers2 },
                { name: 'Rotary Sifters', link: '/rotary-sifters-with-tapping', img: rotary },
                { name: 'Vibratory Sieve Shakers', link: '/vibratory-sieve-shakers', img: vibratory },
                { name: 'Sonic Sifters', link: '/sonic-shakers', img: sonic },
                { name: 'Circular Motion Sieve Shakers', link: '/circular-shakers', img: circular },
                { name: 'Mikro Air Jet Sieve™', link: '/mikro-air-jet-sieve', img: airJet },
                { name: 'Gilson Wet-Vac® Wet Sieving Shakers', link: '/gilson-wet-vac-wet-sieve-shaker', img: wetVac },
            ],
            resources: [
                { title: 'An Expert Guide to Selecting a Sieve Shaker', link: '/blog/an-expert-guide-to-selecting-a-sieve-shaker', img: mechanicalTapping },
                { title: 'Standard Method for Sieve Analysis', link: 'https://www.youtube.com/watch?v=3Xqq1cxhD-s', img: shakers2, isVideo: true },
                { title: 'Gilson Sieve Shakers', link: 'https://www.youtube.com/watch?v=w6YJMT5BChs', img: rotary, isVideo: true }
            ]
        },
        'service': {
            categories: [
                { name: 'Verification of New Sieves', link: '/test-sieve-verification', img: verification },
                { name: 'Reverification of Used Sieves', link: '/test-sieve-reverification', img: reverification },
                { name: 'Master-Matched Services', link: '/master-matched-services-for-sieves', img: masterMatched },
            ],
            resources: [
                { title: 'A Guide to Acing the Sieve Grade Selection Process', link: '/blog/compliance-inspection-or-calibration-astm-test-sieves-whats-right-for-me', img: verification },
                { title: 'Gilson Verification of New Test Sieves', link: 'https://www.youtube.com/watch?v=xVBdk5tBhHU', img: reverification, isVideo: true },
                { title: 'Gilson Master-Matched Services', link: 'https://www.youtube.com/watch?v=yDiZrQTNXRg', img: masterMatched, isVideo: true }
            ]
        },
        'accessories': {
            categories: [
                { name: 'Sieve Pans & Covers', link: '/sieve-pans-covers', img: pansCovers },
                { name: 'Wet Sieving Essentials', link: '/wet-sieving-essentials', img: wetSievingEssentials },
                { name: 'Sieve Spacers', link: '/sieve-spacers', img: sieveSpacers },
                { name: 'Scoops', link: '/sample-material-scoops', img: scoops },
                { name: 'Sieve Brushes', link: '/sieve-brushes', img: sieveBrushes },
                { name: 'Ultrasonic Sieve Cleaners', link: '/ultrasonic-sieve-cleaners', img: ultrasonicSieveCleaners },
                { name: 'Sieve Storage Racks', link: '/sieve-storage-racks', img: sieveStorageRacks },
                { name: 'Sieving Aid', link: '/sieving-aid', img: sievingAid },
                { name: 'Magnetic Separators', link: '/magnetic-separators', img: magneticSeparators },
                { name: 'Clean-N-Stor', link: '/clean-n-stor', img: cleanNStor },
            ],
            resources: [
                { title: 'Sieve Analysis of Coarse Aggregate: Sample Prepping', link: '/blog/sample-prepping-for-coarse-aggregate-sieve-analysis', img: pansCovers },
                { title: 'How to Clean Your Test Sieves', link: '/blog/how-to-clean-a-sieve', img: sieveBrushes },
                { title: 'Wet Sieving: A Practical Guide', link: 'https://www.youtube.com/watch?v=YKgmelyCc68', img: wetSievingEssentials, isVideo: true }
            ]
        },
        'reference-materials': {
            categories: [
                { name: 'Whitehouse Sieve Standards', link: '/whitehouse-sieve-standards', img: whitehouseSrm },
                { name: 'NIST Reference Materials', link: '/nist-reference-materials', img: nistSrm },
            ],
            resources: [
                { title: 'Reference Materials for Test Sieves: Performance Testing for Quality', link: '/blog/reference-materials-for-test-sieves-performance-testing-for-quality', img: whitehouseSrm },
                { title: 'How to Optimize Fines Content Determinations', link: '/blog/how-to-optimize-fines-content-determinations', img: nistSrm },
                { title: 'Choosing the Right Test Sieve: Test Specifications', link: 'https://www.youtube.com/watch?v=Acjw3FR_H6c', img: whitehouseSrm, isVideo: true }
            ]
        },
        'inspection-tools': {
            categories: [
                { name: 'Digital Calipers', link: '/digital-calipers', img: digitalCalipers },
                { name: 'Pocket Magnifier', link: '/pocket-magnifier', img: pocketMagnifier },
                { name: 'Screen Opening Gauge', link: '/screen-opening-gauge', img: screenOpeningGauge },
                { name: '10x Optical Comparator', link: '/10x-optical-comparator', img: opticalComparator },
            ],
            resources: [
                { title: 'Tips to Preserve & Extend Service Life of Your Equipment', link: '/blog/simple-steps-to-preserve-extend-service-life-of-costly-equipment', img: digitalCalipers },
                { title: '5 Steps to Setting Up a Flawless Quality Control Program', link: '/blog/test-sieves-setting-up-a-quality-control-program', img: pocketMagnifier },
                { title: 'Choosing the Right Test Sieve Mesh', link: 'https://www.youtube.com/watch?v=Jq0DrMyhEPk', img: screenOpeningGauge, isVideo: true }
            ]
        },
        'cut-to-order': {
            categories: [
                { name: 'ASTM Wire Cloth', link: '/astm-testing-grade-wire-cloth', img: astmWireCloth },
                { name: 'Polyester and Nylon Cloth', link: '/polyester-nylon-monofilament-screen-fabric', img: polyCloth },
            ],
            resources: [
                { title: 'Selecting the Right Sieve for Non-Conventional Use', link: '/blog/selecting-the-right-test-sieve-for-non-conventional-use', img: astmWireCloth },
                { title: 'Hand Sieving Method for Materials Sieve Analysis', link: 'https://www.youtube.com/watch?v=Jf_p934fSpA', img: polyCloth, isVideo: true },
                { title: 'Choosing the Right Specialized Test Sieve', link: 'https://www.youtube.com/watch?v=9me8RbBGZlE', img: astmWireCloth, isVideo: true }
            ]
        }
    }
};
// menuData.ts - Screening section
import testingScreen from '../../../assets/testing-screen.png';
import testMaster from '../../../assets/test-master.png';
import porta from '../../../assets/porta.png';
import continuousFlow from '../../../assets/continuous-flow.png';
import rockerScreen from '../../../assets/rocker-screen.png';
import gilsomatic from '../../../assets/gilsomatic.png';

import astmScreenTrays from '../../../assets/astm-screen-trays.png';
import isoScreenTrays from '../../../assets/iso-screen-trays.png';
import perforatedTrays from '../../../assets/perforated-trays.png';
import astmPortaTrays from '../../../assets/astm-porta-trays.png';
import isoPortaTrays from '../../../assets/iso-screen-trays.png';
import continuousFlowTray from '../../../assets/continuous-flow-tray.png';
import trayVerification from '../../../assets/tray-verification.png';
import trayReverification from '../../../assets/tray-reverification.png';

import screenTrayRack from '../../../assets/screen-tray-rack.png';
import portaTrayRack from '../../../assets/porta-tray-rack.png';
import cleanNWeigh from '../../../assets/clean-n-weigh.png';
import screenTrayBrushes from '../../../assets/screen-tray-brushes.png';
import materialHandlingPan from '../../../assets/material-handling-pan.png';
import screeningPan from '../../../assets/screening-pan.png';
import screeningTimer from '../../../assets/screening-timer.png';
import speedVariationAccessory from '../../../assets/speed-variation-accessory.png';
import doorEnclosure from '../../../assets/door-enclosure.png';
import soundEnclosure from '../../../assets/sound-enclosure.png';
import hydraulicClampKit from '../../../assets/hydraulic-clamp-kit.png';

export const screeningData = {
    tabs: [
        { id: 'screen-shakers', label: 'Screen Shakers', isActive: true },
        { id: 'screen-trays', label: 'Screen Trays', isActive: false },
        { id: 'screen-accessories', label: 'Screen Accessories', isActive: false },
    ],
    content: {
        'screen-shakers': {
            categories: [
                { name: 'Gilson Testing Screens', link: '/gilson-testing-screens', img: testingScreen },
                { name: 'Gilson Test-Master® Testing Screens', link: '/gilson-test-master-testing-screens', img: testMaster },
                { name: 'Gilson Porta-Screen®', link: '/gilson-porta-screen', img: porta },
                { name: 'Continuous-Flow Screen', link: '/continuous-flow-screen', img: continuousFlow },
                { name: 'Rocker Screen Set', link: '/rocker-screen-set', img: rockerScreen },
                { name: 'Gilso-Matic® Screening Assemblies', link: '/gilso-matic-screening-assemblies', img: gilsomatic },
            ],
            resources: [
                { title: 'Screen Shaking Techniques Guide', link: '/blog/screen-shaking-techniques', img: testingScreen },
                { title: 'Screen Shaker Maintenance', link: 'https://www.youtube.com/watch?v=example1', img: testMaster, isVideo: true },
                { title: 'Choosing the Right Screen Shaker', link: '/blog/choosing-screen-shaker', img: porta }
            ]
        },
        'screen-trays': {
            categories: [
                { name: 'ASTM Testing Screen & Test-Master® Trays', link: '/astm-testing-screen-test-master-trays', img: astmScreenTrays },
                { name: 'ISO Testing Screen & Test-Master® Trays', link: '/iso-testing-screen-test-master-trays', img: isoScreenTrays },
                { name: 'ASTM Perforated Plate Testing Screen & Test-Master® Trays', link: '/astm-perforated-plate-testing-screen-trays', img: perforatedTrays },
                { name: 'ASTM Porta-Screen® Trays', link: '/astm-porta-screen-trays', img: astmPortaTrays },
                { name: 'ISO Porta-Screen® Trays', link: '/iso-porta-screen-trays', img: isoPortaTrays },
                { name: 'Continuous-Flow Screen Trays', link: '/continuous-flow-screen-trays', img: continuousFlowTray },
                { name: 'Rocker Screen Wire Cloth', link: '/rocker-screen-wire-cloth', img: astmWireCloth },
                { name: 'Gilso-Matic® Screen Trays', link: '/gilso-matic-screen-trays', img: gilsomatic },
                { name: 'Verification of New Trays', link: '/verification-of-new-trays', img: trayVerification },
                { name: 'Reverification of Used Trays', link: '/reverification-of-used-trays', img: trayReverification },
            ],
            resources: [
                { title: 'Screen Tray Selection Guide', link: '/blog/screen-tray-selection', img: astmScreenTrays },
                { title: 'Screen Tray Installation', link: 'https://www.youtube.com/watch?v=example2', img: isoScreenTrays, isVideo: true },
                { title: 'Tray Maintenance Best Practices', link: '/blog/tray-maintenance-best-practices', img: perforatedTrays }
            ]
        },
        'screen-accessories': {
            categories: [
                { name: 'Screen Tray Storage Rack', link: '/screen-tray-storage-rack', img: screenTrayRack },
                { name: 'Porta-Screen® Tray Rack', link: '/porta-screen-tray-rack', img: portaTrayRack },
                { name: 'Clean-N-Weigh Accessory', link: '/clean-n-weigh-accessory', img: cleanNWeigh },
                { name: 'Brushes', link: '/screen-tray-brushes', img: screenTrayBrushes },
                { name: 'Scoops', link: '/screening-scoops', img: scoops },
                { name: 'Material Handling Pans', link: '/material-handling-pans', img: materialHandlingPan },
                { name: 'Dustpans', link: '/screening-dustpans', img: screeningPan },
                { name: 'Digital Lab Timer', link: '/digital-lab-timer', img: screeningTimer },
                { name: 'Speed Variation Accessory', link: '/speed-variation-accessory', img: speedVariationAccessory },
                { name: 'Digital Calipers', link: '/screening-digital-calipers', img: digitalCalipers },
                { name: 'Pocket Magnifier', link: '/screening-pocket-magnifier', img: pocketMagnifier },
                { name: 'Screen Opening Gauge', link: '/screen-opening-gauge', img: screenOpeningGauge },
                { name: 'Door Enclosure', link: '/door-enclosure', img: doorEnclosure },
                { name: 'Sound Enclosure', link: '/sound-enclosure', img: soundEnclosure },
                { name: 'Hydraulic Clamping Conversion Kit', link: '/hydraulic-clamping-conversion-kit', img: hydraulicClampKit },
            ],
            resources: [
                { title: 'Screen Accessories Maintenance', link: '/blog/screen-accessories-maintenance', img: screenTrayRack },
                { title: 'Screen Cleaning Techniques', link: 'https://www.youtube.com/watch?v=example3', img: screenTrayBrushes, isVideo: true },
                { title: 'Accessory Setup Guide', link: '/blog/screen-accessory-setup', img: cleanNWeigh }
            ]
        }
    }
};

// menuData.ts - Sample Splitting section
import sampleSplitters from '../../../assets/sample-splitters.png';
import miniSampleSplitters from '../../../assets/mini-sample-splitters.png';
import fixedChuteSplitter from '../../../assets/fixed-chute-splitter.png';
import californiaSplitter from '../../../assets/california-splitter.png';
import spinningRiffler from '../../../assets/spinning-riffler.png';
import enclosedSplitter from '../../../assets/enclosed-splitter.png';
import reducers from '../../../assets/1-16-reducers.png';
import riffleSplitter from '../../../assets/riffle-splitter.png';
import labSplitomatic from '../../../assets/lab-splitomatic.png';
import productionSplitomatic from '../../../assets/production-splitomatic.png';
import quarteringKit from '../../../assets/quartering-kit.png';
import sampleProbes from '../../../assets/sample-probes.png';
import samplePans from '../../../assets/sample-pans.png';

export const sampleSplittingData = {
    tabs: [
        { id: 'splitters', label: 'Sample Splitters', isActive: true },
        { id: 'accessories', label: 'Splitting Accessories', isActive: false },
    ],
    content: {
        'splitters': {
            categories: [
                { name: 'Universal Sample Splitters', link: '/universal-sample-splitters', img: sampleSplitters },
                { name: 'Universal Mini-Splitters', link: '/universal-mini-splitters', img: miniSampleSplitters },
                { name: 'Fixed Chute Splitter', link: '/fixed-chute-splitter', img: fixedChuteSplitter },
                { name: 'Quartermaster Asphalt Sample Divider', link: '/quartermaster-asphalt-sample-divider', img: quartermaster },
                { name: 'California Fixed Chute Sample Splitter', link: '/california-fixed-chute-sample-splitter', img: californiaSplitter },
                { name: 'Spinning Rifflers / Rotary Sample Divider', link: '/spinning-rifflers-rotary-sample-divider', img: spinningRiffler },
                { name: 'Enclosed Sample Splitters', link: '/enclosed-sample-splitters', img: enclosedSplitter },
                { name: '1/16 Sample Reducers', link: '/1-16-sample-reducers', img: reducers },
                { name: 'Riffle Splitters', link: '/riffle-splitters', img: riffleSplitter },
                { name: 'Laboratory Split-O-Matic Splitters', link: '/laboratory-split-o-matic-splitters', img: labSplitomatic },
                { name: 'Production Split-O-Matic Splitters', link: '/production-split-o-matic-splitters', img: productionSplitomatic },
            ],
            resources: [
                { title: 'Sample Splitting Techniques Guide', link: '/blog/sample-splitting-techniques', img: sampleSplitters },
                { title: 'How to Choose the Right Sample Splitter', link: '/blog/choosing-sample-splitter', img: spinningRiffler },
                { title: 'Sample Division Best Practices', link: 'https://www.youtube.com/watch?v=splitter-video', img: riffleSplitter, isVideo: true }
            ]
        },
        'accessories': {
            categories: [
                { name: 'Sample Quartering Kit', link: '/sample-quartering-kit', img: quarteringKit },
                { name: 'Sampling Probes', link: '/sampling-probes', img: sampleProbes },
                { name: 'Sample Pans', link: '/sample-pans', img: samplePans },
                { name: 'Core Sampling', link: '/core-sampling', img: coreSampling },
            ],
            resources: [
                { title: 'Sample Quartering Techniques', link: '/blog/sample-quartering-techniques', img: quarteringKit },
                { title: 'Proper Sampling Probe Usage', link: '/blog/sampling-probe-usage', img: sampleProbes },
                { title: 'Core Sampling Methods', link: 'https://www.youtube.com/watch?v=core-sampling-video', img: coreSampling, isVideo: true }
            ]
        }
    }
};
// Main menu data structure

// menuData.ts - Aggregates section
import durabilityAbrasion from '../../../assets/durability-abrasion.png';
import specificGravity from '../../../assets/specific-gravity.png';
import angularity from '../../../assets/angularity.png';
import sandEquivalentSet from '../../../assets/sand-equivalent-set.png';
import aggWashers from '../../../assets/agg-washers.png';
import moistureTester from '../../../assets/moisture-tester.png';
import organicImpuritiesSet from '../../../assets/organic-impurities-set.png';
import methyleneBlue from '../../../assets/methylene-blue.png';
import coalTesting from '../../../assets/coal-testing.png';

// Alternative version with all in one tab
export const aggregatesData = {
    tabs: [
        { id: 'all-aggregates', label: 'Aggregate Testing', isActive: true },
    ],
    content: {
        'all-aggregates': {
            categories: [
                { name: 'Durability and Abrasion', link: '/durability-and-abrasion-testing', img: durabilityAbrasion },
                { name: 'Specific Gravity', link: '/specific-gravity-testing', img: specificGravity },
                { name: 'Angularity and Elongation', link: '/angularity-and-elongation-testing', img: angularity },
                { name: 'Sand Equivalent Testing', link: '/sand-equivalent-testing', img: sandEquivalentSet },
                { name: 'Aggregate Washers', link: '/aggregate-washers', img: aggWashers },
                { name: 'Moisture Testers', link: '/moisture-testers', img: moistureTester },
                { name: 'Organic Impurities Test Set', link: '/organic-impurities-test-set', img: organicImpuritiesSet },
                { name: 'Methylene Blue Test Set', link: '/methylene-blue-test-set', img: methyleneBlue },
                { name: 'Coal Testing', link: '/coal-testing', img: coalTesting },
            ],
            resources: [
                { title: 'Complete Aggregate Testing Guide', link: '/blog/complete-aggregate-testing-guide', img: durabilityAbrasion },
                { title: 'Aggregate Quality Control Procedures', link: '/blog/aggregate-quality-control', img: specificGravity },
                { title: 'Field Testing Techniques Video', link: 'https://www.youtube.com/watch?v=aggregate-field-testing', img: sandEquivalentSet, isVideo: true }
            ]
        }
    }
};

// menuData.ts - Asphalt section
import marshall from '../../../assets/marshall.png';
import contentFurnace from '../../../assets/content-furnace.png';
import quartermaster from '../../../assets/quartermaster.png';
import extraction from '../../../assets/extraction.png';
import wheelTracker from '../../../assets/wheel-tracker.png';
import superpaveOven from '../../../assets/superpave-oven.png';
import gyratoryCompactor from '../../../assets/gyratory-compactor.png';
import labMixers from '../../../assets/lab-mixers.png';
import draindownBasket from '../../../assets/draindown-basket.png';
import hveem from '../../../assets/hveem.png';

import rtfo from '../../../assets/rtfo.png';
import dsr from '../../../assets/dsr.png';
import viscosity from '../../../assets/viscosity.png';
import bbr from '../../../assets/bbr.png';
import pav from '../../../assets/pav.png';
import vdo from '../../../assets/vdo.png';
import universalPenetrometers from '../../../assets/universal-penetrometers.png';
import flashpointTesters from '../../../assets/flashpoint-testers.png';
import softeningPoint from '../../../assets/softening-point.png';
import asphaltMeltingPots from '../../../assets/asphalt-melting-pots.png';
import ductilityTester from '../../../assets/ductility-tester.png';
import pyrolyticOven from '../../../assets/pyrolytic-oven.png';

import coreSampling from '../../../assets/core-sampling.png';
import ncatFieldPermeameter from '../../../assets/ncat-field-permeameter.png';
import labPermeameter from '../../../assets/lab-permeameter.png';
import thermalImagingCameras from '../../../assets/thermal-imaging-cameras.png';
import asphaltDepthGauge from '../../../assets/asphalt-depth-gauge.png';
import benkelmanBeam from '../../../assets/benkelman-beam.png';

export const asphaltData = {
    tabs: [
        { id: 'mix-design', label: 'Mix Design', isActive: true },
        { id: 'binder-testing', label: 'Asphalt Binder Testing', isActive: false },
        { id: 'pavement-quality', label: 'Pavement Quality Testing', isActive: false },
    ],
    content: {
        'mix-design': {
            categories: [
                { name: 'Marshall Testing', link: '/marshall-testing', img: marshall },
                { name: 'Specific Gravity', link: '/asphalt-specific-gravity', img: specificGravity },
                { name: 'Asphalt Content Furnaces', link: '/asphalt-content-furnaces', img: contentFurnace },
                { name: 'Quartermaster Asphalt Sample Divider', link: '/quartermaster-asphalt-sample-divider', img: quartermaster },
                { name: 'Extraction Testing', link: '/extraction-testing', img: extraction },
                { name: 'Wheel Trackers', link: '/wheel-trackers', img: wheelTracker },
                { name: 'Superpave Oven', link: '/superpave-oven', img: superpaveOven },
                { name: 'Superpave Gyratory Compactors', link: '/superpave-gyratory-compactors', img: gyratoryCompactor },
                { name: 'Asphalt Mixers', link: '/asphalt-mixers', img: labMixers },
                { name: 'Draindown Basket', link: '/draindown-basket', img: draindownBasket },
                { name: 'Hveem Testing Machine', link: '/hveem-testing-machine', img: hveem },
                { name: 'Specimen Measurement', link: '/specimen-measurement', img: digitalCalipers },
            ],
            resources: [
                { title: 'Marshall Mix Design Guide', link: '/blog/marshall-mix-design', img: marshall },
                { title: 'Superpave Mix Design Procedures', link: '/blog/superpave-mix-design', img: superpaveOven },
                { title: 'Asphalt Content Testing Video', link: 'https://www.youtube.com/watch?v=asphalt-content-video', img: contentFurnace, isVideo: true }
            ]
        },
        'binder-testing': {
            categories: [
                { name: 'Rolling Thin Film Ovens (RTFO)', link: '/rolling-thin-film-ovens', img: rtfo },
                { name: 'Dynamic Shear Rheometers (DSR)', link: '/dynamic-shear-rheometers', img: dsr },
                { name: 'Viscosity Testing', link: '/viscosity-testing', img: viscosity },
                { name: 'Bending Beam Rheometers (BBR)', link: '/bending-beam-rheometers', img: bbr },
                { name: 'Pressure Aging Vessel (PAV)', link: '/pressure-aging-vessel', img: pav },
                { name: 'Vacuum Degassing Oven (VDO)', link: '/vacuum-degassing-oven', img: vdo },
                { name: 'Universal Penetrometers', link: '/universal-penetrometers', img: universalPenetrometers },
                { name: 'Flash Point Testers', link: '/flash-point-testers', img: flashpointTesters },
                { name: 'Softening Point Apparatus', link: '/softening-point-apparatus', img: softeningPoint },
                { name: 'Melting Pots', link: '/asphalt-melting-pots', img: asphaltMeltingPots },
                { name: 'Ductility Tester', link: '/ductility-tester', img: ductilityTester },
                { name: 'Pyrolytic Oven', link: '/pyrolytic-oven', img: pyrolyticOven },
            ],
            resources: [
                { title: 'Binder Testing Standards', link: '/blog/binder-testing-standards', img: rtfo },
                { title: 'Rheology Testing Guide', link: '/blog/rheology-testing-guide', img: dsr },
                { title: 'Aging Test Procedures Video', link: 'https://www.youtube.com/watch?v=aging-test-video', img: pav, isVideo: true }
            ]
        },
        'pavement-quality': {
            categories: [
                { name: 'Coring and Sawing', link: '/coring-and-sawing', img: coreSampling },
                { name: 'NCAT Asphalt Field Permeameter', link: '/ncat-asphalt-field-permeameter', img: ncatFieldPermeameter },
                { name: 'Asphalt Lab Permeameters', link: '/asphalt-lab-permeameters', img: labPermeameter },
                { name: 'Digital IR Thermometers & Thermal Imaging Cameras', link: '/thermal-imaging-cameras', img: thermalImagingCameras },
                { name: 'Asphalt Depth Gauge', link: '/asphalt-depth-gauge', img: asphaltDepthGauge },
                { name: 'Benkelman Beam', link: '/benkelman-beam', img: benkelmanBeam },
                { name: 'Digital Calipers', link: '/asphalt-digital-calipers', img: digitalCalipers },
            ],
            resources: [
                { title: 'Pavement Quality Assessment', link: '/blog/pavement-quality-assessment', img: coreSampling },
                { title: 'Field Permeability Testing', link: '/blog/field-permeability-testing', img: ncatFieldPermeameter },
                { title: 'Thermal Imaging Applications Video', link: 'https://www.youtube.com/watch?v=thermal-imaging-video', img: thermalImagingCameras, isVideo: true }
            ]
        }
    }
};
// menuData.ts - Concrete & Cement section
import slump from '../../../assets/slump.png';
import concreteAirMeters from '../../../assets/concrete-air-meters.png';
import unitWeight from '../../../assets/unit-weight.png';
import scc from '../../../assets/scc.png';
import concreteConsolidation from '../../../assets/concrete-consolidation.png';
import concretePenetrometers from '../../../assets/concrete-penetrometers.png';
import freshTestingAccessories from '../../../assets/fresh-testing-accessories.png';

import concreteCylinderMolds from '../../../assets/concrete-cylinder-molds.png';
import beamMold from '../../../assets/beam-mold.png';
import concreteCubeMolds from '../../../assets/concrete-cube-molds.png';
import concreteMoldAccessories from '../../../assets/concrete-mold-accessories.png';

import curingBoxes from '../../../assets/curing-boxes.png';
import curingTanks from '../../../assets/curing-tanks.png';
import fieldCuringChest from '../../../assets/field-curing-chest.png';
import foggingFan from '../../../assets/fogging-fan.png';
import moistureControlPanel from '../../../assets/moisture-control-panel.png';
import curingTankHeater from '../../../assets/curing-tank-heater.png';
import curingTankCirculator from '../../../assets/curing-tank-circulator.png';
import heaterCirculator from '../../../assets/heater-circulator.png';
import cylinderTransportRacks from '../../../assets/cylinder-transport-racks.png';
import moistCabinet from '../../../assets/moist-cabinet.png';
import humidityMeters from '../../../assets/humidity-meters.png';
import maxMinRegisteringThermometers from '../../../assets/max-min-registering-thermometers.png';

import compressionMachines from '../../../assets/compression-machines.png';
import compressionMachineAccessories from '../../../assets/compression-machine-accessories.png';
import padsRetainers from '../../../assets/pads-retainers.png';
import cappingCompound from '../../../assets/capping-compound.png';
import verticalCylinderCappers from '../../../assets/vertical-cylinder-cappers.png';
import meltingPots from '../../../assets/melting-pots.png';
import beamTester from '../../../assets/beam-tester.png';
import endGrinder from '../../../assets/end-grinder.png';
import masonryBlockCap from '../../../assets/masonry-block-cap.png';

import testHammers from '../../../assets/test-hammers.png';
import crackMonitors from '../../../assets/crack-monitors.png';
import maturity from '../../../assets/maturity.png';
import rebarLocators from '../../../assets/rebar-locators.png';
import corrosionMeasurement from '../../../assets/corrosion-measurement.png';
import upv from '../../../assets/upv.png';
import pullOffTester from '../../../assets/pull-off-tester.png';
import gpr from '../../../assets/gpr.png';
import concreteResonantFrequency from '../../../assets/concrete-resonant-frequency.png';
import rapidChlorideTester from '../../../assets/rapid-chloride-tester.png';
import coefficientThermalExpansion from '../../../assets/coefficient-thermal-expansion.png';
import asrDetectSet from '../../../assets/asr-detect-set.png';
import moistureTesting from '../../../assets/moisture-testing.png';
import windsorProbe from '../../../assets/windsor-probe.png';
import strainGauge from '../../../assets/strain-gauge.png';

import gasPowerCoreDrill from '../../../assets/gas-power-core-drill.png';
import electricCoringDrill from '../../../assets/electric-coring-drill.png';
import coreBits from '../../../assets/core-bits.png';
import coreBitExpander from '../../../assets/core-bit-expander.png';
import coringRetrieval from '../../../assets/coring-retrieval.png';
import pressurizedWaterTank from '../../../assets/pressurized-water-tank.png';
import bitStrapWrench from '../../../assets/bit-strap-wrench.png';
import waterCirculator from '../../../assets/water-circulator.png';
import masonrySaws from '../../../assets/masonry-saws.png';

import labMixer5qt from '../../../assets/5qt-lab-mixer.png';
import labMixer12qt from '../../../assets/12qt-lab-mixer.png';
import lightDutyMixer from '../../../assets/light-duty-mixer.png';
import heavyDutyMixer from '../../../assets/heavy-duty-mixer.png';
import concreteMixer from '../../../assets/concrete-mixer.png';

import cementCubeMolds from '../../../assets/cement-cube-molds.png';
import prismMolds from '../../../assets/prism-molds.png';
import groutSampleBox from '../../../assets/grout-sample-box.png';
import lengthChangeTest from '../../../assets/length-change-test.png';
import flowTables from '../../../assets/flow-tables.png';
import vicatApparatus from '../../../assets/vicat-apparatus.png';
import mortarPenetrometers from '../../../assets/mortar-penetrometers.png';
import gillmore from '../../../assets/gillmore.png';
import groutFlowCones from '../../../assets/grout-flow-cones.png';
import groutPrismCappingStand from '../../../assets/grout-prism-capping-stand.png';
import groutWindow from '../../../assets/grout-window.png';
import leChatelier from '../../../assets/le-chatelier.png';
import finenessOfCement from '../../../assets/fineness-of-cement.png';
import testSand from '../../../assets/test-sand.png';
import proctor1 from '../../../assets/proctor-1.png';
import cbr from '../../../assets/cbr.png';
import soilConsolidation from '../../../assets/soil-consolidation.png';
import atterberg from '../../../assets/atterberg.png';
import triaxial from '../../../assets/triaxial.png';
import soilSampling from '../../../assets/soil-sampling.png';
import ucs from '../../../assets/ucs.png';
import permeability from '../../../assets/permeability.png';
import directShear from '../../../assets/direct-shear.png';
import soilField from '../../../assets/soil-field.png';
import hydrometerAnalysis from '../../../assets/hydrometer-analysis.png';
import soilSpecificGravity from '../../../assets/soil-specific-gravity.png';
import soilCement from '../../../assets/cement1.jpg';
import loadFrames from '../../../assets/load-frames.png';
export const concreteData = {
    tabs: [
        { id: 'fresh-concrete', label: 'Fresh Concrete Testing', isActive: true },
        { id: 'sample-molds', label: 'Concrete Sample Molds', isActive: false },
        { id: 'curing', label: 'Curing', isActive: false },
        { id: 'strength-testing', label: 'Strength Testing', isActive: false },
        { id: 'non-destructive', label: 'Non-Destructive Testing', isActive: false },
        { id: 'coring-sawing', label: 'Coring and Sawing', isActive: false },
        { id: 'mixing', label: 'Mixing', isActive: false },
        { id: 'cement-testing', label: 'Cement Testing', isActive: false },
    ],
    content: {
        'fresh-concrete': {
            categories: [
                { name: 'Slump Testing', link: '/slump-testing', img: slump },
                { name: 'Concrete Air Meters', link: '/concrete-air-meters', img: concreteAirMeters },
                { name: 'Unit Weight (Density)', link: '/unit-weight-density', img: unitWeight },
                { name: 'Self-Consolidating Concrete (SCC)', link: '/self-consolidating-concrete', img: scc },
                { name: 'Concrete Consolidation', link: '/concrete-consolidation', img: concreteConsolidation },
                { name: 'Concrete Penetrometers', link: '/concrete-penetrometers', img: concretePenetrometers },
                { name: 'Fresh Testing Accessories', link: '/fresh-testing-accessories', img: freshTestingAccessories },
            ],
            resources: [
                { title: 'Fresh Concrete Testing Guide', link: '/blog/fresh-concrete-testing', img: slump },
                { title: 'Air Content Testing Procedures', link: '/blog/air-content-testing', img: concreteAirMeters },
                { title: 'Slump Test Video Demonstration', link: 'https://www.youtube.com/watch?v=slump-test-video', img: slump, isVideo: true }
            ]
        },
        'sample-molds': {
            categories: [
                { name: 'Concrete Cylinder Molds', link: '/concrete-cylinder-molds', img: concreteCylinderMolds },
                { name: 'Concrete Beam Molds', link: '/concrete-beam-molds', img: beamMold },
                { name: 'Concrete Cube Molds', link: '/concrete-cube-molds', img: concreteCubeMolds },
                { name: 'Sample Mold Accessories', link: '/sample-mold-accessories', img: concreteMoldAccessories },
            ],
            resources: [
                { title: 'Concrete Sample Preparation Guide', link: '/blog/concrete-sample-preparation', img: concreteCylinderMolds },
                { title: 'Mold Selection and Usage', link: '/blog/mold-selection-usage', img: beamMold }
            ]
        },
        'curing': {
            categories: [
                { name: 'Curing Boxes', link: '/curing-boxes', img: curingBoxes },
                { name: 'Curing Tanks', link: '/curing-tanks', img: curingTanks },
                { name: 'Field Curing Chest', link: '/field-curing-chest', img: fieldCuringChest },
                { name: 'Aquafog® GT 500 Fogging Fans', link: '/aquafog-fogging-fans', img: foggingFan },
                { name: 'Moisture Room Control Panel', link: '/moisture-room-control-panel', img: moistureControlPanel },
                { name: 'Curing Tank Heater', link: '/curing-tank-heater', img: curingTankHeater },
                { name: 'Curing Tank Circulator', link: '/curing-tank-circulator', img: curingTankCirculator },
                { name: 'Heater/Circulator', link: '/heater-circulator', img: heaterCirculator },
                { name: 'Concrete Cylinder Transport Racks', link: '/concrete-cylinder-transport-racks', img: cylinderTransportRacks },
                { name: 'Moist Cabinet', link: '/moist-cabinet', img: moistCabinet },
                { name: 'Humidity Meters', link: '/humidity-meters', img: humidityMeters },
                { name: 'Registering Max/Min Thermometers', link: '/registering-max-min-thermometers', img: maxMinRegisteringThermometers },
            ],
            resources: [
                { title: 'Concrete Curing Best Practices', link: '/blog/concrete-curing-best-practices', img: curingBoxes },
                { title: 'Moisture Room Control Guide', link: '/blog/moisture-room-control', img: moistureControlPanel },
                { title: 'Curing Procedures Video', link: 'https://www.youtube.com/watch?v=curing-video', img: curingTanks, isVideo: true }
            ]
        },
        'strength-testing': {
            categories: [
                { name: 'Compression Machines', link: '/compression-machines', img: compressionMachines },
                { name: 'Compression Machines Accessories', link: '/compression-machine-accessories', img: compressionMachineAccessories },
                { name: 'Capping Pads and Retainers', link: '/capping-pads-and-retainers', img: padsRetainers },
                { name: 'Capping Compound', link: '/capping-compound', img: cappingCompound },
                { name: 'Vertical Cylinder Cappers', link: '/vertical-cylinder-cappers', img: verticalCylinderCappers },
                { name: 'Melting Pots', link: '/concrete-melting-pots', img: meltingPots },
                { name: 'Portable Concrete Beam Tester', link: '/portable-concrete-beam-tester', img: beamTester },
                { name: 'Concrete Cylinder End Grinders', link: '/concrete-cylinder-end-grinders', img: endGrinder },
                { name: 'Masonry Block Caps', link: '/masonry-block-caps', img: masonryBlockCap },
                { name: 'Specimen Measurement', link: '/specimen-measurement', img: digitalCalipers },
            ],
            resources: [
                { title: 'Compression Testing Guide', link: '/blog/compression-testing-guide', img: compressionMachines },
                { title: 'Capping Procedures and Standards', link: '/blog/capping-procedures', img: cappingCompound },
                { title: 'Beam Testing Video Guide', link: 'https://www.youtube.com/watch?v=beam-testing-video', img: beamTester, isVideo: true }
            ]
        },
        'non-destructive': {
            categories: [
                { name: 'Concrete Test Hammers', link: '/concrete-test-hammers', img: testHammers },
                { name: 'Crack Monitors', link: '/crack-monitors', img: crackMonitors },
                { name: 'Maturity Testing', link: '/maturity-testing', img: maturity },
                { name: 'Rebar Locators and Cover Meters', link: '/rebar-locators-cover-meters', img: rebarLocators },
                { name: 'Corrosion Measurement', link: '/corrosion-measurement', img: corrosionMeasurement },
                { name: 'Ultrasonic Pulse Velocity (UPV) Testers', link: '/ultrasonic-pulse-velocity-testers', img: upv },
                { name: 'Pull-Off Adhesion Tester', link: '/pull-off-adhesion-tester', img: pullOffTester },
                { name: 'Ground Penetrating Radar (GPR) Scanner', link: '/ground-penetrating-radar-scanner', img: gpr },
                { name: 'Concrete Resonant Frequency', link: '/concrete-resonant-frequency', img: concreteResonantFrequency },
                { name: 'Rapid Chloride Permeability Tester', link: '/rapid-chloride-permeability-tester', img: rapidChlorideTester },
                { name: 'Coefficient of Thermal Expansion', link: '/coefficient-of-thermal-expansion', img: coefficientThermalExpansion },
                { name: 'ASR Detection Kit', link: '/asr-detection-kit', img: asrDetectSet },
                { name: 'Moisture Testing', link: '/concrete-moisture-testing', img: moistureTesting },
                { name: 'Windsor Probe Testers', link: '/windsor-probe-testers', img: windsorProbe },
                { name: 'Strain Gauge Set', link: '/strain-gauge-set', img: strainGauge },
            ],
            resources: [
                { title: 'Non-Destructive Testing Methods', link: '/blog/non-destructive-testing-methods', img: testHammers },
                { title: 'UPV Testing Guide', link: '/blog/upv-testing-guide', img: upv },
                { title: 'GPR Scanning Video', link: 'https://www.youtube.com/watch?v=gpr-scanning-video', img: gpr, isVideo: true }
            ]
        },
        'coring-sawing': {
            categories: [
                { name: 'Gas-Powered Core Drill', link: '/gas-powered-core-drill', img: gasPowerCoreDrill },
                { name: 'Electric Core Drill', link: '/electric-core-drill', img: electricCoringDrill },
                { name: 'Diamond Core Bits', link: '/diamond-core-bits', img: coreBits },
                { name: 'Core Bit Expander Sets', link: '/core-bit-expander-sets', img: coreBitExpander },
                { name: 'Core Retrieval', link: '/core-retrieval', img: coringRetrieval },
                { name: 'Pressurized Water Tank', link: '/pressurized-water-tank', img: pressurizedWaterTank },
                { name: 'Core Bit Strap Wrench', link: '/core-bit-strap-wrench', img: bitStrapWrench },
                { name: 'Water Circulator', link: '/water-circulator', img: waterCirculator },
                { name: 'Masonry Saws', link: '/masonry-saws', img: masonrySaws },
            ],
            resources: [
                { title: 'Concrete Coring Guide', link: '/blog/concrete-coring-guide', img: gasPowerCoreDrill },
                { title: 'Core Bit Selection and Maintenance', link: '/blog/core-bit-selection', img: coreBits },
                { title: 'Core Drilling Video Tutorial', link: 'https://www.youtube.com/watch?v=core-drilling-video', img: electricCoringDrill, isVideo: true }
            ]
        },
        'mixing': {
            categories: [
                { name: '5qt. Benchtop Lab Mixer', link: '/5qt-benchtop-lab-mixer', img: labMixer5qt },
                { name: '12qt. Benchtop Lab Mixer', link: '/12qt-benchtop-lab-mixer', img: labMixer12qt },
                { name: 'Light-Duty Stationary Mixer', link: '/light-duty-stationary-mixer', img: lightDutyMixer },
                { name: 'Heavy-Duty Portable Mixers', link: '/heavy-duty-portable-mixers', img: heavyDutyMixer },
                { name: 'Portable Concrete Mixers', link: '/portable-concrete-mixers', img: concreteMixer },
            ],
            resources: [
                { title: 'Concrete Mixing Procedures', link: '/blog/concrete-mixing-procedures', img: labMixer5qt },
                { title: 'Lab Mixer Selection Guide', link: '/blog/lab-mixer-selection', img: labMixer12qt }
            ]
        },
        'cement-testing': {
            categories: [
                { name: 'Cube Molds', link: '/cement-cube-molds', img: cementCubeMolds },
                { name: 'Prism Molds', link: '/prism-molds', img: prismMolds },
                { name: 'Grout Sample Box', link: '/grout-sample-box', img: groutSampleBox },
                { name: 'Length Change Testing', link: '/length-change-testing', img: lengthChangeTest },
                { name: 'Flow Tables', link: '/flow-tables', img: flowTables },
                { name: 'Vicat Apparatus', link: '/vicat-apparatus', img: vicatApparatus },
                { name: 'Mortar Penetrometers', link: '/mortar-penetrometers', img: mortarPenetrometers },
                { name: 'Gillmore Needle Apparatus', link: '/gillmore-needle-apparatus', img: gillmore },
                { name: 'Grout Flow Cone Sets', link: '/grout-flow-cone-sets', img: groutFlowCones },
                { name: 'Grout Prism Capping Stand', link: '/grout-prism-capping-stand', img: groutPrismCappingStand },
                { name: 'Masonry Grout Window', link: '/masonry-grout-window', img: groutWindow },
                { name: 'Le Chatelier Flask', link: '/le-chatelier-flask', img: leChatelier },
                { name: 'Fineness of Cement', link: '/fineness-of-cement', img: finenessOfCement },
                { name: 'ASTM Test Sand', link: '/astm-test-sand', img: testSand },
                { name: 'Strain Gauge Set', link: '/cement-strain-gauge-set', img: strainGauge },
            ],
            resources: [
                { title: 'Cement Testing Standards', link: '/blog/cement-testing-standards', img: cementCubeMolds },
                { title: 'Vicat Test Procedures', link: '/blog/vicat-test-procedures', img: vicatApparatus },
                { title: 'Cement Fineness Testing Video', link: 'https://www.youtube.com/watch?v=cement-fineness-video', img: finenessOfCement, isVideo: true }
            ]
        }
    }
};

// Alternative version with all in one tab
export const soilsData = {
    tabs: [
        { id: 'all-soils', label: 'Soil Testing', isActive: true },
    ],
    content: {
        'all-soils': {
            categories: [
                { name: 'Proctor / Density', link: '/proctor-density', img: proctor1 },
                { name: 'California Bearing Ratio (CBR)', link: '/california-bearing-ratio', img: cbr },
                { name: 'Consolidation', link: '/soil-consolidation', img: soilConsolidation },
                { name: 'Atterberg Limits', link: '/atterberg-limits', img: atterberg },
                { name: 'Triaxial Shear Strength', link: '/triaxial-shear-strength', img: triaxial },
                { name: 'Soil Sampling', link: '/soil-sampling', img: soilSampling },
                { name: 'Unconfined Compressive Strength', link: '/unconfined-compressive-strength', img: ucs },
                { name: 'Permeability', link: '/soil-permeability', img: permeability },
                { name: 'Direct Shear Strength', link: '/direct-shear-strength', img: directShear },
                { name: 'Field Testing / Classification', link: '/field-testing-classification', img: soilField },
                { name: 'Hydrometer Analysis', link: '/hydrometer-analysis', img: hydrometerAnalysis },
                { name: 'Specific Gravity', link: '/soil-specific-gravity', img: soilSpecificGravity },
                { name: 'Soil-Cement', link: '/soil-cement', img: soilCement },
                { name: 'Load Frames', link: '/load-frames', img: loadFrames },
            ],
            resources: [
                { title: 'Complete Soil Testing Guide', link: '/blog/complete-soil-testing-guide', img: proctor1 },
                { title: 'Soil Mechanics Fundamentals', link: '/blog/soil-mechanics-fundamentals', img: triaxial },
                { title: 'Field Testing Techniques Video', link: 'https://www.youtube.com/watch?v=field-testing-video', img: soilField, isVideo: true }
            ]
        }
    }
};

// menuData.ts - General Lab section imports
import ovensFurnaces from '../../../assets/ovens-furnaces.png';
import crushersPulverizersMills from '../../../assets/crushers-pulverizers-mills.png';
import temperatureHumidity from '../../../assets/temperature-humidity.png';
import scalesBalances from '../../../assets/scales-balances.png';
import labSupplies from '../../../assets/lab-supplies.png';
import labSafety from '../../../assets/lab-safety.png';
import labUtensils from '../../../assets/lab-utensils.png';
import sampleContainers from '../../../assets/sample-containers.png';
import pansDishesBowls from '../../../assets/pans-dishes-bowls.png';
import timersStopwatches from '../../../assets/timers-stopwatches.png';
import books from '../../../assets/books.png';
import heating from '../../../assets/heating.png';

// Alternative version with all in one tab
export const generalLabData = {
    tabs: [
        { id: 'all-general-lab', label: 'General Lab', isActive: true },
    ],
    content: {
        'all-general-lab': {
            categories: [
                { name: 'Ovens and Furnaces', link: '/ovens-and-furnaces', img: ovensFurnaces },
                { name: 'Crushers, Pulverizers & Mills', link: '/crushers-pulverizers-mills', img: crushersPulverizersMills },
                { name: 'Temperature and Humidity', link: '/temperature-and-humidity', img: temperatureHumidity },
                { name: 'Scales and Balances', link: '/scales-and-balances', img: scalesBalances },
                { name: 'Lab Tools and Supplies', link: '/lab-tools-and-supplies', img: labSupplies },
                { name: 'Lab Safety', link: '/lab-safety', img: labSafety },
                { name: 'Lab Utensils and Hand Tools', link: '/lab-utensils-and-hand-tools', img: labUtensils },
                { name: 'Sample Containers and Bags', link: '/sample-containers-and-bags', img: sampleContainers },
                { name: 'Sample Pans, Dishes, and Bowls', link: '/sample-pans-dishes-and-bowls', img: pansDishesBowls },
                { name: 'Timers & Stopwatches', link: '/timers-and-stopwatches', img: timersStopwatches },
                { name: 'Reference Books and Materials', link: '/reference-books-and-materials', img: books },
                { name: 'Hot Plates, Ranges, and Lab Burners', link: '/hot-plates-ranges-lab-burners', img: heating },
                { name: 'Laboratory Mixers', link: '/laboratory-mixers', img: labMixers },
            ],
            resources: [
                { title: 'Complete Laboratory Setup Guide', link: '/blog/complete-laboratory-setup-guide', img: ovensFurnaces },
                { title: 'Lab Equipment Selection Guide', link: '/blog/lab-equipment-selection-guide', img: scalesBalances },
                { title: 'Lab Organization and Safety Video', link: 'https://www.youtube.com/watch?v=lab-organization-safety-video', img: labSafety, isVideo: true }
            ]
        }
    }
};
import { useState } from 'react';
// menuData.ts կամ նույն ֆայլի մեջ

export const menuData = {
    sieving: sievingData,
    screening: screeningData,
    // Add other main categories here as needed
};



// Ոճավորում Mega Menu-ի համար (կարող ես տեղափոխել CSS ֆայլ)
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

const MegaMenu = ({ data }: { data: any }) => {
    // Default active tab-ը գտնում ենք տվյալներից կամ վերցնում առաջինը
    const initialTab = data.tabs.find((t: any) => t.isActive)?.id || data.tabs[0].id;
    const [activeTab, setActiveTab] = useState(initialTab);

    const currentContent = data.content[activeTab];

    return (
        <div className="mega-dropdown" style={megaMenuStyles}>
            
            {/* Tab Header-ներ */}
            <ul className="nav nav-tabs">
                {data.tabs.map((tab: any) => (
                    <li className="nav-item" key={tab.id}>
                        <button
                            className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab(tab.id);
                            }}
                            style={{ cursor: 'pointer', color: activeTab === tab.id ? '#002d58' : '#666' }}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
                <div className="row">
                    {/* Ձախ մաս - Կատեգորիաներ (col-md-9) */}
                    <div className="col-md-9"style={{ padding: '0 24px' }}
 >
                        <div className="row">
                            {currentContent?.categories.map((cat: any, idx: number) => (
                                <div className="category1" key={idx} style={{ width: '26%', padding: '10px' }}>
                                    <div className="align-items-center">
                                        <div className='category-img'><img src={cat.img} alt={cat.name} style={{ width: '100%', marginRight: '10px' }} /></div>
                                        <div className='category-name'>
                                            <a href={cat.link} style={{ textDecoration: 'none', color: '#333', fontSize: '14px' }}>
                                            {cat.name}
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Աջ մաս - Ռեսուրսներ (col-md-3) */}
                    <div className="col-md-3 border-start">
                        <h6>Resources</h6>
                        <ul className="list-unstyled">
                            {currentContent?.resources.map((res: any, idx: number) => (
                                <li key={idx} className="mb-3">
                                    <a href={res.link} className="d-block text-decoration-none">
                                        <img src={res.img} alt={res.title} style={{ width: '100%', marginBottom: '5px' }} />
                                        <span style={{ fontSize: '13px', color: '#002d58', fontWeight: 'bold' }}>{res.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;