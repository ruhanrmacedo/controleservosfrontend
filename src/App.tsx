import axios from 'axios';
//import { useState } from 'react';
import { Servicos } from './components/servicos/servicos';
import { ServicosForm, ServicosFormProps } from './components/servicos/servicosForm';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ServicosTable from './components/servicosTable/servicosTable';

function handleSubmit(data: Servicos) {
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
    <Router>
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
    </Router>
  );
}

export default App;
