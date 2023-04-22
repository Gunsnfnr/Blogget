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
    [commentsDataRequestAsync.pending.type]: (state) => {
      // state.loading = true;
      state.error = '';
      state.status = 'loading';
    },
    [commentsDataRequestAsync.fulfilled.type]: (state, action) => {
      // state.loading = false;
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = '';
      state.status = 'loaded';
    },
    [commentsDataRequestAsync.rejected.type]: (state, action) => {
      // state.loading = false;
      state.error = action.payload.error;
      state.status = 'error';
    },
  },
});

export default commentsSlice.reducer;
