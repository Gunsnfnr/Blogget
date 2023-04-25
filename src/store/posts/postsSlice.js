import {createSlice} from '@reduxjs/toolkit';
import {postsDataRequestAsync} from './postsDataAction.js';

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
    // postsDataRequest: (state) => {
    //   state.error = '';
    //   state.loading = true;
    // },
    // postsDataRequestSuccess: (state, action) => {
    //   state.loading = false;
    //   state.posts = action.payload.postsData;
    //   state.error = '';
    //   // state.payload = action.payload;
    //   state.after = action.payload.after;
    //   state.isLast = !action.payload.after;
    // },
    // postsDataRequestSuccessAfter: (state, action) => {
    //   state.loading = false;
    //   state.posts = [...state.posts, ...action.payload.postsData];
    //   state.error = '';
    //   state.after = action.payload.after;
    //   state.isLast = !action.payload.after;
    // },
    // postsDataRequestError: (state, action) => {
    //   state.error = action.payload.error;
    // },
    // changePage: (state, action) => {
    //   state.posts = [];
    //   state.page = action.payload;
    //   state.after = '';
    //   state.isLast = false;
    // },
  },
  extraReducers: {
    [postsDataRequestAsync.pending.type]: (state) => {
      state.error = '';
      // state.loading = true;
      state.status = 'loading';
    },
    [postsDataRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      if (action.payload.page) {
        if (state.page !== '' && state.page !== action.payload.page) {
          state.posts = [];
        }
        state.page = action.payload.page;
        state.after = '';
        state.isLast = false;
      }
      if (action.payload.after) {
        state.posts = [...state.posts, ...action.payload.postsData];
      } else {
        state.posts = action.payload.postsData;
        console.log('no after');
      }
      // state.loading = false;
      state.error = '';
      state.payload = action.payload;
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    // postsDataRequestSuccessAfter: (state, action) => {
    //   state.loading = false;
    // state.posts = [...state.posts, ...action.payload.postsData];
    //   state.error = '';
    //   state.after = action.payload.after;
    //   state.isLast = !action.payload.after;
    // },
    [postsDataRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.status = 'error';
    },
    // changePage: (state, action) => {
    //   state.posts = [];
    //   state.page = action.payload.page;
    //   state.after = '';
    //   state.isLast = false;
    // },
  },
});

export default postsSlice.reducer;
