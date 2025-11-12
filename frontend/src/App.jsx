import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import FeaturePage from './components/FeaturePage'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import ContactPage from './components/ContactPage'
import FAQsPage from './components/FAQs'
import Footer from './components/Footer'
import PrivacyPolicy from './components/resources/Privacy'

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname === '/';

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-slate-950 -z-10">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(16,185,129,0.3),transparent)]"></div>
        </div>
      </div>

      <div className="relative z-10">
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={
            <>
              <HomePage />
              <FeaturePage />
              <AboutPage />
              <FAQsPage />  
              <ContactPage />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        {showNavbar && <Footer />}
      </div>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper