import { useEffect, useState } from "react";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        const res = await fetch("/api/recipes/search/pasta");  // Example query
        const data = await res.json();
        setRecipes(data.results);  // Assuming API returns results in an array
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <div>
            <h2>Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
