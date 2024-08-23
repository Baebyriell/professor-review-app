import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturedProfessors from './FeaturedProfessors';

const App: React.FC = () => (
  <div className="app-container">
    <Header />
    <Hero />
    <FeaturedProfessors />
  </div>
);

export default App;