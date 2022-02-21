import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png'; 
import menuTop from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      
      <Navbar />
      <div Class="Text-box">
        <h1>Say hello to</h1>
        <h1>ReactJS</h1>
      </div>
      <img src={menuTop} alt="menu-top" />
      <img src={icon1} alt="icon1" />
      <img src={icon2} alt="icon2" />
      <img src={icon3} alt="icon3" />
      <img src={icon4} alt="icon4" />

    </div>
  );
}

export default App;
