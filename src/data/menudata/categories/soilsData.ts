import * as images from '../images';

export const soilsData = {
    tabs: [
        { id: 'all-soils', label: 'Soil Testing', isActive: true },
    ],
    content: {
        'all-soils': {
            categories: [
                { name: 'Proctor / Density', link: '/proctor-density', img: images.proctor1 },
                { name: 'California Bearing Ratio (CBR)', link: '/california-bearing-ratio', img: images.cbr },
                { name: 'Consolidation', link: '/soil-consolidation', img: images.soilConsolidation },
                { name: 'Atterberg Limits', link: '/atterberg-limits', img: images.atterberg },
                { name: 'Triaxial Shear Strength', link: '/triaxial-shear-strength', img: images.triaxial },
                { name: 'Soil Sampling', link: '/soil-sampling', img: images.soilSampling },
                { name: 'Unconfined Compressive Strength', link: '/unconfined-compressive-strength', img: images.ucs },
                { name: 'Permeability', link: '/soil-permeability', img: images.permeability },
                { name: 'Direct Shear Strength', link: '/direct-shear-strength', img: images.directShear },
                { name: 'Field Testing / Classification', link: '/field-testing-classification', img: images.soilField },
                { name: 'Hydrometer Analysis', link: '/hydrometer-analysis', img: images.hydrometerAnalysis },
                { name: 'Specific Gravity', link: '/soil-specific-gravity', img: images.soilSpecificGravity },
                { name: 'Soil-Cement', link: '/soil-cement', img: images.soilCement },
                { name: 'Load Frames', link: '/load-frames', img: images.loadFrames },
            ],
            resources: [
                { title: 'Atterberg Limits: A Quick Reference Guide', link: '/blog/complete-soil-testing-guide', img: images.atterbergBlog },
                { title: 'Proctor Compaction Test: A Basic Guide', link: '/blog/soil-mechanics-fundamentals', img: images.proctorBlog },
                { title: 'Soily Density: Pros and Cons of the Test Methods', link: 'https://www.youtube.com/watch?v=field-testing-video', img: images.soilDensityVd, isVideo: true }
            ]
        }
    }
};
