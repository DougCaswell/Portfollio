import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav.jsx';
import routes from './routes.jsx';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <h1>My Portfollio in progress</h1>
          <Nav />
        </header>
        <main>
          {routes}
          <footer>
            © 2019 by Doug Caswell
        </footer>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
