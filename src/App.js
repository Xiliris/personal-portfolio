import "./modules/global.scss";

/* Components */
import Banner from "./slides/Banner";
import About from "./slides/About";
import Experience from "./slides/Experience";
import Education from "./slides/Education";
import Skills from "./slides/Skills";
import Contact from "./slides/Contact";
import Footer from "./slides/Footer";

function App() {
  return (
    <>
      <Banner />
      <About />;
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
