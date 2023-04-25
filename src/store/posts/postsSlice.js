import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  payload: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsDataRequest: (state) => {
      state.error = '';
      state.loading = true;
    },
    postsDataRequestSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload.postsData;
      state.error = '';
      // state.payload = action.payload;
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    postsDataRequestSuccessAfter: (state, action) => {
      state.loading = false;
      state.posts = [...state.posts, ...action.payload.postsData];
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    postsDataRequestError: (state, action) => {
      state.error = action.payload.error;
    },
    changePage: (state, action) => {
      state.posts = [];
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
    },
  },
});

export default postsSlice.reducer;
