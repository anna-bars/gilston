import React from 'react';
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper modules (միայն անհրաժեշտը tree-shaking-ի համար)
import { Autoplay } from 'swiper/modules';

// Import Swiper styles (մինիմալ ոճեր)
// import 'swiper/css';
// Եթե custom css ունես, այն պետք է լինի global կամ import արված այստեղ
// import './FooterBanner.css'; 

import desktopImg1 from '../../../assets/footer-banner1.jpg';
import mobDesktopImg1 from '../../../assets/footer-banner1-mob.jpg';
import desktopImg2 from '../../../assets/footer-banner1.jpg';
import mobDesktopImg2 from '../../../assets/footer-banner1-mob.jpg';

// Տվյալները առանձնացված են մաքուր կոդի համար (Maintainability)
const bannerSlides = [
  {
    id: 1,
    desktopImg: desktopImg1,
    mobileImg: mobDesktopImg1,
    alt: 'Gilson Banner',
    link: 'https://www.globalgilson.com/test-sieves',
  },
  // Եթե ունես 2-րդ սլայդը, ավելացրու այստեղ նույն սկզբունքով
  {
    id: 2,
    desktopImg: desktopImg2, // Օրինակ՝ նույն նկարը կամ ուրիշ
    mobileImg: mobDesktopImg2,
    alt: 'Gilson Banner 2',
    link: 'https://www.globalgilson.com/test-sieves',
  },
];

const FooterBanner: React.FC = () => {
  return (
    <div className="footer-banner">
      <div className="container">
        <div className="row">
          {/* Bootstrap grid classes պահպանված են */}
          <div className="col-md-12 p-sm-0">
            <div className="banner-slider">
              {/* 
                  Swiper-ը փոխարինում է հին jQuery սլայդերի container-ին:
                  className="slider footer-item" պահպանվել է դիզայնի համար:
              */}
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                className="slider footer-item"
              >
                {bannerSlides.map((slide) => (
                  <SwiperSlide key={slide.id} className="slider-1">
                    <a href={slide.link} aria-label={slide.alt}>
                      <picture>
                        {/* Desktop version (min-width: 1025px) */}
                        <source 
                          media="(min-width:1025px)" 
                          srcSet={slide.desktopImg} 
                        />
                        {/* Mobile version (min-width: 319px) */}
                        <source 
                          media="(min-width:319px)" 
                          srcSet={slide.mobileImg} 
                        />
                        {/* Fallback image */}
                        {/* 
                           Optimization: 
                           1. loading="lazy" - Լավ է Core Web Vitals-ի համար, եթե սա footer-ում է:
                           2. width="100%" - Կանխում է CLS (Layout Shift)-ը:
                        */}
                        <img
                          loading="lazy"
                          src={slide.mobileImg}
                          alt={slide.alt}
                          style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                      </picture>
                    </a>
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

export default FooterBanner;