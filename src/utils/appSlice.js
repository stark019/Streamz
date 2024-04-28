import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    region: "US",
  },
  reducers:{
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setRegion: (state,action) => {
      state.region = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setRegion} = appSlice.actions;
export default appSlice.reducer;