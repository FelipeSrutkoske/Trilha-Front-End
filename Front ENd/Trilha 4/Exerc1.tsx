import React, { useState } from 'react';

const BuscarUsuario: React.FC = () => {
  const [id, setId] = useState('');
  const [usuario, setUsuario] = useState<{ name: string; email: string } | null>(null);
  const [erro, setErro] = useState('');

  const buscarUsuario = async () => {
    setErro('');
    setUsuario(null);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) throw new Error('Usuário não encontrado');
      const data = await response.json();
      setUsuario({ name: data.name, email: data.email });
    } catch (err: any) {
      setErro(err.message);
    }
  };

  return (
    <div>
      <h2>Buscar Usuário</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Digite o ID do usuário"
      />
      <button onClick={buscarUsuario}>Buscar</button>
      {usuario && (
        <div>
          <p><strong>Nome:</strong> {usuario.name}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
        </div>
      )}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </div>
  );
};

export default BuscarUsuario;
