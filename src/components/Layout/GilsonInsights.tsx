import React from 'react';
// Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper Modules
import { Autoplay, Navigation } from 'swiper/modules';


// Images Import (Vite-ի համար)
// Համոզվիր, որ այս նկարները քո src/assets ֆոլդերում են
import img1 from '../../assets/coarse-aggregate-gradation.png';
import img2 from '../../assets/sand-equivlant.png';
import img3 from '../../assets/detecting-rebar-in-concrete.png';
import img4 from '../../assets/direct-shear-test.png';
import img5 from '../../assets/cmt-field-lab-setup.png';
import img6 from '../../assets/cmt-field-lab-essentials.png';
import img7 from '../../assets/cbr-test.png';
import img8 from '../../assets/concrete-cracking.png';

// Տվյալների կառուցվածք (Clean Code)
const insights = [
  {
    id: 1,
    img: img1,
    title: 'Coarse Aggregate Gradation: Test Sieves or Screen Trays?',
    desc: 'Learn how using a laboratory-scale testing screen shaker can improve testing efficiency and productivity.',
    link: 'https://www.globalgilson.com/blog/coarse-aggregate-gradation',
    alt: 'Coarse Aggregate Gradation',
  },
  {
    id: 2,
    img: img2,
    title: 'Sand Equivalent Test Method Explained: The Purpose and The Process',
    desc: 'Understand how fines can impact the performance of composite materials.',
    link: 'https://www.globalgilson.com/blog/sand-equivalent-method',
    alt: 'Sand Equivalent Test Method Explained',
  },
  {
    id: 3,
    img: img3,
    title: 'Rebar in Concrete: Non-destructive Evaluation of the Reinforcement Matrix',
    desc: 'Identify the right tool for finding embedded concrete reinforcing steel.',
    link: 'https://www.globalgilson.com/blog/finding-rebar-in-concrete',
    alt: 'Rebar in Concrete',
  },
  {
    id: 4,
    img: img4,
    title: 'Soil Direct Shear Test: Understanding the Process',
    desc: 'Know why a relatively simple soil mechanics test is very important to geotechnical engineers.',
    link: 'https://www.globalgilson.com/blog/soil-direct-shear-test',
    alt: 'Soil Direct Shear Test',
  },
  {
    id: 5,
    img: img5,
    title: 'Setting Up A CMT Field Lab: Application-Specific Equipment & Considerations',
    desc: 'Find out which testing equipment to use based on the materials being tested.',
    link: 'https://www.globalgilson.com/blog/cmt-field-lab-setup',
    alt: 'Setting Up A CMT Field Lab',
  },
  {
    id: 6,
    img: img6,
    title: 'How To Set Up A Field Lab For Construction Materials Testing: The Essentials',
    desc: 'Learn the ABC\'s that are required for a materials testing lab in the field.',
    link: 'https://www.globalgilson.com/blog/equipment-needed-for-construction-field-testing-lab',
    alt: 'Setting Up A CMT Field Lab',
  },
  {
    id: 7,
    img: img7,
    title: 'California Bearing Ratio Test: CBR Values & Why They Matter',
    desc: 'Gain insight as to why evaluating the strength of soil subgrades is important to highway engineers.',
    link: 'https://www.globalgilson.com/blog/cbr-testing',
    alt: 'California Bearing Ratio Test',
  },
  {
    id: 8,
    img: img8,
    title: 'Concrete Cracking: Evaluating Width, Depth & Movement',
    desc: 'Discover trusted solutions for measuring cracks in concrete including width, depth and movement.',
    link: 'https://www.globalgilson.com/blog/concrete-cracking',
    alt: 'Concrete Cracking',
  },
];

const GilsonInsights: React.FC = () => {
  return (
    <div className="gilson-insight">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            
            {/* Header */}
            <div className="who-title">
              <h3>Gilson Insights</h3>
            </div>

            {/* Slider Wrapper */}
            <div className="seller-slider">
              {/* 
                  Swiper Container
                  className="insight-slider slider" պահպանված է հին CSS-ի համար
              */}
              <Swiper
                className="insight-slider slider"
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                loop={true}
                navigation={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                // Responsive Logic
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  576: { slidesPerView: 2, spaceBetween: 15 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 20 },
                }}
                // Inline Styles: 
                // 1. Padding - որ ստվերները չկտրվեն
                // 2. Navigation color - սև սլաքներ
                style={{
                    '--swiper-navigation-color': '#333',
                    '--swiper-navigation-size': '30px',
                    padding: '15px 5px',
                } as React.CSSProperties}
              >
                {insights.map((item) => (
                  <SwiperSlide 
                    key={item.id} 
                    className="slide"
                    // Հավասար բարձրության համար:
                    style={{ height: 'auto', display: 'flex' }}
                  >
                    <div 
                        className="insight1"
                        // Քարտը ձգվում է ամբողջ բարձրությամբ
                        style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <div className="insight-img">
                        <a href={item.link}>
                          {/* 
                              Optimization: 
                              width/height հստակ նշված են (ինչպես օրիգինալում), 
                              որը կանխում է CLS-ը:
                          */}
                          <img 
                            loading="lazy" 
                            src={item.img} 
                            alt={item.alt} 
                            width="313" 
                            height="172"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                          />
                        </a>
                      </div>
                      
                      {/* Flex grow-ի շնորհիվ տեքստը լցնում է ներքևը, 
                          իսկ երկար վերնագրերի դեպքում քարտը հարմարվում է */}
                      <div className="insight-text" style={{ flexGrow: 1 }}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Footer Link */}
              <div className="more-insight">
                <a 
                    href="https://www.globalgilson.com/blog" 
                    title="Click here to read more Gilson Insights blog posts"
                >
                    Read More Gilson Insights
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GilsonInsights;