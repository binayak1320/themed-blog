import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './features/blogSlice';
import themeReducer from './features/themeSlice';

const store = configureStore({
  reducer: {
    blog: blogReducer,
    theme: themeReducer,
  },
});

export default store;