import { configureStore } from "@reduxjs/toolkit";
import authSilce from "./src/slices/authSilce";
import userSlice from "./src/slices/userSlice";

const rootReducer = {
  user: userSlice,
  auth: authSilce,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
