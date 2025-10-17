import HomePage from './components/HomePage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='relative min-h-screen'>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#06b6d4_100%)]"></div>
      <div>
          
       <div className="relative z-10">
          <Navbar />
          <div id='home_page'>
            <HomePage />
          </div>

       </div>

      </div>
    </div>
  )
}

export default App
