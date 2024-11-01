// src/SearchCard.js
import React, { useState, useEffect, useContext } from 'react';
import { ColorContext } from './ColorContext';

function SearchCard() {
    const { color, getButtonColor, getTextColor } = useContext(ColorContext);
    const [query, setQuery] = useState('');
    const [favoriteQuery, setFavoriteQuery] = useState(''); 
    const [results, setResults] = useState(null);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchDefaultRecipes = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7a640921b99940698a778a9f0ffcf10f`);
                const data = await response.json();
                setResults(data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchDefaultRecipes();
    }, []);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleFavoriteQueryChange = (e) => {
        setFavoriteQuery(e.target.value);
    };

    const search = async () => {
        if (!query) return;
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7a640921b99940698a778a9f0ffcf10f&query=${query}`);
            const data = await response.json();
            setResults(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            search();
        }
    };

    const toggleFavorite = (recipe) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some(fav => fav.id === recipe.id)) {
                return prevFavorites.filter(fav => fav.id !== recipe.id);
            } else {
                return [...prevFavorites, recipe];
            }
        });
    };

    const isFavorite = (recipeId) => {
        return favorites.some(fav => fav.id === recipeId);
    };

    const filteredFavorites = favorites.filter(fav =>
        fav.title.toLowerCase().includes(favoriteQuery.toLowerCase())
    );


    return (
        <div className="search-card">
            <input
                type="text"
                className="favorite-search-input"
                value={favoriteQuery}
                onChange={handleFavoriteQueryChange}
                placeholder="Search in Favorites..."
            />
            {favorites.length > 0 && (
                <div className="favorites-list">
                    
                    <ul className='fav-list-list'>
                        {filteredFavorites.map((fav) => (
                            <li key={fav.id} className='fav-box'>
                                <div className='inside-fav-box'>
                                    <img src={fav.image} alt={fav.title} className="favorite-image" />
                                    <span className='fav-menu-title' style={{ color: getTextColor() }}>{fav.title}</span>
                                    <button
                                        onClick={() => toggleFavorite(fav)}
                                        className="fav-list-icon"
                                    >
                                        ★
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="search-bar">
                <input
                    className="search-input"
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Search Recipe..."
                />
                <button
                    onClick={search}
                    className="search-button"
                    style={{ backgroundColor: getButtonColor() }}
                >
                    Search
                </button>
            </div>

            {results && (
                <div className="results">
                    <ul className="home-recipe-list">
                        {results.map((recipe) => (
                            <li key={recipe.id} className="recipe-list">
                                <div className="recipe-image-container">
                                    {recipe.image && <img src={recipe.image} alt={recipe.title} className="food-images" />}
                                    <button
                                        onClick={() => toggleFavorite(recipe)}
                                        className={`favorite-icon ${isFavorite(recipe.id) ? 'favorited' : ''}`}
                                    >
                                        ★
                                    </button>
                                </div>
                                <h1 className="recipe-title"
                                    style={{ color: getTextColor() }}>
                                    {recipe.title}</h1>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchCard;
