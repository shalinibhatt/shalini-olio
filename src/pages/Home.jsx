import Navbar from "../layout/Navbar";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Achievements from "../components/Achievements/Achievements";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
       <About />
      <Experience />
      <Projects />
      <Skills />
      {/* <Achievements /> */}
      <Contact />
     
    </>
  );
}

export default Home;
