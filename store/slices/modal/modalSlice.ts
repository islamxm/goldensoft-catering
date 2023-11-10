import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open_basketModal: (state) => {state.basketDrawer = true},
    close_basketModal: (state) => {state.basketDrawer = false},

    open_productModal: (state) => {state.productModal = true},
    close_productModal: (state) => {state.productModal = false}
  }
})

const {reducer, actions} = modalSlice

export const {
  open_basketModal,
  close_basketModal,
  
  open_productModal,
  close_productModal
} = actions

export default reducer;
