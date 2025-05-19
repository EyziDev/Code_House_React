import './App.css';
import { useState } from 'react';
import MenuLateral from './componentes/MenuLateral';
import Pesquisa from './componentes/Pesquisa';
import ConfiguracaoPerfil from './componentes/ConfiguracaoPerfil'; 

function App() {
  const [mostrarConfiguracao, setMostrarConfiguracao] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <MenuLateral onUsuarioClick={() => setMostrarConfiguracao(true)} />

        {mostrarConfiguracao ? (
          <ConfiguracaoPerfil onVoltar={() => setMostrarConfiguracao(false)} />
        ) : ( 

        <Pesquisa/>
        )}
      </header>
    </div>
  );
}

export default App;
