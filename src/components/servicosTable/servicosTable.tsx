import React, { useState, useEffect } from 'react';
import { getServicos } from '../servicos/servicos';

export interface Servicos {
  codigoServico: number;
  descricao: string;
  valorClaro: number;
  valorTecnico: number;
}

function ServicosTable() {
  const [servicos, setServicos] = useState<Servicos[]>([]);

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
        {servicos.map((Servicos) => (
          <tr key={Servicos.codigoServico}>
            <td>{Servicos.codigoServico}</td>
            <td>{Servicos.descricao}</td>
            <td>{Servicos.valorClaro}</td>
            <td>{Servicos.valorTecnico}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ServicosTable;