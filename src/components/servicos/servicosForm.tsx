import React, { useState } from "react";
import { Servicos } from "./Servicos";

interface ServicosFormProps {
  onSubmit: (servicos: Servicos) => void;
}

export const ServicosForm = ({ onSubmit }: ServicosFormProps) => {
  const [codigoServico, setCodigoServico] = useState<number | undefined>();
  const [descricao, setDescricao] = useState<string | undefined>();
  const [valorClaro, setValorClaro] = useState<number | undefined>();
  const [valorTecnico, setValorTecnico] = useState<number | undefined>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const servicos: Servicos = {
      codigoServico,
      descricao,
      valorClaro,
      valorTecnico,
    };

    onSubmit(servicos);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Código do serviço:
        <input
          type="number"
          value={codigoServico || ""}
          onChange={(e) => setCodigoServico(parseInt(e.target.value))}
        />
      </label>
      <label>
        Descrição:
        <input
          type="text"
          value={descricao || ""}
          onChange={(event) => setDescricao(event.target.value)}
        />
      </label>
      <label>
        Valor Claro:
        <input
          type="number"
          value={valorClaro || ""}
          onChange={(e) => setValorClaro(parseInt(e.target.value))}
        />
      </label>
      <label>
        Valor Técnico:
        <input
          type="number"
          value={valorTecnico || ""}
          onChange={(e) => setValorTecnico(parseInt(e.target.value))}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};