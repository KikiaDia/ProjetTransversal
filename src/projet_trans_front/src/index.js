import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';



import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    
  </React.StrictMode>
);

//const element = <a>Byeee</a>
//const test = ReactDOM.createRoot(document.getElementById('test'));
//test.render(
//element
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
