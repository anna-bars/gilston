// src/data/menuData.ts
import { sievingData } from './categories/sievingData';
import { screeningData } from './categories/screeningData';
import { sampleSplittingData } from './categories/sampleSplittingData';
import { aggregatesData } from './categories/aggregatesData';
import { asphaltData } from './categories/asphaltData';
import { concreteData } from './categories/concreteData';
import { soilsData } from './categories/soilsData';
import { generalLabData } from './categories/generalLabData';

export const navItems = [
    { name: "Sieving", link: "sieve-analysis-equipment", data: sievingData },
    { name: "Screening", link: "screening", data: screeningData },
    { name: "Sample Splitting", link: "sampling-dividing", data: sampleSplittingData },
    { name: "Aggregates", link: "aggregate-testing-equipment", data: aggregatesData },
    { name: "Asphalt", link: "asphalt-testing-equipment", data: asphaltData },
    { name: "Concrete", link: "concrete-testing-equipment", data: concreteData },
    { name: "Soils", link: "soil-testing-equipment", data: soilsData },
    { name: "General Lab", link: "pans-tools-glassware", data: generalLabData }
];

export { sievingData, screeningData, sampleSplittingData, aggregatesData, asphaltData, concreteData, soilsData, generalLabData };