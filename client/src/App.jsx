
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [heading, setHeading] = useState("");
  const handleMouseLeave = () => {
    setHoveredItem(null);
    setHeading(null);
  };
  return (
    <BrowserRouter
      onMouseEnter={handleMouseLeave}
    >
      <Navbar hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} heading={heading} setHeading={setHeading} />
      {/* <Home/> */}
    </BrowserRouter>
  )
}

export default App
