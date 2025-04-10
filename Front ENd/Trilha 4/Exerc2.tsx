import React, { useState } from 'react';

const CadastrarUsuario: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const cadastrarUsuario = async () => {
    setMensagem('');
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nome, email }),
      });

      if (!response.ok) throw new Error('Erro ao cadastrar usuário');
      const data = await response.json();
      setMensagem(`Usuário ${data.name} cadastrado com sucesso!`);
      setNome('');
      setEmail('');
    } catch (err: any) {
      setMensagem(`Erro: ${err.message}`);
    }
  };

  return (
    <div>
      <h2>Cadastrar Novo Usuário</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={cadastrarUsuario}>Cadastrar</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastrarUsuario;
