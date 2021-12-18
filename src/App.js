import React from 'react'

import "bootswatch/dist/spacelab/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import RecetasContainer from './components/RecetasContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <RecetasContainer />
      <Footer />
    </>
  );
}

export default App;
