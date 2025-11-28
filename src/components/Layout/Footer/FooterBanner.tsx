import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Images Import
import desktopImg1 from '../../../assets/footer-component/footer-banner/footer-banner1.jpg';
import mobDesktopImg1 from '../../../assets/footer-component/footer-banner/footer-banner1-mob.jpg';
import desktopImg2 from '../../../assets/footer-component/footer-banner/footer-banner1.jpg';
import mobDesktopImg2 from '../../../assets/footer-component/footer-banner/footer-banner1-mob.jpg';

// Banner slides data
const bannerSlides = [
  {
    id: 1,
    desktopImg: desktopImg1,
    mobileImg: mobDesktopImg1,
    alt: 'Gilson Banner',
    link: 'https://www.globalgilson.com/test-sieves',
  },
  {
    id: 2,
    desktopImg: desktopImg2,
    mobileImg: mobDesktopImg2,
    alt: 'Gilson Banner 2',
    link: 'https://www.globalgilson.com/test-sieves',
  },
];

const FooterBanner: React.FC = () => {
  return ( 
    <div className="py-5">
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-12">
            <div className="position-relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.custom-footer-next',
                  prevEl: '.custom-footer-prev',
                }}
              >
                {bannerSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <a 
                      href={slide.link} 
                      aria-label={slide.alt}
                      className="d-block text-decoration-none"
                    >
                      <picture>
                        {/* Desktop version */}
                        <source 
                          media="(min-width:1025px)" 
                          srcSet={slide.desktopImg} 
                        />
                        {/* Mobile version */}
                        <source 
                          media="(min-width:319px)" 
                          srcSet={slide.mobileImg} 
                        />
                        {/* Fallback image */}
                        <img
                          loading="lazy"
                          src={slide.mobileImg}
                          alt={slide.alt}
                          className="img-fluid w-100"
                          style={{ 
                            height: 'auto', 
                            display: 'block',
                            objectFit: 'cover'
                          }}
                        />
                      </picture>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className="custom-footer-prev position-absolute top-50 start-0 translate-middle-y z-3 bg-white border-0 rounded-circle ms-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="custom-footer-next position-absolute top-50 end-0 translate-middle-y z-3 bg-white border-0 rounded-circle me-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        /* Custom navigation buttons */
        .custom-footer-prev,
        .custom-footer-next {
          width: 40px !important;
          height: 40px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1) !important;
          transition: all 0.3s ease !important;
          opacity: 0.8;
        }
        
        .custom-footer-prev:hover,
        .custom-footer-next:hover {
          background: #e9ecef !important;
          transform: scale(1.1);
          opacity: 1;
        }
        
        /* Hide buttons on mobile */
        @media (max-width: 576px) {
          .custom-footer-prev,
          .custom-footer-next {
            display: none !important;
          }
        }
        
        /* Ensure images are responsive */
        .footer-banner-img {
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default FooterBanner;