import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const redirecionarParaAbout = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Página Inicial</h1>
      <button onClick={redirecionarParaAbout}>Ir para Sobre</button>
    </div>
  );
};

export default Home;