// src/Background.js
import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';

function Background() {
  const { color } = useContext(ColorContext);

  return (
    <div style={{ backgroundColor: color, height: '100vh', width: '100vw' }}>
      <h1>Halo Dunia</h1>
    </div>
  );
}

export default Background;
