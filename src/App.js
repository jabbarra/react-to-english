import React from 'react';
import IrrgularVerbs from './components/IrregularVerbs';
import logo from './logo.svg';
import './App.css';

function App() {
  const data = [{ id: 1, infinitive: 'read', simplePast: 'read', pastParticiple: 'read' },
  { id: 2, infinitive: 'awake', simplePast: 'awoke', pastParticiple: 'awoken' },
  { id: 3, infinitive: 'beat', simplePast: 'beat', pastParticiple: 'beaten' },
  { id: 4, infinitive: 'catch', simplePast: 'caught', pastParticiple: 'caught' },
  { id: 5, infinitive: 'drink', simplePast: 'drank', pastParticiple: 'drunk' },
  { id: 6, infinitive: 'tear', simplePast: 'tore', pastParticiple: 'torn' }];
const columns = [
  {
    name: 'Infinitive',
    selector: 'infinitive',
    sortable: true,
  },
  {
    name: 'Simple Past',
    selector: 'simplePast',
    sortable: true
  },
  {
    name: 'Past Participle',
    selector: 'pastParticiple',
    sortable: true
  }
]; 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <IrrgularVerbs columns={columns} data={data}></IrrgularVerbs>
      </header>
    </div>
  );
}

export default App;
