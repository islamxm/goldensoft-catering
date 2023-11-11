import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import FetchDataStatusType from "@/models/FetchDataStatus";

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    main_pageContentLoadingStart: (state) => {state.isPageContentLoading = true},
    main_pageContentLoadingEnd: (state) => {state.isPageContentLoading = false},

    main_setFetchPreDataStatus: (state,action: {payload: FetchDataStatusType}) => {state.fetchPreDataStatus = action.payload}
  }
})

const {reducer, actions} = mainSlice

export const {
  main_pageContentLoadingEnd,
  main_pageContentLoadingStart,
  main_setFetchPreDataStatus
} = actions



export default reducer;