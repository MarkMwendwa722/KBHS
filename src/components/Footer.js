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
    backgroundColor: 'green', // Green theme color
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    left: '0',
    right: '0',
  }
};

export default Footer;
