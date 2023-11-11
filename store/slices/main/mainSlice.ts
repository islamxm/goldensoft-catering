import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    main_pageContentLoadingStart: (state) => {state.isPageContentLoading = true},
    main_pageContentLoadingEnd: (state) => {state.isPageContentLoading = false},
  }
})

const {reducer, actions} = mainSlice

export const {
  main_pageContentLoadingEnd,
  main_pageContentLoadingStart
} = actions



export default reducer;