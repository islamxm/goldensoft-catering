import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    main_pageLoadingStart: (state) => {state.isPageContentLoading = true},
    main_pageLoadingEnd: (state) => {state.isPageContentLoading = false},
  }
})

const {reducer, actions} = mainSlice

export const {
  main_pageLoadingEnd,
  main_pageLoadingStart
} = actions



export default reducer;