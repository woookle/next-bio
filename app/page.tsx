import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main style={main}>
      <Header />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}

const main: React.CSSProperties = {
  minHeight: '100vh'
}