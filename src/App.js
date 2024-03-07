
import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Unsubscribe from './components/Unsubscribe';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Impressum from './components/Impressum';

function App() {

  const [showUnsubscribe, setShowUnsubscribe] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);

  const handleToggleImpressumView = () => {
    setShowImpressum(!showImpressum);
    
  }

  const handleToggleUnsubscribe = () => {
    console.log("Toggling unsubscribe");
    setShowUnsubscribe(!showUnsubscribe);
  
  };

  return (
    <Router>
      <div className="App">
        <div className='components'>
    
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            {showUnsubscribe && <Route path="unsubscribe" element={<Unsubscribe />} />}
            {showImpressum && <Route path="/impressum" element={<Impressum />} />}
          </Routes>
        </div>
        <div>
          {showUnsubscribe ? (
            <Link to="/">
              <button className='unsubButton' onClick={handleToggleUnsubscribe}>
                Back to Home
              </button>
            </Link>
          ) : (
            <Link to="/unsubscribe">
            <button className='unsubButton' onClick={handleToggleUnsubscribe}>
              Click here to unsubscribe
            </button>
            </Link>
          )}
        </div>
        <div> 
          {!showImpressum ? (
            <Link  to="/impressum">
              <button style={{ fontSize: '0.5rem' }} onClick={handleToggleImpressumView}>
                Impressum
                </button>
                </Link>
            
          ) : (
            <Link  to="/">
              <button style={{ fontSize: '0.5rem' }} onClick={handleToggleImpressumView}>
                Back
                </button>
                </Link>
          )}
      
      
 
    </div>
    </div>
    </Router>
  );
}

export default App;
