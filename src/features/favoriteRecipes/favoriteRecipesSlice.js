

export function addRecipe(recipe)  {
    return { 
      type: 'favoriteRecipes/addRecipe', 
      payload: recipe 
    }
  }

  export function removeRecipe(recipe)  {
    return { 
      type: 'favoriteRecipes/removeRecipe', 
      payload: recipe 
    };
  }
  

  const initialFavoriteRecipes = [];
  export const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
  switch(action.type) {
    case 'favoriteRecipes/addRecipe':
      return [...favoriteRecipes, action.payload];
        
    // Add action.type cases here.
    case 'favoriteRecipes/removeRecipe':
      return [...favoriteRecipes.filter(favoriteRecipe => favoriteRecipe.id !== action.payload.id)]
      
    // Don't forget to set the default case!
    default: 
       return favoriteRecipes;
  }
}