import React from 'react';
// Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper Modules (Tree-shaken)
import { Autoplay, Navigation } from 'swiper/modules';

// Images Import (Vite-ի համար)
// Համոզվիր, որ նկարները գտնվում են src/assets ֆոլդերում
import img1 from '../../assets/choosing-right-specialty-sieve.jpg';
import img2 from '../../assets/choosing-right-sieve-by-specification.jpg';
import img3 from '../../assets/marshall-component-setup.jpg';
import img4 from '../../assets/conrete-air-meters.jpg';
import img5 from '../../assets/hm-705-test-hammer.jpg';
import img6 from '../../assets/hm-597-static-segregation-column.jpg';
import img7 from '../../assets/asphalt-tack-coat-strength-test.jpg';

// Տվյալների կառուցվածք (Clean & Maintainable)
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

const Video: React.FC = () => {
  return (
    <div className="gilson-video">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            
            {/* Header */}
            <div className="who-title">
              <h3>Gilson Videos</h3>
            </div>

            {/* Slider Container */}
            <div className="seller-slider">
              {/* 
                  Swiper Container
                  className="insight-slider slider" - պահպանված է հին CSS-ի համար
              */}
              <Swiper
                className="insight-slider slider"
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                loop={true}
                navigation={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                // Responsive Logic
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  576: { slidesPerView: 2, spaceBetween: 15 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 20 },
                }}
                // Inline Styles: Layout Fixes
                style={{
                    '--swiper-navigation-color': '#333', // Սլաքների գույնը
                    '--swiper-navigation-size': '30px',
                    padding: '15px 5px', // Տեղ ստվերների համար
                } as React.CSSProperties}
              >
                {videos.map((video) => (
                  <SwiperSlide 
                    key={video.id} 
                    className="slide"
                    // Equal Height Fix
                    style={{ height: 'auto', display: 'flex' }}
                  >
                    <div 
                        className="video1"
                        style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      {/* Video Thumbnail Area */}
                      <a 
                        href={video.videoUrl} 
                        className="yt-popup" 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        <div className="video-img">
                          {/* 
                              Optimization: 
                              loading="lazy" & explicit width/height
                          */}
                          <img 
                            loading="lazy" 
                            src={video.img} 
                            alt={video.alt} 
                            width="313" 
                            height="165"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                          />
                          <div className="v-overlay">
                            <div className="icon" title="Play Video">
                              <i className="fa fa-youtube-play" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </a>

                      {/* Video Text Area */}
                      <div className="video-text" style={{ flexGrow: 1 }}>
                        <h3>
                            <a 
                                href={video.videoUrl} 
                                className="yt-popup" 
                                target="_blank"
                                rel="noreferrer"
                            >
                                {video.title}
                            </a>
                        </h3>
                        <p>{video.desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Footer Link */}
              <div className="more-insight">
                <a 
                    href="https://www.globalgilson.com/gilson-videos" 
                    title="Click here to watch more Gilson videos"
                >
                    View More Gilson Videos
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;