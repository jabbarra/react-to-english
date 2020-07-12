import React from 'react';
import IrrgularVerbs from './components/IrregularVerbs';
import logo from './logo.svg';
import './App.css';
import {generateSPAndPPEqual, generateThreeEqual} from './services/irregularVerbsService'
import AppBarComp from './components/AppBarComp';
import ListComp from './components/ListComp';
import ContainerComp from './components/ContainerComp';

function App() {
  return (
    
    <div className="App">
      <ContainerComp/>
  {/* <!--<AppBarComp/>  <ListComp/>>*/}
     
           
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
        <IrrgularVerbs  strategyFilter={null}></IrrgularVerbs>
        <IrrgularVerbs  strategyFilter={generateSPAndPPEqual}></IrrgularVerbs>
        <IrrgularVerbs  strategyFilter={generateThreeEqual}></IrrgularVerbs>
      </header>
    </div>
  );
}

export default App;
