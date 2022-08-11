// import from redux
import { configureStore } from "@reduxjs/toolkit";
// import store functionality
import selectedCategory_Reducer from "./SelectedCategory";

const store = configureStore({
  reducer: {
    selectedCategory: selectedCategory_Reducer,
  },
});

export default store;
