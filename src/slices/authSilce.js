import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogin: false };

const authSilce = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.isLogin = true;
    },
    logoutAction: (state, action) => {
      state.isLogin = false;
    },
  },
});

export const { loginAction, logoutAction } = authSilce.actions;
export default authSilce.reducer;
