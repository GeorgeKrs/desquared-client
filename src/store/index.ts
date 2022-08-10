// import from redux
import { configureStore } from "@reduxjs/toolkit";
// import store functionality
import selectedTab_Reducer from "./SelectedCategory";

const store = configureStore({
  reducer: {
    selectedTab: selectedTab_Reducer,
  },
});

export default store;
