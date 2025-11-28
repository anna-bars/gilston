import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// ✅ ✅ ✅ ՕԳՏԱԳՈՐԾԵՆՔ ՕՊՏԻՄԱԼԱՑՎԱԾ ՆԿԱՐՆԵՐԸ ՈՐ ՍՏԵՂԾԵԼ ԵՔ
import desktopLarge from '../../assets/home/banner/optimized/gilson-materials-testing-equipment-1920.jpg';
import desktopMedium from '../../assets/home/banner/optimized/gilson-materials-testing-equipment-1400.jpg';
import desktopSmall from '../../assets/home/banner/optimized/gilson-materials-testing-equipment-1024.jpg';
import mobileImg from '../../assets/home/banner/optimized/banner1-mob.jpg';

// ✅ WebP տարբերակներ (եթե ունեք)
// import desktopLargeWebp from '../../assets/home/banner/optimized/gilson-materials-testing-equipment-1920.webp';
// import desktopMediumWebp from '../../assets/home/banner/optimized/gilson-materials-testing-equipment-1400.webp';
// import desktopSmallWebp from '../../assets/home/banner/optimized/gilson-materials-testing-equipment-1024.webp';

const slides = [
  {
    id: 1,
    sources: [
      // ✅ Desktop - 3 տարբեր չափեր
      { 
        srcSet: `${desktopLarge} 1920w, ${desktopMedium} 1400w, ${desktopSmall} 1024w`,
        media: '(min-width: 1025px)',
        type: 'image/jpeg'
      },
      // ✅ Mobile
      { 
        srcSet: mobileImg, 
        media: '(max-width: 1024px)', 
        type: 'image/jpeg' 
      },
      
      // ✅ Եթե ունեք WebP տարբերակներ, ավելացրեք
      /*
      { 
        srcSet: `${desktopLargeWebp} 1920w, ${desktopMediumWebp} 1400w, ${desktopSmallWebp} 1024w`,
        media: '(min-width: 1025px)',
        type: 'image/webp'
      },
      */
    ],
    // Main Image attributes
    imgSrc: desktopMedium, // Fallback - միջին չափ
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
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
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
                              // ✅ Ավելացնել sizes attribute
                              sizes={source.media === '(min-width: 1025px)' ? '100vw' : '100vw'}
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
                              // ✅ ԿՐԿԻՆ ՈՐՈՇՈՒՄ
                              maxWidth: '1920px', // Մաքսիմալ չափ
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