import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice";

export type FavoritesSliceType = {
    favorites : Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExist: (id: Recipe['idDrink']) => boolean
}

//Slice Anidado con typescript
export const createFavoriteSlice: StateCreator<FavoritesSliceType & RecipesSliceType, [], [], FavoritesSliceType> = (set,get,api) => ({
    favorites: [],

    handleClickFavorite : (recipe) => {
        //Sintaxis para obtener state o funciones del mismo slice
        if(get().favoriteExist(recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
        }else{
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }
        //Llamada a otro slice
        createRecipesSlice(set,get,api).closeModal()
    },

    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }

})