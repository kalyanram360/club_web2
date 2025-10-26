import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Objectives from './components/Objectives'
import Outcomes from './components/Outcomes'
import Team from './components/Team'
import Activities from './components/Activities'
import Editorials from './components/Editorials'
import Footer from './components/Footer'

function App() {

  return (
    <div className=" bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
         <Objectives />
         <Outcomes />
        <Team />
        <Activities /> 
      <Editorials />
      </main>
      <Footer />
    </div>
  )
}

export default App
