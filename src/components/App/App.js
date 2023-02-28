import React from 'react';
import BandList from '../BandList/BandList';
import Heading from '../Heading/Heading';
import MetalMeta from '../MetalMeta/MetalMeta';
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading />
      <MetalMeta />
      <BandList />
    </div>
  );
}

export default App;
