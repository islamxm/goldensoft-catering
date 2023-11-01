import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    main_toggleBasketDrawer: (state) => {state.isBasketOpen = !state.isBasketOpen}
  }
})

const {reducer, actions} = mainSlice

export const {
  main_toggleBasketDrawer
} = actions

export default reducer;