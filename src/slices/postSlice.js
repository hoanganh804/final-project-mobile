import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    uid: "1",
    ownerId: "1",
    liked: ["1", "2"],
    description: "day la post 1",
    images: [
      "https://images.unsplash.com/photo-1572869357118-65e4f7a59813?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80",
    ],
  },
  {
    uid: "2",
    ownerId: "2",
    liked: ["1", "2"],
    description: "day la post 2",
    images: [
      "https://images.unsplash.com/photo-1551498800-17cbc39c85bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    ],
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const {} = postSlice.actions;
export default postSlice.reducer;
