import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    value: [],
  },
  reducers: {
    setDetails: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setDetails} = detailsSlice.actions;
export default detailsSlice.reducer;
