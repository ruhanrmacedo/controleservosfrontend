import React, { useState, useEffect } from 'react';
import getServicos from '../components/servicos';

export interface Servico {
  codigoServico: number;
  descricao: string;
  valorClaro: number;
  valorTecnico: number;
}

function ServicosTable() {
  const [servicos, setServicos] = useState<Servico[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getServicos();
      setServicos(data);
    }
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Descrição</th>
          <th>Valor Claro</th>
          <th>Valor Técnico</th>
        </tr>
      </thead>
      <tbody>
        {servicos.map((servico) => (
          <tr key={servico.codigoServico}>
            <td>{servico.codigoServico}</td>
            <td>{servico.descricao}</td>
            <td>{servico.valorClaro}</td>
            <td>{servico.valorTecnico}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ServicosTable;