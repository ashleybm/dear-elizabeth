import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { AppProvider } from './store/AppContext';

// Pages
import Home from './pages/Home';
import Letters from './pages/Letters';
import Letter from './pages/Letter';
import Characters from './pages/Characters';
import CharacterProfile from './pages/CharacterProfile';

function App() {
  return (
    <AppProvider>
      <Router basename="/dear-elizabeth">
        <div className="App">
          <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/letters">Letters</NavLink>
            <NavLink to="/characters">Characters</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/letters" element={<Letters />} />
            <Route path="/letters/:id" element={<Letter />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterProfile />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
