import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Methodology from './components/Methodology'
import Instructors from './components/Instructors'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <Hero />
      <Methodology />
      <Instructors />
      <Services />
      <Footer />
    </div>
  )
}

export default App
