import React, { useState } from 'react';

interface ListaTarefasProps {
  tarefasIniciais: string[];
}

const ListaTarefas: React.FC<ListaTarefasProps> = ({ tarefasIniciais }) => {
  const [tarefas, setTarefas] = useState<string[]>(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState<string>('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  return (
    <div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
};

export default ListaTarefas;