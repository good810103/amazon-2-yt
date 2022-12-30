import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state,action) => {},
        removeFromBasket: (state,action) => {},
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItem = (state) => state.basket.items;

export default basketSlice.reducer;