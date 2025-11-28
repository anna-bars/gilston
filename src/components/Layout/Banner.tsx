import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Նկարների ներմուծում - ՕՊՏԻՄԱԼԱՑՎԱԾ ՉԱՓԵՐ
import desktopWebp from '../../assets/home/banner/optimized/gilson-materials-testing-equipment-1335x334.webp';
import tabletWebp from '../../assets/home/banner/optimized/gilson-materials-testing-equipment-800x240.webp';
import mobileWebp from '../../assets/home/banner/optimized/gilson-materials-testing-equipment-400x120.webp';

// Fallback (եթե պետք է)
import desktopJpg from '../../assets/home/banner/optimized/gilson-materials-testing-equipment-1335x334.jpg';

const slides = [
  {
    id: 1,
    sources: [
      { 
        srcSet: desktopWebp, 
        media: '(min-width: 1025px)', 
        type: 'image/webp' 
      },
      { 
        srcSet: tabletWebp, 
        media: '(min-width: 768px) and (max-width: 1024px)', 
        type: 'image/webp' 
      },
      { 
        srcSet: mobileWebp, 
        media: '(max-width: 767px)', 
        type: 'image/webp' 
      },
    ],
    imgSrc: desktopJpg,
    alt: 'Gilson Company, Inc. - Supplying quality construction and laboratory material testing equipment since 1939',
    link: '#',
  },
];

const Banner: React.FC = () => {
  return (
    <div className="banner-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="banner-slider">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation={true}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                className="slider single-item"
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                } as React.CSSProperties}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={slide.id}>
                    <div className="slider-1">
                      <a href={slide.link}>
                        <picture>
                          {slide.sources.map((source, idx) => (
                            <source
                              key={idx}
                              type={source.type}
                              media={source.media}
                              srcSet={source.srcSet}
                            />
                          ))}
                          <img
                            src={slide.imgSrc}
                            alt={slide.alt}
                            loading={index === 0 ? "eager" : "lazy"}
                            fetchPriority={index === 0 ? "high" : "low"}
                            style={{ 
                              width: '100%', 
                              height: 'auto', 
                              display: 'block',
                              // ✅ ԿՐԿԻՆ ՈՐՈՇՈՒՄ - սահմանել մաքսիմալ չափ
                              // maxWidth: '1335px',
                              margin: '0 auto'
                            }}
                          />
                        </picture>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;