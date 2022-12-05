// In diese App Datei kommen alle Komponenten. Und diese App Datei wird bei der index.js verlinkt

import "./App.css";
import React, { useState, useEffect } from 'react';


//importieren Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/card/Card";
import Home from "./pages/Home";




function App() {

  return (
    <div>
      <Home />
      {/* <Card /> */}
    </div>



  );

}
export default App;
