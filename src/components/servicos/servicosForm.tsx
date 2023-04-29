import { useState } from 'react';

interface ServicosFormProps {
  onSubmit: (data: ServicosPros) => void;
}

export function ServicosForm({ onSubmit }: ServicosFormProps) {
  const [descricao, setDescricao] = useState('');
  const [valorClaro, setValorClaro] = useState(0);
  const [valorTecnico, setValorTecnico] = useState(0);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ descricao, valorClaro, valorTecnico });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="descricao">Descrição:</label>
        <input
          type="text"
          id="descricao"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="valor-claro">Valor Claro:</label>
        <input
          type="number"
          id="valor-claro"
          value={valorClaro}
          onChange={(event) => setValorClaro(Number(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="valor-tecnico">Valor Técnico:</label>
        <input
          type="number"
          id="valor-tecnico"
          value={valorTecnico}
          onChange={(event) => setValorTecnico(Number(event.target.value))}
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}