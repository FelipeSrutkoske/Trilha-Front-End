import React from 'react';
import { Link } from 'react-router-dom';

const Rooms: React.FC = () => {
  const quartos = [
    { id: 1, nome: 'Quarto Standard' },
    { id: 2, nome: 'Suíte Master' },
    { id: 3, nome: 'Quarto Família' },
  ];

  return (
    <div>
      <h1>Quartos Disponíveis</h1>
      <ul>
        {quartos.map((quarto) => (
          <li key={quarto.id}>
            <Link to={`/room/${quarto.id}`}>{quarto.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;