import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Car from './Car.js';
import './mysass.scss';


const myfirstelement = <h1>Hello React!</h1>
ReactDOM.render(myfirstelement, document.getElementById('root'));

ReactDOM.render(<Car model="high-end"/>,document.getElementById("root1"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
