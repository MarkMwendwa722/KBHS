import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.navLinks}>
          <ul style={styles.footerNavList}>
            <li style={styles.footerNavItem}><a href="/" style={styles.footerNavLink}>Home</a></li>
            <li style={styles.footerNavItem}><a href="/about" style={styles.footerNavLink}>About</a></li>
            <li style={styles.footerNavItem}><a href="/events" style={styles.footerNavLink}>Events</a></li>
            <li style={styles.footerNavItem}><a href="/contact" style={styles.footerNavLink}>Contact</a></li>
          </ul>
        </div>
        
          <p>&copy; 2024 KBHS High School. All rights reserved.</p>
      
      </div>
    </footer>
  );
};


const styles = {
  footer: {
    backgroundColor: '#2e8b57', // Green theme color
    color: '#fff',
    padding: '20px',
    width: 'auto',
    textAlign: 'center', // Center text in the footer
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column', // Align everything vertically
    alignItems: 'center', // Align content to center horizontally
    justifyContent: 'center', // Center content vertically
  },
  navLinks: {
    textAlign: 'center',
    marginBottom: '10px', // Space below the quick links section
  },
  footerTitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  footerNavList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px'
  },
  footerNavItem: {
    marginBottom: '8px',
  },
  footerNavLink: {
    textDecoration: 'none',
    color: '#fff',
  },
  footerInfo: {
    marginTop: '10px',
  },
};

export default Footer;
