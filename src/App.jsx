import Analytics from './Components/Analytics'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import Newsletter from './Components/Newsletter'
import './index.css'

const App = () => {
  return (
    <div className=' bg-black  '>
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    <Footer /> 
   
    </div>
  )
}

export default App