import axios from 'axios';
import {URL_API} from '../../api/const.js';

export const POSTSDATA_REQUEST = 'POSTSDATA_REQUEST';
export const POSTSDATA_REQUEST_SUCCESS = 'POSTSDATA_REQUEST_SUCCESS';
export const POSTSDATA_REQUEST_ERROR = 'POSTSDATA_REQUEST_ERROR';

export const postsDataRequest = () => ({
  type: POSTSDATA_REQUEST,
  error: '',
});

export const postsDataRequestSuccess = (data) => ({
  type: POSTSDATA_REQUEST_SUCCESS,
  data,
});

export const postsDataRequestError = (error) => ({
  type: POSTSDATA_REQUEST_ERROR,
  error,
});

export const postsDataRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  token && axios(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data: bestPosts}) => {
      dispatch(postsDataRequestSuccess());
      const data = bestPosts.data.children;
      dispatch(postsDataRequestSuccess(data));
    })
    .catch(err => {
      dispatch(postsDataRequestError(err));
      console.log('err: ', err);
    });
};
