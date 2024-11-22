import React from 'react';

import { removeRecipe } from './favoriteRecipesSlice';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

const removeFavoriteURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg';




 const FavoriteRecipes = (props) => {
    const {favoriteRecipes, dispatch} = props;

    const onRemoveFavoriteRecipe = (recipe) =>{
        dispatch(removeRecipe(recipe))
    };

    return (
        <div id='favorite-recipes' className='recipes-container'>
            {favoriteRecipes.map(createRecipeComponent)}

        </div>
    );

    function createRecipeComponent(recipe){
        return (
            <Recipe recipe={recipe} key={recipe.id}>
                <FavoriteButton 
                    onClickHandler={() => onRemoveFavoriteRecipe(recipe)}
                    icon={removeFavoriteURL}
                >
                    Remove Favorite
                </FavoriteButton>
            </Recipe>
        )
    }
};

export default FavoriteRecipes;