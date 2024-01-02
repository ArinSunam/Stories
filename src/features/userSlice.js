import { createSlice } from "@reduxjs/toolkit";
import { clearAllData, getPosts, getUser, setPosts, setUser } from "./storage";


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: getUser(),
    post: getPosts()
  },

  reducers: {
    setUserToLocal: (state, action) => {
      state.user = action.payload;
      setUser(state.user);
    },

    setPostToLocal: (state, action) => {
      state.post = action.payload;
      setPosts(state.post);
    },

    clearAll: (state, action) => {
      state.user = null;
      clearAllData();
    }
  }
});

export const { setUserToLocal, setPostToLocal, clearAll } = userSlice.actions;

export default userSlice.reducer;