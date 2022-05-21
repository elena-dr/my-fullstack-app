import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GalleryState {
    value: string[]
}


const initialState: GalleryState = {
    value: []
}

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        //do something what will change value[]
        addHamster: (state, action: PayloadAction<string> ) => {
            state.value.push(action.payload)

        }
    }
})

export const {addHamster} = gallerySlice.actions

export default gallerySlice.reducer