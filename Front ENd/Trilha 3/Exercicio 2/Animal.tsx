import React from 'react';
import { useParams } from 'react-router-dom';

const Animal: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return <h1>Detalhes do animal: {name}</h1>;
};

export default Animal;