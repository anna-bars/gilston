import * as images from '../images';

export const sampleSplittingData = {
    tabs: [
        { id: 'splitters', label: 'Sample Splitters', isActive: true },
        { id: 'accessories', label: 'Splitting Accessories', isActive: false },
    ],
    content: {
        'splitters': {
            categories: [
                { name: 'Universal Sample Splitters', link: '/universal-sample-splitters', img: images.sampleSplitters },
                { name: 'Universal Mini-Splitters', link: '/universal-mini-splitters', img: images.miniSampleSplitters },
                { name: 'Fixed Chute Splitter', link: '/fixed-chute-splitter', img: images.fixedChuteSplitter },
                { name: 'Quartermaster Asphalt Sample Divider', link: '/quartermaster-asphalt-sample-divider', img: images.quartermaster },
                { name: 'California Fixed Chute Sample Splitter', link: '/california-fixed-chute-sample-splitter', img: images.californiaSplitter },
                { name: 'Spinning Rifflers / Rotary Sample Divider', link: '/spinning-rifflers-rotary-sample-divider', img: images.spinningRiffler },
                { name: 'Enclosed Sample Splitters', link: '/enclosed-sample-splitters', img: images.enclosedSplitter },
                { name: '1/16 Sample Reducers', link: '/1-16-sample-reducers', img: images.reducers },
                { name: 'Riffle Splitters', link: '/riffle-splitters', img: images.riffleSplitter },
                { name: 'Laboratory Split-O-Matic Splitters', link: '/laboratory-split-o-matic-splitters', img: images.labSplitomatic },
                { name: 'Production Split-O-Matic Splitters', link: '/production-split-o-matic-splitters', img: images.productionSplitomatic },
            ],
            resources: [
                { title: 'Sample Splitting Techniques Guide', link: '/blog/sample-splitting-techniques', img: images.selectingSplitterBlog },
                { title: 'How to Choose the Right Sample Splitter', link: '/blog/choosing-sample-splitter', img: images.splittingTipsVd },
                { title: 'Sample Division Best Practices', link: 'https://www.youtube.com/watch?v=splitter-video', img: images.reducingSampleAggVd, isVideo: true }
            ]
        },
        'accessories': {
            categories: [
                { name: 'Sample Quartering Kit', link: '/sample-quartering-kit', img: images.quarteringKit },
                { name: 'Sampling Probes', link: '/sampling-probes', img: images.sampleProbes },
                { name: 'Sample Pans', link: '/sample-pans', img: images.samplePans },
                { name: 'Core Sampling', link: '/core-sampling', img: images.coreSampling },
            ],
            resources: [
                { title: 'Sample Splitting Techniques Guide', link: '/blog/sample-splitting-techniques', img: images.selectingSplitterBlog },
                { title: 'How to Choose the Right Sample Splitter', link: '/blog/choosing-sample-splitter', img: images.splittingTipsVd },
                { title: 'Sample Division Best Practices', link: 'https://www.youtube.com/watch?v=splitter-video', img: images.reducingSampleAggVd, isVideo: true }
            ]
        }
    }
};