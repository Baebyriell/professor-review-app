import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProfessors from './components/FeaturedProfessors';

const App: React.FC = () => (
  <div className="app-container">
    <Header />
    <Hero />
    <FeaturedProfessors />
  </div>
);

export default App;