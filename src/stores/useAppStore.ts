import {create} from 'zustand';
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice';
import { createFavoriteSlice } from './favoriteSlice';
import { createNotificationSlice } from './notificationSlice';
import type { FavoritesSliceType } from './favoriteSlice';
import type { NotificationSliceType } from './notificationSlice';

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
})))