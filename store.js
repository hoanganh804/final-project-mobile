import { configureStore } from "@reduxjs/toolkit";
import authSilce from "./src/slices/authSilce";
import postSlice from "./src/slices/postSlice";
import userSlice from "./src/slices/userSlice";

const rootReducer = {
  users: userSlice,
  auth: authSilce,
  posts: postSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
