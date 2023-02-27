import { createSlice, configureStore } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: { isNavBarVisible: false },
  reducers: {
    hideNavBar(state) {
      state.isNavBarVisible = false;
    },
    showNavBar(state) {
      state.isNavBarVisible = true;
    },
  },
});

// ====================================

const projectSlice = createSlice({
  name: "project",
  initialState: { title: null, description: null },
  reducers: {
    setState(state, action) {
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
    clearState(state) {
      state.title = null;
      state.description = null;
    },
  },
});

const store = configureStore({
  reducer: { nav: navSlice.reducer, project: projectSlice.reducer },
});

export const navActions = navSlice.actions;
export const projectActions = projectSlice.actions;
export default store;
