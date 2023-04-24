import {createSlice} from '@reduxjs/toolkit';
import {commentsDataRequestAsync} from './commentsAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
};


export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [commentsDataRequestAsync.pending]: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    [commentsDataRequestAsync.fulfilled]: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = '';
      state.status = 'loaded';
    },
    [commentsDataRequestAsync.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.status = 'error';
    },
  },
});

export default commentsSlice.reducer;
