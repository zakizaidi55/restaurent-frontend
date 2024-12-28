import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Dishes from './components/Dishes'
import About from './components/About'
import Mission from './components/Mission'
import Expertise from './components/Expertise'
import Review from './components/Review'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {

  return <div className='overflow-y-hidden text-neutral-200 antialiased lg:flex lg:flex-col'>
    <div>
      <HeroSection/>
    </div>
    <div className='bg-black'>
      <Navbar/>
      <Dishes/>
      <About/>
      <Mission/>
      <Expertise/>
      <Review/>
      <ContactSection/>
    </div>
    
    <Footer/>

  </div>
}

export default App
