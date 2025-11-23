// import React from 'react';
// // Swiper React Components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Swiper Modules (Tree-shaken - միայն անհրաժեշտը)
// import { Autoplay, Navigation } from 'swiper/modules';

// // Images Import (Vite-ի համար)
// // Համոզվիր, որ նկարները գտնվում են src/assets ֆոլդերում
// import compactorImg from '../../assets/hm-685-gyratory-compactor.png';
// import loadFrameImg from '../../assets/hm-399-load-frame.png';
// import marshallImg from '../../assets/msa-134-marshall-software.png';
// import microDevalImg from '../../assets/md-2000-microdeval.png';
// import compressionImg from '../../assets/mc-500pr-concrete-compression-machine.png';
// import flexWallImg from '../../assets/hma-516-flexible-wall-permeability-cell.png';

// // Տվյալների կառուցվածք (Clean & Maintainable)
// const products = [
//   {
//     id: 1,
//     img: compactorImg,
//     title: 'Superpave Gyratory Compactor',
//     productUrl: '/superpave-gyratory-compactor',
//     externalUrl: 'https://www.globalgilson.com/superpave-gyratory-compactor',
//     alt: 'Superpave Gyratory Compactor',
//   },
//   {
//     id: 2,
//     img: loadFrameImg,
//     title: 'Load Frame, 0.00001—0.29999in/min, 20,000lbf',
//     productUrl: '/load-frame-0point00001-0point29999in-min-20000lbf',
//     externalUrl: 'https://www.globalgilson.com/load-frame-0point00001-0point29999in-min-20000lbf',
//     alt: 'Load Frame',
//   },
//   {
//     id: 3,
//     img: marshallImg,
//     title: 'Marshall Data Acquisition Software',
//     productUrl: '/marshall-data-acquisition-software',
//     externalUrl: '', 
//     alt: 'Marshall Data Acquisition Software',
//   },
//   {
//     id: 4,
//     img: microDevalImg,
//     title: 'Micro-Deval',
//     productUrl: '/micro-deval-apparatus',
//     externalUrl: 'https://www.globalgilson.com/micro-deval-apparatus',
//     alt: 'Micro-Deval',
//   },
//   {
//     id: 5,
//     img: compressionImg,
//     title: '500,000lbf Concrete Compression Machines',
//     productUrl: '/500-series-concrete-compression-machine',
//     externalUrl: 'https://www.globalgilson.com/500-series-concrete-compression-machine',
//     alt: '500,000lbf Concrete Compression Machine',
//   },
//   {
//     id: 6,
//     img: flexWallImg,
//     title: 'Flexible Wall Permeability Cell, 1.4 to 6in dia. Specimens',
//     productUrl: '/7point5in-flex-wall-permeability-cell',
//     externalUrl: 'https://www.globalgilson.com/7point5in-flex-wall-permeability-cell',
//     alt: 'Flexible Wall Permeability Cell, 1.4 to 6in dia. Specimens',
//   },
// ];

// const BestSeller: React.FC = () => {
//   return (
//     <div className="best-seller">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
            
//             {/* Header Section */}
//             <div className="seller-head">
//               <h3>Featured Products</h3>
//             </div>

//             {/* Slider Section */}
//             <div className="seller-slider">
//               {/* 
//                   Swiper-ը փոխարինում է հին jQuery սլայդերին:
//                   className="customer-logos slider" պահպանվել է CSS-ի համար:
//               */}
//               <Swiper
//                 className="customer-logos slider"
//                 modules={[Autoplay, Navigation]}
//                 spaceBetween={20}
//                 loop={true}
//                 navigation={true}
//                 autoplay={{
//                   delay: 4000,
//                   disableOnInteraction: false,
//                 }}
//                 // Responsive Logic (replace JS calculations)
//                 breakpoints={{
//                   320: {
//                     slidesPerView: 1,
//                     spaceBetween: 10,
//                   },
//                   576: {
//                     slidesPerView: 2,
//                     spaceBetween: 15,
//                   },
//                   768: {
//                     slidesPerView: 3,
//                     spaceBetween: 20,
//                   },
//                   1024: {
//                     slidesPerView: 4,
//                     spaceBetween: 20,
//                   },
//                 }}
//                 // Inline styles for Arrows (Navigation)
//                 style={{
//                     '--swiper-navigation-color': '#333', // Սլաքների գույնը (մուգ մոխրագույն/սև)
//                     '--swiper-navigation-size': '30px',  // Սլաքների չափը
//                     paddingBottom: '30px' // Տեղ՝ որ սլայդերի ստվերները չկտրվեն
//                 } as React.CSSProperties}
//               >
//                 {products.map((product) => (
//                   <SwiperSlide key={product.id} className="slide">
//                     <div className="seller1">
                      
//                       {/* Image Area */}
//                       <div className="seller-img">
//                         <a href={product.externalUrl || product.productUrl}>
//                           {/* 
//                              Optimization:
//                              loading="lazy" -> LCP-ին չի խանգարում
//                              display: block -> CLS-ից պաշտպանում է
//                           */}
//                           <img 
//                             loading="lazy" 
//                             src={product.img} 
//                             alt={product.alt}
//                             style={{ width: '100%', height: 'auto', display: 'block' }}
//                           />
//                         </a>
//                       </div>

//                       {/* Title Area */}
//                       <a className="seller-title" href={product.productUrl}>
//                         {product.title}
//                       </a>

//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSeller;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import compactorImg from '../../assets/hm-685-gyratory-compactor.png';
import loadFrameImg from '../../assets/hm-399-load-frame.png';
import marshallImg from '../../assets/msa-134-marshall-software.png';
import microDevalImg from '../../assets/md-2000-microdeval.png';
import compressionImg from '../../assets/mc-500pr-concrete-compression-machine.png';
import flexWallImg from '../../assets/hma-516-flexible-wall-permeability-cell.png';

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
    <div className="best-seller">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="seller-head">
              <h3>Featured Products</h3>
            </div>
            <div className="seller-slider">
              <Swiper
                className="customer-logos slider"
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
                // 1. Այստեղ ավելացնում ենք padding, որպեսզի border-ները չկտրվեն
                style={{
                    '--swiper-navigation-color': '#333',
                    '--swiper-navigation-size': '30px',
                    padding: '15px 5px', // ԿԱՐԵՎՈՐ: Տեղ ենք բացում վերևից/ներքևից
                } as React.CSSProperties}
              >
                {products.map((product) => (
                  // 2. SwiperSlide-ին տալիս ենք height: auto և flex
                  <SwiperSlide 
                    key={product.id} 
                    className="slide"
                    style={{ height: 'auto', display: 'flex' }} 
                  >
                    {/* 3. seller1-ը սարքում ենք 100% բարձրությամբ, որ բոլորը հավասարվեն */}
                    <div 
                      className="seller1" 
                      style={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between',
                        width: '100%' 
                      }}
                    >
                      <div className="seller-img">
                        <a href={product.externalUrl || product.productUrl}>
                          <img 
                            loading="lazy" 
                            src={product.img} 
                            alt={product.alt}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                          />
                        </a>
                      </div>
                      <a className="seller-title" href={product.productUrl}>
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
    </div>
  );
};

export default BestSeller;