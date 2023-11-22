import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css/normalize.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
