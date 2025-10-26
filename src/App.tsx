<<<<<<< HEAD
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
=======

import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

import Footer from './components/Footer'
import EditorialsSimple from './components/EditorialsSimple'
>>>>>>> 351436f5c26b15807a848398a1f8f3634fb63a82

function App() {

  return (
    <div className=" bg-white">
      <Navigation />
<<<<<<< HEAD
      <main>
        <Hero />
        <About />
         <Objectives />
         <Outcomes />
        <Team />
        <Activities /> 
      <Editorials />
=======
      <main className="mt-8">
        <Hero />
        <EditorialsSimple />
>>>>>>> 351436f5c26b15807a848398a1f8f3634fb63a82
      </main>
      <Footer />
    </div>
  )
}

export default App
