import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Images Import
import img1 from '../../assets/home/insights/coarse-aggregate-gradation.avif';
import img2 from '../../assets/home/insights/sand-equivlant.avif';
import img3 from '../../assets/home/insights/detecting-rebar-in-concrete.avif';
import img4 from '../../assets/home/insights/direct-shear-test.avif';
import img5 from '../../assets/home/insights/cmt-field-lab-setup.avif';
import img6 from '../../assets/home/insights/cmt-field-lab-essentials.avif';
import img7 from '../../assets/home/insights/cbr-test.avif';
import img8 from '../../assets/home/insights/concrete-cracking.avif';

// Տվյալների կառուցվածք
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
    <div className="py-5">
      <div className="container" style={{maxWidth: '98%'}}>
        <div className="row">
          <div className="col-12">
            
            {/* Header */}
            <div className="text-center mb-4">
              <h3 
                className="text-uppercase fw-bold" 
                style={{ 
                  color: '#002d58', 
                  fontSize: '18px'
                }}
              >
                Gilson Insights
              </h3>
            </div>

            {/* Slider Wrapper */}
            <div className="position-relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                loop={true}
                navigation={{
                  nextEl: '.custom-insight-next',
                  prevEl: '.custom-insight-prev',
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  576: { slidesPerView: 2, spaceBetween: 15 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 20 },
                }}
                style={{
                  padding: '15px 0',
                } as React.CSSProperties}
              >
                {insights.map((item) => (
                  <SwiperSlide 
                    key={item.id}
                    style={{ height: 'auto' }}
                  >
                    <div 
                      className="h-100 d-flex flex-column bg-white rounded"
                      style={{
                        boxShadow: '0 0 5px rgba(24, 66, 66, 0.2)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(24, 66, 66, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 5px rgba(24, 66, 66, 0.2)';
                      }}
                    >
                      {/* Image Section */}
                      <div 
                        className="insight-img"
                        style={{
                          backgroundColor: '#b5bdc4',
                          boxShadow: '0 0 5px rgba(24, 66, 66, 0.2)',
                          position: 'relative',
                          width: '100%',
                        }}
                      >
                        <a href={item.link}>
                          <img 
                            loading="lazy" 
                            src={item.img} 
                            alt={item.alt} 
                            width="313" 
                            height="172"
                            className="img-fluid w-100"
                            style={{
                              height: 'auto',
                              objectFit: 'cover',
                              display: 'block'
                            }}
                          />
                        </a>
                      </div>
                      
                      {/* Text Section */}
                      <div 
                        className="p-3 d-flex flex-column flex-grow-1"
                        style={{
                          flex: '1'
                        }}
                      >
                        <h3 
                          className="fw-bold mb-2"
                          style={{ 
                            color: '#002c58', 
                            fontSize: '16px',
                            lineHeight: '20px'
                          }}
                        >
                          {item.title}
                        </h3>
                        <p 
                          className="mb-0 flex-grow-1"
                          style={{ 
                            color: '#6c6e70', 
                            fontSize: '16px'
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              {/* Custom Navigation Buttons */}
<button 
  className="custom-insight-prev position-absolute top-50 start-0 translate-middle-y z-3 bg-white border-0 rounded-circle"
  aria-label="Previous insights"
>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</button>

<button 
  className="custom-insight-next position-absolute top-50 end-0 translate-middle-y z-3 bg-white border-0 rounded-circle"
  aria-label="Next insights"
>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</button>
            </div>

            {/* Footer Link */}
            <div className="text-center mt-4">
              <a 
                href="https://www.globalgilson.com/blog" 
                title="Click here to read more Gilson Insights blog posts"
                className="d-inline-block text-decoration-none text-white fw-bold px-4 py-2 rounded"
                style={{
                  backgroundColor: '#f59a1f',
                  fontSize: '14px',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e08b1d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f59a1f';
                }}
              >
                Read More Gilson Insights
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        /* Custom navigation buttons */
        .custom-insight-prev,
        .custom-insight-next {
          width: 40px !important;
          height: 40px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1) !important;
          transition: all 0.3s ease !important;
        }
        
        .custom-insight-prev:hover,
        .custom-insight-next:hover {
          background: #e9ecef !important;
          transform: scale(1.1);
        }
        
        /* Hide buttons on mobile */
        @media (max-width: 576px) {
          .custom-insight-prev,
          .custom-insight-next {
            display: none !important;
          }
          
          .insight-slider-mobile {
            margin-bottom: 30px;
          }
          
          .insight-text-mobile h3,
          .insight-text-mobile p {
            font-size: 16px;
          }
          
          .insight-text-mobile {
            padding: 10px;
          }
          
          .insight-text-mobile p {
            margin-bottom: 20px;
          }
        }
        
        @media (max-width: 1024px) {
          .insight-text-responsive h3 {
            font-size: 14px;
          }
          
          .insight-text-responsive p {
            font-size: 14px;
          }
        }
        
        @media (max-width: 767px) {
          .swiper-slide-mobile:last-child {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default GilsonInsights;