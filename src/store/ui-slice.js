import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    showPopup: false,
    selectedProduct: null,
  },
  reducers: {
    selectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    showPopup(state) {
      state.showPopup = true;
    },
    hidePopup(state) {
      state.showPopup = false;
    },
  },
});
export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
