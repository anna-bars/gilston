import React from 'react';

// Images Import (Vite-ի համար)
// Համոզվիր, որ նկարները գտնվում են src/assets ֆոլդերում
import aboutLogo from '../../assets/about-logo.png';
import jenhImg from '../../assets/jenh.png';
import joecImg from '../../assets/joec.png';
import irenasImg from '../../assets/irenas.png';
import testSievesImg from '../../assets/test-sieves.png';
import sieveShakersImg from '../../assets/sieve-shakers.png';
import screenShakersImg from '../../assets/screen-shakers.png';

// --- DATA STRUCTURES (Maintainability) ---

// "Why Us" հատվածի տվյալներ
const whyUsData = [
  {
    id: 1,
    img: jenhImg,
    name: 'Jennifer H.',
    title: 'Industry Experts',
    desc: 'With decades of hands-on experience, Gilson’s knowledgeable Technical Support Specialists are here to support you with your unique materials testing applications.',
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
    className: 'nobtm-border', // Հատուկ դաս 3-րդ էլեմենտի համար (ըստ օրիգինալի)
  },
];

// "Top Category" հատվածի տվյալներ
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
    desc: 'For decades Gilson’s Testing Screens have been an industry gold-standard in testing labs world-wide.',
    cta: 'Shop Screen Shakers',
  },
];

const WhoArea: React.FC = () => {
  return (
    <div className="who-area">
      <div className="container">
        
        {/* --- HEADER --- */}
        <div className="row">
          <div className="col-md-12">
            <div className="who-title">
              <h3>About Us</h3>
            </div>
          </div>
        </div>

        {/* --- ABOUT SECTION --- */}
        <div className="gilson-about">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="glison-logo">
                {/* 
                   Optimization: 
                   Explicit width/height prevents Layout Shift (CLS).
                */}
                <img 
                  loading="lazy" 
                  src={aboutLogo} 
                  width="320" 
                  height="120" 
                  alt="Gilson Company, Inc." 
                  style={{ maxWidth: '100%', height: 'auto' }} // Responsive fix just in case
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="glison-text">
                <h3>Reliable Materials Testing Equipment Backed by Innovation and Experience</h3>
                <p>
                  Gilson is a leading manufacturer and supplier of high-quality materials testing equipment. Our innovative testing products are used in many industries, such as civil engineering, pharmaceutical, food science, and other laboratories that rely on the most rigorous ASTM and AASHTO standards.
                </p>
                <p>
                  Gilson’s experienced and knowledgeable Customer Service and Technical Support staff will work closely with you to find the right laboratory equipment for your unique testing application. Helping you is just the way we do business, and it’s been that way for more than eighty years.
                </p>
                <a href="https://www.globalgilson.com/about-us">Learn More</a>
              </div>
            </div>
          </div>
        </div>

        {/* --- WHY US SECTION --- */}
        <div className="why-us">
          <div className="row">
            {whyUsData.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className={`why1 ${item.className || ''}`}>
                  <div className="why-img">
                    <img 
                        loading="lazy" 
                        src={item.img} 
                        alt={item.name}
                        style={{ display: 'block' }} 
                    />
                  </div>
                  <div className="why-text">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- TOP CATEGORY SECTION --- */}
        <div className="top-category">
          <div className="row">
            {topCategories.map((cat) => (
              <div className="col-md-4" key={cat.id}>
                <div className="topcategory1">
                  <div className="category-top">
                    <div className="category-title">
                      <h2><a href={cat.link}>{cat.title}</a></h2>
                    </div>
                    <div className="topcategory-img">
                      <a href={cat.link}>
                        <img 
                            loading="lazy" 
                            src={cat.img} 
                            alt={cat.title}
                            style={{ display: 'block', margin: '0 auto' }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="category-bottom">
                    <p>{cat.desc}</p>
                    <a href={cat.link}>{cat.cta}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhoArea;