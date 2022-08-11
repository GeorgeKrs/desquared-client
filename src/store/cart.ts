import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  loader: true,
};

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    modifyLoader(state, action) {
      state.loader = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
