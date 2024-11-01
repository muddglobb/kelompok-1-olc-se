// src/api.js
export const viewDetails = async (recipeId) => {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=7a640921b99940698a778a9f0ffcf10f`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        throw error; // Lempar error untuk penanganan error di komponen
    }
};
