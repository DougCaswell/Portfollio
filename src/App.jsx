import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.jsx';
import routes from './routes.jsx';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <h1>My Portfollio in progress</h1>
        </header>
        <Nav />
        <main>
          {routes}
        </main>
        <footer>
          Footer
      </footer>
      </div>
    </HashRouter>
  );
}

export default App;
