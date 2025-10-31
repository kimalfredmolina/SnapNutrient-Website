import AboutPage from './components/AboutPage'
import FeaturePage from './components/FeaturePage'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import ContactPage from './components/ContactPage'

const App = () => {
  return (
    <div className='relative min-h-screen'>
      {/* Background layer - fixed positioning */}
      <div className="fixed inset-0 bg-slate-950 -z-10">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(16,185,129,0.3),transparent)]"></div>
        </div>
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />
        <div id='home_page'>
          <HomePage />
        </div>
        <div id='feature_page'>
          <FeaturePage />
        </div>
        <div id='about_page'>
          <AboutPage />
        </div>
        <div id='contact_page'> 
          <ContactPage />
        </div>
      </div>
    </div>
  )
}

export default App