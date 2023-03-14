import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import AboutUs from './Components/AboutUs';
import Solution from './Components/Solution';
import SolutionEveryone from './Components/SolutionEveryone';
import Impact from './Components/Impact';
import Partners from './Components/Partners';
import GetStarted from './Components/GetStarted';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <AboutUs />
      <Solution />
      <SolutionEveryone />
      <Impact />
      <Partners />
      <GetStarted />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
