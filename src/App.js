import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CryptoList from './pages/CryptoList';
import CryptoDetails from './pages/CryptoDetails';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<CryptoList />} />
        <Route path="/details/:cryptoId" element={<CryptoDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
