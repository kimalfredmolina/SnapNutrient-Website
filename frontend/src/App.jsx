import HomePage from './components/HomePage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='relative min-h-screen'>
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
