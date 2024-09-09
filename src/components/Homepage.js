import React from 'react';
import Header from './Header';
import Footer from './Footer';
import image from './image2.jpg';

const Homepage = () => {
    
  return (
    
    <div style={styles.container}>      
      <div style={styles.heroSection}>
        <main style={styles.mainContent}>
          <h2>Welcome to Our School</h2>
          <p>
            <b>
              At KBHS High School, we believe in empowering our students to reach
              their full potential. Our dedicated faculty, state-of-the-art facilities,
              and diverse programs ensure that every student thrives academically,
              socially, and emotionally. Join us in our commitment to excellence and a brighter future.
            </b>
          </p>
          <button style={styles.button}>Enroll now</button>
        </main>
      </div>

      <div style={styles.aboutSection}>
        <h2><b>ABOUT US</b></h2>
        <p>
          KBHS High School is dedicated to fostering a vibrant educational environment where 
          every student is encouraged to achieve academic excellence, develop personal integrity, 
          and become a responsible, global citizen. With a commitment to innovative teaching methods, 
          diverse extracurricular programs, and a supportive community, we empower our students to thrive 
          and succeed in a rapidly changing world.
        </p>
        <button style={styles.button}>Learn more</button>
      </div>


    </div>
    
  );
  
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  heroSection: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px', // Increased height for the background section
    padding: '20px',
    color: '#fff',
  },
  mainContent: {
    textAlign: 'center',
    margin: '0 auto',
    paddingTop: '50px',
    maxWidth: '800px',
    color: 'white',
  },
  aboutSection: {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    marginTop: '20px', // Adds space between hero section and about section
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#2e8b57', // Green theme color
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Homepage;
