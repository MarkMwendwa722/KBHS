import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 School Name. All rights reserved.</p>
      <p>123 School Street, City, Country</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2e8b57', // Green theme color
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
  }
};

export default Footer;
