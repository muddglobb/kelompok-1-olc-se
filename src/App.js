// src/App.js
import React, { useContext, useEffect } from 'react';
import './App.css';
import SearchCard from './SearchCard';
import { ColorProvider, ColorContext } from './ColorContext';
import ChangeTheme from './ChangeTheme';
import FavoriteText from './FavoriteText';

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <ChangeTheme/>
        <FavoriteText/>
        <SearchCard/>
      </div>
    </ColorProvider>
  );
}

export default App;
