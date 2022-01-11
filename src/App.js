import React from 'react';
import Header from './components/Header/Header.jsx';
import Home from './components/Home';


//import global styles
import {GlobalStyle} from './GlobalStyle.js';


function App() {
  return (
    <div className="App">

      <Header />
      <Home />
      <GlobalStyle />
      
    </div>
  );
}

export default App;
