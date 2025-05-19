import type { StateCreator } from "zustand";
import type { Recipe } from "../types";


export type FavoritesSliceType = {
    favorites : Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExist: (id: Recipe['idDrink']) => boolean
}

export const createFavoriteSlice: StateCreator<FavoritesSliceType> = (set,get) => ({
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
    },

    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }

})