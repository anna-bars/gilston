import React from 'react';

// Նկարների import (Vite-ի համար)
import sievingImg from '../../assets/home/category/sieving.png';
import screeningImg from '../../assets/home/category/screening.avif';
import sampleSplittingImg from '../../assets/home/category/sample-splitting.avif';
import aggregatesImg from '../../assets/home/category/aggregates.avif';
import asphaltImg from '../../assets/home/category/asphalt.avif';
import concreteImg from '../../assets/home/category/concrete.png';
import soilsImg from '../../assets/home/category/soils.png';
import ovensImg from '../../assets/home/category/ovens.avif';
import scalesImg from '../../assets/home/category/scales-balances.png';
import generalLabImg from '../../assets/home/category/general-lab.png';

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
    <div className="py-5 bg-light">
      <div className="container" style={{maxWidth: "98%"}}>
        <div className="row">
          <div className="col-12">
            <div className="category-list">
              <div className="row g-0">
                {categories.map((category, index) => {
                  // Որոշել border classes-ը ըստ դիրքի
                  const isFirstRow = index < 5; // 0-4 (առաջին շարք)
                  const isSecondRow = index >= 5; // 5-9 (երկրորդ շարք)
                  const isLastInRow = index % 5 === 4; // Յուրաքանչյուր շարքի վերջին էլեմենտ
                  
                  // Border logic - Վերևի շարքում border-top չկա, ներքևի շարքում border-bottom չկա
                  let borderClass = 'border-end';
                  
                  // Միայն վերևի շարքին ավելացնել border-bottom
                  if (isFirstRow) {
                    borderClass += ' border-bottom';
                  }
                  
                  // Վերջին շարքի վերջին էլեմենտին border չպետք է լինի
                  if (isLastInRow && !isSecondRow) {
                    borderClass += ' border-end-0';
                  }
                  
                  // Երկրորդ շարքի վերջին էլեմենտին border չպետք է լինի
                  if (index === 9) {
                    borderClass += ' border-end-0';
                  }

                  return (
                    <div 
                      key={category.id} 
                      className="col-lg-2-4 col-md-4 col-sm-6"
                    >
                      <div 
                        className={`h-100 bg-light position-relative text-center ${borderClass} hover-effect`}
                        style={{ 
                          transition: 'all 0.4s ease-in-out',
                          padding: '35px 0' 
                        }}
                      >
                        <div className="category-img mb-2" style={{height: '130px'}}>
                          <img 
                            loading="lazy" 
                            src={category.img} 
                            alt={category.alt}
                            className="w-100 h-100 object-fit-contain"
                          />
                        </div>
                        <div className="category-name">
                          <a 
                            href={category.link} 
                            className="stretched-link text-decoration-none fw-bold"
                            style={{ color: '#002d58' }}
                          >
                            {category.title}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ավելացնում ենք միայն անհրաժեշտ CSS-ը */}
      <style>{`
        /* Custom class for 5 columns in large screens */
        .col-lg-2-4 {
          flex: 0 0 auto;
          width: 20%;
        }
        
        /* Responsive design */
        @media (max-width: 992px) {
          .col-lg-2-4 {
            width: 50%;
          }
          
          /* Tablet-ի համար border adjustments */
          .category-list .col-lg-2-4:nth-child(odd) > div {
            border-right: 1px solid #dee2e6;
          }
          
          .category-list .col-lg-2-4:nth-child(even) > div {
            border-right: none;
          }
          
          .category-list .col-lg-2-4:nth-child(-n+2) > div {
            border-bottom: 1px solid #dee2e6;
          }
        }
        
        @media (max-width: 576px) {
          .col-lg-2-4 {
            width: 100%;
          }
          
          /* Mobile-ի համար border adjustments */
          .category-list .col-lg-2-4:not(:last-child) > div {
            border-bottom: 1px solid #dee2e6;
          }
          
          .category-list .col-lg-2-4 > div {
            border-right: none;
          }
        }
        
        .hover-effect:hover {
          background: #fff !important;
          box-shadow: 5px 5px 18px rgba(24, 66, 66, 0.2) !important;
        }
        .hover-effect:hover .category-name a {
          color: #6995c3 !important;
        }
        .object-fit-contain {
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default Category;