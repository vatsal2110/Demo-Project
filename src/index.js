import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import Navigate from "./Components/Navigate";

ReactDOM.render(
  <React.StrictMode>
    <Navigate />
  </React.StrictMode>,
  document.getElementById('navigate')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


