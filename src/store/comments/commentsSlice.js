import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [],
  error: '',
};


export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsDataRequest: (state) => {
      // state.loading = true;
      state.error = '';
      state.status = 'loading';
    },
    commentsDataRequestSuccess: (state, action) => {
      // state.loading = false;
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = '';
      state.status = 'loaded';
    },
    commentsDataRequestError: (state, action) => {
      // state.loading = false;
      state.error = action.payload.error;
      state.status = 'error';
    },
  },
});

export default commentsSlice.reducer;
