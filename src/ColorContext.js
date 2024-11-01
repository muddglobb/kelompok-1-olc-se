// src/ColorContext.js
import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('#12333A'); 

    const toggleColor = () => {
        setColor(prevColor => (prevColor === '#12333A' ? '#FEB300' : '#12333A'));
    };

    const getButtonColor = () => {
        return color === '#12333A' ? '#FA6400' : '#12333A';
    };

    const getTextColor = () => {
        return color === '#12333A' ? '#FA6400' : '#12333A';
    };

    return (
        <ColorContext.Provider value={{ color, toggleColor, getButtonColor, getTextColor }}>
            {children}
        </ColorContext.Provider>
    );
};
