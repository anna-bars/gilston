// App.tsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toolbar from './components/Layout/Header/Toolbar';
import Footer from './components/Layout/Footer/Footer'
import FooterSupport from './components/Layout/Footer/FooterSupport';
import FooterBanner from './components/Layout/Footer/FooterBanner';

// Import pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Toolbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            {/* Ավելացրեք այլ routes */}
          </Routes>
        </main>

        <FooterBanner />
        <FooterSupport />
        <Footer />
      </div>
    </Router>
  )
}

export default App