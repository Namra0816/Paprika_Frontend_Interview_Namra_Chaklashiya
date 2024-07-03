import React from 'react';
import Header from './components/Navbar';
import Hero from './components/Hero';

const App = () => (
  <div className="flex flex-col bg-white">
    <Header />
    <Hero />
  </div>
);

export default App;