//import axios from 'axios';
//import { useState } from 'react';
//import { ServicosForm, ServicosFormProps } from './components/servicos/servicosForm';
//import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
//import ServicosTable from './components/servicosTable/servicosTable';
//import { ServicosData } from './components/interface/ServicosData';
import { Servicos } from './components/servicos/servicos';
import { useServicosData } from './hooks/useServicosData';
import './App.css';
import { useState } from 'react';
import { CreateModal } from './components/create-modal/create-servicos';



function App() {
  const { data } = useServicosData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Controle de Serviços</h1>
      <div className="controle-servicos">
        {data?.map(servicosData => 
          <Servicos 
            codigoServico={servicosData.codigoServico}
            descricao={servicosData.descricao} 
            valorClaro={servicosData.valorClaro}
            valorTecnico={servicosData.valorTecnico}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Cadastrar Serviço</button>
    </div>
  );
}

export default App;

    /*<Router>
      <div className='container'>
        <h1>Controle de Serviços</h1>
        <ul>
          <li><Link to="#">Início</Link></li>
          <li><Link to="#">Técnicos</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/servicosTable">Relatórios</Link></li>
        </ul>
        <Routes>
          <Route path="/servicos" element={<ServicosForm onSubmit={handleSubmit} />} />
          <Route path="/servicosTable" element={<ServicosTable/>} />
        </Routes>
      </div>
    </Router>*/
