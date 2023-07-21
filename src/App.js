import HeroSection from "./Components/HeroSection";
import ImagesSection from "./Components/ImagesSection";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import PlanSection from "./Components/PlanSection";
import Room from "./Components/Room";


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Offers />
      <PlanSection />
      <Room />
      <ImagesSection />
    </div>
  );
}

export default App;
