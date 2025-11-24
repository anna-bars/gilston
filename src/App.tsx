import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Layout/Header/Header';
import Toolbar from './components/Layout/Header/Toolbar';
import topAngle from './assets/top-angle.png';
import Footer from './components/Layout/Footer/Footer'
import FooterSupport from './components/Layout/Footer/FooterSupport';
import FooterBanner from './components/Layout/Footer/FooterBanner';
import Banner from './components/Layout/Banner';
import Category from './components/Layout/Category';
import BestSeller from './components/Layout/BestSeller';
import WhoArea from './components/Layout/WhoArea';
import GilsonInsights from './components/Layout/GilsonInsights';
import Video from './components/Layout/Video';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toolbar />
      <Banner />
      <Category />
      <BestSeller />
      <WhoArea />
      <GilsonInsights />
      <Video />


      <FooterBanner />
      <FooterSupport />
      <Footer />
    </>
  )
}

export default App
