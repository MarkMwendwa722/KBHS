import EventSection from '../components/events/Events';
import image from '../assets/image4.jpg'
import image2 from '../assets/image3.jpg'
import NewsCard from '../components/news/News';


const HomePage = () => {
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
      <div style={styles.imageWrapper}>
        <img src={image2} alt="About Us" style={styles.image} />
      </div>
      <div style={styles.textContent}>
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

      <div style={styles.missionVisionContainer}>
        <div style={styles.missionSection}>
          <h2><b>OUR MISSION</b></h2>
          <p>
            KBHS High School aims to provide a supportive and challenging environment that fosters academic excellence, personal integrity, and global citizenship. We are dedicated to nurturing lifelong learners and critical thinkers who are prepared for a dynamic future.
          </p>
        </div>

        <div style={styles.visionSection}>
          <h2><b>OUR VISION</b></h2>
          <p>
            Our vision is to be a top educational institution in Kenya, known for academic excellence and holistic development. We strive to inspire students to be passionate learners and responsible leaders who positively impact their communities.
          </p>
        </div>    
      </div>

       
       <div style={styles.eventsSection}>
        <EventSection /> 
      </div>

    <div>
        <NewsCard />
    </div>

    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, san-serif',
    
  },
  heroSection: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px', // Adjusted height for the background section
    padding: '20px',
    color: '#fff',
    backgroundAttachment: 'fixed',
  },
  mainContent: {
    textAlign: 'center',
    margin: '0 auto',
    paddingTop: '50px',
    maxWidth: '800px',
    color: 'white',
  },
  aboutSection: {
    display: 'flex', 
    alignItems: 'center', 
    padding: '100px',
    backgroundColor: '#f5f5f5',
    gap: '50px', 
  },
  imageWrapper: {
    flex: '1', // Allow the image to take up 1 part of the available space
    maxWidth: '300px', // Control the maximum width of the image
  },
  image: {
    width: '100%', // Image will fill the image wrapper
    height: 'auto', // Maintain aspect ratio
    borderRadius: '8px', // Optional: Add rounded corners to the image
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add subtle shadow for better appearance
  },
  textContent: {
    flex: '2', // Text content takes up 2 parts of the available space
    padding: '0 80px', // Optional padding for the text content
    textAlign: 'left',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#2e8b57',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },

  missionVisionContainer: {
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginTop: '20px',
  },
  missionSection: {
    width: '45%',
    padding: '20px',
    backgroundColor: '#e0e0e0', // Light grey background to separate from other sections
    borderRadius: '8px',
  },
  visionSection: {
    width: '45%',
    padding: '20px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
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

export default HomePage;