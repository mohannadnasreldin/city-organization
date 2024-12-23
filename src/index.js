import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Analytics } from "@vercel/analytics/react"
ReactDOM.render(
  <React.StrictMode>
    <Analytics/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
