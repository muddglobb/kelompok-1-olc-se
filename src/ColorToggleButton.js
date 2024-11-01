// src/ColorToggleButton.js
import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';
import './App.css';

function ColorToggleButton() {
    const { toggleColor, getButtonColor } = useContext(ColorContext);

    return (
        <button className='tombol' onClick={toggleColor} style={{ backgroundColor: getButtonColor() }}>
            Change Theme
        </button>
    );
}

export default ColorToggleButton;
