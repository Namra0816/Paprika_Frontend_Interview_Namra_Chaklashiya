import React from 'react';
import Header from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => (
  <div className="flex flex-col bg-white">
    <Header />
    <Hero />
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <Sidebar />
      <MainContent />
    </div>
  </div>
);

export default App;