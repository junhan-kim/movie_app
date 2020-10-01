import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // Since using "React.StrictMode", Rendering will be twice.
  // The reason why using it is because it detect a side-effects in lifecycles. 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);