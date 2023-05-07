import { useState } from "react";
import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage"
import ConnectPage from "./pages/ConnectPage"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";
import TechSkillsPage from "./pages/TechSkillsPage";

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home')

  return (
    <div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <div className="w-full max-w-7xl mx-auto mb-32 px-4">
        <HomePage setSelectedPage={setSelectedPage} />
        <AboutPage setSelectedPage={setSelectedPage} />
        <ProjectsPage setSelectedPage={setSelectedPage} />
        <TechSkillsPage setSelectedPage={setSelectedPage} />
        <ConnectPage setSelectedPage={setSelectedPage} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
