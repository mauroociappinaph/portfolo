import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* Contenido de la página principal (HomePage) */}
        </Route>
        <Route path="/projects">
          {/* Contenido de la página de proyectos (Projects) */}
        </Route>
        <Route path="/skills">
          {/* Contenido de la página de habilidades (Skills) */}
        </Route>
        {/* Agrega más rutas según sea necesario */}
      </Switch>
    </Router>
  );
}


export default App;
