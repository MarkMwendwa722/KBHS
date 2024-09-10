import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>KBHS</h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navLink}>Home</Link></li>
          <li><Link to="/about" style={styles.navLink}>About Us</Link></li>
          <li><Link to="/admissions" style={styles.navLink}>Admissions</Link></li>
          <li><Link to="/contact" style={styles.navLink}>Contact Us</Link></li>
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
