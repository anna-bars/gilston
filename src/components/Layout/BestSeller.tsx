import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import compactorImg from '../../assets/home/best-seller/hm-685-gyratory-compactor.png';
import loadFrameImg from '../../assets/home/best-seller/hm-399-load-frame.png';
import marshallImg from '../../assets/home/best-seller/msa-134-marshall-software.png';
import microDevalImg from '../../assets/home/best-seller/md-2000-microdeval.png';
import compressionImg from '../../assets/home/best-seller/mc-500pr-concrete-compression-machine.png';
import flexWallImg from '../../assets/home/best-seller/hma-516-flexible-wall-permeability-cell.png';

const products = [
  {
    id: 1,
    img: compactorImg,
    title: 'Superpave Gyratory Compactor',
    productUrl: '/superpave-gyratory-compactor',
    externalUrl: 'https://www.globalgilson.com/superpave-gyratory-compactor',
    alt: 'Superpave Gyratory Compactor',
  },
  {
    id: 2,
    img: loadFrameImg,
    title: 'Load Frame, 0.00001—0.29999in/min, 20,000lbf',
    productUrl: '/load-frame-0point00001-0point29999in-min-20000lbf',
    externalUrl: 'https://www.globalgilson.com/load-frame-0point00001-0point29999in-min-20000lbf',
    alt: 'Load Frame',
  },
  {
    id: 3,
    img: marshallImg,
    title: 'Marshall Data Acquisition Software',
    productUrl: '/marshall-data-acquisition-software',
    externalUrl: '', 
    alt: 'Marshall Data Acquisition Software',
  },
  {
    id: 4,
    img: microDevalImg,
    title: 'Micro-Deval',
    productUrl: '/micro-deval-apparatus',
    externalUrl: 'https://www.globalgilson.com/micro-deval-apparatus',
    alt: 'Micro-Deval',
  },
  {
    id: 5,
    img: compressionImg,
    title: '500,000lbf Concrete Compression Machines',
    productUrl: '/500-series-concrete-compression-machine',
    externalUrl: 'https://www.globalgilson.com/500-series-concrete-compression-machine',
    alt: '500,000lbf Concrete Compression Machine',
  },
  {
    id: 6,
    img: flexWallImg,
    title: 'Flexible Wall Permeability Cell, 1.4 to 6in dia. Specimens',
    productUrl: '/7point5in-flex-wall-permeability-cell',
    externalUrl: 'https://www.globalgilson.com/7point5in-flex-wall-permeability-cell',
    alt: 'Flexible Wall Permeability Cell, 1.4 to 6in dia. Specimens',
  },
];

const BestSeller: React.FC = () => {
  return (
    <div className="py-5 bg-white">
      <div className="container" style={{maxWidth: '98%'}}>
        <div className="row">
          <div className="col-12">
            {/* Header Section */}
            <div className="text-center mb-3">
              <h3 className="text-uppercase fs-5 fw-bold" style={{ color: '#002d58' }}>
                Featured Products
              </h3>
            </div>

            {/* Slider Section */}
            <div className="position-relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                loop={true}
                navigation={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  576: { slidesPerView: 2, spaceBetween: 15 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 20 },
                }}
                style={{
                  '--swiper-navigation-color': '#333',
                  '--swiper-navigation-size': '30px',
                  padding: '15px 5px',
                } as React.CSSProperties}
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id} style={{ height: 'auto' }}>
                    <div className="bg-white p-3 shadow h-100 d-flex flex-column">
                      {/* Image Area */}
                      <div className="text-center mb-4 flex-grow-1 d-flex align-items-center justify-content-center">
                        <a href={product.externalUrl || product.productUrl}>
                          <img 
                            loading="lazy" 
                            src={product.img} 
                            alt={product.alt}
                            className="img-fluid"
                            style={{ 
                              width: '200px', 
                              height: '200px', 
                              objectFit: 'contain',
                              display: 'block',
                              margin: '0 auto'
                            }}
                          />
                        </a>
                      </div>

                      {/* Title Area */}
                      <a 
                        href={product.productUrl} 
                        className="text-center fw-bold text-decoration-none d-block"
                        style={{ 
                          color: '#002d58',
                          fontSize: '16px',
                          lineHeight: '1.3'
                        }}
                      >
                        {product.title}
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Custom CSS */}
      <style>{`
        /* Hover effects */
        .shadow {
          box-shadow: 0 0 5px rgba(24, 66, 66, 0.2) !important;
          transition: all 0.3s ease;
        }
        
        .shadow:hover {
          box-shadow: 0 5px 15px rgba(24, 66, 66, 0.3) !important;
        }
        
        a[style*="#002d58"]:hover {
          color: #fe9900 !important;
        }
        
.swiper-button-prev, .swiper-button-next {
    svg {
        width: 50%;
      }
      }


        /* Swiper navigation positioning */
        .swiper-button-prev,
        .swiper-button-next {
          background: #f8f9fa !important;
          border-radius: 50%;
          width: 40px !important;
          height: 40px !important;
        }
        
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 18px !important;
          font-weight: bold;
        }
        
        @media (max-width: 992px) {
          .swiper-button-prev,
          .swiper-button-next {
            bottom: -45px;
            top: auto !important;
            transform: translateY(0) !important;
          }
          
          .swiper-button-prev {
            left: calc(50% - 50px) !important;
          }
          
          .swiper-button-next {
            right: calc(50% - 50px) !important;
          }
            
        }
      `}</style>
    </div>
  );
};

export default BestSeller;