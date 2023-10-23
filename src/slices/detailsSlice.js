import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    value: [],
    count: 0,
  },
  reducers: {
    setDetails: (state, action) => {
      state.value = action.payload;
    },
    incrementCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setDetails, incrementCount } = detailsSlice.actions;
export default detailsSlice.reducer;
