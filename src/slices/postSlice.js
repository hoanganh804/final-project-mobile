import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    likeAction: (state, action) => {
      const post = state.filter((post) => post.uid === action.payload.uid);
      post[0].liked.push(action.payload.currentId);
    },
    unLikeAction: (state, action) => {
      const post = state.filter((post) => post.uid === action.payload.uid);
      const newLiked = post[0].liked.filter(
        (like) => like !== action.payload.currentId
      );
      return state.map((post) => {
        if (post.uid === action.payload.uid) {
          return {
            ...post,
            liked: newLiked,
          };
        }
        return post;
      });
    },
    loadPosts: (state, action) => {
      return action.payload;
    },
  },
});

export const { likeAction, unLikeAction, loadPosts } = postSlice.actions;
export default postSlice.reducer;
