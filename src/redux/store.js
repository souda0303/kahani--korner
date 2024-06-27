import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    theme: themeReducer,
  },
});

export default store;
