import React from 'react'
import { BrowserRouter } from "react-router-dom";
import "bootswatch/dist/spacelab/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import RecetasApp from './components/Recetas';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <RecetasApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
