import React from 'react';

// Նկարների import (Vite-ի համար)
// Համոզվիր, որ նկարները գտնվում են ճիշտ ճանապարհի վրա (assets folder)
import sievingImg from '../../assets/sieving.png';
import screeningImg from '../../assets/screening.png';
import sampleSplittingImg from '../../assets/sample-splitting.png';
import aggregatesImg from '../../assets/aggregates.png';
import asphaltImg from '../../assets/asphalt.png';
import concreteImg from '../../assets/concrete.png';
import soilsImg from '../../assets/soils.png';
import ovensImg from '../../assets/ovens.png';
import scalesImg from '../../assets/scales-balances.png';
import generalLabImg from '../../assets/general-lab.png';

// Տվյալների կառուցվածք
// Այսպես շատ հեշտ է փոխել լինկը կամ անունը ապագայում՝ առանց HTML-ը քանդելու
const categories = [
  {
    id: 1,
    img: sievingImg,
    title: 'Sieving',
    link: 'https://www.globalgilson.com/sieve-analysis-equipment',
    alt: 'Sieve Analysis Equipment',
  },
  {
    id: 2,
    img: screeningImg,
    title: 'Screening',
    link: 'https://www.globalgilson.com/screening',
    alt: 'Screening Equipment',
  },
  {
    id: 3,
    img: sampleSplittingImg,
    title: 'Sample Splitting',
    link: 'https://www.globalgilson.com/sampling-dividing',
    alt: 'Sample Splitting & Dividing',
  },
  {
    id: 4,
    img: aggregatesImg,
    title: 'Aggregates',
    link: '#',
    alt: 'Aggregate Testing Equipment',
  },
  {
    id: 5,
    img: asphaltImg,
    title: 'Asphalt',
    link: 'https://www.globalgilson.com/asphalt-testing-equipment',
    alt: 'Asphalt Testing Equipment',
  },
  {
    id: 6,
    img: concreteImg,
    title: 'Concrete',
    link: 'https://www.globalgilson.com/concrete-testing-equipment',
    alt: 'Concrete Testing Equipment',
  },
  {
    id: 7,
    img: soilsImg,
    title: 'Soils',
    link: 'https://www.globalgilson.com/soil-testing-equipment',
    alt: 'Soil Testing Equipment',
  },
  {
    id: 8,
    img: ovensImg,
    title: 'Ovens',
    link: 'https://www.globalgilson.com/ovens-and-furnaces',
    alt: 'Ovens and Furnaces',
  },
  {
    id: 9,
    img: scalesImg,
    title: 'Scales & Balances',
    link: 'https://www.globalgilson.com/scales-balances',
    alt: 'Scales & Balances',
  },
  {
    id: 10,
    img: generalLabImg,
    title: 'General Lab',
    link: 'https://www.globalgilson.com/pans-tools-glassware',
    alt: 'General Lab Testing Equipment',
  },
];

const Category: React.FC = () => {
  return (
    <div className="category-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="category-list">
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>
                    <div className="category1">
                      <div className="category-img">
                        {/* 
                           Performance Optimization:
                           - loading="lazy": Քանի որ սա էջի ներքևում է (Banner-ից հետո), 
                             մենք թողնում ենք lazy loading-ը:
                           - width/height: Ցանկալի է CSS-ում ֆիքսված լինի, 
                             բայց HTML-ում img-ը մնում է պարզ:
                        */}
                        <img 
                            loading="lazy" 
                            src={category.img} 
                            alt={category.alt}
                            // style={{ display: 'block' }} // Օգնում է խուսափել տակից ավելորդ տարածությունից
                        />
                      </div>
                      <div className="category-name">
                        <a href={category.link}>{category.title}</a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;