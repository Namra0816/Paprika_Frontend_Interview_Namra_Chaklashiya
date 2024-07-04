import React from 'react';
import Header from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

const App = () => (
  <div className="flex flex-col bg-white">
    <Header />
    <Hero />
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <Sidebar />
    </div>
  </div>
);

export default App;