import React, { useEffect } from 'react';

import './styles.css';

import Routes from './config/Routes/Routes';

function App() {
  useEffect(() => localStorage.removeItem('username'), []);

  return (
    <div className="App"> 
      <Routes />
    </div>
  );
}

export default App;
