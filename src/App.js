import React from 'react';
import logo from './logo.svg';
import './style/App.scss';

function App()
{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Boilerplate For Frontend Developer<br />
          Wepack React Babel Scss Images</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://webpack.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Webpack
        </a>
        <a
          className="App-link"
          href="https://sass-lang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Sass
        </a>
        <a
          className="App-link"
          href="https://babeljs.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Babel
        </a>
      </header>
    </div>
  );
}

export default App;
