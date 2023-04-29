import axios from 'axios';
import { Servico } from '../components/servicosTable';

const getServicos = async (): Promise<Servico[]> => {
  const response = await axios.get<Servico[]>('/servicos');
  return response.data;
};

export default getServicos;