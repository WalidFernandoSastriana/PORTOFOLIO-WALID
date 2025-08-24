import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Activities from "./components/activities";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <CV />
        <Contact />
        <Activities />
      </div>
      <Footer />
    </div>
  );
}

export default App;