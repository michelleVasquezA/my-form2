import logo from './logo.svg';
import './App.css';
import Componet from './Componet';
import AgregarProducto  from './AgregarProducto';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function App() {
  return (
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Bienvenido, para agregar un producto seleccione el boton
        </p>
        <a
          className="App-link"
          href="/AgregarProducto"
           /*target="_blank" */
          rel="noopener noreferrer" 
        >
          Learn React
        </a>
        <Componet/>
        
        
      </header>
    </div>
    

  );
}

export default App;
