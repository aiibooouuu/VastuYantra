  import React, { useState, useEffect } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Greeting from './components/Greeting';
  import Navbar from './components/Navbar';
  import Home from './pages/Home';
  import Chat from './pages/Chat';
  import About from './pages/About';
  import Calculate from './pages/Calculate';
  import './App.css';
  import Topbar from './components/Topbar';
  import Remedies from './pages/Remedies';

  const App = () => {
    const [showGreeting, setShowGreeting] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowGreeting(false); // auto-advance after 2 minutes
      }, 2 * 60 * 1000); // 2 minutes = 120,000 ms

      return () => clearTimeout(timeout); // clear if component unmounts
    }, []);

    const handleStart = () => {
      setShowGreeting(false); // manual click override
    };

    return (
      <Router>
      {showGreeting ? (
        <Greeting onStart={handleStart} />
      ) : (
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Topbar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/about" element={<About />} />
                <Route path="/calculate" element={<Calculate />} />
                <Route path="/remedies" element={<Remedies />} />

              </Routes>
            </div>
          </div>
        </div>
      )}
    </Router>
    
    );
  };

  export default App;
