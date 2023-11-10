import initialState from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

const {reducer, actions} = authSlice;
export default reducer;

