import axios from 'axios';
import {URL_API} from '../../api/const.js';

export const POSTSDATA_REQUEST = 'POSTSDATA_REQUEST';
export const POSTSDATA_REQUEST_SUCCESS = 'POSTSDATA_REQUEST_SUCCESS';
export const POSTSDATA_REQUEST_ERROR = 'POSTSDATA_REQUEST_ERROR';
export const POSTSDATA_REQUEST_SUCCESS_AFTER = 'POSTSDATA_REQUEST_SUCCESS_AFTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const postsDataRequest = () => ({
  type: POSTSDATA_REQUEST,
  error: '',
});

export const postsDataRequestSuccess = (data) => ({
  type: POSTSDATA_REQUEST_SUCCESS,
  posts: data,
  after: data.after,
});

export const postsDataRequestSuccessAfter = (data) => ({
  type: POSTSDATA_REQUEST_SUCCESS_AFTER,
  posts: data,
  after: data.after,
});

export const postsDataRequestError = (error) => ({
  type: POSTSDATA_REQUEST_ERROR,
  error,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});

export const postsDataRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().postsData.page;
  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }
  const token = getState().token.token;
  const after = getState().postsData.after;
  const loading = getState().postsData.loading;
  const isLast = getState().postsData.isLast;

  if (!token || loading || isLast) return;
  dispatch(postsDataRequest());

  token && axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data: bestPosts}) => {
      const data = bestPosts.data.children;
      const after = bestPosts.data.after;
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
        dispatch(postsDataRequestSuccessAfter([postsData, after]));
      } else {
        dispatch(postsDataRequestSuccess([postsData, after]));
      }
    })
    .catch(err => {
      dispatch(postsDataRequestError(err));
      console.log('err: ', err);
    });
};
