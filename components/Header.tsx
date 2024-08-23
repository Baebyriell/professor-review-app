import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Logo</div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li>Home</li>
          <li>Submit a Review</li>
          <li>Top Professors</li>
          <li>About</li>
        </ul>
      </nav>
      <div style={styles.searchBar}>
        <input type="text" placeholder="Search for professors, courses..." />
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f8f8f8',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  },
  searchBar: {
    marginLeft: 'auto',
  },
};

export default Header;
