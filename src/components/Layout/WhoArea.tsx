import React from 'react';

// Images Import
import aboutLogo from '../../assets/home/who-area/about-logo.png';
import jenhImg from '../../assets/home/who-area/jenh.png';
import joecImg from '../../assets/home/who-area/joec.png';
import irenasImg from '../../assets/home/who-area/irenas.png';
import testSievesImg from '../../assets/home/who-area/test-sieves.png';
import sieveShakersImg from '../../assets/home/who-area/sieve-shakers.png';
import screenShakersImg from '../../assets/home/who-area/screen-shakers.avif';
import whoImg from '../../assets/home/who-area/who-bg.avif';
import who1Bg from '../../assets/home/who-area/who-bg.avif';
import who1BgMob from '../../assets/home/who-area/who1-bg-mob.jpg';
 
const whyUsData = [
  {
    id: 1,
    img: jenhImg,
    name: 'Jennifer H.',
    title: 'Industry Experts',
    desc: 'With decades of hands-on experience, Gilson\'s knowledgeable Technical Support Specialists are here to support you with your unique materials testing applications.',
  },
  {
    id: 2,
    img: joecImg,
    name: 'Joe C.',
    title: 'Trusted Supplier',
    desc: 'Starting with the groundbreaking Gilson Testing Screen in 1939, we have enhanced our offerings each year to deliver more accurate, reliable, and innovative testing equipment.',
  },
  {
    id: 3,
    img: irenasImg,
    name: 'Irena S.',
    title: 'Dedicated Customer Support',
    desc: 'Get solutions to your materials testing needs by contacting Gilson Customer Service or Technical Support by either phone, email or live chat. Gilson is here for you.',
  },
];

const topCategories = [
  {
    id: 1,
    img: testSievesImg,
    title: 'Test Sieves',
    link: 'https://www.globalgilson.com/test-sieves',
    desc: 'Gilson Test Sieves are available in a variety of configurations for your unique particle-sizing applications.',
    cta: 'Shop Test Sieves',
  },
  {
    id: 2,
    img: sieveShakersImg,
    title: 'Sieve Shakers',
    link: 'https://www.globalgilson.com/sieve-shakers',
    desc: 'Be confident of consistent, accurate, and repeatable particle separations with Gilson Sieve Shakers.',
    cta: 'Shop Sieve Shakers',
  },
  {
    id: 3,
    img: screenShakersImg,
    title: 'Screen Shakers',
    link: 'https://www.globalgilson.com/screen-shakers',
    desc: 'For decades Gilson\'s Testing Screens have been an industry gold-standard in testing labs world-wide.',
    cta: 'Shop Screen Shakers',
  },
];

