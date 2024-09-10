import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>KBHS</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="#home" style={styles.navLink}>Home</a></li>
          <li><a href="#about" style={styles.navLink}>About Us</a></li>
          <li><a href="#admissions" style={styles.navLink}>Admissions</a></li>
          <li><a href="#contact" style={styles.navLink}>Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#2e8b57', // Green theme color
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontSize: '24px',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    
  },
  navLink: {
    color: '#fff',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default Header;
