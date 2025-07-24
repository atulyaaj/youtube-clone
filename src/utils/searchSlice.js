import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      Object.assign(state, action.payload);
      // const obj = { ...state, ...action.payload };
      // return obj;
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
