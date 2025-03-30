import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="/">Início</a>
      <a href="/sobre">Sobre</a>
      <a href="/contato">Contato</a>
    </nav>
  );
};

export default Navbar;