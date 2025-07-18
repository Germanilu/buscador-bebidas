import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice";
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice";

export type FavoritesSliceType = {
    favorites : Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExist: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

//Slice Anidado con typescript
export const createFavoriteSlice: StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set,get,api) => ({
    favorites: [],

    handleClickFavorite : (recipe) => {
        //Sintaxis para obtener state o funciones del mismo slice
        if(get().favoriteExist(recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set,get,api).showNotification({
                text:'Se eliminó de favoritos', 
                error: false
            })
        }else{
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
             createNotificationSlice(set,get,api).showNotification({
                text:'Se agregó de favoritos', 
                error: false
            })
        }
        //Llamada a otro slice
        createRecipesSlice(set,get,api).closeModal()
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },

    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },


    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites){
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }

})