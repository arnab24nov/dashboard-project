import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const addWidgetSlice = createSlice({
  name: "editWidgets",
  initialState: { isSideBarVisible: false, isModalVisible: false },
  reducers: {
    togglePage: (state, action) => {
      state.isSideBarVisible = action.payload;
    },
    toggleModal: (state, action) => {
      state.isModalVisible = action.payload;
    },
  },
});

export const { togglePage, toggleModal } = addWidgetSlice.actions;
export default addWidgetSlice.reducer;
