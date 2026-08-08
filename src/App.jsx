import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Curriculum from './components/Curriculum'
import Methodology from './components/Methodology'
import Instructors from './components/Instructors'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <Hero />
      <Curriculum />
      <Methodology />
      <Instructors />
      <Services />
      <Footer />
    </div>
  )
}

export default App
