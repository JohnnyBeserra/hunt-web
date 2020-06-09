import React from 'react';

import "./styles.css";

import Header from "./Header";
import Footer from './Footer';
import Routes from "./routes"

const App = () =>(
  <div className="App">
      <Header /> 
      <Routes />
      <Footer /> 
    </div>  
);


export default App;
