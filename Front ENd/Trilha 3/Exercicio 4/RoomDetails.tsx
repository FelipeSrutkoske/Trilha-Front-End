import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RoomDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const reservarQuarto = () => {
    navigate('/booking-success');
  };

  return (
    <div>
      <h1>Detalhes do Quarto {id}</h1>
      <p>Detalhes do quarto...</p>
      <button onClick={reservarQuarto}>Reservar</button>
    </div>
  );
};

export default RoomDetails;