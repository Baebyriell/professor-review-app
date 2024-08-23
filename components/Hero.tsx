import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    textAlign: "center",  // Must be a valid value: "left", "right", "center", "justify"
    padding: "20px",
    backgroundImage: "url('/image.png')",
    backgroundSize: "cover",
    color: "white",
  },
  searchInput: {
    padding: "10px",
    fontSize: "16px",
    margin: "10px 0",
  },
  ctaButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
};

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

export default Hero;
