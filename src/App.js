import logo from './logo.svg';
import './App.css';
import OrganizationsList from './Components/organizaciones/OrganizationsList';
import PersonasList from './Components/personas/PersonsList';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Inicio from './Components/Inicio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
          <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/personas">Personas</Link>
            </li>
            <li>
              <Link to="/organizaciones">Organizaciones</Link>
            </li>
            
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Inicio/>}/>
          <Route path="/personas" exact element={<PersonasList/>}/>
          <Route path="/organizaciones" exact element={<OrganizationsList/>}/>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
