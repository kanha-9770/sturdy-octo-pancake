import React, { useState, Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// Lazy load components
const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Home = React.lazy(() => import('./components/Home/Home'));

function App() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [heading, setHeading] = useState("");

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setHeading(null);
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} heading={heading} setHeading={setHeading} />
        <Home />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
