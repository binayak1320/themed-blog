import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all posts
export const fetchPosts = createAsyncThunk('blog/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});
// Fetch a single post
export const fetchPostById = createAsyncThunk('blog/fetchPostById', async (postId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.data;
  });
  
const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: [],
    post: null,
    search: '',
    status: 'idle', 
    error: null,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPostById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.post = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSearch } = blogSlice.actions;
export default blogSlice.reducer;