// src/ChangeTheme.js
import React, { useContext, useEffect } from "react";
import ColorToggleButton from './ColorToggleButton';
import { ColorContext } from "./ColorContext";

function ChangeTheme() {
    const { color } = useContext(ColorContext);
  
    useEffect(() => {
      document.body.style.backgroundColor = color;
    }, [color]);
  
    return (
      <div>
        <ColorToggleButton />
      </div>
    );
  }

  export default ChangeTheme;