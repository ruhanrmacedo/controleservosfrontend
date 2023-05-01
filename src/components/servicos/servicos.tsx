import "./servicos.css";

interface ServicosProps {
  codigoServico: number,
  descricao: string,
  valorClaro: number,
  valorTecnico: number
}

export function Servicos({codigoServico, descricao, valorClaro, valorTecnico} : ServicosProps){
  return(
    <div className='servicos'>
      <p><b>Codigo Serviço:</b>{codigoServico}</p>
      <h2>{descricao}</h2>
      <p><b>Valor Claro:</b>{valorClaro}</p>
      <p><b>Valor Técnico:</b>{valorTecnico}</p>
    </div>
  )
}

/*export async function getServicos(): Promise<Servicos[]> {
  const response = await axios.get('http://localhost:8080/api/servicos');
  const servicos: Servicos[] = response.data;
  return servicos;
}*/
