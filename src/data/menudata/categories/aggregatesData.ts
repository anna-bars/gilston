import * as images from '../images';

export const aggregatesData = {
    tabs: [
        { id: 'all-aggregates', label: 'Aggregate Testing', isActive: true },
    ],
    content: { 
        'all-aggregates': {
            categories: [
                { name: 'Durability and Abrasion', link: '/durability-and-abrasion-testing', img: images.durabilityAbrasion },
                { name: 'Specific Gravity', link: '/specific-gravity-testing', img: images.specificGravity },
                { name: 'Angularity and Elongation', link: '/angularity-and-elongation-testing', img: images.angularity },
                { name: 'Sand Equivalent Testing', link: '/sand-equivalent-testing', img: images.sandEquivalentSet },
                { name: 'Aggregate Washers', link: '/aggregate-washers', img: images.aggWashers },
                { name: 'Moisture Testers', link: '/moisture-testers', img: images.moistureTester },
                { name: 'Organic Impurities Test Set', link: '/organic-impurities-test-set', img: images.organicImpuritiesSet },
                { name: 'Methylene Blue Test Set', link: '/methylene-blue-test-set', img: images.methyleneBlue },
                { name: 'Coal Testing', link: '/coal-testing', img: images.coalTesting },
            ],
            resources: [
                { title: 'Complete Aggregate Testing Guide', link: '/blog/complete-aggregate-testing-guide', img: images.fitnessAggBlog },
                { title: 'Aggregate Quality Control Procedures', link: '/blog/aggregate-quality-control', img: images.characteristicsAggVideo },
                { title: 'Field Testing Techniques Video', link: 'https://www.youtube.com/watch?v=aggregate-field-testing', img: images.manualAggVd, isVideo: true }
            ]
        }
    }
};
