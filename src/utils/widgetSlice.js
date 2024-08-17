import { createSlice } from "@reduxjs/toolkit";
import { widget_details } from "../utils/widgetDetails";

const initialState = widget_details.sections;

const widgetSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { sectionTitle, widgetName, widgetDesc } = action.payload;
      const section = state.find(
        (el) => el.title.toLowerCase() === sectionTitle.toLowerCase()
      );
      if (section) {
        section.widgets.push({ name: widgetName, description: widgetDesc });
      } else {
        state.push({
          title: sectionTitle,
          widgets: [{ name: widgetName, description: widgetDesc }],
        });
      }
    },
    removeWidget: (state, action) => {
      const { sectionTitle, widgetName } = action.payload;
      const section = state.find(
        (sec) => sec.title.toLowerCase() === sectionTitle.toLowerCase()
      );

      if (section) {
        section.widgets = section.widgets.filter(
          (wdg) => wdg.name !== widgetName
        );
      }

      if (section.widgets.length === 0) {
        const index = state.indexOf(section);
        if (index !== -1) {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const { addWidget, removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
