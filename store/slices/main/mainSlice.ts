import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    
  }
})

const {reducer, actions} = mainSlice

export const {
  
} = actions



export default reducer;