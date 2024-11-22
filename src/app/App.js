import React from 'react';

import { AllRecipes } from '../features/allRecipes/AllRecipes';
import { SearchTerm } from '../features/searchTerm/SearchTerm';
import FavoriteRecipes from '../features/favoriteRecipes/FavoriteRecipes';

export function App(props) {
  const {state, dispatch} = props;

  const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
  const visibleFilteredRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm)

  return (
    <main>
      <section>
        <SearchTerm 
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes 
          favoriteRecipes={visibleFilteredRecipes}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2>All Recipes</h2>
        <AllRecipes 
          allRecipes={visibleAllRecipes}
          dispatch={dispatch}
        />
      </section>
    </main>
  )
}


function getFilteredRecipes(recipes, searchTerm){
  return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}