import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/_global.css';
import Player from './pages/player';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Player />
  </React.StrictMode>
);
