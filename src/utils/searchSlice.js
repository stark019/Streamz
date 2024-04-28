import { createSlice } from "@reduxjs/toolkit";

// to add caching to the search box to not make recurring api calls for every saved string key strokes
const searchSlice = createSlice({
  name: "search",
  initialState: {
    isSearchClicked : false,
  },
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state,action.payload);
    },
    setSearchClicked(state){
      state.isSearchClicked = true;
    },
  },
});

export const { cacheResults, setSearchClicked } = searchSlice.actions;

export default searchSlice.reducer;