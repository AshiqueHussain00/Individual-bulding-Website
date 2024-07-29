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
      <div className="first">
      <AnimatedContainer/>
     
      
      </div>
      <div className="w-[95%] mx-auto">
      <Navbar/>
      <HeroSection/>
      <AnimatedBox/>
      <ExampleComponent/>
    
      
      </div>
      <div className="three mt-64">
      
      <BuildingSection/>
      <AnimatedComponent/>
      </div>
      

    
     {/* <BuildingCard/> */}
     
      
      
       
     
    </div>
  );
}

export default App;
