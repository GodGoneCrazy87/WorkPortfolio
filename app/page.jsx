import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Skills from '../components/Skills'
import TechStack from '../components/TechStack'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f13] text-gray-100">
      {/* Scroll anchor — must live in page flow */}
      <div id="top" />

      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}
