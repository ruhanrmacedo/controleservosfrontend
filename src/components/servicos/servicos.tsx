import axios from 'axios';

export interface Servicos {
  codigoServico?: number;
  descricao?: string;
  valorClaro?: number;
  valorTecnico?: number;
}

export async function getServicos(): Promise<Servicos[]> {
  const response = await axios.get('http://localhost:8080/api/servicos');
  const servicos: Servicos[] = response.data;
  return servicos;
}
