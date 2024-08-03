// D:\sipmt\src\App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import Sponsor from "./pages/Sponsor"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sponsor" element={<Sponsor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;