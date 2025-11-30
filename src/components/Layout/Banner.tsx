import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Պատկերների իմպորտ
import desktopLarge from '../../assets/home/banner/optimized/gilson-materials-testing-equipment-1920.jpg';
import desktopMedium from '../../assets/home/banner/optimized/gilson-materials-testing-equipment-1400.jpg';
import desktopSmall from '../../assets/home/banner/optimized/gilson-materials-testing-equipment-1024.jpg';
import mobileImg from '../../assets/home/banner/optimized/banner1-mob.jpg';

const slides = [
  {
    id: 1,
    sources: [
      {
        srcSet: `${desktopLarge} 1920w, ${desktopMedium} 1400w, ${desktopSmall} 1024w`,
        media: '(min-width: 1025px)',
        type: 'image/jpeg',
        sizes: '100vw'
      },
      {
        srcSet: mobileImg,
        media: '(max-width: 1024px)',
        type: 'image/jpeg',
        sizes: '100vw'
      },
    ],
    imgSrc: desktopMedium,
    alt: 'Gilson Company, Inc. - Supplying quality construction and laboratory material testing equipment since 1939',
    link: '#',
    width: 1920,
    height: 1080
  },
];

const Banner: React.FC = () => {
  const firstSlide = slides[0];

  return (
    <>
      {/* Preload link-ը ավելացնում ենք head-ում */}
      <link 
        rel="preload" 
        href={firstSlide.imgSrc} 
        as="image"
        imageSrcSet={firstSlide.sources[0].srcSet}
        imageSizes="100vw"
      />
      
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
                                sizes={source.sizes}
                              />
                            ))}
                            <img
                              src={slide.imgSrc}
                              alt={slide.alt}
                              loading={index === 0 ? "eager" : "lazy"}
                              fetchPriority={index === 0 ? "high" : "auto"}
                              width={slide.width}
                              height={slide.height}
                              style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block',
                                maxWidth: '1920px',
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
    </>
  );
};

export default Banner;