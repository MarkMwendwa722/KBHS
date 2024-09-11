import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/HomePage';
import ContactUs from './pages/ContactUs'; 
import Admissions from './pages/Admissions';
import Assignments from './pages/Assignments';

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        <Header />
        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<ContactUs />} /> 
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/assignments" element={<Assignments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: 1,
  }
};

export default App;