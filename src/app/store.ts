import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from '../features/galletySlice'


export const store = configureStore({
    reducer: {
        //add Slices here
        contest: galleryReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch