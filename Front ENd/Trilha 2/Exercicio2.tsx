import React, { useState } from 'react';

interface SaudacaoProps {
  nomeInicial: string;
}

const Saudacao: React.FC<SaudacaoProps> = ({ nomeInicial }) => {
  const [nome, setNome] = useState<string>(nomeInicial);

  const atualizarNome = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setNome(evento.target.value);
  };

  return (
    <div>
      <p>Olá, {nome}!</p>
      <input
        type="text"
        value={nome}
        onChange={atualizarNome}
        placeholder="Digite seu nome"
      />
    </div>
  );
};

export default Saudacao;