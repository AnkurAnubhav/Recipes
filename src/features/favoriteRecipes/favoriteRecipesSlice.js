//redux toolkit changes
import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

export const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
    removeRecipe: (state, action) => {
      return state.filter(favoriteRecipe => favoriteRecipe.id !== action.payload.id)
    }
  }
});

//export const favoriteRecipesSlice = createSlice(options);

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const { addRecipe, removeRecipe} = favoriteRecipesSlice.actions;

export default favoriteRecipesSlice.reducer;

//redux changes
// export function addRecipe(recipe)  {
//     return { 
//       type: 'favoriteRecipes/addRecipe', 
//       payload: recipe 
//     }
//   }

//   export function removeRecipe(recipe)  {
//     return { 
//       type: 'favoriteRecipes/removeRecipe', 
//       payload: recipe 
//     };
//   }
  

//   const initialFavoriteRecipes = [];
//   export const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
//   switch(action.type) {
//     case 'favoriteRecipes/addRecipe':
//       return [...favoriteRecipes, action.payload];
        
//     case 'favoriteRecipes/removeRecipe':
//       return [...favoriteRecipes.filter(favoriteRecipe => favoriteRecipe.id !== action.payload.id)]
      
//     default: 
//        return favoriteRecipes;
//   }
// }