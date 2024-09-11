import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <span><h1 style={styles.h1}><b>KBHS</b></h1></span>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
          <li style={styles.navItem}><Link to="/Aboutus" style={styles.navLink}>About us</Link></li>
          <li style={styles.navItem}><Link to="/admissions" style={styles.navLink}>Admission</Link></li>
          <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact Us</Link></li>
          <li style={styles.navItem}><Link to="/facilities" style={styles.navLink}>Facilities</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#2e8b57',
    padding: '20px',
    display:'flex',
    gap: '55%',
  },
  nav: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    padding: '1px',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    justifyContent: 'right',
    display:'flex',
  },
  navItem: {
    marginRight: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
  h1: {
    color: 'white',
    font: 'Arial, san-serif',
    justifyContent: 'left'
  }
};

export default Header;