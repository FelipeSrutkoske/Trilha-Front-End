import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bem-vindo ao Hotel</h1>
      <Link to="/rooms">Ver Quartos</Link>
    </div>
  );
};

export default Home;