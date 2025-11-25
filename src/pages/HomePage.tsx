// src/pages/HomePage.tsx
import Banner from '../components/Layout/Banner';
import Category from '../components/Layout/Category';
import BestSeller from '../components/Layout/BestSeller';
import WhoArea from '../components/Layout/WhoArea';
import GilsonInsights from '../components/Layout/GilsonInsights';
import Video from '../components/Layout/Video';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Category />
      <BestSeller />
      <WhoArea />
      <GilsonInsights />
      <Video />
    </>
  );
};

export default HomePage;