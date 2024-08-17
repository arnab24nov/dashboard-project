import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./widgetSlice";
import addWidgetReducer from "./addWidgetSlice";

const appStore = configureStore({
  reducer: {
    widgetDetails: widgetReducer,
    addWidget: addWidgetReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default appStore;
