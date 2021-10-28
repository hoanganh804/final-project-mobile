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
  {
    uid: "3",
    ownerId: "2",
    liked: ["1", "2", "3"],
    description: "day la post 3",
    images: [
      "https://images.unsplash.com/photo-1635326332448-1cb32649925d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1029&q=80",
    ],
  },
  {
    uid: "4",
    ownerId: "3",
    liked: ["2", "3"],
    description: "day la post 4",
    images: [
      "https://images.unsplash.com/photo-1635239239608-40c8dd5b895e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80https://images.unsplash.com/photo-1635239239608-40c8dd5b895e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    uid: "5",
    ownerId: "1",
    liked: ["2", "3"],
    description: "day la post 5",
    images: [
      "https://images.unsplash.com/photo-1635239239608-40c8dd5b895e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80https://images.unsplash.com/photo-1635239239608-40c8dd5b895e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    uid: "6",
    ownerId: "1",
    liked: ["1", "2", "3"],
    description: "day la post 6",
    images: [
      "https://images.unsplash.com/photo-1635166889229-65f025e0e8f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80https://images.unsplash.com/photo-1635166889229-65f025e0e8f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    uid: "7",
    ownerId: "1",
    liked: ["1", "2"],
    description: "day la post 7",
    images: [
      "https://images.unsplash.com/photo-1606371392064-81a5011fb659?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80https://images.unsplash.com/photo-1606371392064-81a5011fb659?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    uid: "8",
    ownerId: "1",
    liked: ["1", "3"],
    description: "day la post 8",
    images: [
      "https://images.unsplash.com/photo-1612422300636-e3e753dcd6d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1625&q=80https://images.unsplash.com/photo-1612422300636-e3e753dcd6d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1625&q=80",
    ],
  },
  {
    uid: "9",
    ownerId: "1",
    liked: ["1", "2", "3"],
    description: "day la post 9",
    images: [
      "https://images.unsplash.com/photo-1634992694879-de6a7991a6be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3326&q=80https://images.unsplash.com/photo-1634992694879-de6a7991a6be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3326&q=80",
    ],
  },
];

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
  },
});

export const { likeAction, unLikeAction } = postSlice.actions;
export default postSlice.reducer;