const WhoArea: React.FC = () => {
  return (
    <div 
      className="py-5"
      style={{
        background: `url(${whoImg}) no-repeat center center`,
        backgroundSize: 'cover'
      }}
    >
      <div className="container" style={{maxWidth: '98%'}}>
        
        {/* --- HEADER --- */}
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-3">
              <h3 className="text-uppercase fw-bold" style={{ color: '#002d58', fontSize: '18px' }}>
                About Us
              </h3>
            </div>
          </div>
        </div>

        {/* --- ABOUT SECTION --- */}
        <div 
          className="rounded p-4 mb-5 gilson-about-bg"
          style={{
            background: `url(${who1Bg}) no-repeat center center`,
            backgroundSize: '100% 100%'
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="text-center">
                <img 
                  loading="lazy" 
                  src={aboutLogo} 
                  width="320" 
                  height="120" 
                  alt="Gilson Company, Inc." 
                  className="img-fluid"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="p-2">
                <h3 className="fw-bold mb-3" style={{ color: '#002c58', fontSize: '16px' }}>
                  Reliable Materials Testing Equipment Backed by Innovation and Experience
                </h3>
                <p className="mb-3" style={{ color: '#424445', fontSize: '16px' }}>
                  Gilson is a leading manufacturer and supplier of high-quality materials testing equipment. Our innovative testing products are used in many industries, such as civil engineering, pharmaceutical, food science, and other laboratories that rely on the most rigorous ASTM and AASHTO standards.
                </p>
                <p className="mb-3" style={{ color: '#424445', fontSize: '16px' }}>
                  Gilson's experienced and knowledgeable Customer Service and Technical Support staff will work closely with you to find the right laboratory equipment for your unique testing application. Helping you is just the way we do business, and it's been that way for more than eighty years.
                </p>
                <a 
                  href="https://www.globalgilson.com/about-us"
                  className="d-inline-block text-decoration-none"
                  style={{
                    color: '#6995c3',
                    fontSize: '14px',
                    border: '1px solid #6995c3',
                    borderRadius: '5px',
                    padding: '5px 10px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#6995c3';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#6995c3';
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- WHY US SECTION --- */}
        <div className="mb-5">
          <div className="row">
            {whyUsData.map((item, index) => (
              <div className="col-md-4 mb-4 mb-md-0" key={item.id}>
                <div 
                  className={`d-flex align-items-center why-us-item ${index !== whyUsData.length - 1 ? 'border-bottom border-secondary pb-4' : ''}`}
                  style={{ 
                    minHeight: '200px',
                    borderColor: '#d3d8dc !important'
                  }}
                >
                  <div 
                    className="me-3 flex-shrink-0 why-img-container"
                    style={{ width: '55%' }}
                  >
                    <img 
                      loading="lazy" 
                      src={item.img} 
                      alt={item.name}
                      className="img-fluid"
                      style={{ 
                        width: '100%', 
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h3 className="fw-bold mb-2" style={{ color: '#002c58', fontSize: '18px' }}>
                      {item.title}
                    </h3>
                    <p className="mb-0" style={{ color: '#424445', fontSize: '16px' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- TOP CATEGORY SECTION --- */}
        <div>
          <div className="row">
            {topCategories.map((cat) => (
              <div className="col-md-4 mb-4" key={cat.id}>
                <div 
                  className="h-100 p-4 position-relative top-category-item"
                  style={{
                    border: '1px solid #e9e7f2',
                    backgroundColor: '#fff',
                    transition: 'all 0.4s ease-in-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="category-title">
                      <h2 className="mb-0">
                        <a 
                          href={cat.link}
                          className="text-decoration-none fw-bold"
                          style={{ color: '#002c58', fontSize: '24px' }}
                        >
                          {cat.title}
                        </a>
                      </h2>
                    </div>
                    <div 
                      className="ms-3 flex-shrink-0 top-category-img"
                      style={{ width: '175px', height: '105px' }}
                    >
                      <a href={cat.link}>
                        <img 
                          loading="lazy" 
                          src={cat.img} 
                          alt={cat.title}
                          className="img-fluid"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="mb-4" style={{ color: '#424445', fontSize: '16px' }}>
                      {cat.desc}
                    </p>
                    <a 
                      href={cat.link}
                      className="btn w-100 text-center text-decoration-none category-bottom-btn"
                      style={{
                        backgroundColor: '#f59a1f',
                        borderRadius: '5px',
                        padding: '8px 15px',
                        fontSize: '16px',
                        color: '#fff',
                        border: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#e08b1d';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f59a1f';
                      }}
                    >
                      {cat.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Responsive Styles as Inline Media Queries */}
      <style>{`
        @media (max-width: 1024px) {
          .why-img-container {
            width: 150px !important;
          }
        }
        
        @media (max-width: 992px) {
          .gilson-about-bg {
            background-size: cover !important;
            background-position: top !important;
            background-image: url(${who1BgMob}) !important;
          }
          
          .why-us-item {
            display: block !important;
          }
          
          .why-img-container {
            width: 100% !important;
            height: 180px !important;
            margin-bottom: 20px !important;
          }
          
          .category-bottom-btn {
            font-size: 14px !important;
          }
          
          .category-title h2 a {
            font-size: 20px !important;
            line-height: 22px !important;
          }
        }
        
        @media (max-width: 767px) {
          .gilson-about-bg {
            margin-bottom: 15px !important;
          }
          
          .why-us-item {
            display: flex !important;
            align-items: center !important;
            padding: 30px 0 !important;
            border-bottom: 1px solid #d3d8dc !important;
          }
          
          .why-img-container {
            width: 40% !important;
            height: auto !important;
            margin-right: 15px !important;
            margin-bottom: 0 !important;
          }
          
          .why-text p {
            font-size: 14px !important;
          }
          
          .top-category-img {
            height: auto !important;
          }
          
          .top-category-item {
            margin-bottom: 25px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WhoArea;