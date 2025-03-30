import React, { useState } from 'react';

interface ContadorProps {
  valorInicial: number;
}

const Contador: React.FC<ContadorProps> = ({ valorInicial }) => {
  const [contador, setContador] = useState<number>(valorInicial);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default Contador;