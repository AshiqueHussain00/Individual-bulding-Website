import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExampleComponent from "./components/ExampleComponent";
import AnimatedBox from "./components/AnimatedBox";
import BuildingCard from "./components/BuildingCard";
import BuildingSection from "./components/BuildingSection";
import AnimatedContainer from "./components/AnimatedContainer";
import AnimatedComponent from "./components/AnimatedComponent";
import building from "./images/building1.jpg";

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
