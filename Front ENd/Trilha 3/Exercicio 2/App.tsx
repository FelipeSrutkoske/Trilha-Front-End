import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './sobre';
import Contact from './contato';
import Animal from './Animal';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/animal/cachorro">Cachorro</Link>
        <Link to="/animal/gato">Gato</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/animal/:name" element={<Animal />} />
      </Routes>
    </Router>
  );
}

export default App;