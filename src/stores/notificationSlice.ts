import type { StateCreator } from "zustand";
import type { FavoritesSliceType } from "./favoriteSlice";

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
  notification: Notification
  showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
}


//Slice Anidado con typescript
export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = (set) => ({

    notification: {
    text: '',
    error: false,
    show: false
    },

    showNotification: (payload) => {
        set({
            notification:{
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
    }

})