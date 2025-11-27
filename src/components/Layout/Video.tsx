import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Images Import
import img1 from '../../assets/choosing-right-specialty-sieve.jpg';
import img2 from '../../assets/choosing-right-sieve-by-specification.jpg';
import img3 from '../../assets/marshall-component-setup.jpg';
import img4 from '../../assets/conrete-air-meters.jpg';
import img5 from '../../assets/hm-705-test-hammer.jpg';
import img6 from '../../assets/hm-597-static-segregation-column.jpg';
import img7 from '../../assets/asphalt-tack-coat-strength-test.jpg';

// YouTube Play Icon SVG
const YoutubePlayIcon = () => (
  <svg 
    width="100" 
    height="70" 
    viewBox="0 0 100 70" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M38.5 45.5L55 35L38.5 24.5V45.5Z" 
      fill="red" 
      stroke="red" 
      strokeWidth="2"
    />
  </svg>
);

const videos = [
  {
    id: 1,
    img: img1,
    videoUrl: 'http://www.youtube.com/watch?v=9me8RbBGZlE',
    title: 'Choosing the Right Specialized Test Sieve',
    desc: 'Understand why some unique gradation analysis applications require specialized test sieves.',
    alt: 'Specialized Test Sieves',
  },
  {
    id: 2,
    img: img2,
    videoUrl: 'http://www.youtube.com/watch?v=Acjw3FR_H6c',
    title: 'Choosing the Right Test Sieve: Test Specifications',
    desc: 'Check out why test specifications should be the first and foremost consideration in selecting a test sieve.',
    alt: 'Test Sieve Test Specifications',
  },
  {
    id: 3,
    img: img3,
    videoUrl: 'http://www.youtube.com/watch?v=C4BnYINFP9w',
    title: 'Component Set-ups for the Gilson Marshall Stability Load Frame',
    desc: 'See how to assemble different asphalt testing components on the versatile Gilson Marshall Stability Load Frame.',
    alt: 'Marshall Component Setup',
  },
  {
    id: 4,
    img: img4,
    videoUrl: 'http://www.youtube.com/watch?v=3AX0a8GmHGs',
    title: 'Gilson Concrete Air Meters',
    desc: 'Discover what Gilson has to offer to test the air content of freshly mixed concrete accurately, and in accordance with ASTM and AASHTO standards.',
    alt: 'Concrete Air Meters',
  },
  {
    id: 5,
    img: img5,
    videoUrl: 'http://www.youtube.com/watch?v=mZrAq-6Ri2M',
    title: 'Gilson Concrete Rebound Test Hammer',
    desc: 'Learn about the Gilson Rebound Test Hammer, an economical Type N model with a proven history of accuracy.',
    alt: 'Concrete Rebound Test Hammer',
  },
  {
    id: 6,
    img: img6,
    videoUrl: 'http://www.youtube.com/watch?v=73i7j5d2NSY',
    title: 'How to Use the Gilson Static Segregation Column',
    desc: 'Check out how this new design allows the operator to easily perform the test with minimal sample loss.',
    alt: 'Static Segregation Column',
  },
  {
    id: 7,
    img: img7,
    videoUrl: 'http://www.youtube.com/watch?v=G-iLeFmTEIM',
    title: 'Testing Shear Strength of Asphalt Tack Coat',
    desc: 'See why predicting the field performance of tack coat is a key function in asphalt pavement mix design.',
    alt: 'Asphalt Tack Coat Strength Test',
  },
];

const GilsonVideos: React.FC = () => {
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
                Gilson Videos
              </h3>
            </div>

            {/* Slider Container */}
            <div className="position-relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                loop={true}
                navigation={{
                  nextEl: '.custom-video-next',
                  prevEl: '.custom-video-prev',
                }}
                autoplay={{
                  delay: 6000,
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
                {videos.map((video) => (
                  <SwiperSlide 
                    key={video.id}
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
                      {/* Video Thumbnail with Overlay */}
                      <a 
                        href={video.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none position-relative"
                        style={{
                          display: 'block',
                          backgroundColor: '#b5bdc4',
                          overflow: 'hidden'
                        }}
                      >
                        <div 
                          className="position-relative"
                          style={{
                            width: '100%',
                            height: '165px',
                            overflow: 'hidden'
                          }}
                        >
                          <img 
                            loading="lazy" 
                            src={video.img} 
                            alt={video.alt}
                            className="img-fluid w-100 h-100"
                            style={{
                              objectFit: 'cover',
                              transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          />
                          
                          {/* Hover Overlay */}
                          <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            style={{
                              backgroundColor: 'rgba(238, 238, 238, 0)',
                              transition: 'background-color 0.3s ease',
                              opacity: 0,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(238, 238, 238, 0.9)';
                              e.currentTarget.style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(238, 238, 238, 0)';
                              e.currentTarget.style.opacity = '0';
                            }}
                          >
                            <div className="text-center">
                              <YoutubePlayIcon />
                            </div>
                          </div>
                        </div>
                      </a>

                      {/* Video Text Content */}
                      <div 
                        className="p-3 d-flex flex-column flex-grow-1"
                        style={{ flex: '1' }}
                      >
                        <h3 
                          className="fw-bold mb-2"
                          style={{ 
                            color: '#002c58', 
                            fontSize: '16px',
                            lineHeight: '20px'
                          }}
                        >
                          <a 
                            href={video.videoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                            style={{ 
                              color: '#002c58',
                              transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#fe9900';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = '#002c58';
                            }}
                          >
                            {video.title}
                          </a>
                        </h3>
                        <p 
                          className="mb-0 flex-grow-1"
                          style={{ 
                            color: '#6c6e70', 
                            fontSize: '16px'
                          }}
                        >
                          {video.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className="custom-video-prev position-absolute top-50 start-0 translate-middle-y z-3 bg-white border-0 rounded-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="custom-video-next position-absolute top-50 end-0 translate-middle-y z-3 bg-white border-0 rounded-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Footer Link */}
            <div className="text-center mt-4">
              <a 
                href="https://www.globalgilson.com/gilson-videos" 
                title="Click here to watch more Gilson videos"
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
                View More Gilson Videos
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        /* Custom navigation buttons */
        .custom-video-prev,
        .custom-video-next {
          width: 40px !important;
          height: 40px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1) !important;
          transition: all 0.3s ease !important;
        }
        
        .custom-video-prev:hover,
        .custom-video-next:hover {
          background: #e9ecef !important;
          transform: scale(1.1);
        }
        
        /* Hide buttons on mobile */
        @media (max-width: 576px) {
          .custom-video-prev,
          .custom-video-next {
            display: none !important;
          }
          
          .video-text-mobile h3,
          .video-text-mobile p {
            font-size: 16px;
          }
          
          .video-text-mobile {
            padding: 10px;
          }
        }
        
        @media (max-width: 1024px) {
          .video-text-responsive h3 {
            font-size: 14px;
          }
          
          .video-text-responsive p {
            fontSize: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default GilsonVideos;