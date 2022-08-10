import { createSlice } from "@reduxjs/toolkit";
import { food_categories } from "../constants/food_categories";

let initialState = {
  selectedCategory: food_categories.APPETIZERS,
};

const categorySlice = createSlice({
  name: "selectedCategory",
  initialState,
  reducers: {
    storeSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const selectedCategoryActions = categorySlice.actions;

export default categorySlice.reducer;
