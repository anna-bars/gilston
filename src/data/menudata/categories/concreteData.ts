import * as images from '../images';


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
                { name: 'Slump Testing', link: '/slump-testing', img: images.slump },
                { name: 'Concrete Air Meters', link: '/concrete-air-meters', img: images.concreteAirMeters },
                { name: 'Unit Weight (Density)', link: '/unit-weight-density', img: images.unitWeight },
                { name: 'Self-Consolidating Concrete (SCC)', link: '/self-consolidating-concrete', img: images.scc },
                { name: 'Concrete Consolidation', link: '/concrete-consolidation', img: images.concreteConsolidation },
                { name: 'Concrete Penetrometers', link: '/concrete-penetrometers', img: images.concretePenetrometers },
                { name: 'Fresh Testing Accessories', link: '/fresh-testing-accessories', img: images.freshTestingAccessories },
            ],
            resources: [
                { title: 'Fresh Concrete Testing Guide', link: '/blog/fresh-concrete-testing', img: images.freshConcreteBlog },
                { title: 'Air Content Testing Procedures', link: '/blog/air-content-testing', img: images.airContentBlog },
                { title: 'Slump Test Video Demonstration', link: 'https://www.youtube.com/watch?v=slump-test-video', img: images.airMeterCalibration, isVideo: true }
            ] 
        },
        'sample-molds': {
            categories: [
                { name: 'Concrete Cylinder Molds', link: '/concrete-cylinder-molds', img: images.concreteCylinderMolds },
                { name: 'Concrete Beam Molds', link: '/concrete-beam-molds', img: images.beamMold },
                { name: 'Concrete Cube Molds', link: '/concrete-cube-molds', img: images.concreteCubeMolds },
                { name: 'Sample Mold Accessories', link: '/sample-mold-accessories', img: images.concreteMoldAccessories },
            ],
            resources: [
                { title: '4 Important Steps to Reliable Concrete Test Cylinder Test', link: 'blog/four-important-steps-to-reliable-concrete-samples', img: images.freshConcreteBlog },
                { title: `Gilson's Single-Use Plastic Concrete Cylinder Molds`, link: 'https://www.youtube.com/watch?v=vCQ7PLsJdpE', img: images.airContentBlog },
                { title: `Gilson's Steel Concrete Beam Models`, link: 'https://www.youtube.com/watch?v=-eMQnpfLqus', img: images.airMeterCalibration }
            ]
        },
        'curing': {
            categories: [
                { name: 'Curing Boxes', link: '/curing-boxes', img: images.curingBoxes },
                { name: 'Curing Tanks', link: '/curing-tanks', img: images.curingTanks },
                { name: 'Field Curing Chest', link: '/field-curing-chest', img: images.fieldCuringChest },
                { name: 'Aquafog® GT 500 Fogging Fans', link: '/aquafog-fogging-fans', img: images.foggingFan },
                { name: 'Moisture Room Control Panel', link: '/moisture-room-control-panel', img: images.moistureControlPanel },
                { name: 'Curing Tank Heater', link: '/curing-tank-heater', img: images.curingTankHeater },
                { name: 'Curing Tank Circulator', link: '/curing-tank-circulator', img: images.curingTankCirculator },
                { name: 'Heater/Circulator', link: '/heater-circulator', img: images.heaterCirculator },
                { name: 'Concrete Cylinder Transport Racks', link: '/concrete-cylinder-transport-racks', img: images.cylinderTransportRacks },
                { name: 'Moist Cabinet', link: '/moist-cabinet', img: images.moistCabinet },
                { name: 'Humidity Meters', link: '/humidity-meters', img: images.humidityMeters },
                { name: 'Registering Max/Min Thermometers', link: '/registering-max-min-thermometers', img: images.maxMinRegisteringThermometers },
            ],
            resources: [
                { title: 'Concrete Curing Best Practices', link: '/blog/concrete-curing-best-practices', img: images.curingBlog },
                { title: 'Moisture Room Control Guide', link: '/blog/moisture-room-control', img: images.reliableTestCylindersBlog },
                { title: 'Curing Procedures Video', link: 'https://www.youtube.com/watch?v=curing-video', img: images.concreteVd, isVideo: true }
            ]
        },
        'strength-testing': {
            categories: [
                { name: 'Compression Machines', link: '/compression-machines', img: images.compressionMachines },
                { name: 'Compression Machines Accessories', link: '/compression-machine-accessories', img: images.compressionMachineAccessories },
                { name: 'Capping Pads and Retainers', link: '/capping-pads-and-retainers', img: images.padsRetainers },
                { name: 'Capping Compound', link: '/capping-compound', img: images.cappingCompound },
                { name: 'Vertical Cylinder Cappers', link: '/vertical-cylinder-cappers', img: images.verticalCylinderCappers },
                { name: 'Melting Pots', link: '/concrete-melting-pots', img: images.meltingPots },
                { name: 'Portable Concrete Beam Tester', link: '/portable-concrete-beam-tester', img: images.beamTester },
                { name: 'Concrete Cylinder End Grinders', link: '/concrete-cylinder-end-grinders', img: images.endGrinder },
                { name: 'Masonry Block Caps', link: '/masonry-block-caps', img: images.masonryBlockCap },
                { name: 'Specimen Measurement', link: '/specimen-measurement', img: images.digitalCalipers },
            ],
            resources: [
                { title: 'Compression Testing Guide', link: '/blog/compression-testing-guide', img: images.selectionCompressionMachineBlog },
                { title: 'Capping Procedures and Standards', link: '/blog/capping-procedures', img: images.cappingPadsBlog },
                { title: 'Beam Testing Video Guide', link: 'https://www.youtube.com/watch?v=beam-testing-video', img: images.compressionMachineVd, isVideo: true }
            ]
        },
        'non-destructive': {
            categories: [
                { name: 'Concrete Test Hammers', link: '/concrete-test-hammers', img: images.testHammers },
                { name: 'Crack Monitors', link: '/crack-monitors', img: images.crackMonitors },
                { name: 'Maturity Testing', link: '/maturity-testing', img: images.maturity },
                { name: 'Rebar Locators and Cover Meters', link: '/rebar-locators-cover-meters', img: images.rebarLocators },
                { name: 'Corrosion Measurement', link: '/corrosion-measurement', img: images.corrosionMeasurement },
                { name: 'Ultrasonic Pulse Velocity (UPV) Testers', link: '/ultrasonic-pulse-velocity-testers', img: images.upv },
                { name: 'Pull-Off Adhesion Tester', link: '/pull-off-adhesion-tester', img: images.pullOffTester },
                { name: 'Ground Penetrating Radar (GPR) Scanner', link: '/ground-penetrating-radar-scanner', img: images.gpr },
                { name: 'Concrete Resonant Frequency', link: '/concrete-resonant-frequency', img: images.concreteResonantFrequency },
                { name: 'Rapid Chloride Permeability Tester', link: '/rapid-chloride-permeability-tester', img: images.rapidChlorideTester },
                { name: 'Coefficient of Thermal Expansion', link: '/coefficient-of-thermal-expansion', img: images.coefficientThermalExpansion },
                { name: 'ASR Detection Kit', link: '/asr-detection-kit', img: images.asrDetectSet },
                { name: 'Moisture Testing', link: '/concrete-moisture-testing', img: images.moistureTesting },
                { name: 'Windsor Probe Testers', link: '/windsor-probe-testers', img: images.windsorProbe },
                { name: 'Strain Gauge Set', link: '/strain-gauge-set', img: images.strainGauge },
            ],
            resources: [
                { title: 'Non-Destructive Testing Methods', link: '/blog/non-destructive-testing-methods', img: images.nonDestructiveBlog },
                { title: 'UPV Testing Guide', link: '/blog/upv-testing-guide', img: images.reboundHammerBlog },
                { title: 'GPR Scanning Video', link: 'https://www.youtube.com/watch?v=gpr-scanning-video', img: images.concreteCrackingBlog, isVideo: true }
            ]
        },
        'coring-sawing': {
            categories: [
                { name: 'Gas-Powered Core Drill', link: '/gas-powered-core-drill', img: images.gasPowerCoreDrill },
                { name: 'Electric Core Drill', link: '/electric-core-drill', img: images.electricCoringDrill },
                { name: 'Diamond Core Bits', link: '/diamond-core-bits', img: images.coreBitExpander }, 
                { name: 'Core Bit Expander Sets', link: '/core-bit-expander-sets', img: images.coreBitExpander },
                { name: 'Core Retrieval', link: '/core-retrieval', img: images.coringRetrieval },
                { name: 'Pressurized Water Tank', link: '/pressurized-water-tank', img: images.pressurizedWaterTank },
                { name: 'Core Bit Strap Wrench', link: '/core-bit-strap-wrench', img: images.bitStrapWrench },
                { name: 'Water Circulator', link: '/water-circulator', img: images.waterCirculator },
                { name: 'Masonry Saws', link: '/masonry-saws', img: images.masonrySaws },
            ],
            resources: [
                { title: 'Concrete Coring Guide', link: '/blog/concrete-coring-guide', img: images.certifiactionVd },
                { title: 'Core Bit Selection and Maintenance', link: '/blog/core-bit-selection', img: images.extractorsVd },
                { title: 'Core Drilling Video Tutorial', link: 'https://www.youtube.com/watch?v=core-drilling-video', img: images.sawingVd, isVideo: true }
            ]
        },
        'mixing': {
            categories: [
                { name: '5qt. Benchtop Lab Mixer', link: '/5qt-benchtop-lab-mixer', img: images.labMixer5qt },
                { name: '12qt. Benchtop Lab Mixer', link: '/12qt-benchtop-lab-mixer', img: images.labMixer12qt },
                { name: 'Light-Duty Stationary Mixer', link: '/light-duty-stationary-mixer', img: images.lightDutyMixer },
                { name: 'Heavy-Duty Portable Mixers', link: '/heavy-duty-portable-mixers', img: images.heavyDutyMixer },
                { name: 'Portable Concrete Mixers', link: '/portable-concrete-mixers', img: images.concreteMixer },
            ],
            resources: [
                { title: 'Why Complete Testing of Fresh Concrete Matters', link: '/blog/concrete-mixing-procedures', img: images.cementTestingBlog },
                { title: 'Setting Up a CMT Field Lab: What Equipment is Needed', link: '/blog/lab-mixer-selection', img: images.concreteBlog },
                { title: 'Sample Material Handling Scoops', link: '/blog/lab-mixer-selection', img: images.scoopsVd }
            ]
        },
        'cement-testing': {
            categories: [
                { name: 'Cube Molds', link: '/cement-cube-molds', img: images.cementCubeMolds },
                { name: 'Prism Molds', link: '/prism-molds', img: images.prismMolds },
                { name: 'Grout Sample Box', link: '/grout-sample-box', img: images.groutSampleBox },
                { name: 'Length Change Testing', link: '/length-change-testing', img: images.lengthChangeTest },
                { name: 'Flow Tables', link: '/flow-tables', img: images.flowTables },
                { name: 'Vicat Apparatus', link: '/vicat-apparatus', img: images.vicatApparatus },
                { name: 'Mortar Penetrometers', link: '/mortar-penetrometers', img: images.mortarPenetrometers },
                { name: 'Gillmore Needle Apparatus', link: '/gillmore-needle-apparatus', img: images.gillmore },
                { name: 'Grout Flow Cone Sets', link: '/grout-flow-cone-sets', img: images.groutFlowCones },
                { name: 'Grout Prism Capping Stand', link: '/grout-prism-capping-stand', img: images.groutPrismCappingStand },
                { name: 'Masonry Grout Window', link: '/masonry-grout-window', img: images.groutWindow },
                { name: 'Le Chatelier Flask', link: '/le-chatelier-flask', img: images.leChatelier },
                { name: 'Fineness of Cement', link: '/fineness-of-cement', img: images.finenessOfCement },
                { name: 'ASTM Test Sand', link: '/astm-test-sand', img: images.testSand },
                { name: 'Strain Gauge Set', link: '/cement-strain-gauge-set', img: images.strainGauge },
            ],
            resources: [
                { title: 'Cement Testing Standards', link: '/blog/cement-testing-standards', img: images.cementTestingBlog },
                { title: 'Vicat Test Procedures', link: '/blog/vicat-test-procedures', img: images.groutFlowConeVd },
                { title: 'Cement Fineness Testing Video', link: 'https://www.youtube.com/watch?v=cement-fineness-video', img: images.concreteVd, isVideo: true }
            ]
        }
    }
};