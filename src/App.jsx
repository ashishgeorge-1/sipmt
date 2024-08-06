// D:\sipmt\src\App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import Sponsor from "./pages/Sponsor"
import Speaker from "./pages/Speaker"
import Contact from "./pages/Contact"
import Invitation from "./pages/Invitation"
import './App.css';
import Footer from './components/Footer';
import Sponsors from './pages/Sponsors';
import Program from './pages/Program';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/speakers" element={<Speaker />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/schedule" element={<Program />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;