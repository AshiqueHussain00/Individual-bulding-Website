import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExampleComponent from "./components/ExampleComponent";
import AnimatedBox from "./components/AnimatedBox";
import BuildingSection from "./components/BuildingSection";
import AnimatedContainer from "./components/AnimatedContainer";


function App() {
  return (
    <div className="bg-transparent ">
      <AnimatedContainer/>
      <Navbar />
      <HeroSection />
      <AnimatedBox />
      <ExampleComponent />
      <BuildingSection />
    </div>
  );
}

export default App;
