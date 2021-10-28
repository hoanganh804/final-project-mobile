import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    displayName: "Hoang Anh",
    uid: "1",
    avatar_url:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
    email: "hello@gmail.com",
  },
  {
    displayName: "Do Tu",
    uid: "2",
    avatar_url:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
    email: "tutu@gmail.com",
  },
  {
    displayName: "Anh Tuan",
    uid: "3",
    avatar_url:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    email: "tuantuan@gmail.com",
  },
];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
