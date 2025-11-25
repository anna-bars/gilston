import * as images from '../images';

export const generalLabData = {
    tabs: [
        { id: 'all-general-lab', label: 'General Lab', isActive: true },
    ],
    content: {
        'all-general-lab': {
            categories: [
                { name: 'Ovens and Furnaces', link: '/ovens-and-furnaces', img: images.ovensFurnaces },
                { name: 'Crushers, Pulverizers & Mills', link: '/crushers-pulverizers-mills', img: images.crushersPulverizersMills },
                { name: 'Temperature and Humidity', link: '/temperature-and-humidity', img: images.temperatureHumidity },
                { name: 'Scales and Balances', link: '/scales-and-balances', img: images.scalesBalances },
                { name: 'Lab Tools and Supplies', link: '/lab-tools-and-supplies', img: images.labSupplies },
                { name: 'Lab Safety', link: '/lab-safety', img: images.labSafety },
                { name: 'Lab Utensils and Hand Tools', link: '/lab-utensils-and-hand-tools', img: images.labUtensils },
                { name: 'Sample Containers and Bags', link: '/sample-containers-and-bags', img: images.sampleContainers },
                { name: 'Sample Pans, Dishes, and Bowls', link: '/sample-pans-dishes-and-bowls', img: images.pansDishesBowls },
                { name: 'Timers & Stopwatches', link: '/timers-and-stopwatches', img: images.timersStopwatches },
                { name: 'Reference Books and Materials', link: '/reference-books-and-materials', img: images.books },
                { name: 'Hot Plates, Ranges, and Lab Burners', link: '/hot-plates-ranges-lab-burners', img: images.heating },
                { name: 'Laboratory Mixers', link: '/laboratory-mixers', img: images.labMixers },
            ],
            resources: [
                { title: 'Complete Laboratory Setup Guide', link: '/blog/complete-laboratory-setup-guide', img: images.ovensFurnaces },
                { title: 'Lab Equipment Selection Guide', link: '/blog/lab-equipment-selection-guide', img: images.scalesBalances },
                { title: 'Lab Organization and Safety Video', link: 'https://www.youtube.com/watch?v=lab-organization-safety-video', img: images.labSafety, isVideo: true }
            ]
        }
    }
};