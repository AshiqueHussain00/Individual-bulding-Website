import "./App.css";
import Navbar from './components/Navbar'
import HeroSection from "./components/HeroSection";
import ExampleComponent from './components/ExampleComponent'
import AnimatedBox from "./components/AnimatedBox";
import BuildingCard from "./components/BuildingCard";
import BuildingSection from './components/BuildingSection';
import AnimatedContainer from './components/AnimatedContainer'
import AnimatedComponent from './components/AnimatedComponent'


function App() {
  return (
    <div className="bg-black">
<Navbar/>
<HeroSection/>
<AnimatedBox/>
<ExampleComponent/>
    </div>
  );
}

export default App;
