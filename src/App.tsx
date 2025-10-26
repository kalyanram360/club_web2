
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

import Footer from './components/Footer'

function App() {

  return (
    <div className=" bg-white">
      <Navigation />
      <main className="mt-8">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
