import logo from './logo.svg';
import './App.css';
import PersonasList from './personas/personsList';
import { BrowserRouter, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header>
      
      </header>
      <body>
        <PersonasList />
      </body>
      
    </div>
  );
}

export default App;
