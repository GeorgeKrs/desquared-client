// import from redux
import { configureStore } from "@reduxjs/toolkit";
// import store functionality
import selectedCategory_Reducer from "./SelectedCategory";
import cart_Reducer from "./cart";

const store = configureStore({
  reducer: {
    selectedCategory: selectedCategory_Reducer,
    cart: cart_Reducer,
  },
});

export default store;
