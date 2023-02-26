import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects/Projects';
import Promo from './components/Promo';

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
