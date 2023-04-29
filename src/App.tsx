import './App.css'
import axios from 'axios';
import { ServicosForm } from './components/servicos/servicosForm';


function handleSubmit(data: ServicosPros) {
  axios.post('/api/servicos', data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
}

function App() {
  return (
    <div className='container'>
      <h1>Controle de Serviços</h1>
      <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Técnicos</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Relatórios</a></li>
        </ul>
    </div>
  )
}

export default App
