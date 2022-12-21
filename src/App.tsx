import React from 'react';
import logo from './logo.svg';
import './App.css';

import {AuthState} from "./redux-store/reducers"

import {useSelector} from "react-redux"

function App() {

  const pending = useSelector((state : AuthState) => state.auth.pending)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
