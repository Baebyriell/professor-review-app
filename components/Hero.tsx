// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section style={styles.hero}>
      <h1>Welcome to the Professor Review Platform</h1>
      <p>Find the best professors and courses here.</p>
      <input type="text" placeholder="Search for professors, courses..." style={styles.searchInput} />
      <button style={styles.ctaButton}>Start Searching</button>
    </section>
  );
};

const styles = {
  hero: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundImage: 'url(/path-to-your-background-image.jpg)',
    backgroundSize: 'cover',
    color: '#fff',
  },
  searchInput: {
    width: '80%',
    padding: '10px',
    margin: '20px 0',
  },
  ctaButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Hero;
