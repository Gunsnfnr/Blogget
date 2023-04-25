import axios from 'axios';
import {URL_API} from '../../api/const.js';
import {postsSlice} from './postsSlice.js';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postsDataRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {dispatch, getState}) => {
    let page = getState().postsData.page;
    if (newPage) {
      page = newPage;
      dispatch(postsSlice.actions.changePage(page));
    }
    const token = getState().token.token;
    const after = getState().postsData.after;
    const loading = getState().postsData.loading;
    const isLast = getState().postsData.isLast;

    if (!token || loading || isLast) return;
    dispatch(postsSlice.actions.postsDataRequest());

    return token && axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data: loadedPosts}) => {
        const data = loadedPosts.data.children;
        const after = loadedPosts.data.after;
        const postsData = [];

        for (let i = 0; i < data.length; i++) {
          postsData[i] = {
            title: data[i].data.title,
            author: data[i].data.author,
            ups: data[i].data.ups,
            markdown: data[i].data.selftext,
            date: data[i].data.created,
            id: data[i].data.id,
            thumbnail: data[i].data.thumbnail,
          };
        }

        if (after) {
          dispatch(postsSlice.actions.postsDataRequestSuccessAfter({postsData, after}));
        } else {
          dispatch(postsSlice.actions.postsDataRequestSuccess({postsData, after}));
        }
      })
      .catch(error => ({error}));
  }
);
