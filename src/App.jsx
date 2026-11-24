import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Education from './Components/Education';
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Deliver from './Components/Deliver'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Reveal from './Components/Reveal'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <Navbar />
      <Home />
      <Reveal><About /></Reveal>
      <Education />
      <Reveal><Skills /></Reveal>
      <Reveal><Projects /></Reveal>
      <Deliver />
      <Contact />
      <Footer />

      <button className="theme-btn" onClick={() => setDark(!dark)}>
        {dark ? 'Light mode' : 'Dark mode'}
      </button>
    </div>
  )
}

export default App