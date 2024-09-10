import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <div style={styles.container}>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }
};

export default App;
