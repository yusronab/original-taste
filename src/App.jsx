import './App.css';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import ScrollToElement from './components/ScrollToElement';
import { useEffect, useState } from 'react';
import Landing from './components/Landing';
// import NotFound from './pages/NotFound';

function App() {
  const [landing, setLanding] = useState(true);

  useEffect(() => {
    setTimeout(() => setLanding(false), 4000)
  }, [])
  
  return (
    <ThemeProvider>
      {landing ? <Landing /> : (
        <div className="App">
          <ScrollToElement />
          <Navbar />
          <Hero />
          <About />
          <Project />
          <Contact />
        </div>
      )}
    </ThemeProvider>
  )
}

export default App;
