import { createRoot } from 'react-dom/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import CharacterDetailPage from './pages/characterDetailPage';
import './index.css';
import { CharacterProvider } from './contexts/CharacterContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <CharacterProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/character/:id" element={<CharacterDetailPage />} />
      </Routes>
    </CharacterProvider>
  </Router>
);