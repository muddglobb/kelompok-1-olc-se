// src/Favorite
import React, { useContext } from "react";
import { ColorContext } from "./ColorContext";

const FavoriteText = () => {
    const { getTextColor } = useContext(ColorContext);

    return (
        <div style={{ color: getTextColor () }} className="fav-title">
            <span>Favorites</span>
        </div>
    );
};

export default FavoriteText;