import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Extra from "./Components/Extra";
import Featured from "./Components/Featured";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Featured></Featured>
      <Experience></Experience>
      <Extra></Extra>
      <Contact></Contact>
    </div>
  );
};

export default App;