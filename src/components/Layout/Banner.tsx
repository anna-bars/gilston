import React from 'react';
// Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper Modules (Tree-shaken)
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Styles (Navigation/Pagination-ը պարտադիր են, եթե ուզում ես սլաքներ/կետեր)

// Նկարների ներմուծում (Օրինակ)
// Լավագույնը Vite-ի համար՝ import անել, որպեսզի build ժամանակ hash ավելանա (caching)
import desktopWebp from '../../assets/gilson-materials-testing-equipment.webp';
import desktopJpg from '../../assets/gilson-materials-testing-equipment.jpg'; // Fallback
import mobileImg from '../../assets/banner1-mob.jpg';
import mobileSmallImg from '../../assets/banner1-mob_2_360x.jpg';

// Տվյալների կառուցվածք (Maintainable Code)
const slides = [
  {
    id: 1,
    // Picture sources
    sources: [
      { srcSet: desktopWebp, media: '(min-width: 1025px)', type: 'image/webp' },
      { srcSet: mobileImg, media: '(min-width: 319px)', type: 'image/jpeg' },
      { srcSet: mobileSmallImg, media: '(max-width: 360px)', type: 'image/jpeg' },
    ],
    // Main Image attributes
    imgSrc: desktopJpg,
    alt: 'Gilson Company, Inc. - Supplying quality construction and laboratory material testing equipment since 1939',
    link: '#',
  },
  // Այստեղ կարող ես uncomment անել 2-րդ սլայդը կամ ավելացնել նորը
  /*
  {
    id: 2,
    sources: [ ... ],
    imgSrc: '...',
    alt: 'Gilson 2021 Catalog',
    link: '#',
  }
  */
];
 
const Banner: React.FC = () => {
  return (
    <div className="banner-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="banner-slider">
              {/* 
                Swiper Configuration:
                - modules: Միայն անհրաժեշտը
                - autoplay: Ավտոմատ թերթում
                - loop: Անվերջ ցիկլ
                - className: "slider single-item" (պահպանված է հին CSS-ի համար)
              */}
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation={true} // Եթե սլաքներ պետք են
                // pagination={{ clickable: true }} // Եթե կետեր պետք են
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
                    {/* 
                       div.slider-1 պահպանված է, որպեսզի 
                       .single-item .slider-1 a selector-ները աշխատեն 
                    */}
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
                          
                          {/* 
                            PERFORMANCE OPTIMIZATION (LCP):
                            Առաջին սլայդի համար (index === 0):
                            - loading="eager": Անմիջապես բեռնել:
                            - fetchPriority="high": Առաջնահերթություն տալ:
                            
                            Մնացած սլայդների համար:
                            - loading="lazy": Բեռնել միայն երբ հերթը հասնի:
                          */}
                          <img
                            src={slide.imgSrc}
                            alt={slide.alt}
                            loading={index === 0 ? "eager" : "lazy"}
                            // @ts-ignore: React types might not explicitly show fetchPriority yet but browsers support it
                            fetchPriority={index === 0 ? "high" : "low"}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
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