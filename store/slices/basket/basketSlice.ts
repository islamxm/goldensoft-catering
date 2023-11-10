import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    basket_openBasketDrawer: (state) => {state.isBasketDrawerOpen = true},
    basket_closeBasketDrawer: (state) => {state.isBasketDrawerOpen = false},
  }
})

const {reducer, actions} = basketSlice;

export const {
  basket_openBasketDrawer,
  basket_closeBasketDrawer,
} = actions

export default reducer;