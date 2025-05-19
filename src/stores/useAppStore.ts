import {create} from 'zustand';
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice';
import { createFavoriteSlice } from './favoriteSlice';
import type { FavoritesSliceType } from './favoriteSlice';

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a)
})))